'use client';
import { useState } from 'react';
import AppStoreButton from '../components/AppStoreButton';
import WaitlistModal from '../components/WaitlistModal';

export default function DownloadSection() {
  const [androidOpen, setAndroidOpen] = useState(false);

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-[#100820] border-y border-[#F0C4B7]/10">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-flex items-center gap-2 text-[#F0C4B7] text-xs uppercase tracking-widest mb-5 bg-[#F0C4B7]/15 px-3 py-1.5 rounded-full border border-[#F0C4B7]/25">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F0C4B7] animate-pulse"></span>
          Live on the App Store
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
          Download NailRanks. <span className="text-[#F0C4B7]">Start ranking.</span>
        </h2>
        <p className="text-white/65 text-sm md:text-base mb-10 max-w-lg mx-auto">
          NailRanks is available now on iPhone. On Android? Join the waitlist and we&apos;ll email you the moment it lands on Google Play.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-6">
          <AppStoreButton size="lg" className="w-full sm:w-auto justify-center" />
          <button
            onClick={() => setAndroidOpen(true)}
            className="w-full sm:w-auto whitespace-nowrap flex items-center justify-center gap-3 bg-white/5 border border-[#F0C4B7]/30 text-white px-6 py-3 rounded-xl hover:bg-white/10 hover:border-[#F0C4B7]/60 transition-all cursor-pointer"
          >
            <i className="ri-android-fill text-[#F0C4B7] text-3xl"></i>
            <div className="flex flex-col leading-tight text-left">
              <span className="text-[10px] uppercase tracking-wider text-white/50">Android — Coming Soon</span>
              <span className="text-base font-semibold">Join the Waitlist</span>
            </div>
          </button>
        </div>

        <p className="text-white/35 text-xs">Free to download · Works worldwide · No ads</p>
      </div>

      <WaitlistModal open={androidOpen} onClose={() => setAndroidOpen(false)} mode="android" />
    </section>
  );
}
