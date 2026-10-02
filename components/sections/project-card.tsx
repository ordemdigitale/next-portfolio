import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/lib/data";
import { ProjectPreview } from "@/components/sections/project-preview";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col justify-between rounded-3xl border border-stone-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-card-lift">
      <div>
        {/* <ProjectPreview type={project.preview} /> */}
        <div className="relative mb-5 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-stone-100 bg-canvas-subtle">
          <Image
            src={project.image}
            alt={`Capture d'écran — ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            loading="eager"
          />
        </div>

        <div className="mb-3 flex flex-wrap gap-1.5">
          {project.tags.map((tag, i) => (
            <span
              key={tag}
              className={"rounded-md bg-stone-100 px-2.5 py-1 text-[13px] text-charcoal"}
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="mb-2 text-xl font-bold text-charcoal transition-colors group-hover:text-peach-600">
          {project.title}
        </h3>
        <p className="mb-6 text-sm leading-relaxed text-muted-text">
          {project.description}
        </p>
      </div>

      <a
        href={project.link || "#contact"}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-charcoal transition-colors group-hover:text-peach-600"
      >
        <span>{project.cta}</span>
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
      </a>
    </article>
  );
}
