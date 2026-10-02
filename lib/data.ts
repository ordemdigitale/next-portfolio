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
  link?: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: "pdoc-web",
    category: "web",
    preview: "code",
    tags: ["Next.js", "Tailwind CSS", "FastAPI", "PostgreSQL"],
    title: "Développement de la PdoC",
    description:
      "Conception et développement de la Plateforme Digitale des Organisations de la Société Civile (PdoC). Mise en place de l'API REST et développement d'un portail d'administration dédié à la gestion des contenus.",
    cta: "explorer l'étude de cas",
    link: "https://plateforme-osci.org/",
    image: "/projects/pdoc-web.png",
  },
  {
    id: "educa",
    category: "web",
    preview: "tokens",
    tags: ["Django", "Tailwind CSS", "PostgreSQL"],
    title: "Développement d'Educa",
    description:
      "Conception et développement d'Educa, une plateforme éducative mettant en relation enseignants et apprenants. Inspirée des plateformes d'apprentissage en ligne, elle permet aux enseignants de partager leurs connaissances et aux apprenants d'accéder à des contenus pédagogiques.",
    cta: "Explorer le code",
    link: "https://github.com/mastadjayy/educa",
    image: "/projects/educa.png",
  },
/*   {
    id: "elearning-platform",
    category: "app",
    preview: "dashboard",
    tags: ["React.js", "Node.js", "PostgreSQL"],
    title: "Plateforme E-Learning & Certification",
    description:
      "Conception d'une application d'apprentissage interactive avec suivi de progression en temps réel, quiz adaptatifs et génération automatique d'attestations.",
    cta: "Détails & Démonstration",
    link: "https://api.plateforme-osci.org/redoc/",
    image: "/projects/pdoc-api.png",
  }, */
];

export const projectFilters: { label: string; value: Project["category"] | "all" }[] = [
    /* Update filter later */
/*  { label: "Tous (3)", value: "all" },
    { label: "Web", value: "web" },
    { label: "Design Systems", value: "design" },
    { label: "Applications", value: "app" }, */
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
        id: "backend-api",
        icon: "⚡",
        title: "Backend & Architecture API",
        description:
        "Développement d'APIs RESTful, conception d'architectures backend évolutives, sécurisation des accès et optimisation des interactions avec les bases de données.",
        tags: ["FastAPI", "Django", "PostgreSQL", "Prisma ORM"],
        span: "wide",
        accent: true,
    },
    {
        id: "frontend-mobile",
        icon: "💻",
        title: "Développement Frontend & Mobile",
        description:
        "Développement d'applications modernes et accessibles, avec une attention particulière portée à l'optimisation du code, à la fluidité des interactions et à une architecture maintenable.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
        span: "narrow",
    },
    {
        id: "methodology",
        icon: "🚀",
        title: "Méthodologie & Performance Web",
        description:
        "Une approche agile orientée résultat : CI/CD, tests automatisés, audits rigoureux et gestion de versions avec conventions strictes.",
        tags: ["Git & GitHub", "Docker", "SEO Technique"],
        span: "narrow",
    },
      {
        id: "ui-ux",
        icon: "🎨",
        title: "UI/UX & Design Systems",
        description:
          "Prototypage haute-fidélité et création d'écosystèmes visuels scalables basés sur des variables et des tokens standardisés.",
        tags: ["Figma", "Google Stitch", "Wireframing", "Micro-interactions"],
        span: "wide",
        accent: true,
      },
];

export const aboutHighlights = [
  {
    title: "Vision Globale",
    description: "Capacité à relier les besoins utilisateurs, l'interface et les contraintes techniques pour concevoir des solutions cohérentes et performantes.",
  },
  {
    title: "Sens du détail",
    description: "Attention portée à la qualité du code, aux performances, à l'accessibilité et à la fluidité de l'expérience utilisateur.",
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
    { label: "LinkedIn", href: "https://www.linkedin.com/in/lionel-dabo", icon: "↗" },
    { label: "GitHub", href: "https://github.com/mastadjayy", icon: "↗" },
    { label: "WhatsApp", href: "https://wa.me", icon: "💬" },
  ],
  subjects: [
    { value: "web", label: "Développement Web / Next.js" },
    { value: "mobile", label: "Application Mobile / React Native" },
    { value: "api", label: "Développement d'API" },
    { value: "integration", label: "Intégration de Solutions" },
    { value: "autre", label: "Autre opportunité / Collaboration" },
  ],
};
