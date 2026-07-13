# Sweepza email compliance notes

**Applies to:** Sweepza infrastructure and internal delivery verification

**Status:** Domain verified; public/customer sending remains disabled

These notes are an operational safety boundary, not a legal determination. Sweepza must not use the infrastructure verification lane for campaign, entrant, customer, vendor-marketing, prize, launch, or public sweepstakes messages.

## Approved identity

- From: `Sweepza <notifications@sweepza.com>`
- Reply-To: `support@sweepza.com`
- `support@sweepza.com` is the only founder-confirmed Sweepza address.
- Additional optional aliases are **uncreated / pending mailbox confirmation**. Their names, recipients, operators, and forwarding behavior must be approved before creation.

The existing Microsoft 365 apex MX must remain intact. Authoritative DNS shows `0 sweepza-com.mail.protection.outlook.com`. The visible apex SPF currently authorizes only `secureserver.net` with `-all`, which is an alignment caution requiring separate mailbox-provider review; do not edit it as part of Resend verification.

## Only approved test copy

For the single internal infrastructure test, use exactly:

> Sweepza is building tools for businesses to organize clearer, more trustworthy giveaway campaigns. Vendor onboarding and compliance review are in progress.

Do not add claims about launch timing, legal compliance, odds, prizes, entrants, vendor approval, availability, or customer readiness.

## Recipient and content restrictions

1. Send only to a founder-controlled or explicitly approved internal address.
2. Do not import or contact entrants, prospects, customers, creators, sponsors, or public distribution lists.
3. Do not include real promotion data, personal data, payment data, credentials, tokens, prize claims, or legal conclusions.
4. Do not send more than one test while the first message's acceptance, inbox delivery, and Reply-To routing are being evaluated.
5. Do not interpret Resend domain verification or provider acceptance as permission for sweepstakes operations.

## Activation gates

Before the internal test:

- the `sweepza.com` domain remains verified;
- the Sweepza-only `Sending access` key is domain-scoped and installed only in Sweepza lanes;
- the application emits the exact From and Reply-To above with no Explore&Earn fallback;
- the target internal recipient and `support@sweepza.com` mailbox operator are confirmed;
- authoritative DNS still preserves Microsoft 365 apex MX;
- the test can be logged without exposing secrets or sensitive content.

Before any public or customer email, a separate owner-approved compliance review must define message classification, consent, required disclosures, suppression/unsubscribe behavior where applicable, privacy/retention, complaints, bounce handling, promotion rules, vendor status, and operational ownership. This infrastructure task does not satisfy that review.
