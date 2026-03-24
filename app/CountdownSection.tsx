import CountdownTimer from '../components/CountdownTimer';

export default function CountdownSection() {
  return (
    <section className="py-20 px-8 bg-[#100820] border-y border-[#F0C4B7]/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-white mb-2">Beta Launch Countdown</h2>
        <p className="text-white/40 text-sm mb-10">Launching soon — be the first to experience NailRanks</p>
        <CountdownTimer />
        <p className="text-white/30 text-xs mt-8 flex items-center justify-center gap-2">
          <i className="ri-vip-crown-line text-[#F0C4B7]"></i>
          Founder Access closes when beta launches!
        </p>
      </div>
    </section>
  );
}
