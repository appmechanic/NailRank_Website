'use client';

import Link from 'next/link';
import { appStoreUrl, useInstallSource } from '../lib/installSource';

interface AppStoreButtonProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SIZES = {
  sm: { pad: 'px-4 py-2', icon: 'text-2xl w-6', label: 'text-[9px]', title: 'text-sm' },
  md: { pad: 'px-5 py-2.5', icon: 'text-3xl w-8', label: 'text-[10px]', title: 'text-base' },
  lg: { pad: 'px-6 py-3', icon: 'text-4xl w-10', label: 'text-[11px]', title: 'text-lg' },
};

export default function AppStoreButton({ size = 'md', className = '' }: AppStoreButtonProps) {
  const s = SIZES[size];
  const source = useInstallSource();
  return (
    <Link
      href={appStoreUrl(source)}
      target="_blank"
      rel="noopener"
      className={`inline-flex items-center gap-3 bg-white text-black rounded-xl ${s.pad} shadow-lg hover:bg-white/90 transition-colors ${className}`}
    >
      <i className={`ri-apple-fill shrink-0 text-center ${s.icon}`}></i>
      <div className="flex flex-col leading-tight text-left">
        <span className={`${s.label} uppercase tracking-wider text-black/60`}>Download on the</span>
        <span className={`${s.title} font-semibold`}>App Store</span>
      </div>
    </Link>
  );
}
