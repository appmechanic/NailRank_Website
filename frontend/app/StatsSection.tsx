const stats = [
  { value: '1,245', label: 'Nominations Submitted' },
  { value: '678', label: 'Artists Joined' },
];

export default function StatsSection() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-[#100820]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>Finding the Best Nail Artists</h2>
        <p className="text-[#F0C4B7] text-sm mb-10 md:mb-14 tracking-wider uppercase">Worldwide</p>
        <div className="flex flex-col sm:flex-row justify-center gap-10 sm:gap-24">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{s.value}</div>
              <div className="text-white/40 text-sm uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
