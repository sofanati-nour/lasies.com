import Image, { StaticImageData } from "next/image";

export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  image: StaticImageData;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-olive-950 pb-16 pt-36 text-cream sm:pb-20 sm:pt-44">
      <Image
        src={image}
        alt=""
        fill
        preload
        loading="eager"
        sizes="100vw"
        placeholder="blur"
        className="-z-20 object-cover opacity-40"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-olive-950 via-olive-950/70 to-olive-950/30" />
      <div className="container-x">
        <p className="eyebrow animate-fade-up !text-gold-light">{eyebrow}</p>
        <h1
          className="mt-4 max-w-3xl animate-fade-up hyphens-auto font-display text-[2rem] leading-[1.05] min-[400px]:text-4xl [overflow-wrap:anywhere] sm:text-6xl"
          style={{ animationDelay: "80ms" }}
        >
          {title}
        </h1>
        {intro && (
          <p
            className="mt-5 max-w-2xl animate-fade-up text-base leading-relaxed text-cream/80 sm:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
