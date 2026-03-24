'use client';
import { useState } from 'react';

interface BetaModalProps {
  open: boolean;
  onClose: () => void;
}

export default function BetaModal({ open, onClose }: BetaModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new URLSearchParams(new FormData(form) as unknown as Record<string, string>);
    await fetch('https://readdy.ai/api/form/d7166pohb0rqicn68bh0', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: data.toString(),
    });
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-[#1a0d2e] border border-[#F0C4B7]/25 rounded-2xl p-8 w-full max-w-md relative shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white/50 hover:text-white cursor-pointer">
          <i className="ri-close-line text-xl"></i>
        </button>
        {submitted ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#F0C4B7]/20 mx-auto mb-4">
              <i className="ri-check-line text-[#F0C4B7] text-2xl"></i>
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">You&apos;re on the list!</h3>
            <p className="text-white/60 text-sm">We&apos;ll notify you when NailRanks beta launches.</p>
          </div>
        ) : (
          <>
            <h3 className="text-white text-xl font-semibold mb-1">Join Our Beta App</h3>
            <p className="text-white/50 text-sm mb-6">Be among the first to experience NailRanks.</p>
            <form data-readdy-form onSubmit={handleSubmit} className="space-y-4">
              <input name="name" type="text" placeholder="Your Name" required className="w-full bg-white/5 border border-[#F0C4B7]/20 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-[#F0C4B7]/50" />
              <input name="email" type="email" placeholder="Email Address" required className="w-full bg-white/5 border border-[#F0C4B7]/20 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-[#F0C4B7]/50" />
              <select name="role" required className="w-full bg-[#1a0d2e] border border-[#F0C4B7]/20 rounded-lg px-4 py-3 text-sm text-white/80 outline-none focus:border-[#F0C4B7]/50 pr-8 cursor-pointer appearance-none">
                <option value="">I am a...</option>
                <option value="nail_artist">Nail Artist</option>
                <option value="nail_lover">Nail Lover</option>
                <option value="brand">Brand</option>
              </select>
              <button type="submit" disabled={loading} className="whitespace-nowrap w-full bg-[#F0C4B7] text-[#1a0820] py-3 rounded-lg font-semibold text-sm hover:bg-[#e8b5a6] transition-colors cursor-pointer disabled:opacity-60">
                {loading ? 'Submitting...' : 'Join the Beta'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
