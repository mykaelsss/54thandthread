"use client";

import { useEffect, useRef } from "react";
import GlassImage from "../ui/GlassImage";

export default function Disco() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <section
      aria-label="Color Rush"
      className="w-full flex flex-col py-12 bg-accent-red-dark"
    >
      <div className="relative z-10 flex flex-col lg:flex-row-reverse gap-4 lg:gap-8 items-start w-full mx-auto px-6 lg:px-12">
        {/* Text column */}
        <div className="flex lg:flex-5 xl:flex-[2.5] justify-end w-full">
          <div className="w-fit flex flex-col gap-5">
            <h1 className="font-limelight text-[clamp(2.8rem,6.5vw,7rem)] max-w-[15ch]">
              The Disco Ball Display.
            </h1>

            <p className="text-[clamp(1rem,1.1vw,1.15rem)] text-text-primary/60 leading-[1.75] max-w-[70ch] lg:max-w-[70ch]">
              Our homage to the mirror ball, the ultimate symbol of Studio 54.
              Handcrafted using a balloon form wrapped with jute twine and
              stiffened with natural starch, then finished with sustainable
              Abaca fiber. Three sizes. Internal lights.
            </p>

            <div className="space-y-3 pt-4 border-t border-text-primary/20">
              <span className="italic text-sm text-text-primary/50">
                Technique: Balloon form · Jute wrapping · Starch stiffening
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="py-1.5 px-3 border border-text-primary/30 rounded-sm text-sm">
                  Jute Twine
                </span>
                <span className="py-1.5 px-3 border border-text-primary/30 rounded-sm text-sm">
                  Natural Starch
                </span>
                <span className="py-1.5 px-3 border border-text-primary/30 rounded-sm text-sm">
                  Internal Lights
                </span>
                <span className="py-1.5 px-3 border border-text-primary/30 rounded-sm text-sm">
                  Three Sizes
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:gap-8 w-full lg:flex-6">
          <video
            ref={videoRef}
            src="https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/process/process-02.mp4"
            muted
            loop
            playsInline
            className="flex-2 aspect-10/6 object-cover overflow-hidden rounded-md"
          />

          <div className="flex-1 aspect-4/2 flex gap-3 lg:gap-8">
            <GlassImage
              src="https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/process/process-18.webp"
              alt="Loom detail"
              sizes="(max-width: 768px) 25vw, 18vw"
              className="flex-1 min-h-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
