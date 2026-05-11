"use client";

import { useEffect, useRef } from "react";

export default function Philosophy() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <section aria-label="Our philosophy" className="bg-accent-red-dark flex flex-col sm:flex-row-reverse sm:min-h-175 max-h-175">

      {/* Left — content */}
      <div className="flex flex-col justify-center px-6 lg:px-12 pb-6 pt-12 sm:py-14 sm:w-2/5 gap-10 lg:gap-20">
        <div>
          <p className="text-text-primary/60 tracking-[3px] text-[clamp(0.8rem,.8vw,1.1rem)] uppercase">
            our philosophy
          </p>
          <span className="w-10 h-px bg-text-primary/40 mt-1 block" aria-hidden="true" />
        </div>
        <h2 className="text-[clamp(3rem,5vw,5rem)] w-fit leading-[0.88] max-w-[20ch]">Every fiber has a story before it becomes yours.</h2>
        <p className="text-[clamp(1rem,1.1vw,1.15rem)] leading-[1.75] max-w-[70ch]">From local farms in upstate New York to family-owned co-ops in the Philippines — our materials travel through hands that care, before they reach yours.</p>
      </div>

      {/* Right — video */}
      <div className="relative aspect-4/3 sm:aspect-auto sm:w-3/5 overflow-hidden">
        <video
          ref={videoRef}
          src="https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/farm_to_54th/farm-01.mp4"
          muted
          loop
          playsInline
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

    </section>
  );
}
