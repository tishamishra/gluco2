import Image from 'next/image';

export default function Ingredients() {
  const ingredients = [
    {
      name: "Maqui Berry",
      description: "Mitolyn contains Maqui Berry, a vibrant superfruit rich in anthocyanins and antioxidant compounds that help shield cells from oxidative stress, support mitochondrial health, decrease inflammation, and promote natural energy and vitality."
    },
    {
      name: "Rhodiola Rosea",
      description: "Mitolyn features Rhodiola Rosea, a powerful adaptogenic herb known to enhance stress tolerance and reduce fatigue. Mitolyn's Rhodiola ingredient supports mental clarity, balanced mood, and sustained endurance for daily productivity and well-being."
    },
    {
      name: "Haematococcus (Astaxanthin)",
      description: "Mitolyn includes Haematococcus, recognized as one of nature's strongest antioxidant compounds. Mitolyn's astaxanthin helps protect mitochondria from oxidative damage, promotes healthy skin, and improves efficient cellular energy production."
    },
    {
      name: "Amla (Indian Gooseberry)",
      description: "Mitolyn incorporates Amla, naturally rich in vitamin C and polyphenols. Mitolyn's Amla ingredient strengthens immune function, promotes healthy digestion, and enhances nutrient absorption—crucial for consistent mitochondrial performance."
    },
    {
      name: "Theobroma Cacao",
      description: "Mitolyn includes Theobroma Cacao, sourced from pure cocoa. Mitolyn's cacao contains natural compounds that may improve mood, support heart health, and provide gentle, sustained energy without caffeine crashes or overstimulation."
    },
    {
      name: "Schisandra",
      description: "Mitolyn contains Schisandra, a traditional adaptogen used for centuries to enhance stamina, support liver function, and improve mental focus. Mitolyn's Schisandra helps modulate stress response and maintain calm, steady energy throughout the day."
    }
  ];

  return (
    <>
      <section className="header3 cid-uwxPKPzuhp py-10 text-center" id="mitolyn-ingredients" style={{ background: 'linear-gradient(135deg, #fce7f3 0%, #f3e8ff 100%)' }}>
        <div className="align-center container mx-auto px-4">
          <div className="row justify-center">
            <div className="col-12 col-lg-12">
              <h3 className="mbr-section-title mbr-fonts-style align-center mb-4 display-2 text-3xl md:text-4xl lg:text-5xl font-bold text-black" style={{ fontFamily: 'Arial, sans-serif' }}>
                <strong>Mitolyn Ingredients</strong>
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="content9 cid-uwDUNYnBmN py-12 bg-gradient-to-b from-white to-pink-50" id="content9-i">
        <div className="container mx-auto px-4">
          <div className="row justify-center">
            <div className="col-md-12 col-lg-10">
              <h4 className="mbr-section-title mbr-fonts-style mb-4 display-7 text-xl md:text-2xl font-semibold text-black" style={{ fontFamily: 'Arial, sans-serif' }}>
                Mitolyn features a carefully curated combination of natural botanicals and nutrients—each chosen for its ability to enhance mitochondrial function, energy balance, and whole-body vitality. Mitolyn's formula is based on scientific research demonstrating each ingredient's unique contribution to metabolic health. Discover the key components below:
              </h4>
              <div className="mbr-text mbr-fonts-style display-7 text-base md:text-lg leading-relaxed ingredients-content" style={{ color: '#000000', fontFamily: 'Arial, sans-serif' }}>
                <ol className="space-y-4 ingredients-list" style={{ listStyle: 'none', paddingLeft: '0', counterReset: 'none' }}>
                  {ingredients.map((ingredient, index) => (
                    <li 
                      key={index} 
                      className="ingredient-item"
                      style={{ 
                        marginBottom: '1.5rem', 
                        listStyle: 'none', 
                        paddingLeft: '3.5rem', 
                        position: 'relative', 
                        minHeight: '40px'
                      }}
                    >
                      <span style={{
                        position: 'absolute',
                        left: '0',
                        top: '0',
                        color: '#ffffff',
                        background: '#e6502b',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                        flexShrink: 0,
                        zIndex: 1
                      }}>
                        {index + 1}
                      </span>
                      <strong>{ingredient.name}:</strong> {ingredient.description}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features17 cid-uwp6M28xWE py-12 bg-white" id="features17-8e">
        <div className="container mx-auto px-4">
          <div className="content-wrapper">
            <div className="row align-items-center flex flex-col lg:flex-row gap-10">
              <div className="col-12 col-lg-5">
                <div className="image-wrapper rounded-3xl overflow-hidden shadow-2xl border-4 border-purple-300 bg-gradient-to-br from-white to-purple-50 p-4">
                  <img 
                    src="https://ik.imagekit.io/affin/mitolyn-buy-480x451.webp?updatedAt=1765361274874" 
                    alt="Mitolyn order" 
                    className="w-full h-auto object-contain mx-auto"
                    style={{ 
                      maxWidth: '100%', 
                      width: '100%',
                      height: 'auto',
                      minHeight: '400px',
                      objectFit: 'contain'
                    }}
                  />
                </div>
              </div>
              <div className="col-12 col-lg flex-1">
                <div className="text-wrapper bg-gradient-to-br from-white to-pink-50 rounded-3xl shadow-2xl border-4 border-pink-300 p-8 md:p-10">
                  <h5 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#0f172a', fontFamily: 'Arial, sans-serif', textAlign: 'left', lineHeight: '1.35' }}>
                    Mitolyn supplies your system with the resources to function at maximum potential. Mitolyn assists effective fat utilization, improved self-assurance, and maintained power levels. Mitolyn's complete strategy helps you reach peak metabolic wellness and vigor.
                  </h5>
                  <p className="text-xl md:text-2xl font-bold mb-6 text-red-600" style={{ fontFamily: 'Arial, sans-serif', textAlign: 'left' }}>
                    Only for: $39/per bottle
                  </p>
                  <div className="mt-4">
                    <a 
                      className="btn btn-warning bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-4 sm:px-8 sm:py-5 md:px-14 md:py-6 rounded-full font-bold text-sm sm:text-base md:text-lg lg:text-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 inline-flex items-center shadow-2xl hover:shadow-3xl w-full sm:w-auto justify-center transform hover:scale-105" 
                      href="https://b9c6ckcm0x6mdy38yird8e5uex.hop.clickbank.net/?&traffic_source=bing" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Start Your Journey to Effortless Weight Loss!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

