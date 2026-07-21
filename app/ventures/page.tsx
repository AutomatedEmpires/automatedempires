import type { Metadata } from "next";
import Link from "next/link";
import { VentureCard } from "@/components/VentureCard";
import { activeVentures, labVentures, portfolioLab } from "@/lib/ventures";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore the AutomatedEmpires portfolio across work-travel, forestry logistics, sweepstakes discovery, property care, civic access, vendor space, travel, and new studio concepts.",
  alternates: { canonical: "/ventures" },
};

export default function VenturesPage() {
  return (
    <main id="main">
      <section className="page-hero portfolio-page-hero">
        <div className="section-inner page-hero-grid">
          <div>
            <p className="eyebrow">The portfolio</p>
            <h1>Different markets. Products built on their own terms.</h1>
          </div>
          <div>
            <p>
              AutomatedEmpires builds independent companies for real-world
              problems—from finding seasonal work and moving timber to booking
              property care, discovering places, and reaching community help.
            </p>
            <Link className="primary-action" href="/contact">Build with us</Link>
          </div>
        </div>
      </section>

      <section className="section-block" aria-labelledby="active-portfolio-heading">
        <div className="section-inner">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">Companies in motion</p><h2 id="active-portfolio-heading">Live products and active builds.</h2></div>
            <p>{activeVentures.length} distinct products, each designed around the customer, workflow, and market it serves.</p>
          </div>
          <div className="venture-grid">
            {activeVentures.map((venture) => <VentureCard key={venture.id} venture={venture} />)}
          </div>
        </div>
      </section>

      <section className="lab-section" aria-labelledby="lab-heading">
        <div className="section-inner">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">Studio lab</p><h2 id="lab-heading">Ideas earn their way into companies.</h2></div>
            <p>Early concepts stay lightweight while the studio finds the real customer, the repeatable workflow, and the reason the product should exist.</p>
          </div>
          <div className="venture-grid lab-grid">
            {labVentures.map((venture) => <VentureCard key={venture.id} venture={venture} />)}
          </div>
          <div className="reservation-list">
            {portfolioLab.map((item) => (
              <div key={item.name}><strong>{item.name}</strong><span>{item.note}</span></div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
