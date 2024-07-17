import { readdirSync } from "fs";
export function getImages() {
  const images = readdirSync("../public/images");

  return images;
}
