import type { LandingVariant, ThemeTokens } from '../../types/landing';

type Props = {
  items: LandingVariant[];
  activeId: string;
  onChange: (id: string) => void;
  theme: ThemeTokens;
};

export default function VariantSwitcher({
  items,
  activeId,
  onChange,
  theme,
}: Props) {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Landing variants">
      {items.map((item) => {
        const active = item.id === activeId;

        return (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={active}
            aria-controls={`panel-${item.id}`}
            onClick={() => onChange(item.id)}
            className={[
              'rounded-full border px-3 py-1.5 text-xs font-semibold tracking-wide transition',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
              theme.focusRing,
              active
                ? `${theme.accentSoftBorder} ${theme.accentSoftBg} ${theme.accentText}`
                : 'border-white/20 text-white/75 hover:border-white/45 hover:text-white',
            ].join(' ')}
          >
            {item.navLabel}
          </button>
        );
      })}
    </div>
  );
}
