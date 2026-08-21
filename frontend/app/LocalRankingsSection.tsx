// Sample data — illustrative only, used to render the ranked-list preview.
const RANKS = [
  { rank: 1, name: 'Lerato M.', suburb: 'Sea Point, Cape Town', score: 9.4 },
  { rank: 2, name: 'Chanté V.', suburb: 'Sea Point, Cape Town', score: 9.1 },
  { rank: 3, name: 'Aisha K.', suburb: 'Sea Point, Cape Town', score: 8.8 },
  { rank: 4, name: 'Nomsa D.', suburb: 'Sea Point, Cape Town', score: 8.6 },
  { rank: 5, name: 'Robyn T.', suburb: 'Sea Point, Cape Town', score: 8.3 },
];

const MEDALS: Record<number, string> = {
  1: 'bg-[#F0C4B7] text-[#1a0820]',
  2: 'bg-white/70 text-[#1a0820]',
  3: 'bg-[#c98b6b] text-[#1a0820]',
};

export default function LocalRankingsSection() {
  return (
    <section
      className="py-16 md:py-28 px-4 md:px-8 scroll-mt-24 overflow-hidden"
      id="local-rankings"
      style={{ background: 'linear-gradient(180deg, #0d0514 0%, #160b24 50%, #0d0514 100%)' }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <span className="inline-block text-[#F0C4B7] text-xs uppercase tracking-widest mb-4 bg-[#F0C4B7]/10 px-3 py-1 rounded-full">
            Local leaderboards
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Be the best in your suburb, <span className="text-[#F0C4B7]">not lost in the crowd.</span>
          </h2>
          <p className="text-white/65 text-sm md:text-base leading-relaxed mb-5">
            Rankings narrow from province to city to suburb, so you&apos;re measured against the artists around you — not against the whole country. Whether you&apos;re in Sea Point, Sandton, Umhlanga or Hatfield, there&apos;s a leaderboard you can top.
          </p>
          <p className="text-[#F0C4B7]/85 text-sm md:text-base leading-relaxed border-l-2 border-[#F0C4B7]/40 pl-4">
            Looking for a nail artist? Filter to your area and see who&apos;s genuinely rated highest.
          </p>

          <div className="flex flex-wrap items-center gap-2 mt-8 text-xs">
            <span className="px-3 py-1.5 rounded-full bg-white/5 border border-[#F0C4B7]/15 text-white/60">Province</span>
            <i className="ri-arrow-right-s-line text-[#F0C4B7]/50"></i>
            <span className="px-3 py-1.5 rounded-full bg-white/5 border border-[#F0C4B7]/15 text-white/60">City</span>
            <i className="ri-arrow-right-s-line text-[#F0C4B7]/50"></i>
            <span className="px-3 py-1.5 rounded-full bg-[#F0C4B7] text-[#1a0820] font-semibold">Suburb</span>
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute -inset-6 rounded-3xl blur-3xl opacity-25"
            style={{ background: 'radial-gradient(circle, #F0C4B7 0%, transparent 70%)' }}
          ></div>

          <div className="relative bg-[#160b26]/90 border border-[#F0C4B7]/20 rounded-3xl p-5 md:p-7 shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-white/35 text-[10px] uppercase tracking-widest mb-1">Western Cape › Cape Town</p>
                <h3 className="text-white font-semibold text-lg" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Sea Point
                </h3>
              </div>
              <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-[#F0C4B7] bg-[#F0C4B7]/12 border border-[#F0C4B7]/25 px-2.5 py-1.5 rounded-full">
                <i className="ri-trophy-line"></i> Top rated
              </span>
            </div>

            <div className="space-y-2.5">
              {RANKS.map((r) => (
                <div
                  key={r.rank}
                  className={`flex items-center gap-3 rounded-2xl px-3 py-3 border transition-colors ${
                    r.rank === 1
                      ? 'bg-[#F0C4B7]/10 border-[#F0C4B7]/30'
                      : 'bg-white/[0.03] border-white/5 hover:border-[#F0C4B7]/20'
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold ${
                      MEDALS[r.rank] ?? 'bg-white/10 text-white/50'
                    }`}
                  >
                    {r.rank}
                  </span>
                  <span
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold text-[#1a0820]"
                    style={{ background: 'linear-gradient(135deg, #F0C4B7 0%, #c98b6b 100%)' }}
                  >
                    {r.name.charAt(0)}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-white text-sm font-medium truncate">{r.name}</span>
                    <span className="block text-white/35 text-xs truncate">{r.suburb}</span>
                  </span>
                  <span className="text-right">
                    <span className="block text-[#F0C4B7] text-base font-bold leading-none tabular-nums">
                      {r.score.toFixed(1)}
                    </span>
                    <span className="block text-white/30 text-[10px] mt-1">out of 10</span>
                  </span>
                </div>
              ))}
            </div>

            <p className="text-white/25 text-[10px] uppercase tracking-widest text-center mt-5">Sample leaderboard</p>
          </div>
        </div>
      </div>
    </section>
  );
}
