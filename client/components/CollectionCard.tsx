import Image from "next/image";

interface CollectionCardProps {
    number: string;
    collectionTitle: string;
    img: string;
    title: string;
    description: string
}

export default function CollectionCard({
    number,
    img,
    collectionTitle,
    title,
    description
}: CollectionCardProps) {
    return (
        <article className="bg-accent-red-dark p-8 flex flex-col gap-5 w-full">
            <div className="flex flex-col gap-2.5">
                <span>{number}</span>
                <span className="uppercase tracking-[3px] text-[10px] text-text-primary/60">{collectionTitle}</span>
            </div>
            <div className="relative w-full aspect-4/2 border border-text-primary/15">
                <Image
                src={img}
                alt={title}
                fill
                loading="lazy"
                className="object-cover"
                />
            </div>
            <div>
                <h3 className="font-eb-garamond">{title}</h3>
                <p>{description}</p>
            </div>
        </article>
    )
}