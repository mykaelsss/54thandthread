import fs from 'fs'
import path from 'path'
import Image from "next/image";

const sustainableGoals = fs.readdirSync(path.join(process.cwd(), 'public/sustainable_goals'))

export default function ValuesSection() {
    return (
        <section className="flex flex-col bg-accent-red-dark py-25 items-center gap-10">
            <div className="flex flex-col items-center gap-2.5">
                <h2 className="tracking-[5px] text-text-primary/80 text-xs">TRANSPARENCY and TRACEABILITY</h2>
                <div className="w-20 h-px bg-text-primary/40"></div>
            </div>
            <p className="text-[clamp(1.5rem,3vw,3rem)]">United Nations Sustainable Development Goals</p>
            <div className='flex flex-wrap justify-center w-6/8'>
                {sustainableGoals.map((sg, idx) => (
                    <Image
                    key={sg}
                    alt={`UN Sustainable Development Goal ${sg.replace(/\.[^.]+$/, '').replace(/[^0-9]/g, '')}`}
                    src={`/sustainable_goals/${sg}`}
                    width={250}
                    height={250}
                    loading="lazy"
                    />
                ))}
            </div>
        </section>
    )
}