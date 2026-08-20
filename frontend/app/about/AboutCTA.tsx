'use client';
import { useState } from 'react';
import AppStoreButton from '../../components/AppStoreButton';
import WaitlistModal from '../../components/WaitlistModal';

export default function AboutCTA() {
  const [androidOpen, setAndroidOpen] = useState(false);

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-[#100820]">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
          Ready to join <span className="text-[#F0C4B7]">NailRanks?</span>
        </h2>
        <p className="text-white/65 text-sm md:text-base mb-8 max-w-md mx-auto">
          NailRanks is live on iPhone — download and start ranking. Android launching soon; join the waitlist below.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <AppStoreButton size="lg" className="w-full sm:w-auto justify-center" />
          <button
            onClick={() => setAndroidOpen(true)}
            className="w-full sm:w-auto whitespace-nowrap flex items-center justify-center gap-2 bg-white/5 border border-[#F0C4B7]/30 text-white px-5 py-3.5 rounded-xl text-sm font-medium hover:bg-white/10 hover:border-[#F0C4B7]/60 transition-all cursor-pointer"
          >
            <i className="ri-android-line text-[#F0C4B7] text-lg"></i>
            <span className="text-left leading-tight">
              <span className="block text-[10px] uppercase tracking-wider text-white/50">Android — Coming Soon</span>
              <span className="block font-semibold">Join the Waitlist</span>
            </span>
          </button>
        </div>
      </div>
      <WaitlistModal open={androidOpen} onClose={() => setAndroidOpen(false)} mode="android" />
    </section>
  );
}
