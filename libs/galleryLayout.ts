// Grid spans for the gallery. The repeating pattern gives an editorial,
// masonry-like rhythm; the last tile's span is then chosen so the grid ends
// flush instead of with a lone tile (phones: 2 columns, md and up: 4).

const pattern = [
  "md:col-span-2 md:row-span-2",
  "",
  "row-span-2",
  "",
  "",
  "md:col-span-2",
  "",
  "row-span-2",
  "",
  "",
];

// Literal class names so Tailwind generates them.
const BASE: Record<string, string> = {
  "1x1": "col-span-1 row-span-1",
  "1x2": "col-span-1 row-span-2",
  "2x1": "col-span-2 row-span-1",
  "2x2": "col-span-2 row-span-2",
};
const MD: Record<string, string> = {
  "1x1": "md:col-span-1 md:row-span-1",
  "1x2": "md:col-span-1 md:row-span-2",
  "2x1": "md:col-span-2 md:row-span-1",
  "2x2": "md:col-span-2 md:row-span-2",
  "3x1": "md:col-span-3 md:row-span-1",
  "3x2": "md:col-span-3 md:row-span-2",
  "4x1": "md:col-span-4 md:row-span-1",
  "4x2": "md:col-span-4 md:row-span-2",
};

type Span = { cols: number; rows: number };

function spansOf(cls: string): { base: Span; md: Span } {
  const baseRows = /(^|\s)row-span-2/.test(cls) ? 2 : 1;
  return {
    base: { cols: 1, rows: baseRows },
    md: {
      cols: cls.includes("md:col-span-2") ? 2 : 1,
      rows: cls.includes("md:row-span-2") || baseRows === 2 ? 2 : 1,
    },
  };
}

/** Empty cells left above the bottom edge after dense auto-placement. */
function emptyCells(spans: Span[], columns: number): number {
  const grid: boolean[][] = [];
  const free = (r: number, c: number) => !grid[r]?.[c];
  let maxRow = -1;
  for (const { cols, rows } of spans) {
    const w = Math.min(cols, columns);
    for (let r = 0; ; r++) {
      let placed = false;
      for (let c = 0; c + w <= columns; c++) {
        let fits = true;
        for (let dr = 0; dr < rows && fits; dr++)
          for (let dc = 0; dc < w && fits; dc++) fits = free(r + dr, c + dc);
        if (!fits) continue;
        for (let dr = 0; dr < rows; dr++) {
          grid[r + dr] ??= [];
          for (let dc = 0; dc < w; dc++) grid[r + dr][c + dc] = true;
        }
        maxRow = Math.max(maxRow, r + rows - 1);
        placed = true;
        break;
      }
      if (placed) break;
    }
  }
  let empty = 0;
  for (let r = 0; r <= maxRow; r++)
    for (let c = 0; c < columns; c++) if (free(r, c)) empty++;
  return empty;
}

function bestLast(spans: Span[], columns: number, options: string[]): string {
  let best = options[0];
  let bestEmpty = Infinity;
  for (const key of options) {
    const [cols, rows] = key.split("x").map(Number);
    const empty = emptyCells([...spans, { cols, rows }], columns);
    if (empty < bestEmpty) {
      bestEmpty = empty;
      best = key;
    }
  }
  return best;
}

/** Tailwind classes for every tile, given which tiles are videos. */
export function galleryTileClasses(isVideo: boolean[]): string[] {
  const classes = isVideo.map((video, i) =>
    video ? "row-span-2" : pattern[i % pattern.length]
  );
  if (classes.length < 2) return classes;

  const parsed = classes.slice(0, -1).map(spansOf);
  const base = bestLast(parsed.map((s) => s.base), 2, Object.keys(BASE));
  const md = bestLast(parsed.map((s) => s.md), 4, Object.keys(MD));
  classes[classes.length - 1] = `${BASE[base]} ${MD[md]}`;
  return classes;
}
