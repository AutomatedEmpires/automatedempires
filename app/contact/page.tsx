import type { Metadata } from "next";
import { InvolvementPicker } from "@/components/InvolvementPicker";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get involved",
  description:
    "Get involved with AutomatedEmpires: invest or partner, build with us, bring a problem worth solving, use a product, work with the company, or just explore.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="section-inner narrow">
          <p className="eyebrow">Get involved</p>
          <h1>What brought you here?</h1>
          <p>
            There is no single right way in. Tell the site what you are here for
            and it shapes the next step — including a pre-titled email straight to
            the founder. No fake form, no silent submission path.
          </p>
          <a className="primary-action compact" data-analytics="contact_email" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>
      </section>

      <section className="section-block">
        <div className="section-inner">
          <InvolvementPicker />
        </div>
      </section>
    </main>
  );
}
