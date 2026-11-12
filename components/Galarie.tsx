"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/libs/utils";
import type { GalleryItem } from "@/libs/gallery";

// Repeating span pattern gives the grid an editorial, masonry-like rhythm.
const spans = [
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

export function Galarie({ items }: { items: GalleryItem[] }) {
  const [open, setOpen] = useState(-1);
  const count = items.length;

  const prev = useCallback(
    () => setOpen((i) => (i - 1 + count) % count),
    [count]
  );
  const next = useCallback(() => setOpen((i) => (i + 1) % count), [count]);

  useEffect(() => {
    if (open < 0) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(-1);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, next, prev]);

  const current = open >= 0 ? items[open] : null;

  return (
    <>
      <div className="grid grid-flow-dense auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[200px] md:grid-cols-4 md:gap-4">
        {items.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setOpen(index)}
            className={cn(
              "group relative overflow-hidden rounded-2xl bg-cream-dark",
              item.type === "video"
                ? "row-span-2"
                : spans[index % spans.length]
            )}
            aria-label={
              item.type === "video"
                ? `Video ${index + 1} von ${count} abspielen`
                : `Bild ${index + 1} von ${count} vergrößern`
            }
          >
            {item.type === "video" ? (
              <VideoTile src={item.src} poster={item.poster} />
            ) : (
              <Image
                src={item.src}
                alt={`Catering-Impression ${index + 1}`}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            )}
            <span className="absolute inset-0 bg-olive-950/0 transition group-hover:bg-olive-950/20" />
          </button>
        ))}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.type === "video" ? "Videoansicht" : "Bildansicht"}
          className="fixed inset-0 z-50 flex items-center justify-center bg-olive-950/95 backdrop-blur-sm"
          onClick={() => setOpen(-1)}
        >
          <div className="relative h-[80svh] w-[92vw] max-w-5xl">
            {current.type === "video" ? (
              <video
                key={current.src}
                src={current.src}
                poster={current.poster}
                controls
                autoPlay
                playsInline
                className="h-full w-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <Image
                src={current.src}
                alt={`Catering-Impression ${open + 1}`}
                fill
                sizes="92vw"
                className="object-contain"
                priority
              />
            )}
          </div>

          <p className="absolute left-1/2 top-5 -translate-x-1/2 text-sm tabular-nums text-cream/70">
            {open + 1} / {count}
          </p>
          <LightboxButton
            label="Schließen"
            className="right-4 top-4"
            onClick={() => setOpen(-1)}
          >
            <X size={24} />
          </LightboxButton>
          <LightboxButton
            label="Vorheriges"
            className="left-2 top-1/2 -translate-y-1/2 sm:left-6"
            onClick={prev}
          >
            <ChevronLeft size={28} />
          </LightboxButton>
          <LightboxButton
            label="Nächstes"
            className="right-2 top-1/2 -translate-y-1/2 sm:right-6"
            onClick={next}
          >
            <ChevronRight size={28} />
          </LightboxButton>
        </div>
      )}
    </>
  );
}

/** Muted, looping preview that only loads and plays while on screen. */
function VideoTile({ src, poster }: { src: string; poster?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref, inView } = useInView({ threshold: 0.25 });

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (inView && !reduced) {
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [inView]);

  return (
    <span ref={ref} className="absolute inset-0">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
      <span className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-olive-950/70 px-3 py-1.5 text-xs font-semibold text-cream backdrop-blur-sm">
        <Play size={12} fill="currentColor" /> Video
      </span>
    </span>
  );
}

function LightboxButton({
  label,
  className,
  onClick,
  children,
}: {
  label: string;
  className: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className={cn(
        "absolute grid h-12 w-12 place-items-center rounded-full bg-white/10 text-cream transition hover:bg-gold hover:text-olive-950",
        className
      )}
    >
      {children}
    </button>
  );
}
