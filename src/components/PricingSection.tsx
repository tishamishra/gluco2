import Image from 'next/image';

export default function PricingSection() {
  return (
    <>
      <section className="content4 cid-uppRxLahsB py-10 text-center" id="content4-7x" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
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
              <div className="card-wrap bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
                <div className="image-wrap">
                  <a href="https://b9c6ckcm0x6mdy38yird8e5uex.hop.clickbank.net/?&traffic_source=bing" target="_blank" rel="noopener noreferrer">
                    <Image 
                      src="/assets/images/mitolyn-1-bottle.webp" 
                      alt="Mitolyn-30-day-supply" 
                      width={400} 
                      height={400}
                      className="w-full h-auto"
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
                      src="/assets/images/mitolyn-6-bottles.webp" 
                      alt="Mitolyn-180-day-supply" 
                      width={400} 
                      height={400}
                      className="w-full h-auto"
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
                      src="/assets/images/mitolyn-3-bottle.webp" 
                      alt="Mitolyn-90-day-supply" 
                      width={400} 
                      height={400}
                      className="w-full h-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="image3 cid-uppRzWl9Kg py-8 bg-white" id="image3-7z">
        <div className="container mx-auto px-4">
          <div className="row justify-center">
            <div className="col-12 col-lg-12">
              <div className="image-wrapper">
                <Image 
                  src="/assets/images/warning-for-stocks.webp" 
                  alt="Mitolyn-stock-out-warning" 
                  width={1200} 
                  height={200}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

