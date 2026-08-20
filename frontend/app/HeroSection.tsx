import AppStoreButton from '../components/AppStoreButton';

interface HeroSectionProps {
  onAndroidClick: () => void;
  onArtistClick: () => void;
}

export default function HeroSection({ onAndroidClick, onArtistClick }: HeroSectionProps) {
  return (
    <section
      className="min-h-[100svh] flex items-center pt-24 pb-12 px-4 md:px-8"
      style={{ background: 'linear-gradient(135deg, #1a0828 0%, #2a0d3a 40%, #0d0514 100%)' }}
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 text-[#F0C4B7] text-xs uppercase tracking-widest mb-5 bg-[#F0C4B7]/15 px-3 py-1.5 rounded-full border border-[#F0C4B7]/25">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F0C4B7] animate-pulse"></span>
            Available Now on the App Store
          </span>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.05] mb-5"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            The Global<br />
            Ranking for<br />
            <span className="text-[#F0C4B7]">Nail Artists.</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg mb-8 leading-relaxed max-w-md mx-auto lg:mx-0">
            NailRanks is live. Download the app, discover the world&apos;s top nail artists, and start voting on the designs you love — ranked by real people, not algorithms.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center lg:items-start gap-3 mb-4">
            <AppStoreButton size="lg" className="w-full sm:w-auto justify-center" />
            <button
              onClick={onAndroidClick}
              className="w-full sm:w-auto whitespace-nowrap flex items-center justify-center gap-2 bg-white/5 border border-[#F0C4B7]/30 text-white px-5 py-3.5 rounded-xl text-sm font-medium hover:bg-white/10 hover:border-[#F0C4B7]/60 transition-all cursor-pointer"
            >
              <i className="ri-android-line text-[#F0C4B7] text-lg"></i>
              <span className="text-left leading-tight">
                <span className="block text-[10px] uppercase tracking-wider text-white/50">Android — Coming Soon</span>
                <span className="block font-semibold">Join the Waitlist</span>
              </span>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs text-white/45">
            <span className="flex items-center gap-1.5"><i className="ri-shield-check-line text-[#F0C4B7]"></i> Free to download</span>
            <span className="flex items-center gap-1.5"><i className="ri-global-line text-[#F0C4B7]"></i> Global rankings</span>
            <button onClick={onArtistClick} className="flex items-center gap-1.5 text-[#F0C4B7] hover:underline cursor-pointer">
              <i className="ri-user-star-line"></i> Are you a nail artist?
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute -inset-6 rounded-3xl blur-3xl opacity-40"
            style={{ background: 'radial-gradient(circle, #F0C4B7 0%, transparent 70%)' }}
          ></div>
          <div className="relative rounded-3xl overflow-hidden border border-[#F0C4B7]/25 shadow-2xl">
            <img
              src="https://readdy.ai/api/search-image?query=close%20up%20of%20diverse%20beautiful%20hands%20with%20stunning%20nail%20art%20designs%20coming%20together%20from%20above%2C%20elegant%20luxury%20beauty%20photography%20with%20warm%20pink%20and%20copper%20tones%20against%20dark%20background%2C%20professional%20studio%20lighting%2C%20high%20fashion%20editorial%20style%2C%20glossy%20nails%20with%20intricate%20detailed%20floral%20and%20geometric%20patterns%2C%20gems%20and%20rhinestones&width=600&height=480&seq=nailhands001&orientation=landscape"
              alt="Beautiful nail art"
              className="w-full h-72 md:h-96 object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
