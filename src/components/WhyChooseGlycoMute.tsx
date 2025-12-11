export default function WhyChooseGlycoMute() {
  return (
    <>
      <section className="bg-white py-12">
        <div className="container mx-auto px-4" style={{ textAlign: 'center' }}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8" style={{
            fontWeight: 900,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            backgroundColor: '#dc2626',
            color: '#ffffff',
            padding: '1.5rem 2rem',
            borderRadius: '8px',
            display: 'inline-block',
            width: '100%',
            maxWidth: '100%'
          }}>
            Why Choose GlycoMute?
          </h2>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="image-wrapper mb-8" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <img 
              src="https://ik.imagekit.io/affin/glycomute/certification-badge-1.png?updatedAt=1765391043120" 
              alt="GlycoMute Certifications - Made in USA, FDA Approved, GMP Certified, 100% Natural" 
              className="w-full max-w-4xl mx-auto"
              style={{
                width: '100%',
                maxWidth: '100%',
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
                margin: '0 auto'
              }}
            />
          </div>
          <div className="image-wrapper mb-8" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <a 
              href="https://hop.clickbank.net/?custom=1&affiliate=ubro12&vendor=glycomute&pid=new&tid=ubro12" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src="https://ik.imagekit.io/affin/glycomute/vidooo-829x720.webp" 
                alt="GlycoMute Product Information" 
                className="mx-auto"
                style={{
                  width: '600px',
                  maxWidth: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                  margin: '0 auto',
                  cursor: 'pointer'
                }}
              />
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-white py-16" id="reviews">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{
                fontWeight: 900,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                textAlign: 'center',
                backgroundColor: '#dc2626',
                color: '#ffffff',
                padding: '1.5rem 2rem',
                borderRadius: '8px',
                display: 'inline-block',
                width: '100%',
                maxWidth: '100%'
              }}>Customer Testimonials</h2>
            </div>
            <p style={{
              fontWeight: 500,
              letterSpacing: '0.01em',
              textAlign: 'center'
            }}>Authentic experiences from verified customers who have transformed their wellness with GlycoMute</p>
          </div>

          <div className="grid md:grid-cols-1 gap-6">
            {[
              {
                name: "Olivia C.",
                location: "Miami, USA",
                image: "https://ik.imagekit.io/affin/glycomute/leptithinmax-review-3.webp?updatedAt=1765391042861",
                rating: "⭐⭐⭐⭐⭐",
                verified: "Verified Purchase",
                text: "I used to crash hard every afternoon and kept reaching for snacks. With GlycoMute, my numbers are steadier, cravings eased up, and my energy lasts. In about 10 weeks I felt lighter and back in control."
              },
              {
                name: "David T.",
                location: "New York, USA",
                image: "https://ik.imagekit.io/affin/glycomute/leptithinmax-review-2.webp?updatedAt=1765391042870",
                rating: "⭐⭐⭐⭐⭐",
                verified: "Verified Purchase",
                text: "Managing my blood sugar used to feel like a fight. Meals wiped me out and my energy jumped around. After starting GlycoMute, my readings settled down, I stay awake through the day, and cravings are way lower."
              },
              {
                name: "Jessica M.",
                location: "Chicago, USA",
                image: "https://ik.imagekit.io/affin/glycomute/leptithinmax-review-1.webp?updatedAt=1765391042934",
                rating: "⭐⭐⭐⭐⭐",
                verified: "Verified Purchase",
                text: "I’d hit sudden lows during work and lose focus. Staying on GlycoMute evened out my energy and helped me avoid random snacking. My readings look better and I feel clear and steady."
              }
            ].map((review, index) => (
              <div key={index} className="card">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <img 
                      src={review.image} 
                      alt={`${review.name} review`}
                      className="w-24 h-24 rounded-full object-cover border-4 border-[#dc2626]"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h5 className="font-extrabold text-lg" style={{
                        fontWeight: 800,
                        letterSpacing: '-0.01em',
                      }}>{review.name}</h5>
                      <span className="text-sm text-gray-500" style={{ fontWeight: 500 }}>- {review.location}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-yellow-400" style={{ fontWeight: 700 }}>{review.rating}</span>
                      <span className="text-sm text-green-600 font-bold" style={{ fontWeight: 700 }}>{review.verified}</span>
                    </div>
                    <p className="text-gray-700 italic leading-relaxed" style={{
                      fontWeight: 500,
                      letterSpacing: '0.01em'
                    }}>
                      "{review.text}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Pricing Logo Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="image-wrapper" style={{ textAlign: 'center' }}>
            <img 
              src="https://ik.imagekit.io/affin/glycomute/prodentim-special-pricing-logo.webp?updatedAt=1765391043064" 
              alt="GlycoMute Special Pricing" 
              className="w-full max-w-full mx-auto"
              style={{
                width: '100%',
                maxWidth: '100%',
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
                margin: '0 auto'
              }}
            />
          </div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="image-wrapper">
            <a href="https://sweetfend.com/c/order-now.php?affiliate=ubro12&pid=pre1&tid=ubro12" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://ik.imagekit.io/affin/glycomute/glycomute-pricing-table.png?updatedAt=1765391043555" 
                alt="GlycoMute Pricing Table" 
                className="w-full max-w-6xl mx-auto"
              />
            </a>
          </div>
        </div>
      </section>

      {/* What is GlycoMute Section */}
      <section className="bg-white py-16" id="about">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{
                fontWeight: 900,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                textAlign: 'center',
                backgroundColor: '#dc2626',
                color: '#ffffff',
                padding: '1.5rem 2rem',
                borderRadius: '8px',
                display: 'inline-block',
                width: '100%',
                maxWidth: '100%'
              }}>What is GlycoMute?</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-8">
            {/* Image Column */}
            <div className="order-2 md:order-1 flex items-center justify-center">
              <div className="image-wrapper w-full">
                <img 
                  src="https://ik.imagekit.io/affin/glycomute/glycomute.png?updatedAt=1765391043147" 
                  alt="GlycoMute supplement product" 
                  className="w-full mx-auto"
                  style={{
                    width: '100%',
                    maxWidth: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    display: 'block',
                    margin: '0 auto'
                  }}
                />
              </div>
            </div>

            {/* Text Column */}
            <div className="order-1 md:order-2 space-y-4">
              <h3 className="text-2xl font-extrabold" style={{
                color: '#dc2626',
                fontWeight: 800,
                letterSpacing: '-0.01em',
              }}>GlycoMute: Daily Assistance for Optimal Glucose Balance</h3>
              <p className="text-gray-700 leading-relaxed" style={{
                fontWeight: 500,
                letterSpacing: '0.01em',
                fontFamily: 'Jost, sans-serif',
                lineHeight: '1.6',
                fontSize: 'clamp(1rem, 2vw, 1.125rem)'
              }}>
                GlycoMute is a plant-based supplement that helps you keep blood sugar in a healthy range. It fits into normal daily habits—better food choices, some movement, steady sleep—and gives gentle support you can stick with long term.
              </p>
              <h3 className="text-2xl font-extrabold" style={{
                color: '#dc2626',
                fontWeight: 800,
                letterSpacing: '-0.01em',
              }}>How GlycoMute Enhances Your Body's Functions</h3>
              <p className="text-gray-700 leading-relaxed" style={{
                fontWeight: 500,
                letterSpacing: '0.01em',
                fontFamily: 'Jost, sans-serif',
                lineHeight: '1.6',
                fontSize: 'clamp(1rem, 2vw, 1.125rem)'
              }}>
                It combines Cinnamon Bark, Chromium, and key vitamins and minerals that are known for steadying glucose use. Together they help your body handle carbs smoothly, so levels stay balanced and you feel more in control.
              </p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                <h3 className="text-2xl font-extrabold" style={{
                  color: '#dc2626',
                  fontWeight: 800,
                  letterSpacing: '-0.01em',
                }}>Vitality, Equilibrium, and Metabolic Enhancement</h3>
                <p className="text-gray-700 leading-relaxed" style={{
                  fontWeight: 500,
                  letterSpacing: '0.01em',
                  fontFamily: 'Jost, sans-serif',
                  lineHeight: '1.6',
                  fontSize: 'clamp(1rem, 2vw, 1.125rem)'
                }}>
                  When blood sugar stays steady, energy feels smoother, thinking stays clearer, and cravings calm down. GlycoMute aims to help you get that day-to-day balance so you can focus on living, not watching the clock for the next crash.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-extrabold" style={{
                  color: '#dc2626',
                  fontWeight: 800,
                  letterSpacing: '-0.01em',
                }}>Why American Consumers Trust GlycoMute</h3>
                <p className="text-gray-700 leading-relaxed" style={{
                  fontWeight: 500,
                  letterSpacing: '0.01em',
                  fontFamily: 'Jost, sans-serif',
                  lineHeight: '1.6',
                  fontSize: 'clamp(1rem, 2vw, 1.125rem)'
                }}>
                  People choose GlycoMute because it keeps things simple: proven plant ingredients, easy daily use, and a focus on steadier glucose. It’s a straightforward way to support a key part of everyday health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
