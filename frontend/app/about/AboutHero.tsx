export default function AboutHero() {
  return (
    <section className="pt-28 md:pt-32 pb-14 md:pb-16 px-4 md:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a0828 0%, #2a0d3a 50%, #0d0514 100%)' }}>
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 0%, #F0C4B7 0%, transparent 60%)' }}></div>
      <div className="relative max-w-4xl mx-auto text-center px-2">
        <span className="inline-block text-[#F0C4B7] text-xs uppercase tracking-widest mb-4 bg-[#F0C4B7]/10 px-3 py-1 rounded-full">Our Story</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
          Empowering Nail Artists <span className="text-[#F0C4B7]">Worldwide</span>
        </h1>
        <p className="text-white/55 text-base md:text-lg max-w-xl mx-auto">Where creativity meets recognition</p>
      </div>
    </section>
  );
}
