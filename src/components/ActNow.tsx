import Image from 'next/image';

export default function ActNow() {
  return (
    <>
      <section className="header10 cid-tQZlf1VNMR py-12 text-center" id="header10-29" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="align-center container-fluid mx-auto px-4">
          <div className="row justify-center">
            <div className="col-md-12 col-lg-10">
              <div className="rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-purple-200 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-white break-words" style={{ fontFamily: 'Arial, sans-serif' }}>
                  <strong>Act Now! Get Your Bottle at a Discounted Price Today!</strong>
                </h2>
                
                <div className="image-wrap my-6 sm:my-8">
                  <div className="rounded-lg overflow-hidden shadow-lg inline-block bg-white p-2 sm:p-3 border border-purple-200 w-full max-w-full sm:max-w-md mx-auto">
                    <Image 
                      src="https://ik.imagekit.io/affin/mitolyn-buy-480x451.webp?updatedAt=1765361274874" 
                      alt="Mitolyn-official-website" 
                      width={480} 
                      height={451}
                      className="w-full h-auto"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  </div>
                </div>
                
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-6 sm:mt-8 mb-4 sm:mb-6 text-white break-words" style={{ fontFamily: 'Arial, sans-serif' }}>
                  <strong>Today's the Lowest Price You'll Ever Find!</strong>
                </h2>
                
                <div className="my-6 sm:my-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 border-2 border-yellow-300 shadow-lg">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 text-black break-words" style={{ fontFamily: 'Arial, sans-serif' }}>
                    <strong>Today Only for: $39/per bottle</strong>
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mt-3 sm:mt-4 text-white text-center">Limited Time Offer - Don't Miss Out!</p>
                </div>
                
                <div className="mt-8 sm:mt-10">
                  <a 
                    className="btn btn-warning bg-yellow-500 text-black px-4 py-4 sm:px-8 sm:py-6 md:px-12 md:py-8 rounded-md font-bold text-base sm:text-xl md:text-2xl lg:text-3xl hover:bg-yellow-600 transition-all duration-300 inline-flex items-center shadow-xl hover:shadow-2xl w-full sm:w-auto justify-center" 
                    href="https://b9c6ckcm0x6mdy38yird8e5uex.hop.clickbank.net/?&traffic_source=bing" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CLAIM YOUR DISCOUNT NOW!
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

