"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import slideOne from "@/app/images/1719172637065.jpg";
import slideTwo from "@/app/images/slide-tarek-2.jpeg";
import slideThree from "@/app/images/slide-tarek-3.jpeg";
import slideFour from "@/app/images/slide4.jpg";
export default function Carousel() {
  const images = [
    // "/images/slide1-1.jpg",
    slideOne,
    slideTwo,
    slideThree,
    slideFour,
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
  }, [currentImage, images.length]);

  return (
    <div className="relative w-full">
      <div className="relative overflow-hidden aspect-[1536/1000] md:aspect-[1536/500] ">
        {images.map((image, idx) => (
          <div
            key={image.src}
            className={
              " duration-700 ease-in-out" +
              (idx === currentImage ? " opacity-100" : " opacity-0")
            }
          >
            <Image
              src={image}
              alt="Carousel image"
              priority={true}
              width={1536}
              height={500}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={
                "absolute block w-full object-cover h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  transition duration-[7000ms]" +
                (idx === currentImage ? " scale-110" : " scale-100")
              }
            />
            <div className="absolute bottom-0 top-0 text-center left-0 right-0 items-center flex justify-center p-4 text-white  backdrop-brightness-50">
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
