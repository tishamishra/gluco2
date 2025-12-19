export default function HowItWorks() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="section-title" style={{ marginBottom: '2rem', textAlign: 'center' }}>
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
          }}>🔬 How Does GlycoMute Work?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image Column */}
          <div className="order-2 md:order-1 flex items-center justify-center">
            <div className="image-wrapper w-full">
              <img 
                src="https://ik.imagekit.io/affin/glycomute/unnamed20-202025-11-30t172340.994-535x626.webp?updatedAt=1765391042842" 
                alt="How GlycoMute works - Blood sugar support mechanism" 
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
          <div className="order-1 md:order-2">
            <p className="text-gray-700 leading-relaxed mb-6" style={{
              fontWeight: 500,
              letterSpacing: '0.01em',
              fontFamily: 'Jost, sans-serif',
              lineHeight: '1.6',
              fontSize: 'clamp(1rem, 2vw, 1.125rem)'
            }}>
              <strong className="text-lg" style={{ fontWeight: 700 }}>GlycoMute</strong> works with your body's natural systems to keep blood sugar balanced. Instead of replacing healthy eating and exercise, it works as a daily helper that makes those good habits work even better.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-extrabold mb-3" style={{
                  color: '#dc2626',
                  fontWeight: 800,
                  letterSpacing: '-0.01em',
                }}>1. Helps Your Body Use Sugar Better: Makes Insulin Work Better</h4>
                <p className="text-gray-700 leading-relaxed" style={{
                  fontWeight: 500,
                  letterSpacing: '0.01em',
                  fontFamily: 'Jost, sans-serif',
                  lineHeight: '1.6',
                  fontSize: 'clamp(1rem, 2vw, 1.125rem)'
                }}>
                  Ingredients like Chromium and Berberine help your cells respond better to insulin, the hormone that moves sugar into cells where it turns into energy. Better response means your body uses sugar more efficiently.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-extrabold mb-3" style={{
                  color: '#dc2626',
                  fontWeight: 800,
                  letterSpacing: '-0.01em',
                }}>2. Helps Break Down Carbs Slower</h4>
                <p className="text-gray-700 leading-relaxed" style={{
                  fontWeight: 500,
                  letterSpacing: '0.01em',
                  fontFamily: 'Jost, sans-serif',
                  lineHeight: '1.6',
                  fontSize: 'clamp(1rem, 2vw, 1.125rem)'
                }}>
                  Cinnamon Bark and other plant ingredients can slow down how fast carbs turn into sugar, which helps prevent big spikes in blood sugar after meals.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-extrabold mb-3" style={{
                  color: '#dc2626',
                  fontWeight: 800,
                  letterSpacing: '-0.01em',
                }}>3. Protects Your Cells with Antioxidants</h4>
                <p className="text-gray-700 leading-relaxed" style={{
                  fontWeight: 500,
                  letterSpacing: '0.01em',
                  fontFamily: 'Jost, sans-serif',
                  lineHeight: '1.6',
                  fontSize: 'clamp(1rem, 2vw, 1.125rem)'
                }}>
                  The mix includes antioxidants that help protect the cells that handle sugar, keeping them healthy so they can do their job well.
                </p>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-gray-700 leading-relaxed" style={{
                  fontWeight: 500,
                  letterSpacing: '0.01em',
                  fontFamily: 'Jost, sans-serif',
                  lineHeight: '1.6',
                  fontSize: 'clamp(1rem, 2vw, 1.125rem)'
                }}>
                  In simple terms, GlycoMute gives your body important nutrients that help it use sugar from food better, with fewer big swings. This helps keep blood sugar steady and gives you more reliable energy day after day.
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
  );
}
