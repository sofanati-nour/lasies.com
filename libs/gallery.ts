// Server-side only (reads the file system at build time).
import fs from "fs";
import { join } from "path";

export type GalleryItem =
  | { type: "image"; src: string }
  | { type: "video"; src: string; poster?: string };

/**
 * Everything shown on /galerie.
 * - Videos: put `name.mp4` (+ optional `name.jpg` cover) in public/videos.
 * - Photos: put .jpg/.png files in public/images/galarie. They are sorted by
 *   file name, so prefix new ones with "00-" to show them first.
 */
export function getGalleryItems(): GalleryItem[] {
  const videoDir = join(process.cwd(), "public/videos");
  const imageDir = join(process.cwd(), "public/images/galarie");

  const videoFiles = fs.existsSync(videoDir) ? fs.readdirSync(videoDir) : [];
  const videos: GalleryItem[] = videoFiles
    .filter((f) => f.toLowerCase().endsWith(".mp4"))
    .sort()
    .map((f) => {
      const cover = f.replace(/\.mp4$/i, ".jpg");
      return {
        type: "video",
        src: `/videos/${f}`,
        poster: videoFiles.includes(cover) ? `/videos/${cover}` : undefined,
      };
    });

  const images: GalleryItem[] = fs
    .readdirSync(imageDir)
    .filter((f) => /\.(jpe?g|png)$/i.test(f))
    .sort()
    .map((f) => ({ type: "image", src: `/images/galarie/${f}` }));

  // Interleave the videos among the first photos so they stand out.
  const items = [...images];
  videos.forEach((v, i) => items.splice(1 + i * 5, 0, v));
  return items;
}
