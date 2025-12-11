export default function PricingSection() {
  return (
    <>
      <section className="bg-[#ffea64] py-8 text-center" style={{ backgroundColor: '#ffea64', paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="container mx-auto px-4">
          <div className="inline-block mb-2" style={{ marginBottom: '0.5rem' }}>
            <div style={{
              backgroundColor: '#dc2626',
              padding: '0.75rem 2rem',
              borderRadius: '8px',
              display: 'inline-block'
            }}>
              <h2 style={{
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                fontFamily: 'Jost, sans-serif',
                fontWeight: 700,
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                margin: 0
              }}>
                SPECIAL OFFER PRICING
              </h2>
            </div>
          </div>
          <p style={{
            fontSize: '0.9rem',
            fontFamily: 'Jost, sans-serif',
            fontWeight: 500,
            color: '#000000',
            margin: '0.5rem 0 0 0'
          }}>
            *Special Pricing Not Guaranteed Past Today!
          </p>
        </div>
      </section>

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

      <section className="bg-white py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-400 border-4 border-gray-800 rounded-xl p-6 text-center">
              <p className="text-lg font-bold text-gray-900">
                ⚠️ WARNING: Stock levels of GlycoMute™ are limited. Accept your reserved bottle above NOW before your discount expires.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
