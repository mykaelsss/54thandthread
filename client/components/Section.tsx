import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

export default function Section({
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("relative isolate overflow-hidden", className)}
      {...props}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 [background:radial-gradient(ellipse_at_center,#3C060E_0%,#0F0305_50%,var(--background-primary)_75%)] z-0"
      />
      {children}
    </section>
  );
}
