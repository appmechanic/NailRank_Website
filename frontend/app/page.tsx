import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from './HeroSection';
import HowItWorks from './HowItWorks';
import LocalRankingsSection from './LocalRankingsSection';
import WhoIsForSection from './WhoIsForSection';
import CompetitionsSection from './CompetitionsSection';
import DiscoverSection from './DiscoverSection';
import ForBrandsSection from './ForBrandsSection';
import ProductsSection from './ProductsSection';
import ClosingSection from './ClosingSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0514]">
      <Header />
      <HeroSection />
      <HowItWorks />
      <LocalRankingsSection />
      <WhoIsForSection />
      <CompetitionsSection />
      <DiscoverSection />
      <ForBrandsSection />
      <ProductsSection />
      <ClosingSection />
      <Footer />
    </div>
  );
}
