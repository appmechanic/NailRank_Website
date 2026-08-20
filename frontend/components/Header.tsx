'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import WaitlistModal from './WaitlistModal';
import AppStoreButton from './AppStoreButton';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
];

export default function Header() {
  const [androidOpen, setAndroidOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d0514]/85 backdrop-blur-md border-b border-[#F0C4B7]/10">
        <div className="flex items-center justify-between px-4 md:px-8 py-3">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Image
              src="https://static.readdy.ai/image/d62f11b01068b1ff4f20caf5771ddf21/80c3779816c9e51059be9ad9837e9da9.png"
              alt="NailRanks"
              width={110}
              height={36}
              className="object-contain h-9 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors whitespace-nowrap ${pathname === link.href ? 'text-[#F0C4B7]' : 'text-white/70 hover:text-[#F0C4B7]'}`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => setAndroidOpen(true)}
              className="whitespace-nowrap text-white/70 hover:text-[#F0C4B7] text-sm border border-[#F0C4B7]/25 hover:border-[#F0C4B7]/50 px-4 py-2 rounded-full transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <i className="ri-android-line text-[#F0C4B7]"></i> Android Waitlist
            </button>
            <AppStoreButton size="sm" />
          </div>

          {/* Mobile Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <AppStoreButton size="sm" className="hidden sm:inline-flex" />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-9 h-9 flex items-center justify-center text-white/80 cursor-pointer"
            >
              <i className={`${menuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="lg:hidden border-t border-[#F0C4B7]/10 bg-[#0d0514]/95 px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`py-2.5 px-3 rounded-lg text-sm transition-colors ${pathname === link.href ? 'text-[#F0C4B7] bg-[#F0C4B7]/10' : 'text-white/70 hover:text-[#F0C4B7] hover:bg-white/5'}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <AppStoreButton size="md" className="w-full justify-center sm:hidden" />
              <button
                onClick={() => { setAndroidOpen(true); setMenuOpen(false); }}
                className="whitespace-nowrap w-full bg-white/5 border border-[#F0C4B7]/25 text-white px-5 py-2.5 rounded-xl text-sm font-medium cursor-pointer flex items-center justify-center gap-2"
              >
                <i className="ri-android-line text-[#F0C4B7]"></i> Join Android Waitlist
              </button>
            </div>
          </div>
        )}
      </nav>
      <WaitlistModal open={androidOpen} onClose={() => setAndroidOpen(false)} mode="android" />
    </>
  );
}
