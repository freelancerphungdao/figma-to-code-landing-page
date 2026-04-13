import { motion } from 'motion/react';
import type { LandingVariant, ThemeTokens } from '../../types/landing';

type Props = {
  variant: LandingVariant;
  theme: ThemeTokens;
};

export default function TestimonialsSection({ variant, theme }: Props) {
  return (
    <section id="testimonials" className="py-10 md:py-14">
      <h2 className={`text-2xl font-semibold sm:text-3xl ${theme.sectionTitle}`}>
        Client feedback
      </h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {variant.testimonials.map((item, index) => (
          <motion.figure
            key={item.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
            className={[
              'rounded-2xl border p-5',
              theme.cardBorder,
              theme.cardBg,
            ].join(' ')}
          >
            <blockquote className="text-sm leading-relaxed">“{item.quote}”</blockquote>
            <figcaption className={`mt-4 text-xs ${theme.mutedText}`}>
              <span className="block font-semibold text-white">{item.name}</span>
              <span>{item.role}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
