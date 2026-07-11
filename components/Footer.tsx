import Link from "next/link";
import { contactIntents, mailtoFor, site } from "@/lib/site";

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
        <div className="footer-intents">
          {contactIntents.slice(0, 3).map((intent) => (
            <a
              data-analytics={`footer_${intent.label.toLowerCase()}`}
              href={mailtoFor(intent.subject)}
              key={intent.label}
            >
              {intent.label}
            </a>
          ))}
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
