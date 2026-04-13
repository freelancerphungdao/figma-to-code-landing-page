import { motion } from 'motion/react';
import type { LandingVariant, ThemeTokens } from '../../types/landing';

type Props = {
  variant: LandingVariant;
  theme: ThemeTokens;
};

export default function ProcessSection({ variant, theme }: Props) {
  return (
    <section id="process" className="py-10 md:py-14">
      <h2 className={`text-2xl font-semibold sm:text-3xl ${theme.sectionTitle}`}>
        Delivery workflow
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {variant.process.map((step, index) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.34, delay: index * 0.07 }}
            className={[
              'rounded-2xl border p-5',
              theme.cardBorder,
              theme.inputBg,
            ].join(' ')}
          >
            <p className={`text-xs font-semibold tracking-[0.2em] uppercase ${theme.accentText}`}>
              Step {index + 1}
            </p>
            <p className={`mt-2 text-sm ${theme.mutedText}`}>{step}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
