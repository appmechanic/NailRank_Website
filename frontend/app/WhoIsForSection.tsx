const audiences = [
  {
    icon: 'ri-brush-line',
    label: 'For artists',
    desc: 'Turn your work into a reputation. Every rating counts toward a public ranking you’ve actually earned.',
    featured: true,
  },
  {
    icon: 'ri-heart-line',
    label: 'For clients & enthusiasts',
    desc: 'Rate the designs you love, follow the artists behind them, and find top-rated talent near you.',
    featured: false,
  },
  {
    icon: 'ri-store-3-line',
    label: 'For brands',
    desc: 'See your products in real work, and which artists are winning with them.',
    featured: false,
  },
];

export default function WhoIsForSection() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-[#0d0514]">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-2xl md:text-4xl font-bold text-white text-center mb-10 md:mb-14"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Built for the whole <span className="text-[#F0C4B7]">nail community.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {audiences.map((a) => (
            <div
              key={a.label}
              className={`rounded-2xl p-6 md:p-7 border transition-all text-left ${
                a.featured
                  ? 'bg-[#2a1040] border-[#F0C4B7]/50 shadow-lg shadow-[#F0C4B7]/10'
                  : 'bg-[#1a0d2e]/60 border-[#F0C4B7]/15 hover:border-[#F0C4B7]/35'
              }`}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F0C4B7]/10 mb-4">
                <i className={`${a.icon} text-[#F0C4B7] text-2xl`}></i>
              </div>
              <h3 className="text-white font-semibold text-base md:text-lg mb-2">{a.label}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
