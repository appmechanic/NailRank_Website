import Link from 'next/link';

export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.nail.ranks';

interface GooglePlayButtonProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SIZES = {
  sm: { pad: 'px-4 py-2', icon: 'text-2xl w-6', label: 'text-[9px]', title: 'text-sm' },
  md: { pad: 'px-5 py-2.5', icon: 'text-3xl w-8', label: 'text-[10px]', title: 'text-base' },
  lg: { pad: 'px-6 py-3', icon: 'text-4xl w-10', label: 'text-[11px]', title: 'text-lg' },
};

export default function GooglePlayButton({ size = 'md', className = '' }: GooglePlayButtonProps) {
  const s = SIZES[size];
  return (
    <Link
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener"
      className={`inline-flex items-center gap-3 bg-white/5 border border-[#F0C4B7]/30 text-white rounded-xl ${s.pad} hover:bg-white/10 hover:border-[#F0C4B7]/60 transition-all`}
    >
      <i className={`ri-google-play-fill shrink-0 text-center text-[#F0C4B7] ${s.icon}`}></i>
      <div className="flex flex-col leading-tight text-left">
        <span className={`${s.label} uppercase tracking-wider text-white/50`}>Get it on</span>
        <span className={`${s.title} font-semibold`}>Google Play</span>
      </div>
    </Link>
  );
}
