import type { ThemeTokens } from '../../types/landing';

type Props = {
  text: string;
  theme: ThemeTokens;
};

export default function FooterSection({ text, theme }: Props) {
  return (
    <footer className={['border-t py-8 text-xs', theme.cardBorder, theme.mutedText].join(' ')}>
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-2 px-5 sm:px-8">
        <p>{text}</p>
        <p>© {new Date().getFullYear()} freelancerphungdao</p>
      </div>
    </footer>
  );
}
