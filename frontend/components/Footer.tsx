import Link from 'next/link';
import Image from 'next/image';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
];

const socials = [
  { icon: 'ri-instagram-line', href: '#' },
  { icon: 'ri-tiktok-line', href: '#' },
  { icon: 'ri-twitter-x-line', href: '#' },
  { icon: 'ri-facebook-circle-line', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-[#080410] border-t border-[#F0C4B7]/10 pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
          <div>
            <Image src="https://static.readdy.ai/image/d62f11b01068b1ff4f20caf5771ddf21/80c3779816c9e51059be9ad9837e9da9.png" alt="NailRanks" width={120} height={38} className="object-contain mb-4" />
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">The first global ranking platform for nail artists — powered by public votes.</p>
          </div>
          <div>
            <h4 className="text-[#F0C4B7] text-sm font-semibold mb-4 uppercase tracking-wider">Get In Touch</h4>
            <p className="text-white/50 text-sm mb-1">info@nailranks.com</p>
            <p className="text-white/50 text-sm">Ready to Join? Wait for the Beta!</p>
          </div>
        </div>
        <div className="border-t border-[#F0C4B7]/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">© 2026 NailRanks. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {footerLinks.map((l) => (
              <Link key={l.href} href={l.href} className="text-white/30 hover:text-[#F0C4B7] text-xs transition-colors whitespace-nowrap">{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
