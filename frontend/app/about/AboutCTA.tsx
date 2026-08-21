import StoreButtons from '../../components/StoreButtons';

export default function AboutCTA() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-[#100820]">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
          Ready to join <span className="text-[#F0C4B7]">NailRanks?</span>
        </h2>
        <p className="text-white/65 text-sm md:text-base mb-8 max-w-md mx-auto">
          NailRanks is live on iOS and Android — download the app and start ranking.
        </p>
        <StoreButtons size="lg" align="center" />
      </div>
    </section>
  );
}
