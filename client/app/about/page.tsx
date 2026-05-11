import GlassImage from "@/components/ui/GlassImage";
import Section from "@/components/Section";

const BASE = "https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/about";

export default function AboutPage() {
  return (
    <main id="main-content">
      <Section aria-label="about hero" className="w-full flex-1">
        <div className="relative z-10 w-full px-6 lg:px-12 pt-12 pb-10">
          <h1 className="font-limelight text-[clamp(3rem,8vw,8rem)] leading-[0.85] [text-shadow:0_0_4px_currentColor,0_0_12px_currentColor] pb-10">Our Story</h1>
          <div className="flex flex-col gap-10">
            <p className="text-[clamp(1rem,1.2vw,2rem)] max-w-[82ch]">
              We didn&apos;t set out to start a brand. We set out to fix
              something that was bothering us. Five students. Five different
              minds. One shared discomfort that we couldn&apos;t shake. The kind
              that sits in your chest when you love something and know it&apos;s
              hurting the world. We love textiles. We love color and craft and
              the way a beautiful material feels in your hands. And we also know
              what the fashion industry does to this planet.
            </p>
            <p className="text-[clamp(1rem,1.2vw,2rem)] self-end max-w-[82ch] text-right">
              So we decided to do something about it. We are Seki, Mj, Heewon,
              Arda, and Olivia, five students with degrees in textile
              development and a shared dream that kept getting bigger every time
              we talked about it. We wanted to build something that didn&apos;t
              ask people to choose between beauty and conscience. Something that
              proved sustainable materials could carry real color, real
              boldness, real joy. Something that felt less like a sacrifice and
              more like a celebration.
            </p>
            <p className="text-[clamp(1rem,1.2vw,2rem)] max-w-[82ch]">
              We were inspired by a world we never got to live in. The dance
              floors of 70s and 80s New York. We weren&apos;t there. We
              weren&apos;t even close to being born yet. But something about
              those rooms reached across time and grabbed us anyway. That energy
              felt like the truest expression of what we wanted our work to feel
              like. We couldn&apos;t go back to that floor. So we decided to
              bring it forward, into the materials, the patterns, the pieces
              that now live in this collection. Bold enough to stop you. Honest
              enough to last. So we went back to the earth. Jacob&apos;s Wool.
              Mohair. Abaca. Fibers with real origins, real stories, real
              integrity. And we brought them somewhere they had never been, to
              the mirror ball, to the checkered floor, to spaces that feel like
              the best version of home.
            </p>
            <p className="text-[clamp(1rem,1.2vw,2rem)] self-end max-w-[82ch] text-right">
              We built 54th and Thread because we felt the guilt of loving
              fashion in a world that fashion is damaging, and we refused to
              just sit with it. We have our degrees, our hands, and the deep
              belief that the farm and the dance floor belong together. That the
              colors of life and the health of this earth were never meant to be
              opposites.
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
