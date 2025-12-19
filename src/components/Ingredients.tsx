export default function Ingredients() {
  const ingredients = [
    {
      name: "Banaba (leaf extract)",
      description: "Banaba helps your body use sugar more evenly after meals. It helps break down sugar more gently, which may reduce sudden spikes and drops. This helps keep your energy steady and your day more stable."
    },
    {
      name: "Guggul Gum Resin",
      description: "Guggul helps insulin work better, which lets your body use sugar more effectively. By helping keep blood sugar more stable, it supports better metabolism and more steady energy throughout the day."
    },
    {
      name: "Bitter Melon",
      description: "Bitter melon has natural compounds that work like insulin, helping your body handle high blood sugar after meals. It helps break down sugar normally, especially after eating high-carb foods, for steadier readings."
    },
    {
      name: "Gymnema",
      description: "Gymnema is known for reducing sugar cravings by making sweet things taste less sweet. This helps control your appetite, encourages healthier eating, and makes it easier to avoid too much snacking."
    },
    {
      name: "Juniper Berries",
      description: "Juniper berries help your body use sugar properly and keep your metabolism working well. They help keep energy levels more even throughout the day by supporting your body's natural ways of controlling sugar."
    },
    {
      name: "White Mulberry (leaf extract)",
      description: "White mulberry slows down how fast sugar is absorbed in your gut after meals. This helps keep blood sugar more stable, reducing sudden energy drops and helping you feel more even all day."
    }
  ];

  return (
    <section className="bg-white py-16" id="ingredients">
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
          }}>Inside Every GlycoMute You'll Find… Ingredients (scientifically backed)</h2>
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <div className="card bg-white">
            <p className="text-gray-700 leading-relaxed text-center">
              <strong>GlycoMute</strong> uses a careful mix of plant extracts and important minerals to help keep blood sugar steady, energy even, and your day on track. Here's how each ingredient helps:
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {ingredients.map((ingredient, index) => (
              <div key={index} className="card bg-white">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{
                    background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
                    boxShadow: '0 2px 8px rgba(220, 38, 38, 0.3)'
                  }}>
                    <span className="text-xl font-bold" style={{ color: '#ffffff' }}>{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-extrabold mb-2" style={{
                      color: '#111827',
                      fontWeight: 800,
                      letterSpacing: '-0.01em',
                    }}>{ingredient.name}</h4>
                    <p className="text-gray-700 leading-relaxed" style={{
                      fontWeight: 500,
                      letterSpacing: '0.01em'
                    }}>{ingredient.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-8">
          <div className="card bg-white">
            <p className="text-gray-700 leading-relaxed text-center">
              <strong>GlycoMute</strong> uses well-studied plant ingredients and minerals that help keep blood sugar healthy and energy steady. Together, these ingredients help your body use sugar well so you can feel clear and steady all day.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-8">
          <div className="image-wrapper" style={{ textAlign: 'center' }}>
            <img 
              src="https://ik.imagekit.io/affin/glycomute/unnamed20-202025-11-30t170757.524-857x614.webp?updatedAt=1765391043105" 
              alt="GlycoMute ingredients information" 
              className="mx-auto"
              style={{
                width: '600px',
                maxWidth: '100%',
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
                margin: '0 auto'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
