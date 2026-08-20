const audiences = [
  {
    icon: 'ri-heart-line',
    title: 'Nail Lovers',
    desc: 'Discover stunning nail art, vote for what you love, and find the best artists near you.',
    cta: 'Browse & Vote',
    active: false,
  },
  {
    icon: 'ri-brush-line',
    title: 'Nail Artists',
    desc: 'Showcase your work, climb the rankings, and let real clients find you through your talent.',
    cta: 'Get Ranked',
    active: true,
  },
  {
    icon: 'ri-store-line',
    title: 'Brands',
    desc: 'Spot rising talent, sponsor competitions, and connect directly with the artists using your products.',
    cta: 'Partner With Us',
    active: false,
  },
];

export default function WhoIsForSection() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-[#0d0514]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
          Built for the whole <span className="text-[#F0C4B7]">nail world.</span>
        </h2>
        <p className="text-white/50 text-sm md:text-base mb-10 md:mb-12">Pick your role when you sign up in the app.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
          {audiences.map((a) => (
            <div
              key={a.title}
              className={`rounded-2xl p-6 md:p-7 border transition-all text-left ${a.active ? 'bg-[#2a1040] border-[#F0C4B7]/50 shadow-lg shadow-[#F0C4B7]/10' : 'bg-[#1a0d2e]/60 border-[#F0C4B7]/15'}`}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F0C4B7]/10 mb-4">
                <i className={`${a.icon} text-[#F0C4B7] text-2xl`}></i>
              </div>
              <h3 className="text-white font-semibold text-base md:text-lg mb-2">{a.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-4">{a.desc}</p>
              <span className="inline-flex items-center gap-1 text-[#F0C4B7] text-xs font-medium uppercase tracking-wider">
                {a.cta} <i className="ri-arrow-right-line"></i>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
