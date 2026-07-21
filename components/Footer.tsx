import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-inner footer-lead">
        <p className="eyebrow">AutomatedEmpires</p>
        <h2>Companies for the real world.</h2>
        <a href={`mailto:${site.email}`}>{site.email}<span aria-hidden="true"> ↗</span></a>
      </div>
      <div className="section-inner footer-base">
        <p>© {new Date().getFullYear()} AutomatedEmpires</p>
        <nav aria-label="Footer navigation">
          <Link href="/ventures">Portfolio</Link>
          <Link href="/company">Studio</Link>
          <Link href="/build">Updates</Link>
          <Link href="/founder">Founder</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <a href="https://github.com/AutomatedEmpires" rel="noreferrer" target="_blank">GitHub ↗</a>
      </div>
    </footer>
  );
}
