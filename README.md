# AutomatedEmpires

The public front door for **AutomatedEmpires** — the venture studio portfolio that presents the locked canon for **Explore&Earn**, **Sweepza**, **BidSpace**, and **LogLoads**.

## Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS
- Deployed on Vercel

## Develop

```bash
pnpm install
pnpm dev
```

Production build:

```bash
pnpm build
```

## Structure

- `app/` — App Router pages, layout, and global styles
- `components/` — UI building blocks (Nav, Hero, VentureCard, Footer)
- `lib/ventures.ts` — the single source of truth for the venture list and portfolio copy

> Note: run `pnpm install` once locally and commit the generated `pnpm-lock.yaml` before wiring frozen-install CI.
