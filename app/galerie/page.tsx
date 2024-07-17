import { getImages } from "@/libs/galarieApi";
import { GetImagesFromDirectory } from "../actions";
import { Galarie } from "@/components/Galarie";

export default async function GaleriePage() {
  const images = await GetImagesFromDirectory();
  console.log(images);

  return (
    <main className="bg-[#f0ebdf] sm:*:p-5">
      <Galarie images={images} />
    </main>
  );
}
