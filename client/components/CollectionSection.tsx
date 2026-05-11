import Link from "next/link"
import CollectionCard from "./CollectionCard"

const collection = [
    {
        number: "01",
        collectionTitle: 'Storms & Thread',
        img: 'https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/collection/william_storms_rug.webp',
        title: 'Woven Tapestry Rug',
        description: 'Alpaca, Recycled Cotton, Linen, Mohair'
    },
    {
        number: "02",
        collectionTitle: 'Color Rush',
        img: 'https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/collection/abaca_curtain_mockup.webp',
        title: 'Abaca Curtain',
        description: 'Braided Abaca and Mohair · Recycled Beads'
    },
    {
        number: "03",
        collectionTitle: 'Color Riot',
        img: 'https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/coverlet/coverlet-02.webp',
        title: 'Mohair Coverlet',
        description: 'Violet and Electric Chartreuse · Woven Mohair'
    },
    {
        number: "04",
        collectionTitle: 'The Harvest Ball',
        img: 'https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/collection/disco_balls.webp',
        title: 'Disco Ball Display',
        description: 'Sustainable Abaca and Jute · Three Sizes · Internal Lights'
    },
]

export default function CollectionSection() {
    return (
        <section id="collection" className="flex flex-col items-center pt-25 pb-8">
            <div className="flex flex-col items-center gap-2.5">
                <h2 className="uppercase tracking-[5px] text-sm opacity-80">the collection</h2>
                <div className="w-20 h-px bg-text-primary opacity-40"></div>
            </div>
            <span className="text-[clamp(1.5rem,7vw,5rem)]">Handmade for your home stage.</span>
            <div className="grid md:grid-cols-2 gap-5 pt-15 px-2 w-full max-w-340">
                {collection.map(c => (
                    <CollectionCard 
                    key={c.number}
                    number={c.number}
                    collectionTitle={c.collectionTitle}
                    img={c.img}
                    title={c.title}
                    description={c.description}
                    />
                ))}
            </div>
            <Link href={'/collection'} className="pt-3">View the full collection <span aria-hidden="true">→</span></Link>
        </section>
    )
}