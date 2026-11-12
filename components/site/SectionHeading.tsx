import { cn } from "@/libs/utils";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p
        className={cn(
          "eyebrow",
          align === "center" && "justify-center",
          tone === "dark" && "!text-gold-light"
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-4 text-balance font-display text-3xl leading-tight sm:text-5xl",
          tone === "dark" ? "text-cream" : "text-olive-900"
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-cream/75" : "text-ink-muted"
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
