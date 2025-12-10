import Image from 'next/image';

export default function PricingOffer() {
  return (
    <>
      <section className="content4 cid-tB1yuhcVVi py-10 text-center" id="content4-g" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="row justify-center">
            <div className="title col-md-12 col-lg-10">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
                <strong>Exclusive Offer – Hurry, Limited Time Pricing!</strong>
              </h3>
              <h4 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-white">
                <strong>Don't Miss Out – Limited Stock Available!</strong>
              </h4>
            </div>
          </div>
        </div>
      </section>

      <section className="team1 cid-tB1z7NONXX py-12 bg-white" id="team1-h">
        <div className="container mx-auto px-4">
          <div className="row justify-center flex flex-col md:flex-row gap-6">
            <div className="col-sm-6 col-lg-4">
              <div className="card-wrap bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
                <div className="image-wrap">
                  <a href="https://b9c6ckcm0x6mdy38yird8e5uex.hop.clickbank.net/?&traffic_source=bing" target="_blank" rel="noopener noreferrer">
                    <Image 
                      src="https://ik.imagekit.io/affin/mitolyn-1-bottle.webp?updatedAt=1765361274882" 
                      alt="Mitolyn-30-day-supply" 
                      width={400} 
                      height={400}
                      className="w-full h-auto"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="card-wrap bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
                <div className="image-wrap">
                  <a href="https://b9c6ckcm0x6mdy38yird8e5uex.hop.clickbank.net/?&traffic_source=bing" target="_blank" rel="noopener noreferrer">
                    <Image 
                      src="https://ik.imagekit.io/affin/mitolyn-6-bottles.webp?updatedAt=1765361274884" 
                      alt="Mitolyn-180-day-supply" 
                      width={400} 
                      height={400}
                      className="w-full h-auto"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="card-wrap bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
                <div className="image-wrap">
                  <a href="https://b9c6ckcm0x6mdy38yird8e5uex.hop.clickbank.net/?&traffic_source=bing" target="_blank" rel="noopener noreferrer">
                    <Image 
                      src="https://ik.imagekit.io/affin/mitolyn-3-bottle.webp?updatedAt=1765361274883" 
                      alt="Mitolyn-90-day-supply" 
                      width={400} 
                      height={400}
                      className="w-full h-auto"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="warning-section py-4 bg-white border-y-2 border-orange-400" id="warning-stock">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-sm">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm md:text-base font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Arial, sans-serif' }}>
                    <span className="text-orange-600 font-bold">WARNING:</span> Stock levels of Mitolyn™ are limited
                  </p>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed" style={{ fontFamily: 'Arial, sans-serif' }}>
                    Accept your reserved bottle above <strong className="text-gray-900">NOW</strong> before your discount expires. Limited quantities available at this price.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

