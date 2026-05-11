import Collab from "@/components/collection/Collab";
import ColorRush from "@/components/collection/ColorRush";
import Disco from "@/components/collection/Disco";
import Hero from "@/components/collection/Hero";
import PieceGrid from "@/components/collection/PieceGrid";
import Piece from "@/components/ui/Piece";

const pieces1 = [
  {
    title: "The Blueprint",
    description: "Our logo piece, woven on the TC2 Loom to emulate the feeling of dancing under the disco ball.",
    materials: "TC2 LOOM",
    img: "https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/collection/01_the_blueprint.webp",
  },
  {
    title: "Color Riot",
    description: "Woven in Mohair across a spectrum of violet and electric chartreuse, this coverlet is a direct conversation with the energy of New York nights.",
    materials: "MOHAIR",
    img: "https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/collection/02_color_riot.webp",
  },
  {
    title: "The Haystack Check",
    description: "Felted Abaca and Mohair, created to bring the farm to nightlife.",
    materials: "ABACA & MOHAIR",
    img: "https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/collection/04_the_haystack_check.webp",
  },
  {
    title: "Shadow Lattice",
    description: "A freehand woven checkerboard in handspun Jacob's Wool and Abaca.",
    materials: "JACOB'S WOOL & ABACA",
    img: "https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/collection/05_shadow_lattice.webp",
  },
  {
    title: "Downtown",
    description: "Woven on the handloom using a custom Mohair blend, diamond shapes representing the sparkles in nightlife.",
    materials: "MOHAIR",
    img: "https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/collection/06_downtown.webp",
  },
  {
    title: "Before the Lights",
    description: "Freehand woven design using handspun Mohair and Jacob's Wool.",
    materials: "MOHAIR & JACOB'S WOOL",
    img: "https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/collection/07_before_the_lights.webp",
  },
];

const pieces2 = [
  {
    title: "The Pulse",
    description:
      "Using handspun Mohair and Abaca, woven in loose waves, capturing music.",
    materials: "MOHAIR & ABACA",
    img: "https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/collection/08_the_pulse.webp",
  },
  {
    title: "The Groove",
    description:
      "Woven by hand from handspun Mohair, Abaca, and Jacob's Wool. Representing all the different personalities in nightlife.",
    materials: "MOHAIR, ABACA & JACOB'S WOOL",
    img: "https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/collection/09_the_groove.webp",
  },
  {
    title: "Midnight Medallion",
    description:
      "Our crimson Mohair coverlet carries the geometry of old New York architecture. Woven using Mohair and Abaca.",
    materials: "MOHAIR & ABACA",
    img: "https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/collection/10_midnight_medallion.webp",
  },
  {
    title: "Heart of the Floor",
    description:
      "Embroidered by hand using Jacob's Wool, Mohair, and repurposed beads. Incorporating the playfulness and colors of 70s and 80s nightlife.",
    materials: "JACOB'S WOOL, MOHAIR & BEADS",
    img: "https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/collection/11_heart_of_the_floor.webp",
  },
  {
    title: "Indigo Hour",
    description:
      "Freehand woven design on the handloom using Mohair and Abaca.",
    materials: "MOHAIR & ABACA",
    img: "https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/collection/12_indigo_hour.webp",
  },
  {
    title: "Frequency",
    description: "Freehand woven design on the handloom using Mohair.",
    materials: "MOHAIR",
    img: "https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/collection/13_frequency.webp",
  },
];

const pieces3 = [
    {
    title: "Acid and Wine",
    description:
      "Freehand woven design on the handloom using Jacob's Wool and Abaca.",
    materials: "JACOB'S WOOL & ABACA",
    img: "https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/collection/14_acid_and_wine.webp",
  },
  {
    title: "Diamond Floor",
    description: "Neon green Jacob's Wool coverlet mirroring a sequence of a disco ball.",
    materials: "JACOB'S WOOL",
    img: "https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/collection/17_diamond_floor.webp",
  },
]

const pieces4 = [
    {
    title: "Disco Maroon",
    description:
      "A violet Mohair blend coverlet capturing the disco ball.",
    materials: "MOHAIR BLEND",
    img: "https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/collection/18_disco_maroon.webp",
  },
  {
    title: "Between the Lines",
    description: "Deep violet Jacob's Wool weave capturing the rhythm of a New York night with soft waves.",
    materials: "JACOB'S WOOL",
    img: "https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/collection/19_read_between_the_lines.webp",
  },
]

export default function CollectionPage() {
    
    return (
        <main id="main-content">
            <Hero />
            <ColorRush />
            <PieceGrid pieces={pieces1}/>
            <section className="bg-accent-red-dark py-15 px-6 w-full flex items-center justify-center text-center">
                <p className="italic text-[clamp(1.5rem,1.8vw,1.8rem)]">&quot;Each piece is a collaboration between the land, the maker, and the loom.&quot;</p>
            </section>
            <PieceGrid pieces={pieces2}/>
            <Collab />
            <section className="py-15 px-6 w-full flex flex-col sm:flex-row justify-center gap-30">
                {pieces3.map(p => (
                    <Piece key={p.title} piece={p} />
                ))}
            </section>
            <Disco />
            <section className="py-15 px-6 w-full flex flex-col sm:flex-row justify-center gap-30">
                {pieces4.map(p => (
                    <Piece key={p.title} piece={p} />
                ))}
            </section>
            <h2 className="italic text-[clamp(2rem,2.4vw,2.8rem)] mx-auto w-fit px-6 text-center">Each piece is one of a kind. Just like the floor it was made for.</h2>
        </main>
    )
}