import type { LandingVariant, ThemeTokens } from '../types/landing';

export const themeByVariant: Record<string, ThemeTokens> = {
  saas: {
    pageBg: 'bg-slate-950 text-slate-100',
    floatingA: 'bg-cyan-500/20',
    floatingB: 'bg-indigo-500/20',
    accentText: 'text-cyan-300',
    accentSoftBg: 'bg-cyan-300/10',
    accentSoftBorder: 'border-cyan-300/40',
    primaryButton: 'bg-cyan-400 text-slate-950 hover:bg-cyan-300',
    secondaryButton: 'border-white/20 hover:border-cyan-300 hover:text-cyan-300',
    cardBorder: 'border-white/10',
    cardBg: 'bg-white/5',
    sectionTitle: 'text-slate-100',
    mutedText: 'text-slate-300',
    inputBg: 'bg-slate-900/70',
    inputBorder: 'border-white/15',
    focusRing: 'focus-visible:ring-cyan-300',
  },
  agency: {
    pageBg: 'bg-zinc-950 text-zinc-100',
    floatingA: 'bg-amber-400/20',
    floatingB: 'bg-orange-500/20',
    accentText: 'text-amber-300',
    accentSoftBg: 'bg-amber-300/10',
    accentSoftBorder: 'border-amber-300/40',
    primaryButton: 'bg-amber-300 text-zinc-900 hover:bg-amber-200',
    secondaryButton: 'border-white/20 hover:border-amber-300 hover:text-amber-300',
    cardBorder: 'border-white/10',
    cardBg: 'bg-white/5',
    sectionTitle: 'text-zinc-100',
    mutedText: 'text-zinc-300',
    inputBg: 'bg-zinc-900/70',
    inputBorder: 'border-white/15',
    focusRing: 'focus-visible:ring-amber-300',
  },
  product: {
    pageBg: 'bg-emerald-950 text-emerald-50',
    floatingA: 'bg-lime-400/20',
    floatingB: 'bg-emerald-400/20',
    accentText: 'text-lime-300',
    accentSoftBg: 'bg-lime-300/10',
    accentSoftBorder: 'border-lime-300/40',
    primaryButton: 'bg-lime-300 text-emerald-950 hover:bg-lime-200',
    secondaryButton: 'border-white/25 hover:border-lime-300 hover:text-lime-300',
    cardBorder: 'border-white/15',
    cardBg: 'bg-white/7',
    sectionTitle: 'text-emerald-50',
    mutedText: 'text-emerald-100/80',
    inputBg: 'bg-emerald-900/65',
    inputBorder: 'border-white/20',
    focusRing: 'focus-visible:ring-lime-300',
  },
};

