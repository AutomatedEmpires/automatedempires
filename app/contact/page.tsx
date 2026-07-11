import type { Metadata } from "next";
import { contactIntents, mailtoFor, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact AutomatedEmpires by intent: invest, partner, collaborate, product inquiry, work with the company, or general conversation.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="section-inner narrow">
          <p className="eyebrow">Contact</p>
          <h1>Start the right conversation.</h1>
          <p>
            The most reliable contact surface today is direct email with clear
            intent. No fake form, no silent submission path.
          </p>
          <a className="primary-action compact" data-analytics="contact_email" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>
      </section>

      <section className="section-block">
        <div className="section-inner">
          <div className="intent-grid">
            {contactIntents.map((intent) => (
              <a
                className="intent-card"
                data-analytics={`contact_${intent.label.toLowerCase().replaceAll(" ", "_")}`}
                href={mailtoFor(intent.subject)}
                key={intent.label}
              >
                <span>{intent.label}</span>
                <p>{intent.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
