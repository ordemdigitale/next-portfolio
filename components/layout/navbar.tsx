"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { nav } from "@/lib/data";

export function Navbar() {
    const pathname = usePathname();
    const [activeHash, setActiveHash] = useState<string>("accueil");

    // Keep active state in synch if the user navigates via back/forward
    // or lands directly on a hash URL.
    useEffect(() => {
        const syncHash = () => setActiveHash(window.location.hash || "#accueil");
        syncHash();
        window.addEventListener("hashchange", syncHash);
        return () => window.removeEventListener("hashchange", syncHash);
    }, []);

    function isActive(href: string) {
        if (href.startsWith("#")) {
            return pathname === "/" && activeHash === href;
        }
        return pathname === href;
    }

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="font-poppins glass-nav flex w-full max-w-3xl items-center justify-between gap-1 rounded-full px-4 py-2 shadow-pill-soft transition-all duration-300 sm:gap-2">
        <a
          href="#accueil"
          aria-label={`Accueil ${nav.brand.name}`}
          className="font-unbounded group flex items-center gap-2 pr-2"
        >
{/*           <div className="flex h-8 w-8 items-center justify-center rounded-full bg-charcoal text-xs font-bold tracking-wider text-canvas transition-transform duration-300 group-hover:scale-105">
            {nav.brand.initials}
          </div> */}
          <span className="hidden text-lg font-bold tracking-tight text-charcoal sm:inline">
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
                            if (link.href.startsWith("#")) setActiveHash(link.href);
                        }}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                            "rounded-full px-3 py-1.5 transition-all",
                            active
                                ? "bg-black/5 text-charcoal"
                                : "hover:bg-black/5 hover:text-charcoal",
                            link.hideOnMobile && "hidden md:inline-block"
                        )}
                    >
                        {link.label}
                    </a>
                );
            })}
        </div>

        <Button asChild size="sm" className="text-xs sm:text-sm">
          <a href={nav.cta.href}>
            <span>{nav.cta.label}</span>
            <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.2]" />
          </a>
        </Button>
      </nav>
    </header>
  );
}
