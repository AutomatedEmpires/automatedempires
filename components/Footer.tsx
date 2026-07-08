import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-inner footer-grid">
        <div>
          <p className="eyebrow">AutomatedEmpires</p>
          <h2>Different industries. Same instinct.</h2>
          <p>
            We find fragmented markets, understand who the friction fails, and
            build the system that should exist.
          </p>
        </div>
        <div className="footer-links" aria-label="Footer navigation">
          <Link href="/ventures">Ventures</Link>
          <Link href="/company">Company</Link>
          <Link href="/build">Build</Link>
          <Link href="/founder">Founder</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-intents" aria-label="Get involved">
          <Link data-analytics="footer_invest" href="/contact">
            Invest or partner
          </Link>
          <Link data-analytics="footer_build" href="/contact">
            Build with us
          </Link>
          <Link data-analytics="footer_problem" href="/contact">
            Bring a problem
          </Link>
        </div>
      </div>
      <div className="section-inner footer-base">
        <p>© {new Date().getFullYear()} AutomatedEmpires.</p>
        <a data-analytics="footer_email" href={`mailto:${site.email}`}>
          {site.email}
        </a>
      </div>
    </footer>
  );
}
