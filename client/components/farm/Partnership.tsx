import Image from "next/image";

export default function Partnership() {
  return (
    <section aria-label="CeCe's Wool partnership" className="w-full bg-text-primary">
      <div className="relative z-10 flex flex-col sm:flex-row">

        {/* Left — content */}
        <div className="flex flex-col flex-1 px-6 lg:px-12 py-12 sm:w-1/2 justify-center gap-8 sm:max-h-175">
          <div>
            <p className="text-accent-red tracking-[3px] text-[clamp(0.8rem,.8vw,1.1rem)] uppercase">Local Partnership</p>
            <span className="w-10 h-px bg-accent-red mt-1 block" aria-hidden="true" />
          </div>
          <h2 className="font-limelight text-[clamp(2.5rem,5vw,5.5rem)] leading-[0.88] text-accent-red">
            CeCe&apos;s<br />Wool
          </h2>
          <div className="flex flex-col gap-6">
            <p className="text-xs uppercase tracking-[3px] text-accent-red">Upstate New York, USA</p>
            <p className="text-[clamp(1rem,1.1vw,1.15rem)] leading-[1.75] max-w-[55ch] text-accent-red-dark">
              We partnered with local farms like CeCe&apos;s Wool, where we were able to broker a relationship with the wonderful CeCe to use Jacobs Wool and Mohair.
            </p>
            <p className="text-[clamp(1rem,1.1vw,1.15rem)] leading-[1.75] max-w-[55ch] text-accent-red-dark">
              These rare, heritage-breed fibers bring unmatched texture and warmth to our woven pieces — each skein traceable back to a single flock.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {["Jacobs Wool", "Mohair", "Heritage Breed", "Hand-dyed"].map((tag) => (
              <span key={tag} className="text-xs uppercase tracking-[2px] text-accent-red">{tag}</span>
            ))}
          </div>
        </div>

        {/* Right — image */}
        <div className="relative aspect-4/3 sm:aspect-3/4 sm:w-1/2 sm:max-h-175 overflow-hidden">
          <Image
            src="https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/farm_to_54th/farm-03.webp"
            alt="CeCe's Wool farm"
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>

      </div>
    </section>
  );
}
