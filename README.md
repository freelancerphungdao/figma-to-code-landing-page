# Figma to Code Landing Page

A freelance-ready landing page template built with **React + TypeScript + Vite**.

This repository demonstrates:

- Responsive implementation for mobile, tablet, and desktop
- Clean component-based structure
- Lightweight section animations
- Production-ready setup with linting and formatting
- Live deployment flow for Vercel

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS v4
- Motion (for animations)
- ESLint + Prettier

## Getting Started

1. Install dependencies:

```bash
pnpm install
```

2. Run the development server:

```bash
pnpm dev
```

3. Open `http://localhost:5173`

## Scripts

- `pnpm dev` - start local dev server
- `pnpm build` - type-check and build for production
- `pnpm preview` - preview production build locally
- `pnpm lint` - run lint checks
- `pnpm lint:fix` - auto-fix lint issues
- `pnpm format` - format files with Prettier
- `pnpm format:check` - verify formatting

## Deploy Live Demo (Vercel)

1. Push this repo to GitHub.
2. Go to Vercel and create a new project from the GitHub repository.
3. Keep default settings:
   - Framework Preset: `Vite`
   - Build Command: `pnpm build`
   - Output Directory: `dist`
4. Deploy.

After deployment, add the live URL to your portfolio and freelance proposals.

## Project Structure

```text
.
├── src
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.app.json
├── tsconfig.node.json
├── tsconfig.json
└── vite.config.ts
```

## Notes

- Replace placeholder contact info in `src/App.tsx`.
- Tune typography, colors, and spacing per Figma file.
- Keep animations subtle for better performance and UX.
