"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { label: "About", href: "/about" },
  { label: "Collections", href: "/collections" },
  { label: "Process", href: "/process" },
  { label: "Farm to 54th", href: "/farm" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header role="banner" className="sticky top-0 z-50 bg-background-primary">
      <nav
        aria-label="Main navigation"
        className="flex items-start w-full px-6 md:px-12 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.2)] gap-8"
      >
        {/* Logo — hangs from top */}
        <div className="xl:flex-1 -translate-y-3">
          <Link href="/" aria-label="54th and Thread — home">
            <Image
              src="https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/logo/disco_ball_still.webp"
              alt="54th and Thread logo"
              width={40}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Brand name — centered */}
        <div className="flex items-center gap-1.5 self-center">
          <span
            className="tracking-[0.2em] text-text-primary uppercase"
            aria-label="54th and Thread"
          >
            54TH
          </span>
          <span className="tracking-[0.2em] text-text-primary italic">
            and
          </span>
          <span className="tracking-[0.2em] text-text-primary uppercase">
            THREAD
          </span>
        </div>

        {/* Desktop links */}
        <div className="flex-1 hidden md:flex items-center justify-end gap-8 self-center">
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={cn(`
              relative font-eb-garamond text-sm text-text-primary/70
              cursor-pointer transition-colors duration-200
              hover:text-text-primary
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:rounded-sm
              after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-text-primary
              after:transition-[width] after:duration-300
              hover:after:w-full
              `, {
                "[text-shadow:0_0_7px_currentColor,0_0_30px_currentColor]": pathname === href
              })}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <div className="flex-1 flex md:hidden items-center justify-end self-center">
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="
              flex flex-col justify-center items-center gap-1.5
              min-w-11 min-h-11 cursor-pointer
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:rounded-sm
              touch-manipulation
            "
          >
            <span className={`block h-px w-6 bg-text-primary transition-[transform] duration-300 ${open ? "rotate-45 translate-y-1.75" : ""}`} />
            <span className={`block h-px w-6 bg-text-primary transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-text-primary transition-[transform] duration-300 ${open ? "-rotate-45 -translate-y-1.75" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      <div
        id="mobile-menu"
        role="region"
        aria-label="Mobile navigation"
        className={`
          md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out
          backdrop-blur-md border-t border-white/5
          ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="flex flex-col px-6 py-2">
          {links.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className="
                  flex items-center min-h-11 py-3
                  font-eb-garamond text-base text-text-primary/70
                  border-b border-white/5 last:border-0
                  cursor-pointer transition-colors duration-200
                  hover:text-text-primary
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40
                  touch-manipulation
                "
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
