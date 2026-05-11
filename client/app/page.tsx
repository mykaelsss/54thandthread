import CollectionSection from "@/components/CollectionSection";
import ColorStorySection from "@/components/ColorStorySection";
import Hero from "@/components/home/Hero";
import ValuesSection from "@/components/ValueSection";
import Link from "next/link";

export default function Home() {
  return (
      <main id="main-content">
        <Hero />
        <section className="bg-accent-red-dark flex flex-col gap-8.5 py-15 md:px-20 px-2 text-lg">
          <div className="flex flex-col gap-2 opacity-80">
            <h2 className="uppercase text-xs tracking-[5px]">the story</h2>
            <div className="w-10 h-px bg-text-primary"></div>
          </div>
          <p className="text-[3em]">Interiors With Attitude</p>
          <div className="w-15 h-px bg-text-primary opacity-40"></div>
          <span>In this world you can move again, you can feel. You see colors again. You can dance, you can run, you can be free. Now imagine that world was at home.</span>
          <span>That is 54th and Thread.</span>
          <Link
          href={'/about'}
          className="text-sm"
          >
            Read our full story →
          </Link>
        </section>
        <CollectionSection />
        <section className="flex flex-col md:flex-row">
          <div className="flex flex-col bg-text-primary px-2 md:px-15 gap-10 py-10 flex-1">
            <span className="uppercase text-accent-red text-[clamp(2rem,25vw,25rem)] md:text-[clamp(2rem,7vw,7rem)] leading-none">farm <br /> to <br /> 54th</span>
            <div className="h-0.5 w-50 bg-accent-red"></div>
            <span className="text-accent-red-dark">Zero waste production. 100% biodegradable fibers.</span>
          </div>
          <div className="flex flex-col flex-2 bg-accent-red-dark py-14 px-2 md:px-25 md:py-35 gap-23">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <h2 className="tracking-[5px] uppercase text-xs">our journey</h2>
                <div className="h-px w-10 bg-text-primary/50"></div>
              </div>
              <p className="text-[clamp(2rem,2vw,2rem)]">We made everything by hand. Not as a statement, but as a belief.</p>
            </div>
            <div className="flex flex-col gap-7">
              <p>We worked on floor looms and handlooms, felted and braided, embroidered and used old craft techniques in our homage to the 70s and 80s — the decades that taught us personality could be bold, beautiful, and built to last.</p>
              <p>Partnering with FVH, Island Harvest, Fashion Farmer, RPCP, BAYO, and CECE Wool to create limited-edition collections that raise awareness and empower local economies.</p>
            </div>
          </div>
        </section>
        <ColorStorySection />
        <ValuesSection />
      </main>
  );
}
