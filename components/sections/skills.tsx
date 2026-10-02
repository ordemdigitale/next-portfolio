import { cn } from "@/lib/utils";
import { skillCards } from "@/lib/data";

import { Reveal } from "@/components/motion/reveal";

export function Skills() {
  return (
    <section
      id="competences"
      className="border-y border-stone-200/60 bg-canvas-subtle py-20 font-poppins"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="rounded-full bg-peach-100/70 px-3 py-1 text-xs font-bold uppercase tracking-widest text-peach-600">
            Boîte à Outils
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Compétences &amp; Expertise Technique
          </h2>
          <p className="mt-2 text-sm text-muted-text sm:text-base">
            La synergie entre l&apos;exigence d&apos;un code robuste et la
            sensibilité d&apos;un design centré sur l&apos;utilisateur.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {skillCards.map((card, i) => (
            <Reveal
                key={card.id}
                delay={i * 0.08}
                className={card.span === "wide" ? "md:col-span-7" : "md:col-span-5"}
            >
                <div
                    className={cn(
                        "flex h-full flex-col justify-between rounded-3xl border-stone-200 bg-white p-8 shadow-sm"
                    )}
                >
                    <div>
                        <div
                            className={cn(
                                "mb-6 flex h-12 w-12 items-center justify-center rounded-2xl text-xl",
                                card.accent
                                    ? "border border-peach-200 bg-peach-50 text-peach-600"
                                    : "bg-stone-100 text-charcoal"
                            )}
                        >
                            {card.icon}
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-charcoal">
                            {card.title}
                        </h3>
                        <p className="mb-6 text-sm leading-relaxed text-muted-text">
                            {card.description}
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {card.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-xl border border-stone-200 bg-canvas px-3 py-1.5 text-xs font-bold text-charcoal transition-colors hover:bg-peach-50 hover:text-peach-600"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
