export default function OurStory() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-[#100820]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
          <span className="text-[#F0C4B7] text-xs uppercase tracking-widest mb-3 block">How It Started</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
            The <span className="text-[#F0C4B7]">NailRanks</span> Story
          </h2>
          <p className="text-white/55 text-sm leading-relaxed mb-4">NailRanks was born from a simple observation: nail artists are incredibly talented, yet they lack a dedicated platform to gain the recognition they deserve. Social media is oversaturated, algorithms are unpredictable, and there&apos;s no structured way to discover the best nail artists globally.</p>
          <p className="text-white/55 text-sm leading-relaxed mb-4">We built NailRanks to change that. It&apos;s a platform where nail artists can showcase their portfolios, users can vote for their favorites, and brands can connect with verified creators — all in one beautiful, community-driven space.</p>
          <p className="text-white/55 text-sm leading-relaxed">Whether you&apos;re a nail technician looking to grow, a beauty enthusiast exploring trends, or a brand seeking talent, NailRanks is your home.</p>
        </div>
        <div className="relative">
          <div className="absolute -inset-3 rounded-3xl blur-2xl opacity-20" style={{ background: 'radial-gradient(circle, #F0C4B7 0%, transparent 70%)' }}></div>
          <div className="relative rounded-2xl w-full h-64 md:h-80 border border-[#F0C4B7]/15 overflow-hidden">
            <img
              src="/hero-nail-art.jpg"
              alt="A nail artist applying gel polish in a salon"
              className="w-full h-full object-cover"
              style={{ objectPosition: '58% 42%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0514]/60 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
