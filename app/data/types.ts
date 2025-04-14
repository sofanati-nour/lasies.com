import { AxiosInstance } from "axios";

interface SchemaProperty {
  name: string;
  type: string;
}

interface DatabaseIds {
  view_id: string;
  collection_id: string;
  space_id: string;
}

interface NotionBlock {
  block_id: string;
  title: string | null;
  content: NotionContent[] | null;
  blockData: {
    content: string[] | null;
    [key: string]: unknown;
  } | null;
  slug: string | null;
  children: NotionBlock[] | null;
}

interface NotionContent {
  title: Array<[string, Array<[string, string]> | null]> | null;
  type: string;
  id: string;
}

interface NotionSchema {
  [key: string]: SchemaProperty;
}

interface Context {
  session: AxiosInstance;
  database_ids: DatabaseIds;
  schema: NotionSchema | null;
}

interface NotionResponse {
  recordMap: {
    block: {
      [key: string]: {
        value: {
          view_ids: string[] | null;
          collection_id: string | null;
          space_id: string | null;
          properties: {
            [key: string]: Array<[string, Array<[string, string]> | null]>;
          } | null;
          content: string[] | null;
          type: string;
          id: string;
        };
      };
    };
    collection: {
      [key: string]: {
        value: {
          schema: NotionSchema;
        };
      };
    };
  };
  result: {
    reducerResults: {
      collection_group_results: {
        blockIds: string[];
      };
    };
  } | null;
}

interface NotionPage extends NotionBlock {
  slug: string;
}

interface NotionCategory extends NotionBlock {
  children: NotionPage[];
}

export type {
  SchemaProperty,
  NotionResponse,
  Context,
  DatabaseIds,
  NotionSchema,
  NotionPage,
  NotionCategory,
  NotionBlock,
  NotionContent,
};
