const steps = [
  {
    step: '01',
    icon: 'ri-camera-line',
    title: 'Post your work',
    desc: 'Upload your nail art with the technique, shape, finish and products you used.',
  },
  {
    step: '02',
    icon: 'ri-star-half-line',
    title: 'Get rated',
    desc: 'The community scores each design out of 10 — honest ratings, not just likes.',
  },
  {
    step: '03',
    icon: 'ri-line-chart-line',
    title: 'Climb the ranks',
    desc: 'Your average rating sets your place on the leaderboard in your area.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-[#0d0514] scroll-mt-24" id="how-it-works">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block text-[#F0C4B7] text-xs uppercase tracking-widest mb-4 bg-[#F0C4B7]/10 px-3 py-1 rounded-full">
            How it works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-playfair)' }}>
            Three steps to a <span className="text-[#F0C4B7]">ranking.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {steps.map((s) => (
            <div
              key={s.step}
              className="relative bg-[#1a0d2e]/70 border border-[#F0C4B7]/15 rounded-2xl p-7 hover:border-[#F0C4B7]/40 transition-all"
            >
              <span
                className="absolute top-5 right-6 text-[#F0C4B7]/20 text-4xl font-bold"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                {s.step}
              </span>
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#F0C4B7]/10 mb-5">
                <i className={`${s.icon} text-[#F0C4B7] text-2xl`}></i>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
