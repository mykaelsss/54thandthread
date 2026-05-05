import Marquee from "react-fast-marquee";
import Image from "next/image";
import { list } from '@vercel/blob';

export default async function ColorStorySection() {
    const { blobs } = await list({ prefix: 'color_story_disco_balls/' });

    return (
        <section className="flex flex-col py-17.5 items-center gap-7.5 overflow-hidden">
            <div className="flex flex-col gap-4 text-center">
                <h2 className="tracking-[5px] text-xs text-text-primary/80 uppercase">the color story</h2>
                <p className="text-xl md:text-[26px]">Every shade tells a story from the floor.</p>
            </div>
            <div className="px-2 lg:w-3/4 overflow-clip">
                <Marquee pauseOnHover>
                    {blobs.map((blob) => (
                        <Image
                            key={blob.pathname}
                            alt={`${blob.pathname.replace(/^.*\//, '').replace(/\.[^.]+$/, '').replace(/_/g, ' ')} discoball`}
                            src={blob.url}
                            width={150}
                            height={150}
                            className="mx-4 h-auto"
                        />
                    ))}
                </Marquee>
            </div>
        </section>
    )
}