import Section from "../Section";

export default function Hero() {
  return (
    <Section aria-label="Collection hero" className="w-full flex-1">
      <div className="relative z-10 w-full px-6 lg:px-12 pt-12 pb-10">

        {/* Eyebrow */}
        <p className="uppercase text-xs tracking-[0.4em] text-text-primary/40 mb-8">
          2026 Collection
        </p>

        {/* Title + meta row */}
        <div className="flex flex-col xs:flex-row xs:items-end xs:justify-between gap-8">

          {/* Title */}
          <h1 className="font-limelight text-[clamp(3rem,8vw,8rem)] leading-[0.85] [text-shadow:0_0_4px_currentColor,0_0_12px_currentColor]">
            Our<br />Collection
          </h1>

          {/* Stat block */}
          <div className="flex flex-col gap-2 xs:items-end xs:text-right pb-1">
            <span className="uppercase text-[10px] tracking-[0.35em] text-text-primary/40">
              Pieces in this collection
            </span>
            <span className="font-limelight text-[clamp(3rem,6vw,6rem)] leading-none text-text-primary/80">
              19
            </span>
            <span className="w-8 h-px bg-text-primary/30 xs:ml-auto block" />
            <span className="text-sm text-text-primary/50 italic leading-relaxed">
              Handcrafted, one at a time.<br />
              Every piece tells the story of its making.
            </span>
          </div>

        </div>

      </div>
    </Section>
  );
}
