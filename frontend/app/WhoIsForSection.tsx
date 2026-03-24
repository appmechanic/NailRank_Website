const audiences = [
  {
    icon: 'ri-heart-line',
    title: 'Nail Lovers',
    desc: 'Discover stunning nail art, vote for your favorites, explore new trends, and support local artists.',
    active: false,
  },
  {
    icon: 'ri-brush-line',
    title: 'Nail Artists',
    desc: 'Showcase your work, build your profile, compete globally, and attract real clients.',
    active: true,
  },
  {
    icon: 'ri-store-line',
    title: 'Brands',
    desc: 'Discover top nail talent, sponsor competitions, and connect with product-ready creators.',
    active: false,
  },
];

export default function WhoIsForSection() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-[#0d0514]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
          Who Is <span className="text-[#F0C4B7]">NailRanks</span> For?
        </h2>
        <p className="text-white/40 text-sm mb-10">Choose your role during signup</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {audiences.map((a) => (
            <div key={a.title} className={`rounded-2xl p-6 md:p-7 border transition-all ${a.active ? 'bg-[#2a1040] border-[#F0C4B7]/50 shadow-lg shadow-[#F0C4B7]/10' : 'bg-[#1a0d2e]/60 border-[#F0C4B7]/15'}`}>
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F0C4B7]/10 mx-auto mb-4">
                <i className={`${a.icon} text-[#F0C4B7] text-2xl`}></i>
              </div>
              <h3 className="text-white font-semibold text-base mb-2">{a.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
