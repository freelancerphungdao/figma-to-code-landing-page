import { motion } from 'motion/react';
import { FormEvent, useMemo, useState } from 'react';
import type { LandingVariant, ThemeTokens } from '../../types/landing';

type Props = {
  variant: LandingVariant;
  theme: ThemeTokens;
};

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<FormValues>;

const initialValues: FormValues = {
  name: '',
  email: '',
  message: '',
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactSection({ variant, theme }: Props) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  const validate = (payload: FormValues): FormErrors => {
    const next: FormErrors = {};

    if (payload.name.trim().length < 2) {
      next.name = 'Please enter at least 2 characters.';
    }

    if (!emailRegex.test(payload.email)) {
      next.email = 'Please enter a valid email address.';
    }

    if (payload.message.trim().length < 10) {
      next.message = 'Please provide at least 10 characters.';
    }

    return next;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setStatus('idle');

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 650));
    setIsSubmitting(false);
    setStatus('success');
    setValues(initialValues);
  };

  const inputClass = [
    'w-full rounded-xl border px-3 py-2 text-sm text-white placeholder:text-white/45',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
    theme.inputBg,
    theme.inputBorder,
    theme.focusRing,
  ].join(' ');

  return (
    <section id="contact" className="py-10 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.35 }}
        className={[
          'rounded-3xl border p-6 sm:p-8',
          theme.accentSoftBorder,
          theme.accentSoftBg,
        ].join(' ')}
      >
        <h2 className="text-2xl font-semibold sm:text-3xl">{variant.contactTitle}</h2>
        <p className={`mt-3 max-w-2xl text-sm sm:text-base ${theme.mutedText}`}>
          {variant.contactDescription}
        </p>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <form noValidate onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase">Name</label>
              <input
                className={inputClass}
                value={values.name}
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, name: event.target.value }))
                }
                placeholder="Jane Doe"
                autoComplete="name"
              />
              {errors.name && <p className="mt-1 text-xs text-rose-300">{errors.name}</p>}
            </div>

            <div>
              <label className="mb-1 block text-xs font-semibold uppercase">Email</label>
              <input
                className={inputClass}
                value={values.email}
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, email: event.target.value }))
                }
                type="email"
                placeholder="jane@company.com"
                autoComplete="email"
              />
              {errors.email && <p className="mt-1 text-xs text-rose-300">{errors.email}</p>}
            </div>

            <div>
              <label className="mb-1 block text-xs font-semibold uppercase">Message</label>
              <textarea
                className={`${inputClass} min-h-28 resize-y`}
                value={values.message}
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, message: event.target.value }))
                }
                placeholder="Tell me your project scope and timeline"
              />
              {errors.message && (
                <p className="mt-1 text-xs text-rose-300">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={[
                'rounded-full px-6 py-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-70',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
                theme.focusRing,
                theme.primaryButton,
              ].join(' ')}
            >
              {isSubmitting ? 'Sending...' : 'Send inquiry'}
            </button>

            {!hasErrors && status === 'success' && (
              <p className={`text-sm ${theme.accentText}`}>
                Message captured. Connect this form to Formspree, Resend, or your API route.
              </p>
            )}
          </form>

          <div className={['rounded-2xl border p-5', theme.cardBorder, theme.inputBg].join(' ')}>
            <p className="text-sm font-semibold">Direct Contact</p>
            <a
              href={`mailto:${variant.contactEmail}`}
              className={[
                'mt-2 inline-block text-sm underline decoration-dotted underline-offset-4',
                theme.accentText,
              ].join(' ')}
            >
              {variant.contactEmail}
            </a>
            <p className={`mt-4 text-sm leading-relaxed ${theme.mutedText}`}>
              This demo form uses front-end validation and mock submit. For real projects,
              plug into your backend endpoint or a form service.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
