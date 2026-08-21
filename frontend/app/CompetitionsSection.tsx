const chips = [
  { icon: 'ri-palette-line', label: 'Themed briefs' },
  { icon: 'ri-gift-line', label: 'Real prizes' },
  { icon: 'ri-user-star-line', label: 'One entry per artist' },
  { icon: 'ri-group-line', label: 'Community-voted' },
  { icon: 'ri-trophy-line', label: 'Top 3 announced' },
];

export default function CompetitionsSection() {
  return (
    <section
      className="py-16 md:py-24 px-4 md:px-8 relative overflow-hidden scroll-mt-24"
      id="competitions"
      style={{ background: 'linear-gradient(135deg, #1a0828 0%, #2a0d3a 50%, #0d0514 100%)' }}
    >
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 0%, #F0C4B7 0%, transparent 60%)' }}
      ></div>

      <div className="max-w-4xl mx-auto text-center relative">
        <span className="inline-block text-[#F0C4B7] text-xs uppercase tracking-widest mb-4 bg-[#F0C4B7]/15 px-3 py-1.5 rounded-full border border-[#F0C4B7]/25">
          Competitions
        </span>
        <h2
          className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Enter themed contests.<br className="hidden sm:block" /> <span className="text-[#F0C4B7]">Let the community decide.</span>
        </h2>
        <p className="text-white/70 text-sm md:text-base mb-10 max-w-2xl mx-auto leading-relaxed">
          New themed competitions open regularly with real prizes. Submit your entry before the deadline, then the community votes during a dedicated voting window. Top three get announced when voting closes.
        </p>

        <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
          {chips.map((c) => (
            <div
              key={c.label}
              className="flex items-center gap-2 bg-[#1e0d30]/80 border border-[#F0C4B7]/25 text-white/85 text-xs md:text-sm px-3 md:px-4 py-2 md:py-2.5 rounded-full backdrop-blur-sm"
            >
              <i className={`${c.icon} text-[#F0C4B7]`}></i>
              {c.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
