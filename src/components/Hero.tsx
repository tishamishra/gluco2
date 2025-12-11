'use client';

export default function Hero() {
  return (
    <section className="bg-white pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="image-wrapper">
              <img 
                src="https://ik.imagekit.io/affin/glycomute/glycomute-supplement.png" 
                alt="GlycoMute blood sugar support supplement" 
                className="w-full max-w-md mx-auto animate-fade-in"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h1 className="mb-4" style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontFamily: 'Jost, sans-serif',
              fontWeight: 900,
              color: '#000000',
              letterSpacing: '-0.02em',
              lineHeight: '1.2',
              marginBottom: '1rem'
            }}>
              GlycoMute | Official Store
            </h1>
            <p className="mb-6" style={{ 
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              fontFamily: 'Jost, sans-serif',
              color: '#000000',
              fontWeight: 400,
              letterSpacing: '0.01em',
              lineHeight: '1.7',
              marginBottom: '1.5rem'
            }}>
              GlycoMute is a natural daily supplement that helps keep blood sugar steady and energy even, without stimulants or harsh chemicals.
            </p>
            <p className="mb-8" style={{ 
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              fontFamily: 'Jost, sans-serif',
              color: '#000000',
              fontWeight: 400,
              letterSpacing: '0.01em',
              lineHeight: '1.7',
              marginBottom: '2rem'
            }}>
              Its plant-based blend supports smoother glucose metabolism, a healthy insulin response, and balanced metabolic function. Proudly made in the USA in a GMP-certified facility, it’s quality you can trust every day.
            </p>
            <div className="mb-8 grid sm:grid-cols-2 gap-3 text-sm" style={{ color: '#111827', fontWeight: 600, letterSpacing: '0.01em' }}>
              <div className="flex items-center gap-2">
                <span style={{ color: '#16a34a' }}>✅</span> Supports healthy blood sugar levels
              </div>
              <div className="flex items-center gap-2">
                <span style={{ color: '#16a34a' }}>✅</span> Promotes balanced metabolic function
              </div>
              <div className="flex items-center gap-2">
                <span style={{ color: '#16a34a' }}>✅</span> Enhances natural, all-day energy
              </div>
              <div className="flex items-center gap-2">
                <span style={{ color: '#16a34a' }}>✅</span> Helps reduce cravings and snacking
              </div>
            </div>
            <a 
              href="https://sweetfend.com/c/order-now.php?affiliate=ubro12&pid=pre1&tid=ubro12" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
              style={{
                backgroundColor: '#ffea64',
                color: '#000000',
                padding: '0.875rem 2rem',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '1rem',
                fontFamily: 'Jost, sans-serif',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                letterSpacing: '0.02em'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#fff197';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ffea64';
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '20px', height: '20px' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Buy Only For $49/bottle
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
