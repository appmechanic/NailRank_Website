import StoreButtons from '../components/StoreButtons';

export default function ClosingSection() {
  return (
    <section
      className="py-16 md:py-24 px-4 md:px-8 border-y border-[#F0C4B7]/10"
      style={{ background: 'linear-gradient(135deg, #1a0828 0%, #2a0d3a 50%, #100820 100%)' }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Ready to see <span className="text-[#F0C4B7]">where you rank?</span>
        </h2>
        <p className="text-white/70 text-sm md:text-lg mb-10 max-w-lg mx-auto">
          Join South Africa&apos;s nail art community. Free to download.
        </p>

        <StoreButtons size="lg" align="center" />
      </div>
    </section>
  );
}
