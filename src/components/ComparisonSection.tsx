export default function ComparisonSection() {
  const comparison = [
    {
      feature: "Natural Ingredients",
      mitolyn: "✓ 100% Natural",
      competitors: "✗ Synthetic Additives"
    },
    {
      feature: "FDA Approved Facility",
      mitolyn: "✓ Yes",
      competitors: "✗ Not Always"
    },
    {
      feature: "Money-Back Guarantee",
      mitolyn: "✓ 90 Days",
      competitors: "✗ 30 Days or Less"
    },
    {
      feature: "GMP Certified",
      mitolyn: "✓ Certified",
      competitors: "✗ Varies"
    },
    {
      feature: "Made in USA",
      mitolyn: "✓ Yes",
      competitors: "✗ Often Imported"
    },
    {
      feature: "No Side Effects",
      mitolyn: "✓ Stimulant-Free",
      competitors: "✗ May Cause Jitters"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-purple-50 via-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
            <span style={{ background: 'linear-gradient(135deg, #8b5cf6, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Why Mitolyn Stands Out
            </span>
          </h2>
          <p className="text-xl text-gray-700" style={{ fontFamily: 'Arial, sans-serif' }}>
            See how Mitolyn compares to other supplements
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl border-4 border-purple-300 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6">
            <div className="grid grid-cols-3 gap-4 text-white font-bold text-lg" style={{ fontFamily: 'Arial, sans-serif' }}>
              <div>Feature</div>
              <div className="text-center">Mitolyn</div>
              <div className="text-center">Others</div>
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            {comparison.map((item, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 p-6 hover:bg-purple-50 transition-colors">
                <div className="font-semibold text-gray-800" style={{ fontFamily: 'Arial, sans-serif' }}>
                  {item.feature}
                </div>
                <div className="text-center text-green-600 font-bold" style={{ fontFamily: 'Arial, sans-serif' }}>
                  {item.mitolyn}
                </div>
                <div className="text-center text-red-600 font-bold" style={{ fontFamily: 'Arial, sans-serif' }}>
                  {item.competitors}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

