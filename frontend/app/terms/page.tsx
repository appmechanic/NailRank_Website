import Header from '../../components/Header';
import Footer from '../../components/Footer';

const sections = [
  { title: '1. Introduction', content: 'By accessing or using NailRanks, you agree to be bound by these Terms & Conditions. Please read them carefully before using our platform.' },
  { title: '2. User Accounts', items: ['Provide accurate and up-to-date information when registering', 'You are responsible for maintaining your account security', 'Do not share your login credentials with others', 'Notify us immediately of any unauthorized account use'] },
  { title: '3. Content Policy', items: ['Users may upload original nail art content they own', 'No illegal, copied, or plagiarized content is allowed', 'No explicit, offensive, or harmful content', 'NailRanks reserves the right to remove content violating this policy'] },
  { title: '4. User Behavior', items: ['No harassment, bullying, or abusive behavior toward other users', 'No spamming, vote manipulation, or fake accounts', 'Respectful engagement is expected in all community interactions'] },
  { title: '5. Competitions', items: ['Competition rules may vary per contest — read specific rules before entering', 'All competition entries must be original, owned work', 'Winners are selected based on platform voting or judge criteria', 'NailRanks reserves the right to disqualify invalid entries'] },
  { title: '6. Intellectual Property', content: 'Users retain full ownership of content they upload. By posting on NailRanks, you grant us a non-exclusive license to display and promote your content within the platform.' },
  { title: '7. Termination', content: 'Accounts found violating our policies may be suspended or permanently banned. NailRanks will notify users when possible, but reserves the right to act immediately for severe violations.' },
  { title: '8. Limitation of Liability', content: 'NailRanks is not responsible for user-generated content or interactions between users. We provide the platform as-is and make no guarantees regarding uptime or availability.' },
  { title: '9. Updates to Terms', content: 'These Terms & Conditions may be updated at any time. Continued use of the platform after changes constitutes your acceptance of the updated terms.' },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0d0514]">
      <Header />
      <section className="pt-32 pb-16 px-8" style={{ background: 'linear-gradient(135deg, #1a0828 0%, #0d0514 100%)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-[#F0C4B7] text-xs uppercase tracking-widest mb-4 bg-[#F0C4B7]/10 px-3 py-1 rounded-full">Legal</span>
          <h1 className="text-4xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>Terms & Conditions</h1>
          <p className="text-white/45 text-sm">Last updated: March 2026</p>
        </div>
      </section>
      <section className="py-16 px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          {sections.map((s) => (
            <div key={s.title} className="bg-[#1a0d2e]/60 border border-[#F0C4B7]/10 rounded-2xl p-8 hover:border-[#F0C4B7]/25 transition-all">
              <h2 className="text-[#F0C4B7] font-semibold text-base mb-4">{s.title}</h2>
              {s.content && <p className="text-white/60 text-sm leading-relaxed">{s.content}</p>}
              {s.items && (
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white/60 text-sm">
                      <i className="ri-checkbox-circle-line text-[#F0C4B7] mt-0.5 flex-shrink-0"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
