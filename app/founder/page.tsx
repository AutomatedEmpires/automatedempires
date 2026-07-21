import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Founder",
  description:
    "The founder story behind AutomatedEmpires: physical systems, operations, coordination, and the systems that should exist.",
  alternates: {
    canonical: "/founder",
  },
};

export default function FounderPage() {
  return (
    <main id="main">
      <section className="page-hero founder-hero">
        <div className="section-inner narrow">
          <p className="eyebrow">Founder</p>
          <h1>I learned systems from the physical world.</h1>
          <p>
            AutomatedEmpires comes from seeing machinery, maintenance,
            construction, logistics, field operations, remote infrastructure,
            coordination, and real-world failure up close.
          </p>
        </div>
      </section>

      <section className="section-block" aria-labelledby="founder-practice">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Operating practice</p>
            <h2 id="founder-practice">Product ownership with the field still in view.</h2>
          </div>
          <div className="profile-grid">
            <article className="profile-card">
              <h3>Technical operations</h3>
              <p>Repository governance, deployment evidence, provider boundaries, runtime health, and the work required to move from code to an operable product.</p>
            </article>
            <article className="profile-card">
              <h3>Project and field operations</h3>
              <p>Work breakdown, sequencing, handoffs, risk control, and a practical respect for the people compensating for weak systems.</p>
            </article>
            <article className="profile-card">
              <h3>Product ownership</h3>
              <p>Clear user problems, operating boundaries, workflow design, readiness gates, and honest decisions about what is not finished.</p>
            </article>
            <article className="profile-card">
              <h3>AI-assisted venture execution</h3>
              <p>Agents accelerate research, implementation, verification, and documentation under explicit evidence, review, provider, and activation controls.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-inner story-grid">
          <p className="story-lead">
            Physical work makes broken systems impossible to ignore.
          </p>
          <div>
            <p>
              When a process depends on the right person remembering the right
              detail at the right time, the system is not working. People
              compensate with calls, notes, spreadsheets, shortcuts, repeated
              explanations, and local memory.
            </p>
            <p>
              That pattern shows up in logistics, home services, opportunity
              discovery, commercial space, sweepstakes, and resource access. The
              industries change. The shape of the failure repeats.
            </p>
            <p>
              Now I build the systems I spent years wishing existed: products
              that make trust visible, coordination easier, opportunity easier
              to find, and operations less dependent on luck.
            </p>
            <Link className="text-link" data-analytics="founder_contact" href="/contact">
              Talk with AutomatedEmpires
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
