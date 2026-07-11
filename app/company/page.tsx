import type { Metadata } from "next";
import Link from "next/link";
import { platformProfiles } from "@/lib/ventures";

export const metadata: Metadata = {
  title: "Company",
  description:
    "The AutomatedEmpires company thesis, portfolio model, engineering posture, mission systems, and collaboration surface.",
  alternates: {
    canonical: "/company",
  },
};

export default function CompanyPage() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="section-inner narrow">
          <p className="eyebrow">Company</p>
          <h1>We build systems for markets and experiences the internet still handles badly.</h1>
          <p>
            AutomatedEmpires is an emerging independent venture studio and
            operating company. The ventures are different because the underlying
            markets are different. The repeatable instinct is the same.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="section-inner thesis-grid">
          <div>
            <p className="eyebrow">Operating philosophy</p>
            <h2>From fragmentation to system.</h2>
          </div>
          <div className="manifesto-list">
            <p>Important information is disconnected.</p>
            <p>Discovery is inefficient.</p>
            <p>Workflows are manual.</p>
            <p>Trust is poorly communicated.</p>
            <p>Opportunity is difficult to access.</p>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Platform profiles</p>
            <h2>Consistency does not mean waste.</h2>
            <p>
              The public site follows the organization runtime and quality bar
              without adding auth, databases, maps, payments, or other providers
              it does not need.
            </p>
          </div>
          <div className="profile-grid">
            {platformProfiles.map((profile) => (
              <article className="profile-card" key={profile.name}>
                <h3>{profile.name}</h3>
                <p>{profile.description}</p>
                <div className="profile-members">
                  {profile.members.map((member) => (
                    <span key={member}>{member}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-inner case-grid">
          <div>
            <p className="eyebrow">Who should talk to us</p>
            <h2>Investors, partners, collaborators, operators.</h2>
          </div>
          <div>
            <p>
              The right conversations are not generic. AutomatedEmpires is built
              around venture-specific opportunities, civic infrastructure,
              operating-business execution, and a founder-led build cadence.
            </p>
            <Link className="primary-action compact" data-analytics="company_contact" href="/contact">
              Start a relevant conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
