const features = [
  {
    icon: 'ri-palette-line',
    title: 'Artist Portfolios',
    desc: 'Every artist gets a clean profile — designs, techniques, brands used, and their live ranking score.',
  },
  {
    icon: 'ri-thumb-up-line',
    title: 'Public 1–10 Voting',
    desc: 'Anyone can rate a design out of ten. No paid boosts. Rankings reflect what people actually love.',
  },
  {
    icon: 'ri-map-pin-line',
    title: 'Local & Global Ranks',
    desc: "See who's the best in your city, country, and worldwide — and discover artists near you.",
  },
  {
    icon: 'ri-trophy-line',
    title: 'Themed Competitions',
    desc: 'Recurring contests with real prizes. Enter a design, get voted on, win recognition.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-8" style={{ background: 'linear-gradient(180deg, #0d0514 0%, #160b24 100%)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
            Everything you need in <span className="text-[#F0C4B7]">one app.</span>
          </h2>
          <p className="text-white/50 text-sm md:text-base">Built for artists who care about their craft and clients who want the best.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {features.map((f) => (
            <div key={f.title} className="bg-[#1a0d2e]/80 border border-[#F0C4B7]/15 rounded-2xl p-6 hover:border-[#F0C4B7]/35 transition-all hover:shadow-lg hover:shadow-[#F0C4B7]/5">
              <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#F0C4B7]/10 mb-4">
                <i className={`${f.icon} text-[#F0C4B7] text-xl`}></i>
              </div>
              <h3 className="text-white font-semibold text-base mb-2">{f.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
