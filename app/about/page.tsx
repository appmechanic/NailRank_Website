import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AboutHero from './AboutHero';
import OurStory from './OurStory';
import WhoItsFor from './WhoItsFor';
import WhatWeOffer from './WhatWeOffer';
import AboutMission from './AboutMission';
import AboutCTA from './AboutCTA';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0d0514]">
      <Header />
      <AboutHero />
      <OurStory />
      <WhoItsFor />
      <WhatWeOffer />
      <AboutMission />
      <AboutCTA />
      <Footer />
    </div>
  );
}
