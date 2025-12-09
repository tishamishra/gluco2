import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section 
      className="header14 cid-uwxCXuDQMI relative min-h-screen flex items-center" 
      id="header14-8k"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="mbr-overlay absolute inset-0 bg-gradient-to-br from-indigo-50/90 via-purple-50/80 to-cyan-50/90"></div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 py-12 md:py-16 lg:py-20">
          {/* Text Content - Left Side */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white drop-shadow-lg" style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.2' }}>
              <strong>Mitolyn Official - Natural Fat Loss Support</strong>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-6 text-white leading-relaxed drop-shadow-md" style={{ fontFamily: 'Arial, sans-serif' }}>
              If you've been struggling to lose weight or feel constantly drained, Mitolyn might be exactly what you need. This powerful supplement works by targeting your mitochondria - those little energy factories inside every cell. When they're working at peak performance, your body naturally burns more fat and gives you the energy boost you've been missing. What I love about Mitolyn is that it's completely natural. No jittery stimulants, no harsh chemicals - just carefully selected plant extracts that work with your body's natural processes. It's helped thousands of people finally break through those stubborn weight loss plateaus while feeling more energized than they have in years.
            </p>
            <div className="my-6 p-4 md:p-5 rounded-lg bg-white/90 backdrop-blur-sm border-l-4 border-yellow-500 shadow-lg">
              <p className="text-base md:text-lg lg:text-xl font-semibold text-gray-900" style={{ fontFamily: 'Arial, sans-serif' }}>
                <strong>Try Mitolyn For Over 80% OFF Today!</strong> - Limited Time Offer
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a 
                className="btn btn-warning bg-yellow-500 text-black px-14 py-7 rounded-md font-bold hover:bg-yellow-600 transition-colors inline-flex items-center justify-center text-lg md:text-xl shadow-lg hover:shadow-xl min-w-[220px]" 
                href="https://b9c6ckcm0x6mdy38yird8e5uex.hop.clickbank.net/?&traffic_source=bing" 
                target="_blank"
                rel="noopener noreferrer"
              >
                GET A DISCOUNT
              </a>
              <a 
                className="btn btn-secondary bg-gray-700 text-white px-14 py-7 rounded-md font-bold hover:bg-gray-800 transition-colors inline-flex items-center justify-center text-lg md:text-xl shadow-lg hover:shadow-xl min-w-[220px]" 
                href="https://b9c6ckcm0x6mdy38yird8e5uex.hop.clickbank.net/?&traffic_source=bing" 
                target="_blank"
                rel="noopener noreferrer"
              >
                Official Website →
              </a>
            </div>
          </div>
          
          {/* Image - Right Side */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <img 
                src="https://ik.imagekit.io/nang9yead/mitolyn-500x500.png" 
                alt="Mitolyn" 
                className="w-full h-auto"
                style={{ display: 'block', maxWidth: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

