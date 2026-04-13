import { motion } from 'motion/react';

const features = [
  {
    title: 'Responsive by Default',
    description:
      'Designed for mobile, tablet, and desktop with scalable spacing and typography.',
  },
  {
    title: 'Figma-Accurate Output',
    description:
      'Convert design details into clean, reusable components without visual drift.',
  },
  {
    title: 'Lightweight Animation',
    description:
      'Subtle motion for sections and cards to improve perceived quality and flow.',
  },
];

const steps = [
  'Share your Figma frame and requirements',
  'Translate structure into reusable React components',
  'Ship a production-ready live demo',
];

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-12rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-[-10rem] right-[-8rem] h-[24rem] w-[24rem] rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-6 sm:px-8">
        <p className="text-sm font-semibold tracking-[0.18em] text-cyan-300 uppercase">
          FIGMA TO CODE
        </p>
        <a
          href="#contact"
          className="rounded-full border border-white/20 px-4 py-2 text-sm transition hover:border-cyan-300 hover:text-cyan-300"
        >
          Contact
        </a>
      </header>

      <main className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24">
        <section className="grid items-center gap-10 py-10 md:grid-cols-2 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <p className="mb-4 inline-block rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-xs font-semibold tracking-wider text-cyan-200 uppercase">
              Freelance-ready landing page
            </p>
            <h1 className="text-4xl leading-tight font-bold text-balance sm:text-5xl lg:text-6xl">
              Turn Figma designs into clean, responsive production code.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Built with React, TypeScript, and Tailwind CSS. Optimized for speed,
              readability, and smooth handoff.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#features"
                className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Explore Features
              </a>
              <a
                href="#process"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition hover:border-cyan-300 hover:text-cyan-300"
              >
                See Process
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur"
          >
            <p className="text-sm text-slate-300">Tech Stack</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Tailwind', 'Vite', 'Motion'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-300/25 bg-cyan-300/8 px-3 py-1 text-xs font-medium text-cyan-200"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                <p className="text-sm font-semibold">Clean Structure</p>
                <p className="mt-1 text-sm text-slate-300">
                  Modular sections, consistent spacing system, readable naming.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                <p className="text-sm font-semibold">Performance Focus</p>
                <p className="mt-1 text-sm text-slate-300">
                  Minimal dependencies and lightweight visual effects.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="features" className="py-10 md:py-14">
          <h2 className="text-2xl font-semibold sm:text-3xl">What This Repo Shows</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {feature.description}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="process" className="py-10 md:py-14">
          <h2 className="text-2xl font-semibold sm:text-3xl">Workflow</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.38, delay: index * 0.08 }}
                className="rounded-2xl border border-white/10 bg-slate-900/70 p-5"
              >
                <p className="text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase">
                  Step {index + 1}
                </p>
                <p className="mt-2 text-sm text-slate-200">{step}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-10 md:py-16">
          <div className="rounded-3xl border border-cyan-300/35 bg-cyan-300/8 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Need your Figma converted quickly?
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-200 sm:text-base">
              Use this template as your starting point, then customize brand colors,
              fonts, and content for each freelance project.
            </p>
            <div className="mt-6">
              <a
                href="mailto:hello@example.com"
                className="inline-flex rounded-full bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white"
              >
                hello@example.com
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
