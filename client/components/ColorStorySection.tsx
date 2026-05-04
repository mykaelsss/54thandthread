import Marquee from "react-fast-marquee";
import fs from 'fs'
import path from 'path'
import Image from "next/image";

const coloredDiscoBalls = fs.readdirSync(path.join(process.cwd(), 'public/color_story_disco_balls'))

export default function ColorStorySection() {
    return (
        <section className="flex flex-col py-17.5 items-center gap-7.5 overflow-hidden">
            <div className="flex flex-col gap-4 text-center">
                <h2 className="tracking-[5px] text-xs text-text-primary/80 uppercase">the color story</h2>
                <p className="text-xl md:text-[26px]">Every shade tells a story from the floor.</p>
            </div>
            <div className="px-2 lg:w-3/4 overflow-clip">
                <Marquee pauseOnHover>
                    {coloredDiscoBalls.map((d, idx) => (
                        <Image
                        key={d}
                        alt={`${d.replace(/\.[^.]+$/, '').replace(/_/g, ' ')} disco ball`}
                        src={`/color_story_disco_balls/${d}`}
                        width={150}
                        height={150}
                        className="mx-4"
                        />
                    ))}
                </Marquee>
            </div>
        </section>
    )
}