import AppStoreButton from './AppStoreButton';
import GooglePlayButton from './GooglePlayButton';

interface StoreButtonsProps {
  size?: 'sm' | 'md' | 'lg';
  align?: 'start' | 'center';
  className?: string;
}

export default function StoreButtons({ size = 'lg', align = 'center', className = '' }: StoreButtonsProps) {
  return (
    <div
      className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 ${align === 'center' ? 'justify-center' : 'justify-center lg:justify-start'} ${className}`}
    >
      <AppStoreButton size={size} className="w-full sm:w-auto justify-center" />
      <GooglePlayButton size={size} className="w-full sm:w-auto justify-center" />
    </div>
  );
}
