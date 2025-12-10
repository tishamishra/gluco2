import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section 
      className="header14 cid-uwxCXuDQMI relative flex items-center py-12 md:py-16" 
      id="header14-8k"
      style={{
        background: 'linear-gradient(to right, #e8d5ff 0%, #d5e8ff 100%)',
        minHeight: '75vh'
      }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Product Visuals - Left Side */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start relative">
            <div className="relative w-full">
              {/* Featured Product Image */}
              <div className="relative mb-6 w-full flex justify-center lg:justify-start">
                <img 
                  src="https://ik.imagekit.io/affin/mitolyn-official.webp" 
                  alt="Mitolyn Product" 
                  className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] h-auto object-contain"
                  style={{ display: 'block' }}
                />
              </div>
            </div>
          </div>
          
          {/* Text Content - Right Side */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black" style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.2' }}>
              Mitolyn
            </h1>
            <p className="text-base md:text-lg mb-6 text-black leading-relaxed" style={{ fontFamily: 'Arial, sans-serif' }}>
              Struggling to lose weight no matter what you try? Mitolyn targets the root cause by supporting your mitochondria - those tiny powerhouses inside every cell that turn food into energy. When they're working properly, your body naturally burns fat faster and gives you the energy boost you've been missing. What sets this apart is that it's completely natural. No caffeine jitters, no synthetic ingredients - just carefully chosen plant extracts that help your body function the way it's supposed to. The result? Better weight loss results, more consistent energy throughout the day, and improved mental focus, all without the side effects you get from most supplements.
            </p>
            <p className="text-lg md:text-xl font-bold mb-6 text-black" style={{ fontFamily: 'Arial, sans-serif' }}>
              Try Mitolyn For Over 80% OFF Today!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 w-full sm:w-auto">
              <a 
                className="btn bg-yellow-500 text-black px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-bold hover:bg-yellow-600 transition-colors inline-flex items-center justify-center text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl w-full sm:w-auto" 
                href="https://b9c6ckcm0x6mdy38yird8e5uex.hop.clickbank.net/?&traffic_source=bing" 
                target="_blank"
                rel="noopener noreferrer"
              >
                GET A DISCOUNT
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              </a>
              <a 
                className="btn bg-red-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-bold hover:bg-red-700 transition-colors inline-flex items-center justify-center text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl w-full sm:w-auto" 
                href="https://b9c6ckcm0x6mdy38yird8e5uex.hop.clickbank.net/?&traffic_source=bing" 
                target="_blank"
                rel="noopener noreferrer"
              >
                Official Website
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

