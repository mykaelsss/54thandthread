import GlassImage from "../ui/GlassImage";

export default function Journey() {
  return (
    <section
      aria-label="Our Journey"
      className="bg-accent-red-dark px-6 lg:px-12 py-12 flex flex-col lg:flex-row gap-4 lg:gap-8 lg:items-center"
    >
      <div className="flex flex-col gap-4 lg:flex-1">
        <div>
          <p className="text-[clamp(1rem,1.2vw,1.2rem)] uppercase tracking-[4px]">
            Our Journey
          </p>
          <span
            className="w-10 h-px bg-text-primary/40 mt-1 block"
            aria-hidden="true"
          />
        </div>
        <div>
          <p className="text-[clamp(2.4rem,2.8vw,5rem)] italic max-w-[15ch] leading-none">
            Everything you see here was made by hand.
          </p>
          <span
            className="w-10 h-px bg-text-primary/40 mt-5 block"
            aria-hidden="true"
          />
        </div>
        <p className="max-w-[70ch] text-[clamp(1rem,1vw,1.4rem)]">
          We worked on floor looms and handlooms, felted and braided,
          embroidered and used old craft techniques in our homage to the 70s and
          80s — the decades that taught us personality could be bold, beautiful,
          and built to last.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-3 lg:gap-8 lg:flex-2">
        <GlassImage
          src="https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/process/process-03.webp"
          alt="Weaving process"
          sizes="(max-width: 768px) 55vw, 35vw"
          className="aspect-3/2 lg:flex-1"
        />
        <GlassImage
          src="https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/process/process-16.webp"
          alt="Weaving process"
          sizes="(max-width: 768px) 55vw, 35vw"
          className="aspect-3/2 lg:flex-1"
        />
      </div>
    </section>
  );
}
