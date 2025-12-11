export default function Ingredients() {
  const ingredients = [
    {
      name: "Banaba (leaf extract)",
      description: "Banaba assists your system in utilizing glucose more uniformly following meals. It promotes gentler sugar breakdown, potentially minimizing abrupt elevations and drops. This supports sustained vitality and enhanced daily stability."
    },
    {
      name: "Guggul Gum Resin",
      description: "Guggul enhances proper insulin function, enabling your body to process glucose with greater effectiveness. Through encouraging more stable glucose concentrations, it supports metabolic equilibrium and more consistent energy patterns daily."
    },
    {
      name: "Bitter Melon",
      description: "Bitter melon includes natural substances that function comparably to insulin, assisting the system in handling elevated glucose concentrations post-meal. It facilitates standard glucose breakdown, particularly following high-carbohydrate consumption, for steadier measurements."
    },
    {
      name: "Gymnema",
      description: "Gymnema is recognized for diminishing sugar cravings by decreasing sweet taste sensitivity. This curbs appetite impulses, encourages healthier dietary patterns, and simplifies avoiding excessive snacking."
    },
    {
      name: "Juniper Berries",
      description: "Juniper berries promote proper glucose utilization and general metabolic performance. They maintain more uniform energy levels throughout the day by supporting your body's innate sugar regulation mechanisms."
    },
    {
      name: "White Mulberry (leaf extract)",
      description: "White mulberry decelerates sugar absorption rates in the digestive tract following meals. This encourages more stable glucose concentrations, reducing abrupt energy declines and fostering more even daily vitality."
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
              <strong>GlycoMute</strong> uses a careful mix of plant extracts and minerals to help keep blood sugar steady, energy even, and your day on track. Here’s how each ingredient can help:
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
              <strong>GlycoMute</strong> uses well-studied plants and minerals to support healthy glucose balance and steady energy. Together, they help your body manage sugar smoothly so you can feel clear and consistent all day.
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
