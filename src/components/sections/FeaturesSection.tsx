import { motion } from 'motion/react';
import type { LandingVariant, ThemeTokens } from '../../types/landing';

type Props = {
  variant: LandingVariant;
  theme: ThemeTokens;
};

export default function FeaturesSection({ variant, theme }: Props) {
  return (
    <section id="features" className="py-10 md:py-14">
      <h2 className={`text-2xl font-semibold sm:text-3xl ${theme.sectionTitle}`}>
        What this template demonstrates
      </h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {variant.features.map((feature, index) => (
          <motion.article
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
            className={[
              'rounded-2xl border p-5',
              theme.cardBorder,
              theme.cardBg,
            ].join(' ')}
          >
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className={`mt-2 text-sm leading-relaxed ${theme.mutedText}`}>
              {feature.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
