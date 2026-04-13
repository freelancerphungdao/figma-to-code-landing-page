export type LandingVariant = {
  id: string;
  label: string;
  navLabel: string;
  badge: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  techStack: string[];
  valueCards: Array<{ title: string; description: string }>;
  features: Array<{ title: string; description: string }>;
  testimonials: Array<{
    quote: string;
    name: string;
    role: string;
  }>;
  pricing: Array<{
    name: string;
    price: string;
    note: string;
    items: string[];
    featured?: boolean;
  }>;
  faq: Array<{ question: string; answer: string }>;
  process: string[];
  contactTitle: string;
  contactDescription: string;
  contactEmail: string;
  footerText: string;
};

export type ThemeTokens = {
  pageBg: string;
  floatingA: string;
  floatingB: string;
  accentText: string;
  accentSoftBg: string;
  accentSoftBorder: string;
  primaryButton: string;
  secondaryButton: string;
  cardBorder: string;
  cardBg: string;
  sectionTitle: string;
  mutedText: string;
  inputBg: string;
  inputBorder: string;
  focusRing: string;
};
