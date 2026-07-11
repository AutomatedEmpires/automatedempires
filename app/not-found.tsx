import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="section-inner narrow">
          <p className="eyebrow">404</p>
          <h1>This route is not part of the public system.</h1>
          <p>
            The company site has a compact route surface: portfolio, company,
            build log, founder story, and contact routing.
          </p>
          <Link className="primary-action compact" href="/">
            Return home
          </Link>
        </div>
      </section>
    </main>
  );
}
