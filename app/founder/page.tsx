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
            operations, remote infrastructure, coordination, and real-world
            failure up close.
          </p>
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
