import type { Initiative } from "./types";

export const initiatives: Initiative[] = [
  {
    slug: "empowerher",
    name: "EmpowerHer",
    tagline: "A flagship summit empowering women to lead in tech.",
    description:
      "Our flagship initiative bringing together hundreds of women across India for a multi-day experience of talks, workshops, mentorship and unforgettable connections.",
    url: "https://empowerher.girlsleadingtech.com/",
    color: "pink",
  },
  {
    slug: "empowerher-2-0",
    name: "EmpowerHer 2.0",
    tagline: "The next chapter — bigger, bolder, more impact.",
    description:
      "EmpowerHer returns in 2026 with deeper programming, more partner companies and a national speaker line-up dedicated to women shaping the future of tech.",
    url: "https://empowerher2026.girlsleadingtech.com/",
    color: "violet",
  },
  {
    slug: "i2p-fellowship",
    name: "I2P Fellowship",
    tagline: "Idea to Product — turn your idea into reality.",
    description:
      "A structured fellowship guiding aspiring builders from raw idea to launch-ready product, with mentorship, capital connections and a peer cohort to grow with.",
    color: "lavender",
  },
  {
    slug: "code-at-christmas",
    name: "Code at Christmas",
    tagline: "Build, give, celebrate — open-source, the Christmas way.",
    description:
      "An annual seasonal hackathon bringing the GLT family together to build delightful open-source projects and gift them to the community.",
    url: "https://codeatchristmas.girlsleadingtech.com/",
    color: "rose",
  },
  {
    slug: "hack-aura",
    name: "Hack Aura",
    tagline: "Where ideas spark and futures are built.",
    description:
      "A signature student hackathon hosted by GLT — 36 hours of building, learning and meeting your future co-founders.",
    url: "https://hackaura.girlsleadingtech.com/",
    color: "peach",
  },
  {
    slug: "valentines-week",
    name: "Valentine's Week",
    tagline: "Seven days of self-love, learning and celebration.",
    description:
      "A week-long curated experience with daily challenges, sessions and surprises, themed around loving yourself and your craft.",
    color: "pink",
  },
  {
    slug: "glt-spotlight",
    name: "GLT Spotlight",
    tagline: "Celebrating the unstoppable women in our community.",
    description:
      "A monthly spotlight series featuring inspiring stories from members across colleges, companies and continents.",
    color: "violet",
  },
];

export const getInitiative = (slug: string) =>
  initiatives.find((i) => i.slug === slug);
