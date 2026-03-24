const benefits = [
  { icon: 'ri-user-star-line', label: 'Founder Badge on Profile' },
  { icon: 'ri-time-line', label: 'Early Access Before Public Launch' },
  { icon: 'ri-sword-line', label: 'Beta-only Competitions' },
  { icon: 'ri-eye-line', label: 'Priority Visibility for Artists & Brands' },
  { icon: 'ri-bar-chart-line', label: 'Influence Over Rankings and Features' },
];

export default function FounderSection() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-[#0d0514]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
          Why You Need a <span className="text-[#F0C4B7]">Founder Status?</span>
        </h2>
        <p className="text-white/40 text-sm mb-8 md:mb-10">Exclusive privileges for early believers</p>
        <div className="flex flex-wrap gap-2 md:gap-3 justify-center mb-6 md:mb-8">
          {benefits.map((b) => (
            <div key={b.label} className="flex items-center gap-2 bg-[#1e0d30] border border-[#F0C4B7]/20 text-white/80 text-xs md:text-sm px-3 md:px-4 py-2 md:py-2.5 rounded-full hover:border-[#F0C4B7]/50 hover:text-[#F0C4B7] transition-all">
              <i className={`${b.icon} text-[#F0C4B7]`}></i>
              {b.label}
            </div>
          ))}
        </div>
        <p className="text-white/25 text-xs flex items-center justify-center gap-2">
          <i className="ri-information-line text-[#F0C4B7]/40"></i>
          Founder status will only be given for users joining our Beta version!
        </p>
      </div>
    </section>
  );
}
