import Image from "next/image";
import Section from "../Section";

export default function Hero() {
  return (
    <Section aria-label="Farm hero" className="w-full flex flex-col">
      <div className="relative z-10 flex flex-col sm:flex-row">

        {/* Left — content */}
        <div className="flex flex-col flex-1 px-6 lg:px-12 py-12 sm:w-1/2 justify-center gap-10 sm:max-h-175">
          <div>
            <h1 className="font-limelight text-[clamp(2.8rem,6.5vw,7rem)] leading-[0.88] [text-shadow:0_0_4px_currentColor,0_0_12px_currentColor]">
              Farm <br /> To 54th
            </h1>
            <span className="w-10 h-px bg-text-primary/40 mt-1 block" aria-hidden="true" />
          </div>
          <div>
            <p className="text-[clamp(1rem,1.1vw,1.15rem)]">Where natural fibers meet intentional craft.</p>
            <p className="text-[clamp(1rem,1.1vw,1.15rem)] text-text-primary/60 pt-4">Zero waste production  ✦  100% biodegradable fibers</p>
          </div>
        </div>

        {/* Right — full-height image */}
        <div className="relative aspect-4/3 sm:aspect-3/4 sm:w-1/2 sm:max-h-175 overflow-hidden">
          <Image
            src="https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/farm_to_54th/farm-04.webp"
            alt="Artisan working with natural fibers"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
        </div>

      </div>
    </Section>
  );
}
