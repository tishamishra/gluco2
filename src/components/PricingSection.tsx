import Image from 'next/image';

export default function PricingSection() {
  return (
    <>
      <section className="content4 cid-uwxNh1cJOb py-10 text-center" id="mitolyn-pricing" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 50%, #c084fc 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="row justify-center">
            <div className="title col-md-12 col-lg-10">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
                <strong>Limited Time Special Pricing - Act Now!</strong>
              </h3>
              <h4 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-white">
                <strong>Claim Your Exclusive Offer While Stocks Last</strong>
              </h4>
            </div>
          </div>
        </div>
      </section>

      <section className="team1 cid-uppRz6LTf7 py-12 bg-white" id="team1-7y">
        <div className="container mx-auto px-4">
          <div className="row justify-center flex flex-col md:flex-row gap-6">
            <div className="col-sm-6 col-lg-4">
              <div className="card-wrap bg-gradient-to-br from-white to-purple-50 rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 border-4 border-purple-300 hover:border-pink-500 transform hover:-translate-y-3 hover:scale-105 relative">
                <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-2 rounded-full font-bold text-sm z-10 shadow-lg">
                  BEST VALUE
                </div>
                <div className="image-wrap p-4">
                  <a href="https://b9c6ckcm0x6mdy38yird8e5uex.hop.clickbank.net/?&traffic_source=bing" target="_blank" rel="noopener noreferrer">
                    <Image 
                      src="https://ik.imagekit.io/affin/mitolyn-1-bottle.webp?updatedAt=1765361274882" 
                      alt="mitolyn-30-day-supply" 
                      width={600} 
                      height={600}
                      className="w-full h-auto transform hover:scale-110 transition-transform duration-300"
                      style={{ 
                        maxWidth: '100%', 
                        width: '100%',
                        height: 'auto',
                        minHeight: '500px',
                        objectFit: 'contain'
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="card-wrap bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-4 border-purple-300 hover:border-purple-500 transform hover:-translate-y-2">
                <div className="image-wrap">
                  <a href="https://b9c6ckcm0x6mdy38yird8e5uex.hop.clickbank.net/?&traffic_source=bing" target="_blank" rel="noopener noreferrer">
                    <Image 
                      src="https://ik.imagekit.io/affin/mitolyn-6-bottles.webp?updatedAt=1765361274884" 
                      alt="mitolyn-180-day-supply" 
                      width={600} 
                      height={600}
                      className="w-full h-auto"
                      style={{ 
                        maxWidth: '100%', 
                        width: '100%',
                        height: 'auto',
                        minHeight: '500px',
                        objectFit: 'contain'
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="card-wrap bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-4 border-purple-300 hover:border-purple-500 transform hover:-translate-y-2">
                <div className="image-wrap">
                  <a href="https://b9c6ckcm0x6mdy38yird8e5uex.hop.clickbank.net/?&traffic_source=bing" target="_blank" rel="noopener noreferrer">
                    <Image 
                      src="https://ik.imagekit.io/affin/mitolyn-3-bottle.webp?updatedAt=1765361274883" 
                      alt="mitolyn-90-day-supply" 
                      width={600} 
                      height={600}
                      className="w-full h-auto"
                      style={{ 
                        maxWidth: '100%', 
                        width: '100%',
                        height: 'auto',
                        minHeight: '500px',
                        objectFit: 'contain'
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content5 cid-uwyA8IU7fg py-4 bg-white" id="content5-t">
        <div className="container mx-auto px-4">
          <div className="row justify-center">
            <div className="col-md-12 col-lg-11 JCB" style={{ border: '4px solid #ec4899', padding: '20px', borderRadius: '20px', backgroundColor: '#fce7f3', boxShadow: '0 10px 25px rgba(236, 72, 153, 0.3)' }}>
              <p className="mbr-text mbr-fonts-style display-7 text-base md:text-lg font-bold text-center" style={{ fontFamily: 'Arial, sans-serif', margin: 0, color: '#be185d' }}>
                ⚠️ WARNING: Stock levels of Mitolyn™ are limited. Accept your reserved bottle above NOW before your discount expires.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

