interface HeroSectionProps {
  onBetaClick: () => void;
}

export default function HeroSection({ onBetaClick }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-10 px-4 md:px-8" style={{ background: 'linear-gradient(135deg, #1a0828 0%, #2a0d3a 40%, #0d0514 100%)' }}>
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div>
          <span className="inline-block text-[#F0C4B7] text-xs uppercase tracking-widest mb-4 bg-[#F0C4B7]/10 px-3 py-1 rounded-full">Global Nail Platform</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Find the Best<br />
            <span className="text-[#F0C4B7]">Nail Artists</span>
          </h1>
          <p className="text-white/60 text-base md:text-lg mb-8 leading-relaxed max-w-md">
            The first global ranking platform for nail artists — powered by public votes.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <button onClick={onBetaClick} className="whitespace-nowrap flex items-center gap-2 bg-[#F0C4B7]/10 border border-[#F0C4B7]/40 text-[#F0C4B7] px-5 py-3 rounded-xl text-sm font-medium hover:bg-[#F0C4B7]/20 transition-all cursor-pointer">
              <i className="ri-user-star-line"></i> I am a Nail Artist
            </button>
            <button onClick={onBetaClick} className="whitespace-nowrap flex items-center gap-2 bg-[#F0C4B7]/10 border border-[#F0C4B7]/40 text-[#F0C4B7] px-5 py-3 rounded-xl text-sm font-medium hover:bg-[#F0C4B7]/20 transition-all cursor-pointer">
              <i className="ri-star-line"></i> Nominate an Artist
            </button>
          </div>
          <p className="text-white/30 text-xs flex items-center gap-2">
            <i className="ri-shield-star-line text-[#F0C4B7]"></i>
            Artists joining beta will get Founder Access
          </p>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl blur-2xl opacity-30" style={{ background: 'radial-gradient(circle, #F0C4B7 0%, transparent 70%)' }}></div>
          <div className="relative rounded-2xl overflow-hidden border border-[#F0C4B7]/20 shadow-2xl">
            <img
              src="https://readdy.ai/api/search-image?query=close%20up%20of%20diverse%20beautiful%20hands%20with%20stunning%20nail%20art%20designs%20coming%20together%20from%20above%2C%20elegant%20luxury%20beauty%20photography%20with%20warm%20pink%20and%20copper%20tones%20against%20dark%20background%2C%20professional%20studio%20lighting%2C%20high%20fashion%20editorial%20style%2C%20glossy%20nails%20with%20intricate%20detailed%20floral%20and%20geometric%20patterns%2C%20gems%20and%20rhinestones&width=600&height=480&seq=nailhands001&orientation=landscape"
              alt="Beautiful nail art"
              className="w-full h-64 md:h-80 object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
