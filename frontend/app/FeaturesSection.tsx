const features = [
  {
    icon: 'ri-palette-line',
    title: 'Nail Artists Showcase',
    desc: 'A professional platform for creative talents to share their work and gain authentic recognition.',
  },
  {
    icon: 'ri-thumb-up-line',
    title: 'The Public Votes',
    desc: 'Democratic voting systems for authentic community-driven nail art recognition.',
  },
  {
    icon: 'ri-trophy-line',
    title: 'Competitions',
    desc: 'Structured contests with meaningful rewards for top talented artists.',
  },
  {
    icon: 'ri-rocket-line',
    title: 'Early Founder Access',
    desc: 'Founding members shape the platform with exclusive influence over directions.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-8" style={{ background: 'linear-gradient(180deg, #0d0514 0%, #160b24 100%)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div key={f.title} className="bg-[#1a0d2e]/80 border border-[#F0C4B7]/15 rounded-2xl p-6 hover:border-[#F0C4B7]/35 transition-all hover:shadow-lg hover:shadow-[#F0C4B7]/5">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#F0C4B7]/10 mb-4">
                <i className={`${f.icon} text-[#F0C4B7] text-xl`}></i>
              </div>
              <h3 className="text-white font-semibold text-sm mb-2">{f.title}</h3>
              <p className="text-white/45 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
