import Image from 'next/image';

export default function ActNow() {
  return (
    <>
      <section className="header10 cid-tQZlf1VNMR py-12 text-center" id="header10-29" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="align-center container-fluid mx-auto px-4">
          <div className="row justify-center">
            <div className="col-md-12 col-lg-10">
              <div className="rounded-xl p-8 md:p-10 shadow-2xl border border-purple-200 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
                  <strong>Act Now! Get Your Bottle at a Discounted Price Today!</strong>
                </h2>
                
                <div className="image-wrap my-8">
                  <div className="rounded-lg overflow-hidden shadow-lg inline-block bg-white p-3 border border-purple-200">
                    <Image 
                      src="/assets/images/mitolyn-buy-480x451.png" 
                      alt="Mitolyn-official-website" 
                      width={480} 
                      height={451}
                      className="w-full max-w-md mx-auto h-auto"
                    />
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-8 mb-6 text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
                  <strong>Today's the Lowest Price You'll Ever Find!</strong>
                </h2>
                
                <div className="my-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-8 md:p-10 border-2 border-yellow-300 shadow-lg">
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-black" style={{ fontFamily: 'Arial, sans-serif' }}>
                    <strong>Today Only for: $39/per bottle</strong>
                  </h3>
                  <p className="text-xl md:text-2xl font-semibold mt-4 text-white text-center">Limited Time Offer - Don't Miss Out!</p>
                </div>
                
                <div className="mt-10">
                  <a 
                    className="btn btn-warning bg-yellow-500 text-black px-18 py-10 rounded-md font-bold text-xl md:text-2xl lg:text-3xl hover:bg-yellow-600 transition-all duration-300 inline-flex items-center shadow-xl hover:shadow-2xl min-w-[350px] md:min-w-[450px] justify-center" 
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

