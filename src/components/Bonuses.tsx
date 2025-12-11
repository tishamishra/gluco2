export default function Bonuses() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="section-title" style={{ marginBottom: '3rem', textAlign: 'center' }}>
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
          }}>Order 6 Bottles or 3 Bottles and Get 2 FREE Bonuses!</h2>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Bonus #1 */}
          <div style={{
            backgroundColor: '#ffffff',
            border: '4px solid #ffea64',
            borderRadius: '12px',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            <div className="grid md:grid-cols-2 gap-6 items-center">
              {/* Image Column */}
              <div className="flex items-center justify-center">
                <div className="image-wrapper">
                  <img 
                    src="https://ik.imagekit.io/affin/glycomute/regenvive-bonus1.jpg?updatedAt=1765391042805" 
                    alt="BONUS #1 - Clear Mind, Sharp Memory" 
                    className="mx-auto"
                    style={{
                      width: '280px',
                      maxWidth: '100%',
                      height: 'auto',
                      objectFit: 'contain',
                      display: 'block'
                    }}
                  />
                </div>
              </div>

              {/* Text Column */}
              <div style={{
                backgroundColor: '#fffef0',
                padding: '1.5rem',
                borderRadius: '8px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <h3 className="mb-2" style={{
                  color: '#dc2626',
                  fontWeight: 900,
                  fontSize: '1.25rem',
                  letterSpacing: '-0.01em',
                  marginBottom: '0.5rem'
                }}>🎁 BONUS #1</h3>
                <h4 className="mb-3" style={{
                  color: '#2563eb',
                  fontWeight: 800,
                  fontSize: '1.125rem',
                  letterSpacing: '-0.01em',
                  marginBottom: '0.75rem'
                }}>Clear Mind, Sharp Memory</h4>
                <p className="text-gray-900 leading-relaxed" style={{
                  fontWeight: 500,
                  letterSpacing: '0.01em',
                  fontFamily: 'Jost, sans-serif',
                  lineHeight: '1.6',
                  fontSize: '0.95rem',
                  color: '#1a1a1a',
                  margin: 0
                }}>
                  This guide shares simple tips to think clearer, remember more, and cut through brain fog. Use it for quick ways to stay focused and feel mentally sharp.
                </p>
              </div>
            </div>
          </div>

          {/* Bonus #2 */}
          <div style={{
            backgroundColor: '#ffffff',
            border: '4px solid #ffea64',
            borderRadius: '12px',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            <div className="grid md:grid-cols-2 gap-6 items-center">
              {/* Image Column */}
              <div className="flex items-center justify-center">
                <div className="image-wrapper">
                  <img 
                    src="https://ik.imagekit.io/affin/glycomute/regenvive-bonus2.jpg?updatedAt=1765391042910" 
                    alt="BONUS #2 - Hello, Radiant Energy" 
                    className="mx-auto"
                    style={{
                      width: '280px',
                      maxWidth: '100%',
                      height: 'auto',
                      objectFit: 'contain',
                      display: 'block'
                    }}
                  />
                </div>
              </div>

              {/* Text Column */}
              <div style={{
                backgroundColor: '#fffef0',
                padding: '1.5rem',
                borderRadius: '8px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <h3 className="mb-2" style={{
                  color: '#dc2626',
                  fontWeight: 900,
                  fontSize: '1.25rem',
                  letterSpacing: '-0.01em',
                  marginBottom: '0.5rem'
                }}>🎁 BONUS #2</h3>
                <h4 className="mb-3" style={{
                  color: '#2563eb',
                  fontWeight: 800,
                  fontSize: '1.125rem',
                  letterSpacing: '-0.01em',
                  marginBottom: '0.75rem'
                }}>Hello, Radiant Energy</h4>
                <p className="text-gray-900 leading-relaxed" style={{
                  fontWeight: 500,
                  letterSpacing: '0.01em',
                  fontFamily: 'Jost, sans-serif',
                  lineHeight: '1.6',
                  fontSize: '0.95rem',
                  color: '#1a1a1a',
                  margin: 0
                }}>
                  Learn easy ways to boost energy, fight fatigue, and keep a steady pace all day. Simple, practical steps to feel refreshed naturally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
