import Image from 'next/image';

export default function WhatIsMitolyn() {
  return (
    <>
      <section className="content4 cid-uwxKLxAzbL py-10 text-center" id="mitolyn-about" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 50%, #c084fc 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="row justify-center">
            <div className="title col-md-12 col-lg-10">
              <h3 className="mbr-section-title mbr-fonts-style align-center mb-4 display-2 text-3xl md:text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
                <strong>Why Choose Mitolyn?</strong>
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="image2 cid-uwxLwAOlez py-12 bg-gradient-to-b from-white to-purple-50" id="image2-b">
        <div className="container mx-auto px-4">
          <div className="row align-items-center flex flex-col lg:flex-row gap-8">
            <div className="col-12 col-lg-5">
              <div className="image-wrapper relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl blur-2xl opacity-30 transform rotate-6"></div>
                <img 
                  src="https://ik.imagekit.io/affin/mitolyn-supplement.webp?updatedAt=1765361274900" 
                  alt="Mitolyn supplement" 
                  title="Mitolyn"
                  className="w-full h-auto rounded-3xl shadow-2xl border-4 border-purple-300 relative z-10 transform hover:scale-105 transition-transform duration-300"
                  style={{ 
                    maxWidth: '100%', 
                    width: '100%',
                    height: 'auto',
                    minHeight: '500px',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>
            <div className="col-12 col-lg">
              <div className="text-wrapper">
                <h3 className="mbr-section-title mbr-fonts-style mb-3 display-2 text-2xl md:text-3xl lg:text-4xl font-bold text-black" style={{ fontFamily: 'Arial, sans-serif' }}>
                  <strong>What is Mitolyn?</strong>
                </h3>
                <p className="mbr-text mbr-fonts-style display-7 text-base md:text-lg leading-relaxed" style={{ color: '#000000', fontFamily: 'Arial, sans-serif', textAlign: 'left' }}>
                  Mitolyn is an advanced nutritional supplement designed to optimize and maintain peak mitochondrial function—the essential energy centers in each cell responsible for transforming nutrients into usable energy. Mitolyn addresses the root cause of metabolic slowdown by improving cellular energy production, metabolic efficiency, and overall vitality.
                  <br /><br />
                  Mitolyn features a clean, plant-based formula enhanced with natural botanical compounds and powerful antioxidants. Mitolyn is completely free from artificial stimulants or harsh chemicals. Mitolyn is manufactured in FDA-approved and GMP-verified facilities that follow rigorous safety and quality standards, ensuring each product is non-GMO, soy-free, and dairy-free.
                  <br /><br />
                  Mitolyn works as an everyday wellness partner for restoring health and energy. Mitolyn combats daily fatigue, supports efficient metabolic processes, and promotes healthy aging—helping you maintain energy, focus, and strength throughout your entire day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

