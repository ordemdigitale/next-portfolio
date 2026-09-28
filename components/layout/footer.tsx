import { nav } from "@/lib/data";

export function Footer() {
  return (
    <footer className="font-poppins mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-stone-200 px-6 py-10 text-xs text-muted-text sm:flex-row lg:px-12">
      <div className="flex items-center gap-3">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-charcoal text-[10px] font-bold text-canvas">
          {nav.brand.initials}
        </span>
        <span>© {new Date().getFullYear()} {nav.brand.name}. Tous droits réservés.</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="font-medium text-charcoal">
          Disponible pour missions freelance
        </span>
      </div>

      <div className="flex items-center gap-5">
        <a href="#accueil" className="transition-colors hover:text-charcoal">
          Haut de page ↑
        </a>
      </div>
    </footer>
  );
}
