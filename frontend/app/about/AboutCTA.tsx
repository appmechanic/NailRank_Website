'use client';
import { useState } from 'react';
import BetaModal from '../../components/BetaModal';

export default function AboutCTA() {
  const [open, setOpen] = useState(false);
  return (
    <section className="py-20 px-8 bg-[#100820]">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
          Join <span className="text-[#F0C4B7]">NailRanks</span> Today
        </h2>
        <p className="text-white/50 text-sm mb-8">
          Be part of the first global nail art ranking community. Gain Founder Access and help shape the platform.
        </p>
        <button
          onClick={() => setOpen(true)}
          className="whitespace-nowrap bg-[#F0C4B7] text-[#1a0820] px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-[#e8b5a6] transition-colors cursor-pointer inline-flex items-center gap-2"
        >
          <i className="ri-rocket-line"></i> Get Early Access
        </button>
      </div>
      <BetaModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
