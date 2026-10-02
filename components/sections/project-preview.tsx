import type { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProjectPreview({ type }: { type: Project["preview"] }) {
  return (
    <div className="relative mb-5 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-stone-100 bg-canvas-subtle">
      {type === "code" && <CodePreview />}
      {type === "tokens" && <TokensPreview />}
      {type === "dashboard" && <DashboardPreview />}
    </div>
  );
}

function CodePreview() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-tr from-peach-100/50 to-transparent opacity-80 transition-opacity group-hover:opacity-40" />
      <div className="flex h-full flex-col justify-between p-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-1.5">
            {[0, 1, 2].map((dot) => (
              <span key={dot} className="h-2.5 w-2.5 rounded-full bg-stone-300" />
            ))}
          </div>
          <span className="rounded border border-stone-200 bg-white/80 px-2 py-0.5 font-mono text-[10px] uppercase text-stone-500">
            Production
          </span>
        </div>
        <div className="space-y-2 rounded-xl border border-stone-100/80 bg-white/90 p-4 shadow-sm transition-transform group-hover:scale-[1.02]">
          <div className="h-3 w-1/3 rounded bg-stone-800" />
          <div className="h-2 w-3/4 rounded bg-stone-200" />
          <div className="flex h-14 w-full items-center justify-center rounded-lg bg-stone-100 font-mono text-xs text-stone-400">
            Next.js App Router + SEO Engine
          </div>
        </div>
      </div>
    </>
  );
}

function TokensPreview() {
  return (
    <div className="flex h-full flex-col justify-between p-4">
      <div className="flex items-center justify-between">
        <span className="rounded bg-peach-50 px-2 py-0.5 font-mono text-[10px] font-medium text-peach-600">
          Figma Tokens
        </span>
        <span className="text-xs">📐</span>
      </div>
      <div className="grid grid-cols-2 gap-2 rounded-xl border border-stone-200/60 bg-white/90 p-3 transition-transform group-hover:scale-[1.02]">
        <div className="flex items-center justify-center rounded-lg bg-peach-50 p-2">
          <span className="block h-4 w-full rounded-full bg-peach-400" />
        </div>
        <div className="flex items-center justify-center rounded-lg bg-charcoal p-2">
          <span className="block h-4 w-full rounded-full bg-white/20" />
        </div>
        <div className="col-span-2 flex items-center justify-around rounded border border-dashed border-stone-300 p-2">
          {[0, 1, 2].map((bar) => (
            <span key={bar} className="h-2 w-10 rounded bg-stone-300" />
          ))}
        </div>
      </div>
    </div>
  );
}

function DashboardPreview() {
  return (
    <div className="flex h-full flex-col justify-between p-4">
      <div className="flex items-center justify-between">
        <span className="rounded bg-stone-200/70 px-2 py-0.5 font-mono text-[10px] text-stone-500">
          Dashboard LMS
        </span>
        <div className="h-2 w-2 rounded-full bg-emerald-500" />
      </div>
      <div className="space-y-2 rounded-xl border border-stone-200/70 bg-white/95 p-3 transition-transform group-hover:scale-[1.02]">
        <div className="flex items-center justify-between text-[10px] font-medium text-stone-500">
          <span>Progression du module</span>
          <span className="font-bold text-charcoal">84%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-stone-100">
          <div className={cn("h-full bg-peach-500")} style={{ width: "84%" }} />
        </div>
        <div className="flex gap-1.5 pt-1">
          {[0, 1, 2].map((sq) => (
            <span key={sq} className="h-4 w-4 rounded bg-stone-200" />
          ))}
        </div>
      </div>
    </div>
  );
}
