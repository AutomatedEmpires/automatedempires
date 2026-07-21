import type { Metadata } from "next";
import { contactIntents, mailtoFor, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk with AutomatedEmpires about products, partnerships, investment, and building together.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main id="main">
      <section className="contact-hero">
        <div className="section-inner contact-hero-grid">
          <div><p className="eyebrow">Contact</p><h1>Bring the real conversation.</h1></div>
          <div><p>Tell us which company, customer problem, partnership, or opportunity you have in mind. Clear context gets you to the right conversation faster.</p><a className="contact-email" href={`mailto:${site.email}`}>{site.email}<span aria-hidden="true">↗</span></a></div>
        </div>
      </section>

      <section className="section-block" aria-labelledby="contact-paths-heading">
        <div className="section-inner">
          <div className="section-heading"><p className="eyebrow">Choose a path</p><h2 id="contact-paths-heading">What do you want to move forward?</h2></div>
          <div className="intent-grid">
            {contactIntents.map((intent, index) => (
              <a className="intent-card" href={mailtoFor(intent.subject)} key={intent.label}>
                <span>{String(index + 1).padStart(2, "0")}</span><h3>{intent.label}</h3><p>{intent.description}</p><strong>Write to us ↗</strong>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
