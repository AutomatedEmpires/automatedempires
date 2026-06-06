export function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} AutomatedEmpires. All rights reserved.</p>
        <a href="mailto:jackson@automatedempires.com" className="hover:text-white">
          jackson@automatedempires.com
        </a>
      </div>
    </footer>
  );
}
