const cards = [
  { icon: 'ri-brush-line', title: 'Nail Artists', desc: 'Grow your audience, showcase your portfolio, and compete on a global stage. NailRanks gives artists the recognition they deserve.' },
  { icon: 'ri-heart-line', title: 'Beauty Lovers', desc: 'Discover jaw-dropping nail art, follow your favorite artists, vote in competitions, and stay ahead of beauty trends.' },
  { icon: 'ri-store-3-line', title: 'Brands', desc: 'Find verified nail talent for collaborations, sponsorships, and brand campaigns — all in one place.' },
];

export default function WhoItsFor() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-[#0d0514]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
          Who It&apos;s <span className="text-[#F0C4B7]">For</span>
        </h2>
        <p className="text-white/40 text-sm text-center mb-10">Built for everyone in the nail art community</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {cards.map((c) => (
            <div key={c.title} className="bg-[#1a0d2e]/80 border border-[#F0C4B7]/15 rounded-2xl p-6 md:p-7 hover:border-[#F0C4B7]/40 transition-all">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#F0C4B7]/10 mb-4">
                <i className={`${c.icon} text-[#F0C4B7] text-2xl`}></i>
              </div>
              <h3 className="text-white font-semibold text-base mb-2">{c.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
