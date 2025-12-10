import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section 
      className="header14 cid-uwxCXuDQMI relative flex items-center py-12 md:py-16 overflow-hidden" 
      id="header14-8k"
      style={{
        background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 30%, #ec4899 60%, #f472b6 100%)',
        minHeight: 'auto',
        position: 'relative'
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-300 rounded-full blur-3xl"></div>
      </div>
      <div className="container-fluid mx-auto px-4 md:px-6 lg:px-8 relative z-10 w-full" style={{ position: 'relative', zIndex: 10 }}>
        <div className="row justify-content-center align-items-center flex flex-col md:flex-row gap-4 md:gap-6">
          
          {/* Product Image - Left Side - 40% */}
          <div className="w-full md:w-2/5 image-wrapper flex justify-center md:justify-start items-center">
            <div className="relative transform hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-white rounded-3xl blur-2xl opacity-30"></div>
              <img 
                src="https://ik.imagekit.io/affin/mitolyn-official.webp" 
                alt="Mitolyn supplement" 
                title="Mitolyn"
                className="object-contain relative z-10 rounded-3xl shadow-2xl border-4 border-white"
                style={{ 
                  display: 'block',
                  width: '100%',
                  maxWidth: '600px',
                  height: 'auto',
                  minHeight: '500px',
                  objectFit: 'contain'
                }}
              />
            </div>
          </div>
          
          {/* Text Content - Right Side - 60% */}
          <div className="w-full md:w-3/5 text-wrapper">
            <h1 className="mbr-section-title mbr-fonts-style mb-2 display-1 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white" style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.2' }}>
              <strong>Mitolyn: Premium Energy Enhancement & Fat Reduction Formula</strong>
            </h1>
            <p className="mbr-text mbr-fonts-style display-7 text-base md:text-lg leading-relaxed mb-4 text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
              Mitolyn offers a breakthrough solution for boosting metabolism, featuring scientifically-backed botanical ingredients that optimize energy production at the cellular level and enhance fat-burning capabilities. By targeting the mitochondria—your cells' energy factories—mitolyn helps unlock your body's natural ability to convert stored fat into usable energy.
              <br /><br />
              Mitolyn supports sustainable weight management through a holistic approach that addresses metabolic efficiency, energy generation, and cellular health. The unique mitolyn formulation works to restore optimal mitochondrial function that naturally declines with age and lifestyle factors, helping your body operate at peak performance levels.
            </p>
            <div className="mbr-section-btn mt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a 
                className="btn btn-danger display-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold hover:from-pink-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center text-base md:text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105" 
                href="https://b9c6ckcm0x6mdy38yird8e5uex.hop.clickbank.net/?&traffic_source=bing" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                ORDER NOW
              </a>
              <a 
                className="btn btn-danger display-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold hover:from-pink-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center text-base md:text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105" 
                href="https://b9c6ckcm0x6mdy38yird8e5uex.hop.clickbank.net/?&traffic_source=bing" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Visit Official Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

