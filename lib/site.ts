export const site = {
  name: "AutomatedEmpires",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://automatedempires.com",
  email: "jackson@automatedempires.com",
  description:
    "AutomatedEmpires is a founder-led venture company building focused products for work, travel, logistics, local services, marketplaces, and civic access.",
  headline: "Companies for the real world.",
};

export const navItems = [
  { href: "/ventures", label: "Portfolio" },
  { href: "/company", label: "Studio" },
  { href: "/build", label: "Updates" },
  { href: "/founder", label: "Founder" },
  { href: "/contact", label: "Contact" },
];

export const contactIntents = [
  {
    label: "Product & pilot",
    subject: "Product or pilot conversation",
    description:
      "Talk about a specific venture, early access, a real operating workflow, or becoming a launch partner.",
  },
  {
    label: "Partner",
    subject: "Partnership conversation",
    description:
      "Bring distribution, industry knowledge, data, operations, or a strategic relationship to a portfolio company.",
  },
  {
    label: "Invest",
    subject: "Investment conversation",
    description:
      "Discuss the portfolio, a specific company, or the operating model behind AutomatedEmpires.",
  },
  {
    label: "Build with us",
    subject: "Build with AutomatedEmpires",
    description:
      "For exceptional product people, engineers, designers, operators, advisors, and domain experts.",
  },
];

export function mailtoFor(subject: string) {
  const encodedSubject = encodeURIComponent(`AutomatedEmpires — ${subject}`);
  return `mailto:${site.email}?subject=${encodedSubject}`;
}
