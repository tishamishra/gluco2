export default function Guarantee() {
  return (
    <section className="py-8 md:py-12" style={{ backgroundColor: '#2c7a7b' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Badge Image Column */}
            <div className="order-2 md:order-1 flex items-center justify-center">
              <div className="image-wrapper">
                <img 
                  src="https://ik.imagekit.io/affin/glycomute/90-days-guarantee-badge.png?updatedAt=1765391043261" 
                  alt="90 Days Money Back Guarantee Badge" 
                  className="mx-auto"
                  style={{
                    width: '300px',
                    maxWidth: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                />
              </div>
            </div>

            {/* Text Column */}
            <div className="order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-3 text-white" style={{
                fontWeight: 900,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                lineHeight: '1.2'
              }}>
                100% Satisfaction<br />
                90-Days Money Back Guarantee
              </h2>
              <p className="text-white leading-relaxed text-base md:text-lg" style={{
                fontWeight: 500,
                letterSpacing: '0.01em',
                fontFamily: 'Jost, sans-serif',
                lineHeight: '1.6',
                marginBottom: 0
              }}>
                GlycoMute comes with a 90-day, no-questions-asked refund. If you don’t love it, call or email us within 90 days, send it back (even empty), and we’ll refund you in full minus shipping.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
