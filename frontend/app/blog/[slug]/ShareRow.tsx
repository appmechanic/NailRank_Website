'use client';

interface Props {
  title: string;
  slug: string;
}

export default function ShareRow({ title, slug }: Props) {
  const url =
    typeof window !== 'undefined'
      ? `${window.location.origin}/blog/${slug}`
      : `/blog/${slug}`;

  const share = (network: 'facebook' | 'twitter' | 'pinterest' | 'copy') => {
    if (network === 'copy') {
      navigator.clipboard?.writeText(url);
      return;
    }
    const encoded = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    const target = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encoded}`,
      twitter: `https://twitter.com/intent/tweet?url=${encoded}&text=${encodedTitle}`,
      pinterest: `https://pinterest.com/pin/create/button/?url=${encoded}&description=${encodedTitle}`
    }[network];
    window.open(target, '_blank', 'noopener,noreferrer,width=600,height=500');
  };

  const iconBtn =
    'w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer';

  return (
    <div className="flex items-center gap-3 pt-6 border-t border-[#F0C4B7]/10">
      <span className="text-sm text-white/60">Share this post:</span>
      <button
        onClick={() => share('facebook')}
        className={`${iconBtn} bg-[#1877F2] text-white hover:opacity-90`}
        aria-label="Share on Facebook"
      >
        <i className="ri-facebook-fill" />
      </button>
      <button
        onClick={() => share('twitter')}
        className={`${iconBtn} bg-black text-white hover:opacity-90`}
        aria-label="Share on X"
      >
        <i className="ri-twitter-x-line" />
      </button>
      <button
        onClick={() => share('pinterest')}
        className={`${iconBtn} bg-[#E60023] text-white hover:opacity-90`}
        aria-label="Share on Pinterest"
      >
        <i className="ri-pinterest-fill" />
      </button>
      <button
        onClick={() => share('copy')}
        className={`${iconBtn} bg-[#F0C4B7]/20 text-[#F0C4B7] hover:bg-[#F0C4B7]/30`}
        aria-label="Copy link"
        title="Copy link"
      >
        <i className="ri-link" />
      </button>
    </div>
  );
}
