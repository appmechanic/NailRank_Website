const items = [
  { icon: 'ri-image-add-line', title: 'Upload Nail Art', desc: 'Post your nail designs with photos, tags, and descriptions to build your personal portfolio.' },
  { icon: 'ri-star-line', title: 'Rate & Review Posts', desc: 'Community-powered voting ensures the best work rises to the top authentically.' },
  { icon: 'ri-trophy-line', title: 'Participate in Competitions', desc: 'Join themed contests, win prizes, and earn recognition from a global audience.' },
  { icon: 'ri-user-settings-line', title: 'Build Personal Profiles', desc: 'Your public profile showcases your best work, ranking, follower count, and achievements.' },
];

export default function WhatWeOffer() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-[#100820]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
          What We <span className="text-[#F0C4B7]">Offer</span>
        </h2>
        <p className="text-white/40 text-sm text-center mb-10 md:mb-12">Everything you need in one platform</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {items.map((item) => (
            <div key={item.title} className="flex gap-4 bg-[#1a0d2e]/60 border border-[#F0C4B7]/10 rounded-2xl p-5 md:p-6 hover:border-[#F0C4B7]/30 transition-all">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-[#F0C4B7]/10">
                <i className={`${item.icon} text-[#F0C4B7] text-xl`}></i>
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
