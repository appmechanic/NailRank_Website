export default function AboutHero() {
  return (
    <section className="pt-28 md:pt-32 pb-14 md:pb-16 px-4 md:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a0828 0%, #2a0d3a 50%, #0d0514 100%)' }}>
      <div className="absolute inset-0 overflow-hidden">
        <img src="https://readdy.ai/api/search-image?query=professional%20nail%20artist%20applying%20intricate%20nail%20art%20designs%20in%20a%20luxury%20dark%20beauty%20salon%2C%20warm%20amber%20and%20pink%20ambient%20lighting%2C%20bokeh%20background%2C%20artistic%20hands%20with%20colorful%20gel%20polish%2C%20premium%20beauty%20industry%20atmosphere%2C%20cinematic%20photography%20style%20with%20dark%20moody%20tones&width=1400&height=500&seq=abouthero001&orientation=landscape" alt="About NailRanks" className="w-full h-full object-cover object-top opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a0828] via-[#1a0828]/80 to-transparent"></div>
      </div>
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
