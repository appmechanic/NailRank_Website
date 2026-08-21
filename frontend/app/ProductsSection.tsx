const categories = [
  { icon: 'ri-drop-line', label: 'Gel & polish' },
  { icon: 'ri-scissors-cut-line', label: 'Tools' },
  { icon: 'ri-sparkling-line', label: 'Finishes & top coats' },
  { icon: 'ri-palette-line', label: 'Art & embellishments' },
];

export default function ProductsSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-[#0d0514] scroll-mt-24" id="products">
      <div className="max-w-5xl mx-auto text-center">
        <span className="inline-block text-[#F0C4B7] text-xs uppercase tracking-widest mb-4 bg-[#F0C4B7]/10 px-3 py-1 rounded-full">
          Products
        </span>
        <h2
          className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Everything they used, <span className="text-[#F0C4B7]">in one place.</span>
        </h2>
        <p className="text-white/65 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10 md:mb-12">
          Browse the polishes, tools and finishes featured across the community, sorted by category, with links to where you can buy them.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {categories.map((c) => (
            <div
              key={c.label}
              className="bg-[#1a0d2e]/70 border border-[#F0C4B7]/15 rounded-2xl p-5 md:p-6 hover:border-[#F0C4B7]/35 transition-all"
            >
              <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#F0C4B7]/10 mb-4 mx-auto">
                <i className={`${c.icon} text-[#F0C4B7] text-xl`}></i>
              </div>
              <h3 className="text-white font-medium text-sm md:text-base">{c.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
