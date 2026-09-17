import type { Metadata } from "next";
import { Geist, Pacifico, Playfair_Display } from "next/font/google";
import Script from "next/script";
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
  title: "NailRanks – South Africa's Nail Artists, Ranked",
  description: "Rate nail designs out of 10, follow the artists climbing your local leaderboard, and discover top-rated nail talent in your suburb. Free on iOS and Android.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z3CX5HV2DY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z3CX5HV2DY');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${playfair.variable} ${pacifico.variable} antialiased bg-[#0d0514] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
