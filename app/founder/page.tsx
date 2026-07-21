import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Founder",
  description: "Meet Jackson Cole, founder of AutomatedEmpires.",
  alternates: { canonical: "/founder" },
};

export default function FounderPage() {
  return (
    <main id="main">
      <section className="page-hero founder-page-hero">
        <div className="section-inner founder-page-grid">
          <div><p className="eyebrow">Jackson Cole · Founder</p><h1>I learned systems where failure is physical.</h1></div>
          <div className="founder-intro"><p>Before building software companies, I worked around machinery, maintenance, construction, logistics, remote infrastructure, and field operations—the kind of environments where a weak process does not stay theoretical for long.</p><Link className="primary-action" href="/contact">Start a conversation</Link></div>
        </div>
      </section>

      <section className="founder-manifesto">
        <div className="section-inner founder-manifesto-grid">
          <p className="founder-quote">“When the system is bad, good people become the system.”</p>
          <div>
            <p>They remember the route nobody documented. They keep the spreadsheet alive. They make the call. They translate the customer’s actual need into something the process can handle.</p>
            <p>AutomatedEmpires exists to turn that invisible work into products: software that makes the right information easier to find, the next decision clearer, and the operation less dependent on luck.</p>
          </div>
        </div>
      </section>

      <section className="section-block" aria-labelledby="founder-work-heading">
        <div className="section-inner">
          <div className="section-heading split-heading"><div><p className="eyebrow">The work</p><h2 id="founder-work-heading">Founder, product owner, operator.</h2></div><p>I move between customer problems, product design, engineering, operations, launch readiness, and the practical details that make a company real.</p></div>
          <div className="principle-grid founder-principles">
            <article><span>01</span><h3>Product</h3><p>Find the customer truth, shape the workflow, and build an experience people can understand without a manual.</p></article>
            <article><span>02</span><h3>Engineering</h3><p>Ship dependable software with the architecture, monitoring, and operational ownership needed to keep improving it.</p></article>
            <article><span>03</span><h3>Operations</h3><p>Respect capacity, handoffs, risk, field reality, and the people responsible for delivering the promise.</p></article>
            <article><span>04</span><h3>Venture building</h3><p>Bring product, brand, market, distribution, and company formation into one coherent build.</p></article>
          </div>
        </div>
      </section>

      <section className="founder-cta compact-cta"><div className="section-inner founder-cta-grid"><p className="eyebrow">What comes next</p><h2>Build companies that make the work better.</h2><div><p>If you see yourself in the portfolio—as a customer, operator, partner, investor, or builder—I want to hear what you know.</p><Link className="primary-action" href="/contact">Talk with Jackson</Link></div></div></section>
    </main>
  );
}
