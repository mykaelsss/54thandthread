import Section from "../Section";
import GlassImage from "../ui/GlassImage";

export default function Hero() {
  return (
    <Section
      aria-label="Process hero"
      className="w-full flex flex-col py-12"
    >
      <div className="relative z-10 flex flex-col lg:flex-row gap-4 lg:gap-8 items-start lg:items-center w-full mx-auto md:pt-14 px-6 lg:px-12">

        {/* Text column */}
        <div className="flex flex-col gap-5 lg:flex-5">
          <p className="uppercase tracking-[0.35em] text-[clamp(1.8rem,2vw,2.2rem)] text-text-primary/60">
            The Process
          </p>

          <div>
            <h1 className="font-limelight text-[clamp(2.8rem,6.5vw,7rem)] leading-[0.88] [text-shadow:0_0_4px_currentColor,0_0_12px_currentColor]">
              Made by Hand.<br />Built to Last.
            </h1>
            <span className="w-10 h-px bg-text-primary/40 mt-1 block" aria-hidden="true" />
          </div>

          <p className="text-[clamp(1rem,1.1vw,1.15rem)] text-text-primary/60 leading-[1.75] max-w-[70ch] lg:max-w-[55ch]">
            We made everything you see here by hand. Not as a statement, but as
            a belief — that the most sustainable approach we could have was to
            slow down, pay attention, and make something worth keeping.
          </p>
        </div>

        {/* Image collage */}
        <div className="flex gap-3 lg:gap-8 w-full lg:flex-4">

          <GlassImage
            src="https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/process/process-13.webp"
            alt="Weaving process"
            sizes="(max-width: 768px) 55vw, 35vw"
            className="flex-2 aspect-2/3"
          />

          <div className="flex-1 aspect-2/3 flex flex-col gap-3 lg:gap-8">
            <GlassImage
              src="https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/process/process-01.webp"
              alt="Loom detail"
              sizes="(max-width: 768px) 25vw, 18vw"
              className="flex-1 min-h-0"
            />
            <GlassImage
              src="https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/process/process-17.webp"
              alt="Crafting detail"
              sizes="(max-width: 768px) 25vw, 18vw"
              className="flex-1 min-h-0"
            />
          </div>

        </div>
      </div>
    </Section>
  );
}
