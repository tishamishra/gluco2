import Image from 'next/image';

export default function Guarantee() {
  return (
    <>
      <section className="header3 cid-uhfTGZCgag py-10 text-center" id="header3-7o" style={{ background: '#ec4899' }}>
        <div className="align-center container mx-auto px-4">
          <div className="row justify-center">
            <div className="col-12 col-lg-9">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
                <strong>Mitolyn 90 - Day Money Back Guarantee</strong>
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="header11 cid-uhfTEDrzG6 py-12 bg-gradient-to-b from-white to-pink-50" id="header11-7n">
        <div className="container mx-auto px-4">
          <div className="row justify-center items-center flex flex-col md:flex-row gap-8">
            <div className="col-12 col-md-5 image-wrapper relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-400 rounded-3xl blur-2xl opacity-30"></div>
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-pink-300 relative z-10 transform hover:scale-105 transition-transform duration-300">
                <Image 
                  className="w-full h-auto" 
                  src="https://ik.imagekit.io/affin/money-back-guarantee.webp?updatedAt=1765361274891" 
                  alt="mitolyn money back guarantee" 
                  width={600} 
                  height={600}
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
            <div className="col-12 col-md flex-1">
              <div className="text-wrapper text-center md:text-left">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#000000', fontFamily: 'Arial, sans-serif', textAlign: 'left' }}>
                  <strong>90-Day Money-Back Promise</strong>
                </h3>
                <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-6" style={{ color: '#000000', fontFamily: 'Arial, sans-serif', textAlign: 'left' }}>
                  Mitolyn includes a complete 90-day satisfaction promise. Mitolyn's dedication to your achievement means that if you don't experience the change—whether it's restored vitality, more efficient metabolism, or enhanced general health—you can simply contact us within 90 days for a quick and polite refund, no questions asked. <br /><br />
                  Mitolyn provides special limited-time pricing when you order today from the official website. Mitolyn delivers significant savings on this top-selling metabolic support formula, enabling you to begin your path toward harmonious energy, self-assurance, and sustained wellness at an outstanding value.
                </p>
                <div className="mt-6">
                  <a 
                    className="btn btn-warning bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-4 sm:px-8 sm:py-5 md:px-12 md:py-6 rounded-full font-bold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center text-base sm:text-lg md:text-xl shadow-2xl hover:shadow-3xl w-full sm:w-auto justify-center transform hover:scale-105" 
                    href="https://b9c6ckcm0x6mdy38yird8e5uex.hop.clickbank.net/?&traffic_source=bing" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order Mitolyn Now →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

