import Link from "next/link";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Page not found",
  description: "This route is not part of the public AutomatedEmpires site.",
  path: "/",
});

export default function NotFound() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="section-inner page-hero-grid">
          <div>
            <p className="eyebrow">404</p>
            <h1>This route is not part of the public system.</h1>
            <p>
              The company site has a compact route surface: portfolio, company,
              build log, founder story, and contact routing.
            </p>
            <div className="hero-actions">
              <Link className="primary-action" href="/">
                Return home
              </Link>
              <Link className="secondary-action" href="/ventures">
                Explore the portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
