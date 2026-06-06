import type { Venture } from "@/lib/ventures";

export function VentureCard({ venture }: { venture: Venture }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/25 hover:bg-white/[0.04]">
      <span
        className="absolute inset-x-0 top-0 h-0.5"
        style= backgroundColor: venture.accent 
      />
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold tracking-tight">{venture.name}</h3>
        <span className="rounded-full border border-white/15 px-2.5 py-0.5 text-xs text-white/60">
          {venture.status}
        </span>
      </div>
      <p className="mt-1 text-sm font-medium" style= color: venture.accent >
        {venture.tagline}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-white/60">
        {venture.description}
      </p>
    </article>
  );
}
