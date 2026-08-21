// Only the five browse attributes named in the copy — no invented app UI or data.
const FILTERS = [
  { icon: 'ri-brush-2-line', label: 'Technique' },
  { icon: 'ri-shape-line', label: 'Nail shape' },
  { icon: 'ri-drop-line', label: 'Finish' },
  { icon: 'ri-store-3-line', label: 'Brand used' },
  { icon: 'ri-hashtag', label: 'Hashtag' },
];

export default function DiscoverSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-[#0d0514] scroll-mt-24" id="discover">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[#F0C4B7] text-xs uppercase tracking-widest mb-4 bg-[#F0C4B7]/10 px-3 py-1 rounded-full">
          Discover
        </span>
        <h2
          className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Find your <span className="text-[#F0C4B7]">next set.</span>
        </h2>
        <p className="text-white/65 text-sm md:text-base leading-relaxed mb-10 max-w-2xl mx-auto">
          Browse thousands of designs by technique, nail shape, finish, brand used or hashtag — then save the ones you want to take to your next appointment.
        </p>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {FILTERS.map((f) => (
            <span
              key={f.label}
              className="inline-flex items-center gap-2 text-sm text-white/80 bg-[#1a0d2e]/70 border border-[#F0C4B7]/20 px-4 py-2.5 rounded-full"
            >
              <i className={`${f.icon} text-[#F0C4B7]`}></i>
              {f.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
