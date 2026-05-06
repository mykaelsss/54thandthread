import Image from "next/image";
import { list } from '@vercel/blob';

export default async function ValuesSection() {
    const { blobs } = await list({ prefix: 'sustainable_goals/' });

    return (
        <section className="flex flex-col bg-accent-red-dark py-25 items-center gap-10">
            <p className="text-[clamp(1.5rem,3vw,3rem)] text-center">United Nations Sustainable Development Goals</p>
            <div className='flex flex-wrap justify-center w-6/8 gap-8'>
                {blobs.map((blob) => (
                    <Image
                    key={blob.pathname}
                    alt={`UN Sustainable Development Goal ${blob.pathname.replace(/^.*\//, '').replace(/\.[^.]+$/, '').replace(/_/g, ' ')}`}
                    src={blob.url}
                    width={250}
                    height={250}
                    loading="lazy"
                    className="h-auto"
                    />
                ))}
            </div>
        </section>
    )
}