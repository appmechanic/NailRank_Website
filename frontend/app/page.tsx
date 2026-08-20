'use client';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WaitlistModal from '../components/WaitlistModal';
import HeroSection from './HeroSection';
import HowRankingsWork from './HowRankingsWork';
import FeaturesSection from './FeaturesSection';
import WhoIsForSection from './WhoIsForSection';
import FounderSection from './FounderSection';
import StatsSection from './StatsSection';
import DownloadSection from './DownloadSection';

export default function Home() {
  const [androidOpen, setAndroidOpen] = useState(false);
  const [artistOpen, setArtistOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0d0514]">
      <Header />
      <HeroSection
        onAndroidClick={() => setAndroidOpen(true)}
        onArtistClick={() => setArtistOpen(true)}
      />
      <HowRankingsWork />
      <FounderSection />
      <FeaturesSection />
      <WhoIsForSection />
      <StatsSection />
      <DownloadSection />
      <Footer />
      <WaitlistModal open={androidOpen} onClose={() => setAndroidOpen(false)} mode="android" />
      <WaitlistModal open={artistOpen} onClose={() => setArtistOpen(false)} mode="founding_artist" />
    </div>
  );
}
