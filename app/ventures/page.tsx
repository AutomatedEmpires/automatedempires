import type { Metadata } from "next";
import { EcosystemMap } from "@/components/EcosystemMap";
import { VentureCard } from "@/components/VentureCard";
import {
  activeCompanies,
  emergingSystems,
  missionSystems,
  operatingBusinesses,
} from "@/lib/ventures";

export const metadata: Metadata = {
  title: "Ventures",
  description:
    "The AutomatedEmpires venture registry, grouped by active companies, mission systems, operating businesses, and emerging systems.",
  alternates: {
    canonical: "/ventures",
  },
};

export default function VenturesPage() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="section-inner narrow">
          <p className="eyebrow">Venture registry</p>
          <h1>The portfolio is a taxonomy, not a pile of cards.</h1>
          <p>
            AutomatedEmpires separates operating companies, mission systems,
            real-world businesses, and emerging systems so maturity and intent
            stay truthful.
          </p>
        </div>
      </section>

      <section className="section-block ecosystem-section" aria-labelledby="registry-map">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Relationships</p>
            <h2 id="registry-map">Start with the connections.</h2>
            <p>
              Filter by a shared instinct to see which products carry it, or hover
              a node to trace what a single venture is connected to. The detailed
              registry, grouped by maturity, follows below.
            </p>
          </div>
          <EcosystemMap />
        </div>
      </section>

      <PortfolioGroup
        eyebrow="Active companies"
        id="active-companies"
        title="Operating or actively developed businesses"
      >
        {activeCompanies.map((venture) => (
          <VentureCard key={venture.id} venture={venture} />
        ))}
      </PortfolioGroup>

      <PortfolioGroup
        eyebrow="Mission systems"
        id="mission-systems"
        title="Built where failure has human cost"
      >
        {missionSystems.map((venture) => (
          <VentureCard key={venture.id} venture={venture} />
        ))}
      </PortfolioGroup>

      <PortfolioGroup
        eyebrow="Operating business"
        id="operating-business"
        title="Software judgment tested in the physical world"
      >
        {operatingBusinesses.map((venture) => (
          <VentureCard key={venture.id} venture={venture} />
        ))}
      </PortfolioGroup>

      <PortfolioGroup
        eyebrow="The lab"
        id="lab"
        title="Emerging systems and future capabilities"
      >
        {emergingSystems.map((venture) => (
          <VentureCard key={venture.id} venture={venture} />
        ))}
      </PortfolioGroup>
    </main>
  );
}

function PortfolioGroup({
  eyebrow,
  id,
  title,
  children,
}: {
  eyebrow: string;
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="section-block portfolio-group" aria-labelledby={id}>
      <div className="section-inner">
        <div className="section-heading">
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={id}>{title}</h2>
        </div>
        <div className="venture-grid">{children}</div>
      </div>
    </section>
  );
}
