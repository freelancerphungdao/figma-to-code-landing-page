import { motion } from 'motion/react';
import type { LandingVariant, ThemeTokens } from '../../types/landing';

type Props = {
  variant: LandingVariant;
  theme: ThemeTokens;
};

export default function PricingSection({ variant, theme }: Props) {
  return (
    <section id="pricing" className="py-10 md:py-14">
      <h2 className={`text-2xl font-semibold sm:text-3xl ${theme.sectionTitle}`}>
        Sample pricing tiers
      </h2>
      <p className={`mt-3 text-sm ${theme.mutedText}`}>
        Pricing is illustrative for freelance proposals. Replace with your own rates.
      </p>
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {variant.pricing.map((plan, index) => (
          <motion.article
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: index * 0.07 }}
            className={[
              'rounded-2xl border p-5',
              theme.cardBorder,
              plan.featured ? `${theme.accentSoftBg} ${theme.accentSoftBorder}` : theme.cardBg,
            ].join(' ')}
          >
            <p className="text-sm font-semibold">{plan.name}</p>
            <p className="mt-2 text-3xl font-bold">{plan.price}</p>
            <p className={`mt-2 text-sm ${theme.mutedText}`}>{plan.note}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {plan.items.map((item) => (
                <li key={item} className={theme.mutedText}>
                  • {item}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
