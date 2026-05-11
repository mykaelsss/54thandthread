import Image from "next/image";
import type { Piece } from "../collection/PieceGrid";

interface PieceProps {
  piece: Piece;
}

export default function Piece({ piece }: PieceProps) {
  return (
    <div key={piece.title}>
      <Image src={piece.img} alt={piece.title} height={300} width={300} />
      <div className="flex flex-col gap-4 pt-10">
        <div className="w-fit">
          <h3 className="font-normal">{piece.title}</h3>
          <span
            className="w-10 h-px bg-text-primary/40 mt-1 block"
            aria-hidden="true"
          />
        </div>
        <p className="max-w-[50ch] text-[clamp(1rem,.9vw,1.1rem)] text-text-primary/70">
          {piece.description}
        </p>
        <span className="text-[clamp(0.8rem,.8vw,1.1rem)] text-text-primary/70">
          {piece.materials}
        </span>
      </div>
    </div>
  );
}
