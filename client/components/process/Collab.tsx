import GlassImage from "../ui/GlassImage";

export default function Collab() {
    return (
        <section
        aria-label="Collab"
        className="px-6 lg:px-12 py-12 flex flex-col lg:flex-row gap-4 lg:gap-8 lg:items-center"
        >
            <div className="flex flex-col gap-4 lg:flex-1">
                <h1 className="text-[clamp(2.4rem,2.8vw,5rem)]">Working With William</h1>
                <div>
                <p className="text-[clamp(1rem,1vw,1.4rem)] max-w-[70ch]">Collaborating with local artisan William Storms, we explored the technical side of weaving —using his floor loom and spinning our own yarns, his studio became our classroom, and his expertise shaped every warp and weft.</p>
                <span
                className="w-10 h-px bg-text-primary/40 mt-1 block"
                aria-hidden="true"
                />
                </div>
                <p className="italic text-[clamp(1rem,1vw,1.4rem)] max-w-[55ch]">&quot;The decades that taught us personality could be bold, beautiful, and built to last.&quot;</p>
            </div>
            
            <div className="grid grid-cols-2 gap-3 lg:gap-8 lg:flex-2">
                    <GlassImage
                      src="https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/process/process-04.webp"
                      alt="Weaving process"
                      sizes="(max-width: 768px) 55vw, 35vw"
                      className="aspect-3/2 lg:flex-1"
                    />
                    <GlassImage
                      src="https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/process/process-09.webp"
                      alt="Weaving process"
                      sizes="(max-width: 768px) 55vw, 35vw"
                      className="aspect-3/2 lg:flex-1"
                    />
                    <GlassImage
                      src="https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/process/process-15.webp"
                      alt="Weaving process"
                      sizes="(max-width: 768px) 55vw, 35vw"
                      className="aspect-3/2 lg:flex-1"
                    />
                    <GlassImage
                      src="https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/process/process-06.webp"
                      alt="Weaving process"
                      sizes="(max-width: 768px) 55vw, 35vw"
                      className="aspect-3/2 lg:flex-1"
                    />
            </div>
        </section>
    )
}