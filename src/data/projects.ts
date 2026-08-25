export type Project = {
  number: string;
  slug: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  status: string;
};

export const projects: Project[] = [
  {
    number: "01",
    slug: "pitch-deck",
    category: "Business / Pitch Deck",
    title: "Northstar",
    description:
      "A concise investor narrative for a fictional operational-intelligence platform.",
    tags: ["Pitch Deck", "Storytelling", "Information Design"],
    status: "Self-initiated concept",
  },
  {
    number: "02",
    slug: "data-storytelling",
    category: "Data Storytelling",
    title: "The Growth Engine",
    description:
      "Reading a retention problem out of a subscription business's growth data.",
    tags: ["Data Visualization", "Narrative", "Cohort Analysis"],
    status: "Self-initiated data storytelling study",
  },
  {
    number: "03",
    slug: "executive-one-pager",
    category: "Executive One-Pager",
    title: "Northstar — Executive Brief",
    description:
      "The Northstar narrative condensed into a single decision-ready document.",
    tags: ["One-Pager", "Executive Communication", "Layout Systems"],
    status: "Illustrative design study",
  },
  {
    number: "04",
    slug: "strategy",
    category: "Corporate / Strategy",
    title: "Orbit 2027",
    description:
      "An 18-month investment strategy for a fictional B2B technology company.",
    tags: ["Strategy Deck", "Frameworks", "Roadmapping"],
    status: "Self-initiated strategy design study",
  },
  {
    number: "05",
    slug: "redesign",
    category: "Before → After",
    title: "Three Slide Rebuilds",
    description:
      "Three common corporate slides, rebuilt around a single point of view.",
    tags: ["Visual Hierarchy", "Editorial Judgment", "Slide Systems"],
    status: "Illustrative design study",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return { prev, next };
}
