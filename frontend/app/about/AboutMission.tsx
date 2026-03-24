export default function AboutMission() {
  return (
    <section className="py-20 px-8 bg-[#0d0514]">
      <div className="max-w-3xl mx-auto">
        <div className="relative rounded-3xl p-10 text-center overflow-hidden border border-[#F0C4B7]/30" style={{ background: 'linear-gradient(135deg, #2a1040 0%, #1a0828 100%)' }}>
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-3xl opacity-20" style={{ background: '#F0C4B7' }}></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full blur-3xl opacity-15" style={{ background: '#F0C4B7' }}></div>
          <div className="relative">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#F0C4B7]/15 mx-auto mb-6">
              <i className="ri-global-line text-[#F0C4B7] text-2xl"></i>
            </div>
            <span className="text-[#F0C4B7] text-xs uppercase tracking-widest mb-3 block">Our Mission</span>
            <p className="text-white text-xl font-medium leading-relaxed" style={{ fontFamily: 'var(--font-playfair)' }}>
              &ldquo;Our mission is to build the world&apos;s most engaging nail art community — where every brushstroke gets the recognition it deserves.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
