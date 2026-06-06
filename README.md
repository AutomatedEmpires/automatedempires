# AutomatedEmpires

The studio portfolio for **AutomatedEmpires** — an independent venture studio building software businesses from zero to launch.

Live portfolio: **Explore&Earn**, **Sweepza**, **BidSpace**, **LogLoads**.

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
- `lib/ventures.ts` — the single source of truth for the venture list

> Note: run `pnpm install` once locally and commit the generated `pnpm-lock.yaml` before wiring frozen-install CI.
