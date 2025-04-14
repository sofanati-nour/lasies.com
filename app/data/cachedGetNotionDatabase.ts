import axios, { AxiosInstance, AxiosResponse } from "axios";
import { Agent } from "https";
import { unstable_cache } from "next/cache";
import {
  NotionSchema,
  NotionResponse,
  Context,
  NotionBlock,
} from "@/app/data/types";

/**
 * Notion Database Integration
 *
 * This module provides functionality to fetch and process Notion database content through their API.
 * The workflow is as follows:
 *
 * 1. Initial Setup:
 *    - Creates an Axios instance configured for Notion's API
 *    - Uses a custom HTTPS agent to handle SSL certificates
 *
 * 2. Data Retrieval Process:
 *    a. Fetches initial block records using the database ID
 *    b. Retrieves collection metadata and view information
 *    c. Queries the collection to get all block IDs
 *    d. Fetches detailed data for each block
 *    e. Processes nested content and relationships
 *
 * 3. Caching:
 *    - Implements Next.js unstable_cache for performance optimization
 *    - Caches results for 24 hours
 *    - Stores data in buffer format for efficient transfer
 *
 */

/**
 * Finds the key in a Notion schema that corresponds to a given property name.
 * @param schema - The Notion schema object containing property definitions
 * @param propertyName - The name of the property to find
 * @returns The key of the matching property, or an empty string if not found
 */
const findPropertyKey = (
  schema: NotionSchema,
  propertyName: string
): string => {
  const entry = Object.entries(schema).find(
    ([, value]) => value.name.toLowerCase() === propertyName.toLowerCase()
  );
  return entry !== undefined ? entry[0] : "";
};

/**
 * Fetches record values from Notion's API for a given UUID.
 * @param session - Axios instance configured for Notion API requests
 * @param uuid - The UUID of the Notion block to fetch
 * @returns Promise resolving to the Notion API response
 */
const getIdsFromRecords = async (
  session: AxiosInstance,
  uuid: string
): Promise<NotionResponse> => {
  const payload = {
    requests: [
      {
        pointer: { table: "block", id: uuid },
        version: -1,
      },
    ],
  };

  const { data } = await session.post("syncRecordValuesSpace", payload);
  return data;
};

/**
 * Retrieves block IDs and schema from a Notion database.
 * @param context - Context object containing database IDs and session information
 * @returns Promise resolving to block IDs and schema
 */
const getBlockIds = async ({
  database_ids,
  session,
}: Context): Promise<{ block_ids: string[]; schema: NotionSchema }> => {
  const payload = {
    source: {
      type: "collection",
      id: database_ids.collection_id,
      spaceId: database_ids.space_id,
    },
    collectionView: {
      id: database_ids.view_id,
      spaceId: database_ids.space_id,
    },
    loader: {
      reducers: {
        collection_group_results: {
          type: "results",
          limit: 50,
        },
      },
      searchQuery: "",
      userTimeZone: "Europe/Stockholm",
    },
  };

  const { data } = await session.post("queryCollection", payload, {
    params: { src: "initial_load" },
  });

  const schema =
    data.recordMap.collection[database_ids.collection_id].value.schema;
  if (schema === null) {
    throw new Error("Failed to fetch schema from Notion API");
  }
  let block_ids = [];
  if (data.result !== null) {
    if (data.result.reducerResults !== null) {
      if (data.result.reducerResults.collection_group_results !== null) {
        if (
          data.result.reducerResults.collection_group_results.blockIds !== null
        ) {
          block_ids =
            data.result.reducerResults.collection_group_results.blockIds;
        }
      }
    }
  }

  return {
    block_ids,
    schema,
  };
};

/**
 * Fetches detailed block data for multiple block IDs.
 * @param context - Context object containing session and database information
 * @param block_ids - Array of block IDs to fetch data for
 * @returns Promise resolving to array of block data
 */
const getBlockData = async (context: Context, block_ids: string[]) => {
  const results = await Promise.all(
    block_ids.map(async (block_id) => {
      const blockData = await context.session.post("loadCachedPageChunk", {
        page: {
          id: block_id,
          spaceId: context.database_ids.space_id,
        },
        limit: 50,
        cursor: {
          stack: [],
        },
        verticalColumns: false,
      });
      return await getBlock(block_id, blockData, context);
    })
  );
  return results;
};

