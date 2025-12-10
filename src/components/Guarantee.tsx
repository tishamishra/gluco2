import Image from 'next/image';

export default function Guarantee() {
  return (
    <>
      <section className="header3 cid-uhfTGZCgag py-10 text-center" id="header3-7o" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
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

      <section className="header11 cid-uhfTEDrzG6 py-12 bg-white" id="header11-7n">
        <div className="container mx-auto px-4">
          <div className="row justify-center items-center flex flex-col md:flex-row gap-8">
            <div className="col-12 col-md-4 image-wrapper">
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image 
                  className="w-full h-auto" 
                  src="https://ik.imagekit.io/affin/money-back-guarantee.webp?updatedAt=1765361274891" 
                  alt="Mitolyn-money-back-guarantee" 
                  width={400} 
                  height={400}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </div>
            <div className="col-12 col-md flex-1">
              <div className="text-wrapper text-center md:text-left">
                <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-6" style={{ color: '#000000', fontFamily: 'Arial, sans-serif', textAlign: 'left' }}>
                  I know trying a new supplement can feel like a gamble, which is why we stand behind Mitolyn with a full 90-day money-back guarantee. If you don't see the results you're looking for - whether that's losing weight, having more energy, or just feeling better overall - just send it back. No questions asked, no hassle. We're that confident this will work for you. You've got nothing to lose except maybe some stubborn fat.
                </p>
                <div className="mt-6">
                  <a 
                    className="btn btn-warning bg-yellow-500 text-black px-6 py-4 sm:px-8 sm:py-5 md:px-12 md:py-6 rounded-md font-bold hover:bg-yellow-600 transition-colors inline-flex items-center text-base sm:text-lg md:text-xl shadow-lg hover:shadow-xl w-full sm:w-auto justify-center" 
                    href="https://b9c6ckcm0x6mdy38yird8e5uex.hop.clickbank.net/?&traffic_source=bing" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Huge Off Today →
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

