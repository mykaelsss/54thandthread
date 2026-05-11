import Image from "next/image"
import { cn } from "@/lib/utils"

interface GlassImageProps {
  src: string
  alt: string
  sizes?: string
  className?: string
}

export default function GlassImage({ src, alt, sizes, className }: GlassImageProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-md ring-1 ring-white/20 shadow-[0_16px_48px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.18)]", className)}>
      <Image src={src} alt={alt} fill className="object-cover brightness-90" sizes={sizes} />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/3 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.08) 0%, transparent 100%)" }} />
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.04) 30%, transparent 55%)" }} />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/4 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 100%)" }} />
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-md" style={{ boxShadow: "inset 0 1.5px 0 rgba(255,255,255,0.22), inset 1.5px 0 0 rgba(255,255,255,0.1), inset -1px 0 0 rgba(255,255,255,0.04), inset 0 -1px 0 rgba(255,255,255,0.04)" }} />
    </div>
  )
}
