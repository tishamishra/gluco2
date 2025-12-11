export default function FinalCTA() {
  return (
    <section className="bg-[#dc2626] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            {/* Image Column */}
            <div className="mb-8 flex items-center justify-center">
              <div className="image-wrapper">
                <img 
                  src="https://ik.imagekit.io/affin/glycomute/glycomute-6-bottles.png?updatedAt=1765391043245" 
                  alt="GlycoMute 6 bottles" 
                  className="mx-auto"
                  style={{
                    width: '100%',
                    maxWidth: '400px',
                    height: 'auto',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                />
              </div>
            </div>

            {/* Text Column */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8" style={{
                fontWeight: 900,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase'
              }}>
                Don't Wait Any Longer! Order Your<br />
                Discounted Bottle Now!
              </h2>
              
              <div className="space-y-4 mb-8">
                <p className="text-xl text-white font-bold" style={{
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                }}>Take action now before this opportunity expires!</p>
                <p className="text-lg text-white" style={{
                  fontWeight: 600,
                  letterSpacing: '0.01em',
                }}>
                  Regular Price: <s className="opacity-75">$99/per bottle</s>
                </p>
                <p className="text-2xl text-white font-extrabold" style={{
                  fontWeight: 900,
                  letterSpacing: '0.02em',
                }}>
                  Today's Price: $49/per bottle
                </p>
              </div>

              <a 
                href="https://sweetfend.com/c/order-now.php?affiliate=ubro12&pid=pre1&tid=ubro12" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-large inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                CLAIM YOUR DISCOUNT NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
