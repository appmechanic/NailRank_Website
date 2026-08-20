'use client';
import { useState } from 'react';

export type WaitlistMode = 'android' | 'founding_artist';

interface WaitlistModalProps {
  open: boolean;
  onClose: () => void;
  mode: WaitlistMode;
}

const COPY: Record<WaitlistMode, {
  title: string;
  subtitle: string;
  buttonLabel: string;
  successTitle: string;
  successBody: string;
  source: string;
  showRoleField: boolean;
}> = {
  android: {
    title: 'Join the Android Waitlist',
    subtitle: 'Be the first to know when NailRanks lands on Google Play.',
    buttonLabel: 'Join the Waitlist',
    successTitle: "You're on the waitlist!",
    successBody: "We'll email you the moment NailRanks goes live on Android.",
    source: 'android_waitlist',
    showRoleField: false,
  },
  founding_artist: {
    title: 'Apply as a Founding Nail Artist',
    subtitle: 'Limited spots. Get a Founder badge, priority ranking visibility, and a say in the platform.',
    buttonLabel: 'Apply for Founder Status',
    successTitle: 'Application received!',
    successBody: "We'll review your profile and get back to you within a few days.",
    source: 'founding_artist',
    showRoleField: false,
  },
};

export default function WaitlistModal({ open, onClose, mode }: WaitlistModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const copy = COPY[mode];

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

  function handleClose() {
    setSubmitted(false);
    onClose();
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="bg-[#1a0d2e] border border-[#F0C4B7]/25 rounded-2xl p-6 sm:p-8 w-full max-w-md relative shadow-2xl">
        <button onClick={handleClose} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white/50 hover:text-white cursor-pointer">
          <i className="ri-close-line text-xl"></i>
        </button>
        {submitted ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#F0C4B7]/20 mx-auto mb-4">
              <i className="ri-check-line text-[#F0C4B7] text-2xl"></i>
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">{copy.successTitle}</h3>
            <p className="text-white/60 text-sm">{copy.successBody}</p>
          </div>
        ) : (
          <>
            <h3 className="text-white text-xl font-semibold mb-1">{copy.title}</h3>
            <p className="text-white/50 text-sm mb-6">{copy.subtitle}</p>
            <form data-readdy-form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="source" value={copy.source} />
              <input name="name" type="text" placeholder="Your Name" required className="w-full bg-white/5 border border-[#F0C4B7]/20 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-[#F0C4B7]/50" />
              <input name="email" type="email" placeholder="Email Address" required className="w-full bg-white/5 border border-[#F0C4B7]/20 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-[#F0C4B7]/50" />
              {mode === 'founding_artist' && (
                <>
                  <input name="instagram" type="text" placeholder="Instagram Handle (e.g. @yourhandle)" className="w-full bg-white/5 border border-[#F0C4B7]/20 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-[#F0C4B7]/50" />
                  <input name="location" type="text" placeholder="City / Country" className="w-full bg-white/5 border border-[#F0C4B7]/20 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-[#F0C4B7]/50" />
                </>
              )}
              <button type="submit" disabled={loading} className="whitespace-nowrap w-full bg-[#F0C4B7] text-[#1a0820] py-3 rounded-lg font-semibold text-sm hover:bg-[#e8b5a6] transition-colors cursor-pointer disabled:opacity-60">
                {loading ? 'Submitting...' : copy.buttonLabel}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
