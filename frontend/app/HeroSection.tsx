import StoreButtons from '../components/StoreButtons';

// NailRanks is for the whole community, not artists alone — the hero says so up front.
const AUDIENCES = [
  { icon: 'ri-star-smile-line', label: 'Rate & discover' },
  { icon: 'ri-brush-line', label: 'Post & get ranked' },
  { icon: 'ri-store-3-line', label: 'Brand accounts' },
];

export default function HeroSection() {
  return (
    <section
      className="min-h-[100svh] flex items-center pt-28 pb-16 px-4 md:px-8 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1a0828 0%, #2a0d3a 40%, #0d0514 100%)' }}
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 text-[#F0C4B7] text-xs uppercase tracking-widest mb-5 bg-[#F0C4B7]/15 px-3 py-1.5 rounded-full border border-[#F0C4B7]/25">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F0C4B7] animate-pulse"></span>
            Live on iOS &amp; Android
          </span>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.05] mb-5"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            South Africa&apos;s<br />
            nail artists,<br />
            <span className="text-[#F0C4B7]">ranked.</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg mb-6 leading-relaxed max-w-md mx-auto lg:mx-0">
            Rate designs out of 10, follow the artists climbing your local leaderboard, and discover top-rated nail talent in your suburb.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
            {AUDIENCES.map((a) => (
              <span
                key={a.label}
                className="inline-flex items-center gap-1.5 text-xs text-white/70 bg-white/5 border border-[#F0C4B7]/20 px-3 py-1.5 rounded-full"
              >
                <i className={`${a.icon} text-[#F0C4B7]`}></i>
                {a.label}
              </span>
            ))}
          </div>

          <StoreButtons size="lg" align="start" className="mb-4" />

          <p className="text-xs text-white/45">Free to download. Available across South Africa.</p>
        </div>

        <div className="relative">
          <div
            className="absolute -inset-6 rounded-[2.5rem] blur-3xl opacity-40"
            style={{ background: 'radial-gradient(circle, #F0C4B7 0%, transparent 70%)' }}
          ></div>

          <div className="relative rounded-[2rem] overflow-hidden border border-[#F0C4B7]/25 shadow-2xl shadow-black/60">
            <img
              src="/hero-nail-art.jpg"
              alt="A nail artist applying yellow gel polish to a client's almond-shaped nails"
              className="w-full h-[320px] sm:h-[420px] lg:h-[500px] object-cover"
              style={{ objectPosition: '58% 42%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0514]/60 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
