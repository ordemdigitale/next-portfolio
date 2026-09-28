export const nav = {
  brand: { initials: "LD", name: "Lionel Dabo" },
  links: [
    { label: "Accueil", href: "#accueil" },
    { label: "Projets", href: "#projets" },
    { label: "Compétences", href: "#competences" },
    { label: "À propos", href: "#a-propos", hideOnMobile: true },
    { label: "Contact", href: "#contact" },
  ],
  cta: { label: "Parlons-en", href: "#contact" },
};

export const heroStats = [
  { value: "+3 ans", label: "d'expérience hybride" },
  { value: "100%", label: "Focus produit & fluidité" },
  { value: "Web & Mobile", label: "Architecture moderne" },
];

export type Project = {
  id: string;
  category: "web" | "design" | "app";
  tags: string[];
  title: string;
  description: string;
  cta: string;
  preview: "code" | "tokens" | "dashboard";
};

export const projects: Project[] = [
  {
    id: "aibs-web",
    category: "web",
    preview: "code",
    tags: ["Next.js 14", "Tailwind CSS", "SEO & Perf"],
    title: "Refonte & Architecture Web AIBS",
    description:
      "Restructuration intégrale de la plateforme d'entreprise AIBS. Temps de chargement divisé par deux, score SEO de 98% et parcours d'inscription optimisé.",
    cta: "Explorer l'étude de cas",
  },
  {
    id: "aibs-design-system",
    category: "design",
    preview: "tokens",
    tags: ["Figma Systems", "Design Tokens", "UI Kits"],
    title: "Kit d'Interface & Design System AIBS",
    description:
      "Création complète d'un design system unifié de 40+ composants réutilisables, synchronisé entre Figma et les bibliothèques React/Tailwind.",
    cta: "Explorer l'écosystème UI",
  },
  {
    id: "elearning-platform",
    category: "app",
    preview: "dashboard",
    tags: ["React.js", "Node.js", "PostgreSQL"],
    title: "Plateforme E-Learning & Certification",
    description:
      "Conception d'une application d'apprentissage interactive avec suivi de progression en temps réel, quiz adaptatifs et génération automatique d'attestations.",
    cta: "Détails & Démonstration",
  },
];

export const projectFilters: { label: string; value: Project["category"] | "all" }[] = [
  { label: "Tous (3)", value: "all" },
  { label: "Web & SaaS", value: "web" },
  { label: "Design Systems", value: "design" },
  { label: "Applications", value: "app" },
];

export type SkillCard = {
  id: string;
  icon: string;
  title: string;
  description: string;
  tags: string[];
  span: "wide" | "narrow";
  accent?: boolean;
};

export const skillCards: SkillCard[] = [
  {
    id: "frontend-mobile",
    icon: "💻",
    title: "Développement Frontend & Mobile",
    description:
      "Construction d'applications réactives, ultra-rapides et accessibles. J'attache un soin extrême à l'optimisation des bundles, aux transitions soignées et à l'architecture modulaire.",
    tags: ["Next.js 14", "React.js", "React Native", "TypeScript", "Tailwind CSS"],
    span: "wide",
    accent: true,
  },
  {
    id: "ui-ux",
    icon: "🎨",
    title: "UI/UX & Design Systems",
    description:
      "Prototypage haute-fidélité et création d'écosystèmes visuels scalables basés sur des variables et des tokens standardisés.",
    tags: ["Figma", "Atomic Design", "Wireframing", "Micro-interactions"],
    span: "narrow",
  },
  {
    id: "backend-api",
    icon: "⚡",
    title: "Backend & Architecture API",
    description:
      "Déploiement de micro-services, APIs RESTful & GraphQL fiables avec authentification sécurisée et requêtes de bases de données optimisées.",
    tags: ["Node.js", "Express / Nest", "PostgreSQL", "Prisma ORM"],
    span: "narrow",
  },
  {
    id: "methodology",
    icon: "🚀",
    title: "Méthodologie & Performance Web",
    description:
      "Une approche agile orientée résultat : CI/CD, tests automatisés, audits Lighthouse rigoureux et gestion de versions avec conventions strictes.",
    tags: ["Git & GitHub Flow", "Core Web Vitals", "Vercel & Docker", "SEO Technique"],
    span: "wide",
    accent: true,
  },
];

export const aboutHighlights = [
  {
    title: "Vision Hybride",
    description: "Compréhension fluide des enjeux UI et des contraintes backend.",
  },
  {
    title: "Sens du détail",
    description: "Typographies calibrées, espacements harmonieux et fluidité.",
  },
];

export const aboutStats = [
  {
    value: "+15",
    title: "Projets & Missions Réalisés",
    description: "Du SaaS B2B aux vitrines institutionnelles immersives.",
  },
  {
    value: "100%",
    title: "Code Typé & Documenté",
    description: "Maintenance aisée et évolutivité garantie pour vos équipes.",
  },
  {
    value: "< 1.2s",
    title: "Temps de Chargement Médian",
    description: "Optimisation rigoureuse de la webperf et du SEO.",
  },
];

export const contactInfo = {
  email: "lionel.dabo@outlook.com",
  links: [
    { label: "LinkedIn", href: "https://linkedin.com", icon: "↗" },
    { label: "GitHub", href: "https://github.com", icon: "↗" },
    { label: "WhatsApp", href: "https://wa.me", icon: "💬" },
  ],
  subjects: [
    { value: "web", label: "Développement Web / Next.js" },
    { value: "mobile", label: "Application Mobile / React Native" },
    { value: "design", label: "UI/UX & Design System" },
    { value: "autre", label: "Autre opportunité / Collaboration" },
  ],
};
