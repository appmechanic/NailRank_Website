'use client';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BetaModal from '../components/BetaModal';
import HeroSection from './HeroSection';
import CountdownSection from './CountdownSection';
import FeaturesSection from './FeaturesSection';
import FounderSection from './FounderSection';
import WhoIsForSection from './WhoIsForSection';
import StatsSection from './StatsSection';

export default function Home() {
  const [betaOpen, setBetaOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0d0514]">
      <Header />
      <HeroSection onBetaClick={() => setBetaOpen(true)} />
      <CountdownSection />
      <FeaturesSection />
      <FounderSection />
      <WhoIsForSection />
      <StatsSection />
      <Footer />
      <BetaModal open={betaOpen} onClose={() => setBetaOpen(false)} />
    </div>
  );
}
