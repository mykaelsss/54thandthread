
const techniques = [
    {
        number: '01',
        title: 'Floor Looms',
        description: 'Large floor looms allowed us to weave wide, structured textiles with precision — the backbone of the tapestry rug.'
    },
    {
        number: '02',
        title: 'Handlooms',
        description: 'Portable handlooms gave us intimacy and control for smaller, detail-rich pieces that needed a personal touch.'
    },
    {
        number: '03',
        title: 'Felting',
        description: 'Wet and needle felting transformed raw wool fibers into dense, sculptural surfaces — bold and tactile.'
    },
    {
        number: '04',
        title: 'Braiding',
        description: 'Braiding and knotting natural fibers created structural depth and incorporated recycled beads as embellishment.'
    },
    {
        number: '05',
        title: 'Weaving Samples',
        description: 'Extensive material sampling — testing warp, weft, EPI counts, and fiber blends — before the final weave.'
    },
    {
        number: '06',
        title: 'Old Craft Techniques',
        description: 'Embroidery and archival craft methods from the 70s & 80s brought character and cultural heritage into each piece.'
    },
]

export default function Techniques() {
    return (
        <section
        aria-label="Techniques"
        className="px-6 lg:px-12 py-12 flex flex-col gap-14 lg:gap-20 bg-accent-red-dark items-center"
        >
            <h1 className="text-[clamp(2.4rem,2.8vw,5rem)] italic text-center">Every Piece Tells a Story.</h1>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-20">
                {techniques.map((t) => (
                    <div 
                    key={t.number}
                    className="flex flex-col gap-2"
                    >
                        <span className="bg-text-primary/20 mb-3 w-full h-px"></span>
                        <span className="text-text-primary/60">{t.number}</span>
                        <span className="text-[clamp(1.8rem,2.2vw,2.4rem)]">{t.title}</span>
                        <p className="max-w-[55ch] text-[clamp(1rem,1vw,1.4rem)]">{t.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}