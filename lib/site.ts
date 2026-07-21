export const site = {
  name: "AutomatedEmpires",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://automatedempires.vercel.app",
  intendedDomain: "https://automatedempires.com",
  email: "jackson@automatedempires.com",
  description:
    "AutomatedEmpires is the founder-led parent operator and command layer for a portfolio of independent software, civic, and operating-business ventures.",
  thesis: "Different industries. Same instinct.",
  manifesto: [
    "Find what is fragmented.",
    "Understand who it fails.",
    "Build the system that should exist.",
  ],
  shortThesis:
    "We build systems for markets and experiences the internet still handles badly.",
};

export const navItems = [
  { href: "/ventures", label: "Ventures" },
  { href: "/status", label: "Status" },
  { href: "/company", label: "Company" },
  { href: "/build", label: "Build" },
  { href: "/founder", label: "Founder" },
  { href: "/contact", label: "Contact" },
];

export const contactIntents = [
  {
    label: "Pilot",
    subject: "Pilot inquiry",
    description:
      "For controlled pilot conversations tied to a specific venture and its stated readiness gates.",
  },
  {
    label: "Partner",
    subject: "Partnership conversation",
    description:
      "For venture partnerships, host relationships, civic data, local operations, or strategic distribution.",
  },
  {
    label: "Collaborate",
    subject: "Collaboration conversation",
    description:
      "For builders, designers, operators, product people, and domain experts who want to contribute.",
  },
  {
    label: "Employer",
    subject: "Employer conversation",
    description:
      "For technical operations, product ownership, project delivery, and founder portfolio conversations.",
  },
  {
    label: "Invest",
    subject: "Investor conversation",
    description:
      "For investors evaluating the portfolio, operating model, evidence standard, or a specific venture.",
  },
  {
    label: "Product inquiry",
    subject: "Product inquiry",
    description:
      "For questions about Explore&Earn, BidSpace, LogLoads, Sweepza, Lake & Pine, ORAN, or emerging systems.",
  },
  {
    label: "Work with AE",
    subject: "Work with AutomatedEmpires",
    description:
      "For future employees, contractors, advisors, and serious operators interested in the build.",
  },
  {
    label: "General",
    subject: "General conversation",
    description:
      "For anything that does not fit neatly into the other routes.",
  },
];

export function mailtoFor(subject: string) {
  const encodedSubject = encodeURIComponent(`AutomatedEmpires - ${subject}`);
  return `mailto:${site.email}?subject=${encodedSubject}`;
}
