import Piece from "../ui/Piece";

export type Piece = {
    title: string;
    description: string;
    materials: string;
    img: string;
}

interface PieceGridProps {
    pieces: Piece[]
}

export default function PieceGrid({ pieces }: PieceGridProps) {
  return (
    <section aria-label="Collection pieces" className="px-6 lg:px-12 py-14">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 items-end justify-items-center w-fit mx-auto gap-30">
        {pieces.map((p) => (
          <Piece key={p.title} piece={p} />
        ))}
      </div>
    </section>
  );
}
