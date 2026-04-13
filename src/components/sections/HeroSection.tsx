import { motion } from 'motion/react';
import type { LandingVariant, ThemeTokens } from '../../types/landing';

type Props = {
  variant: LandingVariant;
  theme: ThemeTokens;
};

export default function HeroSection({ variant, theme }: Props) {
  return (
    <section className="grid items-center gap-10 py-8 md:grid-cols-2 md:py-14">
      <motion.div
        id={`panel-${variant.id}`}
        role="tabpanel"
        aria-label={`${variant.label} content`}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <p
          className={[
            'mb-4 inline-block rounded-full border px-3 py-1 text-xs font-semibold tracking-wider uppercase',
            theme.accentSoftBorder,
            theme.accentSoftBg,
            theme.accentText,
          ].join(' ')}
        >
          {variant.badge}
        </p>
        <h1 className="text-4xl leading-tight font-bold text-balance sm:text-5xl lg:text-6xl">
          {variant.title}
        </h1>
        <p className={`mt-5 max-w-xl text-base leading-relaxed sm:text-lg ${theme.mutedText}`}>
          {variant.subtitle}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={variant.primaryCta.href}
            className={[
              'rounded-full px-6 py-3 text-sm font-semibold transition',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
              theme.focusRing,
              theme.primaryButton,
            ].join(' ')}
          >
            {variant.primaryCta.label}
          </a>
          <a
            href={variant.secondaryCta.href}
            className={[
              'rounded-full border px-6 py-3 text-sm font-semibold transition',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
              theme.focusRing,
              theme.secondaryButton,
            ].join(' ')}
          >
            {variant.secondaryCta.label}
          </a>
        </div>
      </motion.div>

      <motion.aside
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.08, ease: 'easeOut' }}
        className={[
          'rounded-3xl border p-6 shadow-2xl backdrop-blur',
          theme.cardBorder,
          theme.cardBg,
        ].join(' ')}
      >
        <p className={`text-sm ${theme.mutedText}`}>Tech Stack</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {variant.techStack.map((item) => (
            <span
              key={item}
              className={[
                'rounded-full border px-3 py-1 text-xs font-medium',
                theme.accentSoftBorder,
                theme.accentSoftBg,
                theme.accentText,
              ].join(' ')}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-8 space-y-4">
          {variant.valueCards.map((card) => (
            <div
              key={card.title}
              className={[
                'rounded-2xl border p-4',
                theme.cardBorder,
                theme.inputBg,
              ].join(' ')}
            >
              <p className="text-sm font-semibold">{card.title}</p>
              <p className={`mt-1 text-sm ${theme.mutedText}`}>{card.description}</p>
            </div>
          ))}
        </div>
      </motion.aside>
    </section>
  );
}
