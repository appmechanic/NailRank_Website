const steps = [
  {
    step: '01',
    icon: 'ri-camera-line',
    title: 'Artists post their work',
    desc: 'Verified nail artists share their designs — with the technique, shape, finish, and brands used.',
  },
  {
    step: '02',
    icon: 'ri-star-half-line',
    title: 'The public rates every post 1–10',
    desc: 'Anyone can score a design. No paid boosts, no follower advantage — just honest reactions from real people.',
  },
  {
    step: '03',
    icon: 'ri-trophy-line',
    title: 'Rankings emerge in real time',
    desc: 'Average ratings roll up into local, national, and global leaderboards. The best work rises to the top.',
  },
  {
    step: '04',
    icon: 'ri-sword-line',
    title: 'Themed competitions decide champions',
    desc: 'Monthly themed contests let artists compete head-to-head. The community votes. Winners get prizes and permanent recognition.',
  },
];

export default function HowRankingsWork() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-[#0d0514]" id="how-it-works">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block text-[#F0C4B7] text-xs uppercase tracking-widest mb-4 bg-[#F0C4B7]/10 px-3 py-1 rounded-full">
            What is NailRanks
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            The first honest ranking for <span className="text-[#F0C4B7]">nail art.</span>
          </h2>
          <p className="text-white/65 text-sm md:text-base leading-relaxed">
            NailRanks is a global platform where nail artists post their designs and the public rates every one out of ten. No paid boosts, no follower advantage — just real scores from real people, rolled up into local, national, and global rankings.
          </p>
          <p className="text-[#F0C4B7]/80 text-xs md:text-sm uppercase tracking-widest mt-5">Here&apos;s how the rankings work</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {steps.map((s) => (
            <div
              key={s.step}
              className="relative bg-[#1a0d2e]/70 border border-[#F0C4B7]/15 rounded-2xl p-6 hover:border-[#F0C4B7]/40 transition-all"
            >
              <span className="absolute top-4 right-5 text-[#F0C4B7]/20 text-3xl font-bold" style={{ fontFamily: 'var(--font-playfair)' }}>
                {s.step}
              </span>
              <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#F0C4B7]/10 mb-4">
                <i className={`${s.icon} text-[#F0C4B7] text-xl`}></i>
              </div>
              <h3 className="text-white font-semibold text-base mb-2">{s.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
