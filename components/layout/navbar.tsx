"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { nav } from "@/lib/data";

export function Navbar() {
    const pathname = usePathname();
    const [activeHash, setActiveHash] = useState<string>("accueil");

    // Scroll-spy: watch every section referenced by a nav hash link and
    // highlight whichever one currently owns the most central viewport space.
    useEffect(() => {
        if (pathname !== "/") return;

        const hashLinks = nav.links.filter((link) => link.href.startsWith("#"));
        const sections = hashLinks
            .map((link) => document.querySelector<HTMLElement>(link.href))
            .filter((el): el is HTMLElement => el !== null);

        if (sections.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                // Among sections currently intersecting the "active band", pick the
                // one closest to it (largest intersectionRation wins ties).
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visible[0]) {
                    setActiveHash(`#${visible[0].target.id}`);
                }
            },
            {
                // Treat a horizontal band around the vertical middle of the
                // viewport as "active" — accounts for the fixed navbar height
                // and avoids flicker between adjacent sections.
                rootMargin: "-40% 0px -55% 0px",
                threshold: [0, 0.25, 0.5, 0.75, 1],
            }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, [pathname]);

    function isActive(href: string) {
        if (href.startsWith("#")) {
            return pathname === "/" && activeHash === href;
        }
        return pathname === href;
    }

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="glass-nav flex w-full max-w-3xl items-center justify-between gap-1 rounded-full px-4 py-2 shadow-pill-soft transition-all duration-300 sm:gap-2 font-poppins">
        <a
          href="#accueil"
          aria-label={`Accueil ${nav.brand.name}`}
          className="font-unbounded group flex items-center gap-2 pr-2"
        >
          {/* <div className="flex h-8 w-8 items-center justify-center rounded-full bg-charcoal text-xs font-bold tracking-wider text-canvas transition-transform duration-300 group-hover:scale-105">
            {nav.brand.initials}
          </div> */}
          <span className="hidden text-lg tracking-tight text-charcoal sm:inline-block">
            {nav.brand.name}
          </span>
        </a>

        <div className="flex items-center text-xs font-medium text-muted-text sm:text-sm">
            {nav.links.map((link) => {
                const active = isActive(link.href);
                return (
                    <a
                        key={link.href}
                        href={link.href}
                        onClick={() => {
                            // Instant feedback on click; the observer will confirm
                            // (or correct) this once the scroll settles.
                            if (link.href.startsWith("#")) setActiveHash(link.href);
                        }}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                            "relative rounded-full px-3 py-1.5 transition-colors duration-300",
                            active ? "bg-black/5 text-charcoal" : "hover:bg-black/5 hover:text-charcoal",
                            link.hideOnMobile && "hidden md:inline-block"
                        )}
                    >
                        {active && (
                            <motion.span
                                layoutId="nav-active-pill"
                                className="absolute inset-0 -z-10 rounded-full bg-black/5"
                                transition={{ type: "spring", stiffness: 300, damping: 32 }}
                            />
                        )}
                        {!active && (
                            <span className="absolute inset-0 -z-10 rounded-full transition-colors hover:bg-black/5" />
                        )}
                        {link.label}
                    </a>
                );
            })}
        </div>

        <Button asChild size="sm" className="text-xs sm:text-sm xs:hidden">
          <a href={nav.cta.href}>
            <span>{nav.cta.label}</span>
            <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.2]" />
          </a>
        </Button>
      </nav>
    </header>
  );
}
