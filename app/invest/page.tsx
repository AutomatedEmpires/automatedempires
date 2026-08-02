import Link from "next/link";
import { mailtoFor, pageMetadata } from "@/lib/site";
import { ventures } from "@/lib/ventures";

export const metadata = pageMetadata({
  title: "Invest & partner",
  description:
    "How investors, operators, pilot customers, and strategic partners work with AutomatedEmpires — with the current, verified ask for every venture.",
  path: "/invest",
});

const relationships = [
  {
    title: "Invest",
    body: "Conversations about backing a specific venture or the portfolio approach behind all of them. AutomatedEmpires is founder-funded today; there is no active offering — these are discussions, started directly with the founder.",
    subject: "Investment conversation",
  },
  {
    title: "Operate",
    body: "Several ventures are engineered ahead of their go-to-market. If you are an operator who knows one of these markets — forestry logistics, seasonal work, local services, civic access, events — there is real software waiting for the right person to run at the market with.",
    subject: "Operating partner conversation",
  },
  {
    title: "Pilot",
    body: "Ventures at the pre-launch line need first customers more than anything else: a timber operation for LogLoads, seasonal employers for Explore&Earn, a venue for BidSpace, community partners for ORAN. Pilots get direct founder attention and shape the product.",
    subject: "Pilot conversation",
  },
  {
    title: "Partner",
    body: "Distribution, data, industry expertise, or a strategic relationship that helps a specific venture reach its market. Partnerships are scoped to one venture at a time.",
    subject: "Partnership conversation",
  },
];

export default function InvestPage() {
  const askVentures = ventures.filter(
    (venture) => venture.ask && !venture.ask.startsWith("None"),
  );

  return (
    <main id="main">
      <section className="page-hero">
        <div className="section-inner page-hero-grid">
          <div>
            <p className="eyebrow">Invest &amp; partner</p>
            <h1>Every venture has one current ask. Here they are.</h1>
            <p>
              This page is deliberately specific. Each venture below states what
              it actually needs next — verified against its production state,
              not a pitch. If one of these asks is yours to answer, the
              conversation starts with the founder directly.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block" aria-labelledby="relationships-heading">
        <div className="section-inner">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Ways to work together</p>
              <h2 id="relationships-heading">Four kinds of relationship.</h2>
            </div>
            <p>
              No form funnels, no investor deck theater. Every path below is a
              direct email to the founder with a clear subject line.
            </p>
          </div>
          <div className="relationship-grid">
            {relationships.map((relationship) => (
              <article key={relationship.title}>
                <h3>{relationship.title}</h3>
                <p>{relationship.body}</p>
                <a className="light-action" href={mailtoFor(relationship.subject)}>
                  Start this conversation
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block ask-section" aria-labelledby="asks-heading">
        <div className="section-inner">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Current asks</p>
              <h2 id="asks-heading">What each venture needs right now.</h2>
            </div>
            <p>
              Asks are updated when production reality changes, and each links
              to the venture&apos;s own page — where its verified state, business
              model, and open risks are published.
            </p>
          </div>
          <div className="ask-list">
            {askVentures.map((venture) => (
              <article className="ask-row" key={venture.id}>
                <div>
                  <h3>{venture.name}</h3>
                  <p className="ask-category">{venture.category}</p>
                </div>
                <p className="ask-copy">{venture.ask}</p>
                <Link
                  aria-label={`See the verified state of ${venture.name}`}
                  href={`/ventures/${venture.slug}`}
                >
                  Verified state
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="founder-cta compact-cta">
        <div className="section-inner founder-cta-grid">
          <p className="eyebrow">One caveat, stated plainly</p>
          <h2>You will get the honest version.</h2>
          <div>
            <p>
              Venture pages here publish empty marketplaces, gated billing, and
              open risks alongside the engineering. Diligence materials continue
              in the same spirit.
            </p>
            <Link className="primary-action" href="/contact">
              Talk to the founder
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