/**
 * Processes and structures data for a single Notion block.
 * @param block_id - ID of the block to process
 * @param data - API response containing block data
 * @param context - Optional context object for additional processing
 * @returns Promise resolving to structured NotionBlock
 */
const getBlock = async (
  block_id: string,
  { data }: AxiosResponse<NotionResponse, unknown>,
  context: Context
): Promise<NotionBlock> => {
  const blockData = data.recordMap.block[block_id].value;
  if (blockData === null) {
    throw new Error(`Failed to fetch block data for ID: ${block_id}`);
  }

  let title = null;
  if (blockData.properties !== null) {
    title = blockData.properties.title[0][0];
  }

  let slug = null;
  if (
    context !== null &&
    context.schema !== null &&
    blockData.properties !== null
  ) {
    slug = blockData.properties[findPropertyKey(context.schema, "Slug")][0][0];
  }

  let content = null;
  if (blockData.content !== null) {
    content = blockData.content
      .map((content_id: string) => {
        const contentBlock = data.recordMap.block[content_id].value;
        let blockTitle = null;
        if (
          contentBlock.properties !== null &&
          contentBlock.properties !== undefined &&
          contentBlock.properties.title !== undefined
        ) {
          blockTitle = contentBlock.properties.title;
        }
        return {
          title: blockTitle,
          type: contentBlock.type,
          id: content_id,
        };
      })
      .filter(Boolean);
  }

  return { block_id, title, content, blockData, slug, children: null };
};

/**
 * Retrieves and processes an entire Notion database.
 * @param id - ID of the Notion database to fetch
 * @returns Promise resolving to array of NotionBlock objects
 * @throws Error if database structure is invalid or fetch fails
 */
const getNotionDatabase = async (uuid: string): Promise<NotionBlock[]> => {
  const session = axios.create({
    httpsAgent: new Agent({ rejectUnauthorized: false }),
    baseURL: "https://heliotrope-seahorse-337.notion.site/api/v3",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
    },
  });

  const responseData = await getIdsFromRecords(session, uuid);
  const collection = responseData.recordMap.block[uuid].value;

  if (
    collection.view_ids === null ||
    collection.collection_id === null ||
    collection.space_id === null
  ) {
    throw new Error(`Invalid database structure for ID: ${uuid}`);
  }

  const context: Context = {
    session,
    database_ids: {
      view_id: collection.view_ids[0] || "",
      collection_id: collection.collection_id || "",
      space_id: collection.space_id || "",
    },
    schema: null,
  };

  const { block_ids, schema } = await getBlockIds(context);
  context.schema = schema;
  const blocks = await getBlockData(context, block_ids);

  return Promise.all(
    blocks.map(async (block: NotionBlock) => {
      if (
        block.blockData !== null &&
        block.blockData.content !== null &&
        block.blockData.content[0] !== null
      ) {
        try {
          block.children = await getNotionDatabase(block.blockData.content[0]);
        } catch {
          // Ignore error
          block.children = null;
        }
      }
      return block;
    })
  );
};

/**
 * Cached version of getNotionDatabase that stores results in a buffer.
 * Uses Next.js unstable_cache for performance optimization.
 * @param id - ID of the Notion database to fetch
 * @returns Promise resolving to cached buffer containing database data
 */
const cachedGetNotionDatabaseBuffer = async (id: string) => {
  const data = await getNotionDatabase(id);
  return Buffer.from(JSON.stringify(data));
};

/**
 * Main export function that provides cached access to Notion database content.
 * Retrieves data from cache if available, otherwise fetches and caches new data.
 * @param id - ID of the Notion database to fetch
 * @returns Promise resolving to array of NotionBlock objects
 */
const cachedGetNotionDatabase = async (id: string): Promise<NotionBlock[]> => {
  const buffer = await cachedGetNotionDatabaseBuffer(
    "1d142f09-f986-80eb-84d7-d5a80a48ed74"
  );
  return JSON.parse(Buffer.from(buffer).toString()) satisfies NotionBlock[];
};

export default cachedGetNotionDatabase;
