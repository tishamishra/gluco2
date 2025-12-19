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
            }}>Real stories from real customers who have improved their health with GlycoMute</p>
          </div>

          <div className="grid md:grid-cols-1 gap-6">
            {[
              {
                name: "Sarah K.",
                location: "Los Angeles, USA",
                image: "https://ik.imagekit.io/affin/glycomute/leptithinmax-review-3.webp?updatedAt=1765391042861",
                rating: "⭐⭐⭐⭐⭐",
                verified: "Verified Purchase",
                text: "I used to feel really tired every afternoon and kept grabbing snacks. With GlycoMute, my blood sugar is more steady, my cravings went down, and my energy stays up. After about 10 weeks I felt better and more in charge."
              },
              {
                name: "Michael R.",
                location: "Houston, USA",
                image: "https://ik.imagekit.io/affin/glycomute/leptithinmax-review-2.webp?updatedAt=1765391042870",
                rating: "⭐⭐⭐⭐⭐",
                verified: "Verified Purchase",
                text: "Keeping my blood sugar steady used to be really hard. After eating I would get so tired and my energy was up and down. Since I started GlycoMute, my numbers are more stable, I can stay alert all day, and my cravings dropped a lot."
              },
              {
                name: "Emily P.",
                location: "Phoenix, USA",
                image: "https://ik.imagekit.io/affin/glycomute/leptithinmax-review-1.webp?updatedAt=1765391042934",
                rating: "⭐⭐⭐⭐⭐",
                verified: "Verified Purchase",
                text: "I would have sudden drops during work and couldn't focus. Taking GlycoMute regularly smoothed out my energy and helped me stop snacking so much. My numbers improved and I feel focused and balanced."
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
              }}>GlycoMute: Daily Help for Healthy Blood Sugar</h3>
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
              }}>How GlycoMute Helps Your Body Work Better</h3>
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
                }}>Energy, Balance, and Better Health</h3>
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