export const landingVariants: LandingVariant[] = [
  {
    id: 'saas',
    label: 'SaaS Startup',
    navLabel: 'SaaS',
    badge: 'Freelance-ready SaaS landing',
    title: 'Turn Figma screens into responsive production code.',
    subtitle:
      'Built for startup product pages with polished UI, clear hierarchy, and fast delivery.',
    primaryCta: { label: 'View Features', href: '#features' },
    secondaryCta: { label: 'See Workflow', href: '#process' },
    techStack: ['React', 'TypeScript', 'Tailwind', 'Vite', 'Motion'],
    valueCards: [
      {
        title: 'Fast Iteration',
        description: 'Ship a presentable first version in hours, not days.',
      },
      {
        title: 'Clean Handoff',
        description: 'Consistent naming and structure for team collaboration.',
      },
    ],
    features: [
      {
        title: 'Responsive by Default',
        description:
          'Layouts are tuned for mobile, tablet, and desktop with fluid spacing.',
      },
      {
        title: 'Figma-Accurate UI',
        description: 'Components mirror design intent with predictable behavior.',
      },
      {
        title: 'Light Motion',
        description: 'Subtle animations that elevate quality without hurting speed.',
      },
    ],
    testimonials: [
      {
        quote: 'The first draft looked client-ready in one day and needed minimal revisions.',
        name: 'Emma Lin',
        role: 'Product Manager, Nitrolytics',
      },
      {
        quote: 'Excellent component structure. Our in-house team could continue instantly.',
        name: 'David Tran',
        role: 'CTO, BuildLayer',
      },
      {
        quote: 'Strong visual fidelity from Figma while keeping performance under control.',
        name: 'Lucas Green',
        role: 'Founder, PilotFlow',
      },
    ],
    pricing: [
      {
        name: 'Starter',
        price: '$350',
        note: 'Single-page MVP for early demos.',
        items: ['1 landing page', 'Responsive layout', 'Basic SEO meta'],
      },
      {
        name: 'Growth',
        price: '$650',
        note: 'Most common freelance package.',
        featured: true,
        items: [
          'Everything in Starter',
          'Animations + section variants',
          'Contact form with validation',
        ],
      },
      {
        name: 'Premium',
        price: '$1,100',
        note: 'For launch-ready brand pages.',
        items: ['Everything in Growth', 'Performance pass', 'Client handoff docs'],
      },
    ],
    faq: [
      {
        question: 'Can you match my exact Figma design?',
        answer:
          'Yes. The build process targets visual parity first, then adds reusable structure.',
      },
      {
        question: 'How long does a one-page landing take?',
        answer: 'Typical delivery is 1 to 2 days depending on revision rounds.',
      },
      {
        question: 'Can this be deployed quickly?',
        answer: 'Yes. Vercel deployment is included in the setup workflow.',
      },
    ],
    process: [
      'Collect Figma frame and requirements',
      'Build reusable sections in React + Tailwind',
      'QA on mobile/tablet/desktop and ship live demo',
    ],
    contactTitle: 'Need a fast Figma-to-code delivery?',
    contactDescription:
      'Share your Figma link and deadline. I will estimate timeline and scope clearly.',
    contactEmail: 'freelancerphungdao@gmail.com',
    footerText: 'Built for freelance landing-page delivery with clean handoff.',
  },
  {
    id: 'agency',
    label: 'Creative Agency',
    navLabel: 'Agency',
    badge: 'Portfolio-focused agency landing',
    title: 'Launch agency websites that look premium on every screen.',
    subtitle:
      'Structured for creative studios that need striking visuals and reliable responsive behavior.',
    primaryCta: { label: 'See Portfolio Blocks', href: '#features' },
    secondaryCta: { label: 'Read Client Flow', href: '#process' },
    techStack: ['React', 'TypeScript', 'Tailwind', 'Motion'],
    valueCards: [
      {
        title: 'Design-First Execution',
        description: 'Typography and spacing preserve premium brand feeling.',
      },
      {
        title: 'Reusable Blocks',
        description: 'Swap portfolio, services, and proof sections quickly per client.',
      },
    ],
    features: [
      {
        title: 'Portfolio-ready Sections',
        description: 'Services, case studies, testimonials, and CTA blocks are modular.',
      },
      {
        title: 'Easy Brand Customization',
        description: 'Change color, tone, and content from one config source.',
      },
      {
        title: 'Presentation Quality',
        description: 'Ideal for proposal demos and discovery calls with clients.',
      },
    ],
    testimonials: [
      {
        quote: 'This template helped us pitch 3 new clients in the same week.',
        name: 'Nina Carter',
        role: 'Creative Director, Brightline Studio',
      },
      {
        quote: 'The landing adapts to different brand kits with almost no code changes.',
        name: 'Aiden Ho',
        role: 'Agency Owner, Orbit North',
      },
      {
        quote: 'Super clear structure, perfect for fast freelance delivery.',
        name: 'Ivy Chen',
        role: 'Freelance Designer',
      },
    ],
    pricing: [
      {
        name: 'Concept',
        price: '$420',
        note: 'Single visual direction + implementation.',
        items: ['Hero + core sections', 'Responsive layout', 'Deployment support'],
      },
      {
        name: 'Studio',
        price: '$780',
        note: 'Recommended for active agencies.',
        featured: true,
        items: ['Multiple section variants', 'Animation polish', 'SEO + social cards'],
      },
      {
        name: 'Campaign',
        price: '$1,250',
        note: 'Built for launch campaigns.',
        items: ['Everything in Studio', 'Two landing variants', 'Post-launch fixes'],
      },
    ],
    faq: [
      {
        question: 'Can we add case-study pages later?',
        answer:
          'Yes. This structure supports extending from one landing to a multi-page site.',
      },
      {
        question: 'Do you support brand system integration?',
        answer: 'Yes. Colors, typography, and spacing can follow your existing system.',
      },
      {
        question: 'Is this suitable for white-label freelance work?',
        answer: 'Yes. It is cleanly organized for handoff to agency clients.',
      },
    ],
    process: [
      'Align on visual direction and target audience',
      'Implement reusable sections with brand styling',
      'Finalize responsive QA and deliver handoff package',
    ],
    contactTitle: 'Need an agency-grade landing page?',
    contactDescription:
      'Send your style references and content outline. I will map a clear delivery plan.',
    contactEmail: 'freelancerphungdao@gmail.com',
    footerText: 'Agency-friendly architecture for fast custom client work.',
  },
  {
    id: 'product',
    label: 'Product Launch',
    navLabel: 'Product',
    badge: 'Conversion-oriented product launch page',
    title: 'Convert product ideas into launch-ready landing pages fast.',
    subtitle:
      'Built for indie products and app launches that need trust, clarity, and speed.',
    primaryCta: { label: 'Explore Conversion Sections', href: '#features' },
    secondaryCta: { label: 'Check Delivery Steps', href: '#process' },
    techStack: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    valueCards: [
      {
        title: 'Conversion Clarity',
        description: 'Clear hierarchy guides users from headline to action.',
      },
      {
        title: 'Launch Flexibility',
        description: 'Add waitlist, pricing, or feature blocks without refactor pain.',
      },
    ],
    features: [
      {
        title: 'Value-first Messaging',
        description: 'Section flow is optimized for product understanding and trust.',
      },
      {
        title: 'Fast Iteration Loop',
        description: 'Content updates are config-driven to keep revisions inexpensive.',
      },
      {
        title: 'Accessible UI Baseline',
        description: 'Focus states, readable contrast, and semantic section structure.',
      },
    ],
    testimonials: [
      {
        quote: 'We validated our product narrative before writing backend code.',
        name: 'Maya Brooks',
        role: 'Founder, Sprintly',
      },
      {
        quote: 'The page looked polished on mobile where most of our users came from.',
        name: 'Ethan Vu',
        role: 'Growth Lead, Stackline',
      },
      {
        quote: 'Quick turnaround and clean architecture for future feature pages.',
        name: 'Rina Patel',
        role: 'Product Designer, Loopnest',
      },
    ],
    pricing: [
      {
        name: 'Launch Lite',
        price: '$390',
        note: 'For early waitlist pages.',
        items: ['Hero + feature flow', 'Responsive build', 'Basic contact form'],
      },
      {
        name: 'Launch Pro',
        price: '$720',
        note: 'Best for first public release.',
        featured: true,
        items: ['Advanced section set', 'Animation polish', 'SEO and social metadata'],
      },
      {
        name: 'Launch Scale',
        price: '$1,180',
        note: 'For teams shipping rapidly.',
        items: ['Everything in Pro', 'Variant support', 'Post-handoff QA support'],
      },
    ],
    faq: [
      {
        question: 'Can this integrate with analytics tools?',
        answer:
          'Yes. The structure makes it straightforward to add analytics scripts and events.',
      },
      {
        question: 'Can I replace pricing with waitlist quickly?',
        answer: 'Yes. Sections are modular and can be swapped without touching core layout.',
      },
      {
        question: 'Do you provide post-delivery fixes?',
        answer: 'Yes. You can define a support window in your freelance agreement.',
      },
    ],
    process: [
      'Define product positioning and key conversion goals',
      'Implement modular sections and form capture',
      'Run responsive QA and prepare deployment handoff',
    ],
    contactTitle: 'Shipping a product launch page soon?',
    contactDescription:
      'Share your launch date, Figma link, and target audience for a scoped estimate.',
    contactEmail: 'freelancerphungdao@gmail.com',
    footerText: 'Optimized for product-launch freelance engagements.',
  },
];

export const defaultVariantId = landingVariants[0].id;
