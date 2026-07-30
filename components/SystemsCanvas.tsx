import { activeVentures, ventures } from "@/lib/ventures";

const portfolioYear = ventures.reduce(
  (latest, venture) => (venture.latestDate > latest ? venture.latestDate : latest),
  "",
).slice(0, 4);

export function SystemsCanvas() {
  return (
    <div className="portfolio-stage" aria-label="AutomatedEmpires portfolio overview">
      <div className="portfolio-stage-top">
        <span>Portfolio / {portfolioYear}</span>
        <span className="live-indicator">Building now</span>
      </div>
      <div className="portfolio-stage-body">
        <div className="stage-monogram" aria-hidden="true">
          <span>AE</span>
          <small>{String(ventures.length).padStart(2, "0")}</small>
        </div>
        <div className="stage-company-list">
          {activeVentures.map((venture, index) => (
            <div className="stage-company" key={venture.id}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{venture.name}</strong>
              <small>{venture.stage}</small>
            </div>
          ))}
        </div>
      </div>
      <div className="portfolio-stage-bottom">
        <span>Products</span>
        <span>Marketplaces</span>
        <span>Operations</span>
        <span>Civic systems</span>
      </div>
    </div>
  );
}
