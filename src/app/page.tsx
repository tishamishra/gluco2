import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBadges from '@/components/TrustBadges';
import WhatIsMitolyn from '@/components/WhatIsMitolyn';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import Ingredients from '@/components/Ingredients';
import ScientificDiscovery from '@/components/ScientificDiscovery';
import Reviews from '@/components/Reviews';
import ComparisonSection from '@/components/ComparisonSection';
import PricingSection from '@/components/PricingSection';
import Bonuses from '@/components/Bonuses';
import Guarantee from '@/components/Guarantee';
import PricingOffer from '@/components/PricingOffer';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom, #ffffff, #f3e8ff, #ffffff)' }}>
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <WhatIsMitolyn />
        <HowItWorks />
        <Benefits />
        <Ingredients />
        <ScientificDiscovery />
        <Reviews />
        <ComparisonSection />
        <PricingSection />
        <Bonuses />
        <Guarantee />
        <PricingOffer />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
