import HeaderThing from "@/components/HeaderThing";
import { fetchNotionPublicPage } from "../data/fetchNotionPublicPage";
import { NotionBlocks } from "../notion/NotionBlocks";
interface NotionContent {
  title: Array<[string, Array<[string, string]> | null]> | null;
  type: string;
  id: string;
  content: Array<[string, Array<[string, string]> | null]> | null;
}

export default async function Tagesessen() {
  const data = await fetchNotionPublicPage(
    "https://heliotrope-seahorse-337.notion.site/Tagesessen-1d142f09f98680eb84d7d5a80a48ed74?pvs=74"
  );

  if (!data) {
    return <div>No data found</div>;
  }

  if (!data.recordMap) {
    return <div>No record map found</div>;
  }

  if (!data.recordMap.block) {
    return <div>No block found</div>;
  }

  const blocks = Object.values(data.recordMap.block).flatMap((block) => ({
    title: block.value.value.properties?.title,
    type: block.value.value.type,
    id: block.value.value.id,
    properties: block.value.value.properties,
  }));

  if (blocks.length === 0) {
    return <div>No blocks found</div>;
  }

  return (
    <div className="bg-white">
      <HeaderThing title="Tagesessen" subtitle="Tagesessen" />
      <div className="flex flex-col md:flex-row px-4 items-center gap-10 relative justify-center gap-x-10 bg-white">
        <div className="prose">
          <h2>Tagesessen</h2>
          <NotionBlocks blocks={blocks} />
        </div>
      </div>
    </div>
  );
}
