"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Section from "../Section";

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoPlaying, setVideoPlaying] = useState(true);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        video.play().catch(() => setVideoPlaying(false));
    }, []);

    return (
        <Section
            aria-label="Hero"
            className="relative isolate flex flex-col items-center w-full md:min-h-dvh overflow-hidden"
        >

            <div className="relative z-10 inline-flex flex-col gap-18 pt-14">
                <div className="flex w-full items-center justify-center px-1 mb-1">
                    <p className="uppercase flex gap-2 md:gap-4 items-center text-[9px] md:text-xs tracking-[1px] md:tracking-[5px] px-4">
                        <span>Handcrafted</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-center relative after:absolute after:left-1/2 after:-translate-x-1/2 after:w-[80%] after:h-px after:bg-text-primary after:-bottom-4 after:scale-y-50">
                            Artisan · Made
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>Sustainable</span>
                    </p>
                </div>

                <div className="relative">
                    <h1 className="font-limelight text-[clamp(2rem,10vw,10rem)] whitespace-nowrap [text-shadow:0_0_4px_currentColor,0_0_12px_currentColor] leading-[0.6]">54th and Thread</h1>

                    {videoPlaying ? (
                        <video
                            ref={videoRef}
                            playsInline
                            muted
                            loop
                            aria-hidden="true"
                            poster="https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/logo/logo-poster.webp"
                            className="relative w-[clamp(2rem,60vw,60rem)] md:w-[clamp(2rem,28vw,28rem)] mx-auto -z-10"
                        >
                            <source src="https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/logo/logo.mov" type="video/quicktime" />
                            <source src="https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/logo/logo.webm" type="video/webm" />
                        </video>
                    ) : (
                        <Image
                            src="https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/logo/logo-poster.webp"
                            alt="logo design"
                            aria-hidden="true"
                            width={800}
                            height={800}
                            className="relative w-[clamp(2rem,60vw,60rem)] md:w-[clamp(2rem,28vw,28rem)] mx-auto -z-10"
                        />
                    )}
                </div>
            </div>

            {/* Decorative background images — same container so flower centers on design */}
            <div className="absolute top-22 inset-x-0 bottom-0 z-1" aria-hidden="true">
                <Image
                    src="https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/design.webp"
                    alt="design image"
                    fill
                    className="opacity-45 object-contain object-top"
                />
                <Image
                    src="https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/flower.webp"
                    alt="flower image"
                    fill
                    className="opacity-25 object-contain object-top"
                />
            </div>

            <div className="relative z-10 w-full mt-12 md:mt-auto pb-8 px-6 grid grid-cols-1 md:grid-cols-3 items-end gap-4 md:gap-0">
                <nav aria-label="Hero actions">
                    <div className="flex flex-col md:flex-row gap-3">
                        <Link
                            href="#collection"
                            className="w-full md:w-34 min-h-11 bg-accent-red uppercase flex items-center justify-center touch-manipulation"
                        >
                            Explore
                        </Link>
                        <Link
                            href="/about"
                            className="w-full md:w-34 min-h-11 border border-text-primary uppercase flex items-center justify-center touch-manipulation"
                        >
                            Our Story
                        </Link>
                    </div>
                </nav>

                <div
                    aria-hidden="true"
                    className="flex flex-col gap-2 items-center justify-end"
                >
                    <span className="w-px h-9 bg-text-primary/60" />
                    <span className="text-text-primary/60 text-[10px] tracking-widest uppercase">scroll to discover</span>
                    <span className="w-px h-9 bg-text-primary/60" />
                </div>

                <div />
            </div>
        </Section>
    )
}
