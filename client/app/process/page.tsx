import Collab from "@/components/process/Collab";
import ColorRush from "@/components/process/ColorRush";
import Disco from "@/components/process/Disco";
import Hero from "@/components/process/Hero";
import Journey from "@/components/process/Journey"
import Techniques from "@/components/process/Techniques";
import Link from "next/link";

export default function ProcessPage() {
    return (
        <main id="main-content">
            <Hero />
            <Journey />
            <Collab />
            <Techniques />
            <ColorRush />
            <Disco />
            <section className="pt-14 flex flex-col items-center gap-12">
                <h1 className="text-[clamp(2.8rem,6.5vw,7rem)] font-limelight leading-[0.88]">Make it yours.</h1>
                <span className="italic text-[clamp(1rem,1.1vw,1.15rem)]">Handcrafted interior pieces — built to last a lifetime.</span>
                <div className="space-x-2">
                    <Link 
                    href={'/collection'}
                    className="text-accent-red bg-text-primary py-2 px-4 uppercase"
                    >
                        Explore Collection
                    </Link>
                    <Link 
                    href={'/about'}
                    className="border border-text-primary py-2 px-4 uppercase"
                    >
                        Our Story
                    </Link>
                </div>
            </section>
        </main>
    )
}