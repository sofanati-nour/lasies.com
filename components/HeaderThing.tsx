import { cn } from "@/libs/utils";
import Image from "next/image";
export default function HeaderThing({
  title,
  subtitle,
  className,
  type = "default",
  textAlignment = "center",
}: {
  title: string;
  subtitle: string;
  className?: string;
  type?: "default" | "small";
  textAlignment?: "center" | "left" | "right";
}) {
  return (
    <div className={cn("flex justify-center items-center py-5 ", className)}>
      <div
        className={cn("h-[120px] relative flex flex-col font-serif", {
          "text-center": textAlignment == "center",
          "text-left": textAlignment == "left",
          "text-right": textAlignment == "right",
        })}
      >
        <Image
          src={"/title_bg_green.webp"}
          alt="hero"
          width={280}
          height={180}
          className={cn(" mx-auto", {
            "w-64 opacity-60": type == "small",
            "-mb-20": type == "default",
            "-mb-24": type == "small",
            "-ml-24": textAlignment == "left",
            "-mr-24": textAlignment == "right",
          })}
        />
        <h2
          className={cn({
            "text-xl": type == "default",
            "font-bold": type == "small",
            "text-center mx-auto": textAlignment == "center",
            "text-left": textAlignment == "left",
            "text-right": textAlignment == "right",
          })}
        >
          {title}
        </h2>
        <p
          className={cn({
            "font-semibold text-2xl": type == "default",
            "w-80": type == "small",
            "text-center mx-auto": textAlignment == "center",
            "text-left": textAlignment == "left",
            "text-right": textAlignment == "right",
          })}
        >
          {subtitle}
        </p>
        {type == "default" ? (
          <div className="w-64 h-0.5 bg-yellow-500 mx-auto self-end absolute bottom-0 left-0 right-0"></div>
        ) : null}
      </div>
    </div>
  );
}
