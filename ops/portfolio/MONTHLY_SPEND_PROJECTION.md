# Monthly Spend Projection

**Verified snapshot:** 2026-07-12
**Scope:** Pass 5 Mapbox and PostHog changes only. Currency is USD.

## Provider projection

| Provider | Current plan | Monthly base | Current month / dashboard | Projected monthly after Pass 5 | Free-tier / included limit evidence | Budget or spend-cap state | Venture allocation | Usage-based risks | Pass 5 spend increase |
|---|---|---:|---:|---:|---|---|---|---|---:|
| PostHog | Existing PAYG | `$0` verified | `$0` verified | `$0` verified | Six projects without upgrade; visible monthly free allowances: 1M analytics events, 5k replay recordings, 1M feature-flag requests, 100k errors, 1,500 survey responses, 1M warehouse rows, 10k pipeline events plus 1M rows, 100k LLM events, 50 GB logs, 10k workflow messages/channel, and 500 PostHog AI credits | Twelve product billing caps set to `$0`; no paid add-ons or upgrades | Parent: AutomatedEmpires. Venture-specific: Explore&Earn, Sweepza, LogLoads, BidSpace, Lake & Pine. ORAN deferred | Events, replay, surveys, flags, errors, and other metered products can create usage charges if caps/settings change. Replay, console capture, and autocapture are disabled on all five new projects | `$0` |
| Mapbox | Pay-as-you-go | `$0` token/base cost verified | Upcoming invoice `$0`; monthly invoices from January through July 2026 are `$0` | `$0` while no public replacement is installed and usage remains within current evidence | First 50,000 Mapbox GL JS web loads per month are free; token creation has no base cost | No monthly spending cap is configured/available in the verified account state | Venture-specific future public tokens: Explore&Earn, LogLoads, BidSpace, Lake & Pine. No ORAN/AutomatedEmpires/Sweepza token | GL JS web loads above 50,000/month and other metered APIs can create usage charges. Current named tokens are secret/unrestricted and rejected for browser use | `$0` |

## Cost-safety decisions

- PostHog project creation was included in the existing plan. Five projects and privacy-safe defaults were added without changing the monthly base or projected cost.
- The visible free allowances at verification time were 1,000,000 analytics events, 5,000 replay recordings, 1,000,000 feature-flag requests, 100,000 errors, 1,500 survey responses, 1,000,000 warehouse rows, 10,000 pipeline events plus 1,000,000 pipeline rows, 100,000 LLM events, 50 GB logs, 10,000 workflow messages per channel, and 500 PostHog AI credits per month.
- Twelve PostHog product caps are `$0`. Changing a cap, enabling a paid add-on, or upgrading the plan requires a separate founder-approved cost review.
- Mapbox is authenticated as pay-as-you-go. Token creation has no base cost, the first 50,000 GL JS web loads/month are free, the upcoming invoice and January–July 2026 invoices are `$0`, and no monthly spending cap is available/configured. Invoice numbers are intentionally excluded.
- No Mapbox public replacement was installed, so Pass 5 introduced no new application traffic or recurring spend. Usage must still be monitored because there is no spending cap and billable overages/APIs remain possible.
- Parent-level billing ownership is acceptable only while each venture retains a separate project/token boundary and costs can be attributed by venture.

## Monthly review checklist

1. Record provider plan, current month-to-date cost, projected cost, included usage, and cap state without capturing credential material.
2. Compare usage by venture project/token; investigate any cross-venture or unclassified traffic.
3. Confirm PostHog caps remain `$0` and replay/console/autocapture remain disabled unless separately approved.
4. Before Mapbox installation, model expected loads for each application against the 50,000-load allowance and define an alert/manual review because no monthly spending cap exists.
5. Confirm the upcoming invoice remains `$0` after each staged Mapbox activation; do not record invoice numbers in the ops repository.
