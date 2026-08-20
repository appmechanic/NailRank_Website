'use client';
import { useState } from 'react';
import WaitlistModal from '../components/WaitlistModal';

const benefits = [
  { icon: 'ri-vip-crown-line', label: 'Permanent Founder Badge' },
  { icon: 'ri-eye-line', label: 'Priority Ranking Visibility' },
  { icon: 'ri-sword-line', label: 'Invite-only Founder Competitions' },
  { icon: 'ri-chat-4-line', label: 'Direct Line to the Team' },
  { icon: 'ri-bar-chart-line', label: 'Say in Rankings & New Features' },
];

export default function FounderSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a0828 0%, #2a0d3a 50%, #0d0514 100%)' }}>
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 0%, #F0C4B7 0%, transparent 60%)' }}></div>

      <div className="max-w-4xl mx-auto text-center relative">
        <span className="inline-flex items-center gap-2 text-[#F0C4B7] text-xs uppercase tracking-widest mb-5 bg-[#F0C4B7]/15 px-3 py-1.5 rounded-full border border-[#F0C4B7]/30">
          <i className="ri-vip-crown-line"></i> For Nail Artists — Limited Spots
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
          Become a <span className="text-[#F0C4B7]">Founding<br className="sm:hidden" /> Nail Artist.</span>
        </h2>
        <p className="text-white/70 text-sm md:text-base mb-3 max-w-xl mx-auto leading-relaxed">
          NailRanks just launched. The first wave of verified artists earn <span className="text-[#F0C4B7] font-medium">Founding status — forever</span>. Once the spots are filled, the badge is gone for good.
        </p>
        <p className="text-white/55 text-sm md:text-base mb-10 md:mb-12 max-w-xl mx-auto leading-relaxed">
          Founders shape what the platform becomes and get lifetime perks no one else can earn.
        </p>

        <div className="flex flex-wrap gap-2 md:gap-3 justify-center mb-10 md:mb-12">
          {benefits.map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-2 bg-[#1e0d30]/80 border border-[#F0C4B7]/25 text-white/85 text-xs md:text-sm px-3 md:px-4 py-2 md:py-2.5 rounded-full backdrop-blur-sm"
            >
              <i className={`${b.icon} text-[#F0C4B7]`}></i>
              {b.label}
            </div>
          ))}
        </div>

        <button
          onClick={() => setOpen(true)}
          className="whitespace-nowrap inline-flex items-center gap-2 bg-[#F0C4B7] text-[#1a0820] px-7 md:px-9 py-3.5 md:py-4 rounded-full font-semibold text-sm md:text-base hover:bg-[#e8b5a6] transition-colors cursor-pointer shadow-xl shadow-[#F0C4B7]/20"
        >
          <i className="ri-user-star-line text-lg"></i> Apply as Founding Artist
        </button>
        <p className="text-white/40 text-xs mt-4">
          Reviewed manually — we look at your portfolio before accepting.
        </p>
      </div>

      <WaitlistModal open={open} onClose={() => setOpen(false)} mode="founding_artist" />
    </section>
  );
}
