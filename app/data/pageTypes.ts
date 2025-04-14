export type Block = {
    value: {
      value: {
        id: string;
        version: number;
        type: string;
        properties: {
          [key: string]: [string[]];
        };
        content: string[];
        format: {
          page_icon?: string;
        };
        created_time: number;
        last_edited_time: number;
        parent_id: string;
        parent_table: string;
        alive: boolean;
        copied_from: string;
        space_id: string;
      };
      role: string;
    };
  };
  export type Collection = {
    value: {
      value: {
        id: string;
        version: number;
        name: [string[]];
        schema: {
          [key: string]: {
            name: string;
            type: string;
            ai_inference?: {
              type: string;
              prompt: string;
              auto_update_on_edit: boolean;
            };
            options?: Array<{
              id: string;
              color: string;
              value: string;
            }>;
          };
        };
        format: {
          copied_from_pointer: {
            id: string;
            table: string;
            spaceId: string;
          };
          ai_suggested_properties: Array<{
            name: string;
            type: string;
            options?: Array<{
              id: string;
              color: string;
              value: string;
            }>;
          }>;
          collection_page_properties: Array<{
            visible: boolean;
            property: string;
          }>;
        };
        parent_id: string;
        parent_table: string;
        alive: boolean;
        copied_from: string;
        template_pages: string[];
        migrated: boolean;
        space_id: string;
      };
    };
  };
  
  export type CollectionView = {
    value: {
      value: {
        id: string;
        version: number;
        type: string;
        name: string;
        format: {
          table_wrap: boolean;
          table_properties: Array<{
            width?: number;
            visible: boolean;
            property: string;
          }>;
        };
        parent_id: string;
        parent_table: string;
        alive: boolean;
        page_sort: string[];
        query2: {
          aggregations: Array<{
            property: string;
            aggregator: string;
          }>;
        };
        space_id: string;
        created_time: number;
        last_edited_time: number;
        created_by_table: string;
        created_by_id: string;
      };
    };
  };
  
  export type RecordMap = {
    __version__: number;
    block?: Record<string, Block>;
    collection?: Record<string, Collection>;
    collection_view?: Record<string, CollectionView>;
  };
  
  export type Page = {
    pageId: string;
    recordMap: RecordMap;
  };
  