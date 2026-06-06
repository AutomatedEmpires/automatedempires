import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { VentureCard } from "@/components/VentureCard";
import { ventures } from "@/lib/ventures";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />

      <section id="ventures" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl font-semibold tracking-tight">Ventures</h2>
          <p className="text-sm text-white/50">{ventures.length} products in the portfolio</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {ventures.map((v) => (
            <VentureCard key={v.slug} venture={v} />
          ))}
        </div>
      </section>

      <section id="studio" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold tracking-tight">The Studio</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="font-medium">One platform</h3>
            <p className="mt-2 text-sm text-white/60">
              Every venture shares the same engineering backbone — TypeScript,
              Next.js, a typed data layer, and a unified component system — so we
              move fast without rebuilding the basics.
            </p>
          </div>
          <div>
            <h3 className="font-medium">Agents in the loop</h3>
            <p className="mt-2 text-sm text-white/60">
              AI agents handle research, scaffolding, reviews, and release
              plumbing, turning a small team into a high-output studio.
            </p>
          </div>
          <div>
            <h3 className="font-medium">Ship continuously</h3>
            <p className="mt-2 text-sm text-white/60">
              Closed-loop integrations across analytics, payments, and
              observability keep every product measured, monetized, and monitored
              from day one.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
