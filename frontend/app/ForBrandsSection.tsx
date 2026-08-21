const points = [
  { icon: 'ri-team-line', title: 'Artist adoption', desc: 'See how many artists are working with your range.' },
  { icon: 'ri-trophy-line', title: 'Competition wins', desc: 'Know which artists are winning competitions using it.' },
  { icon: 'ri-bar-chart-2-line', title: 'Entry placement', desc: 'Track where your products place across competition entries.' },
];

export default function ForBrandsSection() {
  return (
    <section
      className="py-16 md:py-24 px-4 md:px-8 scroll-mt-24"
      id="for-brands"
      style={{ background: 'linear-gradient(180deg, #0d0514 0%, #160b24 100%)' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-10 md:mb-12">
          <span className="inline-block text-[#F0C4B7] text-xs uppercase tracking-widest mb-4 bg-[#F0C4B7]/10 px-3 py-1 rounded-full">
            For brands
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            See your products in the hands of <span className="text-[#F0C4B7]">South Africa&apos;s best.</span>
          </h2>
          <p className="text-white/65 text-sm md:text-base leading-relaxed">
            Brand accounts show you how many artists are working with your range, which artists are winning competitions using it, and where your products place across competition entries. Real usage from real artists — not guesswork.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {points.map((p) => (
            <div
              key={p.title}
              className="bg-[#1a0d2e]/70 border border-[#F0C4B7]/15 rounded-2xl p-6 hover:border-[#F0C4B7]/35 transition-all"
            >
              <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#F0C4B7]/10 mb-4">
                <i className={`${p.icon} text-[#F0C4B7] text-xl`}></i>
              </div>
              <h3 className="text-white font-semibold text-base mb-2">{p.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
