import fs from 'fs'
import path from 'path'
import Image from "next/image";

const sustainableGoals = fs.readdirSync(path.join(process.cwd(), 'public/sustainable_goals'))

export default function ValuesSection() {
    return (
        <section className="flex flex-col bg-accent-red-dark py-25 items-center gap-10">
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