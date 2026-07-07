"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <nav className="nav-shell" aria-label="Primary navigation">
        <Link className="brand-mark" href="/" data-analytics="nav_home">
          <span className="brand-symbol" aria-hidden="true">
            AE
          </span>
          <span>AutomatedEmpires</span>
        </Link>

        <button
          className="mobile-nav-button"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        <div className={open ? "nav-links open" : "nav-links"}>
          {navItems.map((item) => (
            <Link
              aria-current={pathname === item.href ? "page" : undefined}
              data-analytics={`nav_${item.label.toLowerCase()}`}
              href={item.href}
              key={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
