export default function Benefits() {
  const benefits = [
    "Keeps blood sugar steady: Helps your body use sugar better for even readings day to day.",
    "Steady energy: Helps turn sugar into steady fuel so you feel less tired in the afternoon.",
    "Fewer cravings: Keeps blood sugar from swinging, which often leads to snacking, making it easier to eat better.",
    "Clearer thinking: Steady blood sugar helps you think better and feel less foggy.",
    "Better metabolism: Helps your body break down carbs without big ups and downs.",
    "Weight support: More steady energy and fewer cravings make it easier to make healthy choices.",
    "Better mood: Steady blood sugar may help reduce mood swings and keep you feeling more even."
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
              <strong className="text-lg" style={{ fontWeight: 700 }}>GlycoMute</strong> is made to help keep blood sugar steady while boosting energy, clear thinking, and overall health. This plant-based mix fits easily into your daily routine for steady results every day.
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
