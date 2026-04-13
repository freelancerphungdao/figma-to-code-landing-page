import { motion } from 'motion/react';
import type { LandingVariant, ThemeTokens } from '../../types/landing';

type Props = {
  variant: LandingVariant;
  theme: ThemeTokens;
};

export default function FaqSection({ variant, theme }: Props) {
  return (
    <section id="faq" className="py-10 md:py-14">
      <h2 className={`text-2xl font-semibold sm:text-3xl ${theme.sectionTitle}`}>
        Frequently asked questions
      </h2>
      <div className="mt-6 space-y-3">
        {variant.faq.map((item, index) => (
          <motion.details
            key={item.question}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.32, delay: index * 0.06 }}
            className={[
              'rounded-2xl border p-4',
              theme.cardBorder,
              theme.cardBg,
            ].join(' ')}
          >
            <summary className="cursor-pointer list-none text-sm font-semibold focus-visible:outline-none">
              {item.question}
            </summary>
            <p className={`mt-2 text-sm leading-relaxed ${theme.mutedText}`}>{item.answer}</p>
          </motion.details>
        ))}
      </div>
    </section>
  );
}
