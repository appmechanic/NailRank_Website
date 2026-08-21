import Link from 'next/link';

export const APP_STORE_URL = 'https://apps.apple.com/za/app/nailranks/id6761611217';

interface AppStoreButtonProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SIZES = {
  sm: { pad: 'px-4 py-2', icon: 'text-2xl', label: 'text-[9px]', title: 'text-sm' },
  md: { pad: 'px-5 py-2.5', icon: 'text-3xl', label: 'text-[10px]', title: 'text-base' },
  lg: { pad: 'px-6 py-3', icon: 'text-4xl', label: 'text-[11px]', title: 'text-lg' },
};

export default function AppStoreButton({ size = 'md', className = '' }: AppStoreButtonProps) {
  const s = SIZES[size];
  return (
    <Link
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener"
      className={`inline-flex items-center gap-3 bg-white text-black rounded-xl ${s.pad} shadow-lg hover:bg-white/90 transition-colors ${className}`}
    >
      <i className={`ri-apple-fill ${s.icon}`}></i>
      <div className="flex flex-col leading-tight text-left">
        <span className={`${s.label} uppercase tracking-wider text-black/60`}>Download on the</span>
        <span className={`${s.title} font-semibold`}>App Store</span>
      </div>
    </Link>
  );
}
