"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { cn } from "@/libs/utils";
import type { GalleryItem } from "@/libs/gallery";
import { galleryTileClasses } from "@/libs/galleryLayout";


export function Galarie({ items }: { items: GalleryItem[] }) {
  const [open, setOpen] = useState(-1);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const count = items.length;
  const tileClasses = galleryTileClasses(items.map((i) => i.type === "video"));

  const prev = useCallback(
    () => setOpen((i) => (i - 1 + count) % count),
    [count]
  );
  const next = useCallback(() => setOpen((i) => (i + 1) % count), [count]);

  // Native modal dialog: focus stays inside, the page behind is inert and
  // Escape closes it. Focus goes back to the thumbnail that opened it.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open >= 0 && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else if (open < 0 && dialog.open) {
      dialog.close();
    }
  }, [open]);

  const onClose = () => {
    document.body.style.overflow = "";
    setOpen(-1);
    openerRef.current?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDialogElement>) => {
    // Leave arrow keys to the video player when it has focus.
    if ((e.target as HTMLElement).tagName === "VIDEO") return;
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    }
  };

  const current = open >= 0 ? items[open] : null;

  return (
    <>
      <ul className="grid grid-flow-dense auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[200px] md:grid-cols-4 md:gap-4">
        {items.map((item, index) => (
          <li
            key={item.src}
            className={cn("relative", tileClasses[index])}
          >
            <button
              type="button"
              onClick={(e) => {
                openerRef.current = e.currentTarget;
                setOpen(index);
              }}
              className="group absolute inset-0 overflow-hidden rounded-2xl bg-cream-dark"
              {...(item.type === "video"
                ? { "aria-label": `${item.alt} – abspielen` }
                : {})}
            >
              {item.type === "video" ? (
                <VideoTile src={item.src} poster={item.poster} />
              ) : (
                <>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes={
                      tileClasses[index].includes("col-span-2")
                        ? "(min-width: 768px) 50vw, 50vw"
                        : "(min-width: 768px) 25vw, 50vw"
                    }
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="sr-only"> – vergrößern</span>
                </>
              )}
              <span className="absolute inset-0 bg-olive-950/0 transition group-hover:bg-olive-950/20" />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label={current?.type === "video" ? "Videoansicht" : "Bildansicht"}
        onClose={onClose}
        onKeyDown={onKeyDown}
        onClick={(e) => {
          // Click on the dark backdrop area closes the lightbox.
          if (e.target === e.currentTarget) setOpen(-1);
        }}
        className="dialog-screen bg-olive-950/95 backdrop-blur-sm open:flex open:items-center open:justify-center"
      >
        {current && (
          <>
            <figure className="relative h-[80svh] w-[92vw] max-w-5xl">
              {current.type === "video" ? (
                <video
                  key={current.src}
                  src={current.src}
                  poster={current.poster}
                  controls
                  playsInline
                  aria-label={current.alt}
                  className="h-full w-full object-contain"
                />
              ) : (
                <Image
                  src={current.src}
                  alt={current.alt}
                  fill
                  sizes="92vw"
                  className="object-contain"
                  loading="eager"
                />
              )}
              {/* Visual caption; screen readers already get the alt text. */}
              <figcaption
                aria-hidden
                className="absolute inset-x-0 -bottom-9 text-center text-sm text-cream/80"
              >
                {current.alt}
              </figcaption>
            </figure>

            <p
              className="absolute left-1/2 top-5 -translate-x-1/2 text-sm tabular-nums text-cream/75"
              aria-live="polite"
            >
              {open + 1} / {count}
              <span className="sr-only">: {current.alt}</span>
            </p>
            <LightboxButton
              label="Schließen"
              className="right-4 top-4"
              onClick={() => setOpen(-1)}
              autoFocus
            >
              <X size={24} aria-hidden />
            </LightboxButton>
            <LightboxButton
              label="Vorheriges Bild oder Video"
              className="left-2 top-1/2 -translate-y-1/2 sm:left-6"
              onClick={prev}
            >
              <ChevronLeft size={28} aria-hidden />
            </LightboxButton>
            <LightboxButton
              label="Nächstes Bild oder Video"
              className="right-2 top-1/2 -translate-y-1/2 sm:right-6"
              onClick={next}
            >
              <ChevronRight size={28} aria-hidden />
            </LightboxButton>
          </>
        )}
      </dialog>
    </>
  );
}

/** Still preview (first frame or cover image); plays only in the lightbox. */
function VideoTile({ src, poster }: { src: string; poster?: string }) {
  return (
    <span className="absolute inset-0">
      <video
        src={`${src}#t=0.1`}
        poster={poster}
        muted
        playsInline
        preload="metadata"
        aria-hidden
        tabIndex={-1}
        className="pointer-events-none h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
      <span className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-olive-950/75 px-3 py-1.5 text-xs font-semibold text-cream backdrop-blur-sm">
        <Play size={12} fill="currentColor" aria-hidden /> Video
      </span>
    </span>
  );
}

function LightboxButton({
  label,
  className,
  onClick,
  autoFocus,
  children,
}: {
  label: string;
  className: string;
  onClick: () => void;
  autoFocus?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      autoFocus={autoFocus}
      onClick={onClick}
      className={cn(
        // Opaque dark disc so the controls stay visible on any photo.
        "absolute grid h-12 w-12 place-items-center rounded-full bg-olive-950/85 text-cream shadow-lg ring-1 ring-white/25 transition hover:bg-gold hover:text-olive-950",
        className
      )}
    >
      {children}
    </button>
  );
}
