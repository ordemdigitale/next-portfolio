"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/sections/project-card";
import { cn } from "@/lib/utils";
import { projectFilters, projects, type Project } from "@/lib/data";

export function ProjectsShowcase() {
  const [active, setActive] = useState<Project["category"] | "all">("all");

  const visible =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projets" className="mx-auto max-w-7xl px-6 py-24 lg:px-12 font-poppins">
      <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-peach-100/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-peach-600">
            Portfolio
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Projets &amp; Réalisations
          </h2>
          <p className="mt-2 max-w-lg text-sm text-muted-text sm:text-base">
            Découvrez mes projets récents combinant rigueur
            d&apos;ingénierie logicielle et conception d&apos;interfaces
            raffinées.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 text-xs font-medium">
          {projectFilters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActive(filter.value)}
              className={cn(
                "rounded-full px-4 py-2 transition-colors cursor-pointer",
                active === filter.value
                  ? "bg-charcoal text-canvas shadow-sm"
                  : "bg-stone-100 text-charcoal hover:bg-stone-200"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {visible.length === 0 && (
        <div className="rounded-3xl border border-dashed border-stone-300 py-16 text-center text-sm text-muted-text">
          Aucun projet dans cette catégorie pour le moment.
          <div className="mt-4">
            <Button variant="outline" size="sm" onClick={() => setActive("all")}>
              Voir tous les projets
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
