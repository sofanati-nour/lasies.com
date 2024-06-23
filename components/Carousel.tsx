"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Carousel() {
  const images = [
    "/images/slide1-1.jpg",
    "/images/slide2-1.jpg",
    "/images/slide3-1.jpg",
    "/images/slide4.jpg",
  ];

  const subtitles = [
    "Eine perfekte Mischung aus sensationellem Essen",
    "Inspirierende Ideen & professionelles Personal",
    "Individuelles Menü, wettbewerbsfähige Preise",
    "Marktführer in Catering-Exzellenz",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="relative w-full">
      <div className="relative h-[600px] sm:h-[500px] overflow-hidden ">
        {images.map((image, idx) => (
          <div
            key={image}
            className={
              " duration-700 ease-in-out" +
              (idx === currentImage ? " opacity-100" : " opacity-0")
            }
          >
            <img
              src={image}
              className={
                "absolute block w-full object-cover h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  transition duration-[7000ms]" +
                (idx === currentImage ? " scale-110" : " scale-100")
              }
            />
            <div className="absolute bottom-0 top-0 text-center left-0 right-0 items-center flex justify-center p-4 text-white">
              <h2 className="text-3xl px-8 font-bold">{subtitles[idx]}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute left-5  bottom-0 top-0 my-auto flex flex-col justify-center">
        <ArrowLeft
          size={24}
          className="w-8 h-8 cursor-pointer text-white"
          onClick={() => setCurrentImage((currentImage - 1) % images.length)}
        />
      </div>
      <div className="absolute right-5 bottom-0 top-0 my-auto flex flex-col justify-center">
        <ArrowRight
          size={24}
          className="w-8 h-8 cursor-pointer text-white"
          onClick={() => setCurrentImage((currentImage + 1) % images.length)}
        />
      </div>
    </div>
  );
}
