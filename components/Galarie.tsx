"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export function Galarie({ images }: { images: string[] }) {
  const [popup, setPopup] = useState<number>(-1);
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (popup >= 0) {
        if (e.key === "Escape") setPopup(-1);
        if (e.key === "ArrowRight") {
          if (popup < images.length - 1) setPopup(popup + 1);
        }
        if (e.key === "ArrowLeft") {
          if (popup >= 0) setPopup(popup - 1);
        }
      }
    });
    return () => {
      window.removeEventListener("keydown", () => {});
    };
  }, [popup, images.length]);
  return (
    <div className="grid gap-1 sm:gap-2 p-1 sm:p-5 grid-cols-3 items-center place-content-center sm:w-2/3 mx-auto">
      {images.map((image, index) => (
        <GridImage
          key={image}
          src={image}
          alt="Image"
          setPopup={() => {
            setPopup(index);
          }}
        />
      ))}
      {popup >= 0 && (
        <ImagePopup
          src={images[popup]}
          alt="Popup Image"
          setPopup={() => setPopup(-1)}
        />
      )}
    </div>
  );
}

function GridImage({ src, alt, setPopup }: any) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <div className="aspect-square" ref={ref}>
      {inView && (
        <Image
          src={src}
          alt={alt}
          className="rounded-md w-full object-cover cursor-pointer h-full hover:scale-110 hover:shadow-4xl transition"
          onClick={() => setPopup(src)}
          width={512}
          height={512}
          loading="lazy"
        />
      )}
    </div>
  );
}

function ImagePopup({
  src,
  alt,
  setPopup,
}: {
  src: string;
  alt: string;
  setPopup: any;
}) {
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={() => setPopup()}
    >
      <div className="absolute top-4 right-4">
        <button onClick={() => setPopup()}>
          <i className="text-4xl fas fa-times text-white"></i>
        </button>
      </div>
      <Image
        src={src}
        alt={alt}
        className="max-w-[90%] h-[90%] object-contain pointer-events-none"
        // stop propagation
        onClick={(e) => e.stopPropagation()}
        width={512}
        height={512}
        loading="lazy"
      />
    </div>
  );
}
