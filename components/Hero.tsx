export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-20 pt-24">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-white/40">
        Venture Studio
      </p>
      <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
        We build software businesses from zero to launch.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-white/60">
        AutomatedEmpires is an independent studio designing, shipping, and
        operating a portfolio of products — backed by a shared engineering
        platform, AI agents, and a relentless build cadence.
      </p>
      <div className="mt-8 flex gap-4">
        <a href="#ventures" className="rounded-full bg-paper px-5 py-2.5 text-sm font-medium text-ink hover:bg-white">
          See the ventures
        </a>
        <a href="#studio" className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white/80 hover:border-white/40">
          How we work
        </a>
      </div>
    </section>
  );
}
