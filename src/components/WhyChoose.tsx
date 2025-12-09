import Image from 'next/image';

export default function WhyChoose() {
  const features = [
    {
      image: "/assets/images/gmp-certified-500x300.png",
      alt: "Mitolyn-gmp-certified",
      title: "GMP Certified",
      description: "Good Manufacturing Practice certified ensuring pharmaceutical grade quality."
    },
    {
      image: "/assets/images/made-in-usa-500x300.png",
      alt: "Mitolyn-made-in-usa",
      title: "Made In The USA",
      description: "Mitolyn is proudly formulated in the United States of America."
    },
    {
      image: "/assets/images/fda-approved-500x300.png",
      alt: "Mitolyn-approved",
      title: "FDA Approved Facility",
      description: "Mitolyn is formulated in an FDA-registered facility that adheres to strict FDA regulations."
    },
    {
      image: "/assets/images/100-natural-500x300.png",
      alt: "Mitolyn-natural-product",
      title: "100% All Natural",
      description: "We are proud to say that Mitolyn is Natural, Non-GMO, and Gluten-Free."
    }
  ];

  return (
    <>
      <section className="header3 cid-tRBZcaLIQn py-10 text-center" id="header3-2x" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="align-center container mx-auto px-4">
          <div className="row justify-center">
            <div className="col-12 col-lg-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
                <strong>Why Choose Mitolyn?</strong>
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
                    className="rounded-full flex items-center justify-center overflow-hidden shadow-md"
                    style={{ 
                      width: '160px',
                      height: '160px',
                      border: '3px solid #e5e7eb',
                      backgroundColor: '#ffffff'
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
                  <h5 className="item-title text-xl font-bold mb-4" style={{ color: '#000000', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
                    <strong>{feature.title}</strong>
                  </h5>
                  <p className="text-lg leading-relaxed" style={{ color: '#000000', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features023 cid-uwxD8c3Fih py-12" id="features023-8l" style={{ backgroundColor: '#f8f9ff' }}>
        <div className="container mx-auto px-4">
          <div className="row content-row justify-center flex flex-col md:flex-row gap-6">
            <div className="item features-without-image col-12 col-md-6 col-lg-4 item-mb">
              <div className="item-wrapper bg-white rounded-lg p-6 shadow-md border border-gray-200">
                <div className="title mb-4 flex justify-center">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center bg-green-100 text-green-700 font-bold text-2xl">
                    99%
                  </div>
                </div>
                <h4 className="card-title text-xl font-semibold text-center" style={{ color: '#000000', fontFamily: 'Arial, sans-serif' }}>
                  <strong>Happy Customers</strong>
                </h4>
              </div>
            </div>
            <div className="item features-without-image col-12 col-md-6 col-lg-4 item-mb">
              <div className="item-wrapper bg-white rounded-lg p-6 shadow-md border border-gray-200">
                <div className="title mb-4 flex justify-center">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center bg-blue-100 text-blue-700 font-bold text-lg">
                    90 Days
                  </div>
                </div>
                <h4 className="card-title text-xl font-semibold text-center" style={{ color: '#000000', fontFamily: 'Arial, sans-serif' }}>
                  <strong>Risk-Free Trial</strong>
                </h4>
              </div>
            </div>
            <div className="item features-without-image col-12 col-md-6 col-lg-4 item-mb">
              <div className="item-wrapper bg-white rounded-lg p-6 shadow-md border border-gray-200">
                <div className="title mb-4 flex justify-center">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center bg-yellow-100 text-yellow-700 font-bold text-xl">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
                <h4 className="card-title text-xl font-semibold text-center" style={{ color: '#000000', fontFamily: 'Arial, sans-serif' }}>
                  <strong>Top Rated</strong>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

