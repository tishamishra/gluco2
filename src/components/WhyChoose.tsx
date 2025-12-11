import Image from 'next/image';

export default function WhyChoose() {
  const features = [
    {
      image: "https://ik.imagekit.io/affin/glycomute/glycomute-supplement.png",
      alt: "glycomute-product",
      title: "GMP Certified",
      description: "Good Manufacturing Practice certified ensuring pharmaceutical grade quality."
    },
    {
      image: "https://ik.imagekit.io/affin/glycomute/glycomute-supplement.png",
      alt: "glycomute-product",
      title: "Made In The USA",
      description: "GlycoMute is proudly formulated in the United States of America."
    },
    {
      image: "https://ik.imagekit.io/affin/glycomute/glycomute-supplement.png",
      alt: "glycomute-product",
      title: "FDA Approved Facility",
      description: "GlycoMute is formulated in an FDA-registered facility that adheres to strict FDA regulations."
    },
    {
      image: "https://ik.imagekit.io/affin/glycomute/glycomute-supplement.png",
      alt: "glycomute-product",
      title: "100% All Natural",
      description: "We are proud to say that GlycoMute is Natural, Non-GMO, and Gluten-Free."
    }
  ];

  return (
    <>
      <section className="header3 cid-tRBZcaLIQn py-10 text-center" id="header3-2x" style={{ background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 50%, #14b8a6 100%)' }}>
        <div className="align-center container mx-auto px-4">
          <div className="row justify-center">
            <div className="col-12 col-lg-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'Jost, sans-serif' }}>
                <strong>Why Choose GlycoMute?</strong>
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery3 cid-tRVV2g4uam py-12 bg-white" id="gallery3-36">
        <div className="container mx-auto px-4">
          <div className="row mt-4 flex flex-col md:flex-row gap-12 justify-center items-start">
            {features.map((feature, index) => (
              <div key={index} className="item features-image col-12 col-md-6 col-lg-3 flex flex-col items-center">
                <div className="mb-6 flex justify-center">
                  <div 
                    className="rounded-full flex items-center justify-center overflow-hidden shadow-xl"
                    style={{ 
                      width: '160px',
                      height: '160px',
                      border: '5px solid #06b6d4',
                      backgroundColor: '#ecfeff',
                      boxShadow: '0 10px 30px rgba(6, 182, 212, 0.3)'
                    }}
                  >
                    <Image 
                      src={feature.image} 
                      alt={feature.alt} 
                      width={160} 
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="item-content text-center" style={{ maxWidth: '280px' }}>
                  <h5 className="item-title text-xl font-bold mb-4" style={{ color: '#000000', fontFamily: 'Jost, sans-serif', fontWeight: 'bold' }}>
                    <strong>{feature.title}</strong>
                  </h5>
                  <p className="text-lg leading-relaxed" style={{ color: '#000000', fontFamily: 'Jost, sans-serif', textAlign: 'center' }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

