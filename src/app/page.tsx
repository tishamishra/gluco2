import Header from '@/components/Header';
import TitleSection from '@/components/TitleSection';
import Hero from '@/components/Hero';
import WhyChooseGlycoMute from '@/components/WhyChooseGlycoMute';
import Reviews from '@/components/Reviews';
import PricingSection from '@/components/PricingSection';
import WhatIsGlycoMute from '@/components/WhatIsGlycoMute';
import HowItWorks from '@/components/HowItWorks';
import Ingredients from '@/components/Ingredients';
import Benefits from '@/components/Benefits';
import Bonuses from '@/components/Bonuses';
import Guarantee from '@/components/Guarantee';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

export default function Home() {
  return (
    <div className="min-h-screen bg-white" style={{ width: '100%', maxWidth: '100%', overflowX: 'hidden' }}>
      <StructuredData />
      <Header />
      <main style={{ width: '100%', maxWidth: '100%' }}>
        <TitleSection />
        <Hero />
        <WhyChooseGlycoMute />
        <HowItWorks />
        <Ingredients />
        <Benefits />
        <Bonuses />
        <PricingSection />
        <Guarantee />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
