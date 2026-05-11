import Link from "next/link";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Collection", href: "/collection" },
  { label: "Process", href: "/process" },
  { label: "Farm to 54th", href: "/farm" },
];

export default function Footer() {
  return (
    <footer className="px-6 lg:px-12 pt-10 pb-8">
      <div className="w-full h-px bg-text-primary/15 mb-10" />

      {/* Tagline — prominent but not isolated */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
        <p className="text-[clamp(1.4rem,3vw,2.4rem)] italic leading-snug max-w-[28ch]">
          Welcome to the floor.<br className="hidden sm:block" /> The light&apos;s already on.
        </p>

        {/* Nav inline with tagline baseline */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 sm:justify-end">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-base text-text-primary/70 hover:text-text-primary transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom row */}
      <div className="pt-5 border-t border-text-primary/15 flex items-center justify-between">
        <span className="text-xs uppercase tracking-[4px] text-text-primary/40">54TH and THREAD</span>
        <span className="text-xs text-text-primary/40">© 2026 All rights reserved.</span>
      </div>
    </footer>
  );
}
