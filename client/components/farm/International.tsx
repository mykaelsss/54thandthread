import Image from "next/image";

export default function International() {
  return (
    <section
      aria-label="International Partnership"
      className="w-full flex flex-col sm:flex-row-reverse sm:min-h-175"
    >
      {/* Left — content */}
      <div className="flex flex-col justify-center px-6 lg:px-12 pb-6 pt-12 sm:py-14 sm:w-1/2 gap-8 bg-accent-red-dark">
        <div>
          <p className="tracking-[3px] text-[clamp(0.8rem,.8vw,1.1rem)] uppercase text-text-primary/60">
            International Partnership
          </p>
          <span
            className="w-10 h-px bg-text-primary/60 mt-1 block"
            aria-hidden="true"
          />
        </div>
        <h2 className="font-limelight text-[clamp(2.5rem,5vw,5.5rem)] leading-[0.88]">
          Island
          <br />
          Harvest
        </h2>
        <div className="flex flex-col gap-6">
          <p className="text-xs uppercase tracking-[3px] text-text-primary/60">
            THE PHILIPPINES
          </p>
          <p className="text-[clamp(1rem,1.1vw,1.15rem)] leading-[1.75] max-w-[55ch]">
            The Philippines is no stranger to Abaca — that&apos;s why we
            partnered with the family-owned non-profit Island Harvest, where
            they so graciously helped us with supplying Abaca used in many of
            our pieces.
          </p>
          <p className="text-[clamp(1rem,1.1vw,1.15rem)] leading-[1.75] max-w-[55ch]">
            Abaca, known as Manila Hemp, is one of the world&apos;s strongest natural
            fibers. Entirely biodegradable, it&apos;s grown by farming families who
            have cultivated the craft for generations.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-text-primary/60">
          {["Abaca Fiber", "Manila Hemp", "Non-Profit", "Biodegradable"].map(
            (tag) => (
              <span key={tag} className="text-xs uppercase tracking-[2px]">
                {tag}
              </span>
            ),
          )}
        </div>
      </div>

      {/* Right — image */}
      <div className="relative aspect-4/3 sm:aspect-3/4 sm:w-1/2 sm:max-h-175 overflow-hidden">
        <Image
          src="https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/farm_to_54th/farm-01.webp"
          alt="Island Harvest abaca farm in the Philippines"
          fill
          className="object-cover object-center"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}
