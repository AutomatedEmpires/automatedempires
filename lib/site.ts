export const site = {
  name: "AutomatedEmpires",
  url: "https://automatedempires.com",
  email: "jackson@automatedempires.com",
  description:
    "AutomatedEmpires is an independent venture studio and operating company building systems for fragmented real-world markets.",
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
  { href: "/company", label: "Company" },
  { href: "/build", label: "Build" },
  { href: "/founder", label: "Founder" },
  { href: "/contact", label: "Contact" },
];

export type ContactIntent = {
  label: string;
  subject: string;
  description: string;
  prompt: string;
  bullets: string[];
};

export const contactIntents: ContactIntent[] = [
  {
    label: "I want to invest or partner",
    subject: "Investor or partner conversation",
    description:
      "For investors and partners evaluating the company, portfolio coherence, operating model, or a specific venture.",
    prompt: "You're deciding whether this pattern compounds.",
    bullets: [
      "Which venture or thesis drew you in",
      "Your stage, focus, or the kind of partnership you have in mind",
      "What evidence would move you from interested to convinced",
    ],
  },
  {
    label: "I want to build with you",
    subject: "Collaboration conversation",
    description:
      "For builders, designers, operators, product people, and domain experts who want to contribute to the work.",
    prompt: "You see where you could make a venture better.",
    bullets: [
      "What you build best, with a link if you have one",
      "Which venture or problem you'd want to touch",
      "How much time and in what shape (advise, contract, co-build)",
    ],
  },
  {
    label: "I have a problem worth solving",
    subject: "A broken system worth building",
    description:
      "For anyone sitting on a fragmented market or a broken real-world process that a system should fix.",
    prompt: "You know a market that almost works.",
    bullets: [
      "The market or process, and who it fails today",
      "How people compensate for it manually right now",
      "Why it hasn't been fixed yet",
    ],
  },
  {
    label: "I want to use a product",
    subject: "Product inquiry",
    description:
      "For questions about Explore&Earn, Sweepza, PinnedAtlas, BidSpace, LogLoads, Lake & Pine, or ORAN.",
    prompt: "You're here for one of the ventures.",
    bullets: [
      "Which product",
      "Whether you're a user, a host, or exploring",
      "What you're trying to do or what got in your way",
    ],
  },
  {
    label: "I want to work with AE",
    subject: "Work with AutomatedEmpires",
    description:
      "For future employees, contractors, and serious operators who want to be part of the build.",
    prompt: "You want to be inside the build, not beside it.",
    bullets: [
      "What you'd own",
      "A link that shows how you think or ship",
      "What you're looking for",
    ],
  },
  {
    label: "I'm just exploring",
    subject: "General conversation",
    description: "For anything that does not fit neatly into the other routes.",
    prompt: "No pitch required.",
    bullets: ["What caught your attention", "Anything you're curious about"],
  },
];

export function mailtoFor(subject: string) {
  const encodedSubject = encodeURIComponent(`AutomatedEmpires - ${subject}`);
  return `mailto:${site.email}?subject=${encodedSubject}`;
}
