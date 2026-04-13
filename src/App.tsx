import { useMemo, useState } from 'react';
import FeaturesSection from './components/sections/FeaturesSection';
import ContactSection from './components/sections/ContactSection';
import FaqSection from './components/sections/FaqSection';
import FooterSection from './components/sections/FooterSection';
import HeroSection from './components/sections/HeroSection';
import PricingSection from './components/sections/PricingSection';
import ProcessSection from './components/sections/ProcessSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import VariantSwitcher from './components/sections/VariantSwitcher';
import { defaultVariantId, landingVariants, themeByVariant } from './content/variants';

function App() {
  const [activeVariantId, setActiveVariantId] = useState(defaultVariantId);

  const variant =
    landingVariants.find((item) => item.id === activeVariantId) ?? landingVariants[0];
  const theme = useMemo(() => themeByVariant[variant.id], [variant.id]);

  return (
    <div className={`min-h-screen ${theme.pageBg}`}>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
        <div
          className={`absolute left-1/2 top-[-12rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full blur-3xl ${theme.floatingA}`}
        />
        <div
          className={`absolute bottom-[-10rem] right-[-8rem] h-[24rem] w-[24rem] rounded-full blur-3xl ${theme.floatingB}`}
        />
      </div>

      <header className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-6 sm:px-8">
        <div>
          <p className={`text-sm font-semibold tracking-[0.18em] uppercase ${theme.accentText}`}>
            FIGMA TO CODE
          </p>
          <p className={`mt-1 text-xs ${theme.mutedText}`}>Freelance Landing Portfolio</p>
        </div>

        <VariantSwitcher
          items={landingVariants}
          activeId={variant.id}
          onChange={setActiveVariantId}
          theme={theme}
        />
      </header>

      <main className="mx-auto w-full max-w-6xl px-5 pb-12 sm:px-8 sm:pb-20">
        <HeroSection variant={variant} theme={theme} />
        <FeaturesSection variant={variant} theme={theme} />
        <TestimonialsSection variant={variant} theme={theme} />
        <PricingSection variant={variant} theme={theme} />
        <FaqSection variant={variant} theme={theme} />
        <ProcessSection variant={variant} theme={theme} />
        <ContactSection variant={variant} theme={theme} />
      </main>

      <FooterSection text={variant.footerText} theme={theme} />
    </div>
  );
}

export default App;
