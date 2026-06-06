export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-lg font-semibold tracking-tight">
          Automated<span className="text-white/50">Empires</span>
        </a>
        <div className="flex items-center gap-6 text-sm text-white/70">
          <a href="#ventures" className="hover:text-white">Ventures</a>
          <a href="#studio" className="hover:text-white">Studio</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </nav>
    </header>
  );
}
