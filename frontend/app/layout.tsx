import type { Metadata } from "next";
import { Geist, Pacifico, Playfair_Display } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NailRanks – The Global Ranking for Nail Artists",
  description: "NailRanks is now live on the App Store. Discover the world's top nail artists, ranked by real people. Android coming soon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${playfair.variable} ${pacifico.variable} antialiased bg-[#0d0514] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
