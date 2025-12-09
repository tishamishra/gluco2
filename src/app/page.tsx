import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhatIsMitolyn from '@/components/WhatIsMitolyn';
import PricingSection from '@/components/PricingSection';
import WhyChoose from '@/components/WhyChoose';
import HowItWorks from '@/components/HowItWorks';
import Reviews from '@/components/Reviews';
import Benefits from '@/components/Benefits';
import PricingOffer from '@/components/PricingOffer';
import Bonuses from '@/components/Bonuses';
import Guarantee from '@/components/Guarantee';
import Ingredients from '@/components/Ingredients';
import ScientificDiscovery from '@/components/ScientificDiscovery';
import FinalCTA from '@/components/FinalCTA';
import FAQ from '@/components/FAQ';
import ActNow from '@/components/ActNow';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom, #f8f9ff 0%, #ffffff 50%, #f8f9ff 100%)' }}>
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <WhatIsMitolyn />
        <PricingSection />
        <WhyChoose />
        <HowItWorks />
        <Reviews />
        <Benefits />
        <PricingOffer />
        <Bonuses />
        <Guarantee />
        <Ingredients />
        <ScientificDiscovery />
        <FinalCTA />
        <FAQ />
        <ActNow />
      </main>
      <Footer />
    </div>
  );
}
