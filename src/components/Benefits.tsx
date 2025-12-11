export default function Benefits() {
  const benefits = [
    "Keeps blood sugar steady: Helps your body handle sugar more smoothly for even readings day to day.",
    "Steadier energy: Supports turning sugar into steady fuel so you feel less afternoon drag.",
    "Fewer cravings: Calms sugar swings that trigger snacking, making it easier to stay on track.",
    "Clearer focus: Stable glucose can mean clearer thinking and less brain fog.",
    "Metabolic support: Helps your system break down carbs without big ups and downs.",
    "Weight-friendly habits: With steadier energy and fewer cravings, healthy choices get easier.",
    "Calmer mood: Balanced blood sugar can ease irritability and help you feel more steady."
  ];

  return (
    <section className="bg-white py-16" id="benefits">
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
          }}>🎯 Benefits of GlycoMute</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card">
            <p className="text-gray-700 leading-relaxed mb-8" style={{
              fontWeight: 500,
              letterSpacing: '0.01em'
            }}>
              <strong className="text-lg" style={{ fontWeight: 700 }}>GlycoMute</strong> is made to help keep blood sugar steady while supporting energy, focus, and overall balance. Its plant-based blend works with your routine so you can feel consistent day after day.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <span className="text-green-500 text-xl font-bold flex-shrink-0">✅</span>
                  <p className="text-gray-700 leading-relaxed" style={{
                    fontWeight: 500,
                    letterSpacing: '0.01em'
                  }}>
                    <strong style={{ fontWeight: 700 }}>{benefit.split(':')[0]}:</strong> {benefit.split(':').slice(1).join(':')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
