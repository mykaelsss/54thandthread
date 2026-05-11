import Hero from "@/components/farm/Hero";
import International from "@/components/farm/International";
import Partnership from "@/components/farm/Partnership";
import Philosophy from "@/components/farm/Philosophy";
import Link from "next/link";

export default function FarmPage() {
  return (
    <main id="main-content">
      <Hero />
      <Philosophy />
      <Partnership />
      <International />
      <section aria-label="The craft" className="relative bg-[url(https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/farm_to_54th/farm-02-trimmed.webp)] bg-cover bg-center w-full px-6 lg:px-12 py-14 flex items-center">
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <div className="flex flex-col gap-16 z-10 relative my-auto">
          <div>
            <p className="tracking-[3px] text-[clamp(0.8rem,.8vw,1.1rem)] uppercase text-text-primary/60">
              The craft
            </p>
            <span
              className="w-10 h-px bg-text-primary/60 mt-1 block"
              aria-hidden="true"
            />
          </div>
          <p className="italic text-[clamp(2rem,2.4vw,2.8rem)] max-w-[20ch]">
            &quot;The decades that taught us personality could be bold,
            beautiful, and built to last.&quot;
          </p>
          <span className="text-[clamp(0.8rem,.8vw,1.1rem)] uppercase text-text-primary/60">
            — 54TH AND THREAD
          </span>
        </div>
      </section>
      <section aria-label="Explore the collection" className="w-full px-6 lg:px-12 py-14 flex items-center flex-col gap-8">
        <p className="text-[clamp(2rem,2.4vw,2.8rem)] uppercase">wear the world that made it</p>
        <p className="text-[clamp(1rem,1vw,1.5rem)] max-w-[70ch] text-center">
          Each piece carries a lineage — from farm to fiber, from loom to living
          room. Explore collections made with care, intention, and hands that
          know the difference.
        </p>
        <Link
          href={"/collection"}
          className="py-3 px-5 border border-text-primary/50 uppercase"
        >
          explore collection
        </Link>
      </section>
    </main>
  );
}
