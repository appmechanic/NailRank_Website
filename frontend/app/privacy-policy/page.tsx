import Header from '../../components/Header';
import Footer from '../../components/Footer';

const sections = [
  {
    title: '1. Introduction',
    content: 'NailRanks respects your privacy and is committed to protecting your personal data. This policy explains how we collect, use, and safeguard information when you use our platform.',
  },
  {
    title: '2. Information We Collect',
    items: ['Name, username, and location', 'Bio and Instagram/social handles', 'Uploaded nail art posts and media', 'Usage data, device info, and interactions'],
  },
  {
    title: '3. How We Use Your Data',
    items: ['Improve platform experience and features', 'Show relevant content and artist recommendations', 'Manage competitions and voting systems', 'Send important platform updates and notifications'],
  },
  {
    title: '4. Data Sharing',
    content: 'We do not sell your personal data to third parties. Data may only be shared when required for legal compliance or to protect platform integrity.',
  },
  {
    title: '5. Data Security',
    content: 'We implement industry-standard security practices including encryption, secure servers, and access controls to protect your personal information at all times.',
  },
  {
    title: '6. Your Rights',
    items: ['Update or edit your profile information at any time', 'Request complete account deletion via settings', 'Export your data upon request', 'Opt out of non-essential communications'],
  },
  {
    title: '7. Policy Updates',
    content: 'This privacy policy may be updated periodically. We will notify users of significant changes via email or in-app notification. Continued use of the platform constitutes acceptance of updates.',
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0d0514]">
      <Header />
      <section className="pt-32 pb-16 px-8" style={{ background: 'linear-gradient(135deg, #1a0828 0%, #0d0514 100%)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-[#F0C4B7] text-xs uppercase tracking-widest mb-4 bg-[#F0C4B7]/10 px-3 py-1 rounded-full">Legal</span>
          <h1 className="text-4xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>Privacy Policy</h1>
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
