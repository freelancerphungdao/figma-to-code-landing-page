# Figma to Code Landing Page

Freelance-focused landing page template built with **React + TypeScript + Vite**.

This repository is designed to help you win and deliver landing-page freelance jobs faster.

## Live Demo

- Demo URL: `https://<your-vercel-domain>.vercel.app`

## What This Repo Demonstrates

- Responsive implementation for mobile, tablet, and desktop
- Reusable section architecture for rapid client customization
- Lightweight animation with performance-friendly motion
- Clean code standards with ESLint and Prettier
- Portfolio-ready delivery workflow with handoff checklist

## Built With

- React 19.2.5
- TypeScript 6.0.2
- Vite 6.4.1
- Tailwind CSS 4.2.2
- Motion 12.38.0 (animation)
- ESLint + Prettier

## Multi-Variant Showcase

The page includes three visual/content variants to demonstrate flexibility during client pitching:

- `SaaS Startup`
- `Creative Agency`
- `Product Launch`

Switch between variants from the header to show adaptation speed.

## Reusable Sections

All major landing blocks are componentized and data-driven:

- Hero
- Features
- Testimonials
- Pricing
- FAQ
- Process
- Contact Form
- Footer

Content is managed from `src/content/variants.ts`.

## Contact Form (Freelance Utility)

The contact section includes:

- Client-side validation (`name`, `email`, `message`)
- Mock async submit state
- Integration note for Formspree/Resend/custom API

This is enough for demo proposals and easy to connect to production forms.

## SEO and Social Preview

Included in `index.html`:

- Meta title and description
- Canonical URL
- Open Graph tags
- Twitter card tags
- Favicon and OG image assets in `/public`

## Project Structure

```text
.
├── public
│   ├── favicon.svg
│   └── og-cover.svg
├── src
│   ├── components/sections
│   ├── content/variants.ts
│   ├── types/landing.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── CLIENT-HANDOFF.md
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.ts
```

## Getting Started

1. Install dependencies

```bash
pnpm install
```

2. Start local development

```bash
pnpm dev
```

3. Build production output

```bash
pnpm build
```

4. Preview production build

```bash
pnpm preview
```

## Scripts

- `pnpm dev` - Run dev server
- `pnpm build` - Type-check and build
- `pnpm preview` - Preview built app
- `pnpm lint` - Lint code
- `pnpm lint:fix` - Fix lint issues
- `pnpm format` - Format files
- `pnpm format:check` - Check formatting

## Deploy to Vercel

1. Push repository to GitHub
2. Import project in Vercel
3. Keep defaults for Vite:
   - Build Command: `pnpm build`
   - Output Directory: `dist`
4. Deploy

## Screenshot Checklist (for portfolio quality)

Capture and place screenshots in your portfolio docs:

- Mobile hero + CTA
- Tablet section layout
- Desktop full-page view
- Variant switcher preview
- Contact form validation state

## Freelance Packaging Suggestions

Use this repo to offer clear package tiers in proposals:

- Basic: one responsive landing page
- Standard: landing + animations + contact form integration
- Premium: standard + performance pass + handoff package

## Typical Delivery Timeline

- Initial build: 1 to 2 days
- Revision round: 0.5 to 1 day
- Final polish + deploy: 0.5 day

## Handoff

See [CLIENT-HANDOFF.md](./CLIENT-HANDOFF.md) for the full delivery checklist.
