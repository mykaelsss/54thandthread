import Link from "next/link";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Collections", href: "/collections" },
  { label: "Process", href: "/process" },
  { label: "Farm to 54th", href: "/farm" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
    return (
        <footer className="py-20 flex flex-col items-center px-4">
            <div></div>
            <div className="flex flex-col items-center gap-3.5">
                <span className="text-[clamp(1.5rem,3vw,3rem)] text-center">Welcome to the floor. The light&apos;s already on.</span>
                <div className="w-30 h-px bg-text-primary/40"></div>
            </div>
            <div className="pt-8.5 flex w-full flex-col md:flex-row md:px-20 gap-15">
                <div className="flex flex-col gap-4.5 flex-1 items-center md:items-start">
                    <span className="tracking-[5px]">54TH and THREAD</span>
                    <span>Sustainable craft and effervescence, never stop dancing.</span>
                </div>
                <nav aria-label="Footer navigation" className="flex-2 flex justify-between md:pr-12">
                    <div className="flex flex-col gap-2">
                        <h3 className="uppercase text-xs text-text-primary/80 tracking-[3px]">navigate</h3>
                        {navLinks.map(({label, href}) => (
                            <Link key={label} href={href}>{label}</Link>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="uppercase text-xs text-text-primary/80 tracking-[3px]">navigate</h3>
                        {navLinks.map(({label, href}) => (
                            <Link key={label} href={href}>{label}</Link>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="uppercase text-xs text-text-primary/80 tracking-[3px]">navigate</h3>
                        {navLinks.map(({label, href}) => (
                            <Link key={label} href={href}>{label}</Link>
                        ))}
                    </div>
                </nav>
            </div>
            <div className="flex flex-col pt-28 gap-7 w-7/8">
                <div className="w-full h-px bg-text-primary/20"></div>
                <span className="text-xs">© 2026 54th and Thread. All rights reserved.</span>
            </div>
        </footer>
    )
}