interface NotionContent {
  title: Array<[string, Array<[string, string]> | null]> | null;
  type: string;
  id: string;
}

import { NotionBlockContent } from "./NotionBlockContent";

// : {
//   title: [string[]];
//   type: string;
//   id: string;
//   properties: {
//       [key: string]: [string[]];
//   };
// }[]

export function NotionBlocks({
  blocks,
}: {
  blocks: {
    title: [string[]];
    type: string;
    id: string;
    properties: {
      [key: string]: [string[]];
    };
  }[];
}) {
  const renderBlocks = () => {
    if (blocks === null) {
      return null;
    }

    const result: JSX.Element[] = [];
    let currentListItems: JSX.Element[] = [];
    let currentListType: "bulleted_list" | "numbered_list" | null = null;

    const flushListItems = () => {
      if (currentListItems.length > 0) {
        const ListWrapper = currentListType === "bulleted_list" ? "ul" : "ol";
        const listClass =
          currentListType === "bulleted_list" ? "list-disc" : "list-decimal";
        result.push(
          <ListWrapper
            key={`list-${result.length}`}
            className={`${listClass} list-inside pl-2`}
          >
            {currentListItems}
          </ListWrapper>
        );
        currentListItems = [];
        currentListType = null;
      }
    };

    blocks.forEach((block, index) => {
      if (block.title === null) {
        result.push(<br key={`br-${index}`} />);
        return;
      }

      if (block.type === "bulleted_list" || block.type === "numbered_list") {
        if (currentListType && currentListType !== block.type) {
          flushListItems(); // End previous list if type changes
        }
        currentListType = block.type;
        currentListItems.push(<NotionBlockContent key={index} c={block} />);
      } else {
        flushListItems(); // End list when encountering non-list block
        result.push(<NotionBlockContent key={index} c={block} />);
      }
    });

    flushListItems(); // Flush any remaining list items
    return result;
  };

  return <>{renderBlocks()}</>;
}
