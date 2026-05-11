export default function Collab() {
  return (
    <section className="relative bg-[url(https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/collection/william_storms_rug.webp)] bg-cover bg-center w-full px-6 lg:px-12 py-14">
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      <div className="relative z-10 flex flex-col gap-8">
        <div>
          <span className="text-text-primary/60 tracking-[3px] text-[clamp(0.8rem,.8vw,1.1rem)]">
            COLLABORATIVE PIECE
          </span>
          <span
            className="w-20 h-px bg-text-primary/40 mt-1 block"
            aria-hidden="true"
          />
          <h2 className="text-[clamp(3rem,6vw,6rem)] w-fit">Storms & Thread</h2>
        </div>
        <p className="text-[clamp(1rem,1.1vw,1.15rem)] text-text-primary/70 leading-[1.75] max-w-[70ch]">
          A collaborative floor tapestry rug woven with William Storms. Alpaca,
          Mohair, Belgian Linen, iridescent Mylar & Japanese metallic yarn. 4 x
          6 feet.
        </p>
        <p className="text-[clamp(0.8rem,.8vw,1.1rem)] text-text-primary/70 pt-10">
          ALPACA · MOHAIR · MYLAR · BELGIAN LINEN · 4 x 6 FT
        </p>
      </div>
    </section>
  );
}
