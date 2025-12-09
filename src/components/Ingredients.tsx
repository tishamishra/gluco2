import Image from 'next/image';

export default function Ingredients() {
  const ingredients = [
    {
      number: "1",
      name: "Maqui Berry",
      description: "This deep purple berry is loaded with anthocyanins - those powerful antioxidants that give it that rich color. But more importantly, these compounds help your mitochondria work better, which means more energy production. Plus, it's great for your heart and helps keep your cholesterol in check. It's one of those superfoods that does a lot of heavy lifting."
    },
    {
      number: "2",
      name: "Rhodiola",
      description: "This is what's called an adaptogen, which basically means it helps your body handle stress better. But it also does something pretty cool - it helps your mitochondria function more efficiently. People who take Rhodiola often notice they feel calmer, more focused, and have better mental clarity. It's like giving your brain and your cells a helping hand."
    },
    {
      number: "3",
      name: "Haematococcus",
      description: "This red algae might not sound glamorous, but it's packed with astaxanthin - one of the most powerful antioxidants out there. It helps protect your mitochondria, keeps your joints feeling good, and gives your immune system a serious boost. Think of it as your body's natural defense system getting an upgrade."
    },
    {
      number: "4",
      name: "Amla",
      description: "Also known as Indian gooseberry, this fruit is absolutely loaded with antioxidants. It helps your mitochondria stay healthy, keeps your digestion running smoothly, and protects your cells from damage. It's been used in traditional medicine for centuries, and now we know why - it really works."
    },
    {
      number: "5",
      name: "Theobroma Cacao",
      description: "Yes, this is where chocolate comes from, but we're talking about the raw, unprocessed version here. It's high in epicatechin, which is a natural compound that helps your mitochondria work harder. It also supports healthy blood pressure and can give your mood a nice lift. It's like getting the benefits of chocolate without the guilt."
    },
    {
      number: "6",
      name: "Schisandra",
      description: "This berry has been used in traditional Chinese medicine for thousands of years, and for good reason. It helps your mitochondria function better, which means more efficient calorie burning. Plus, it's great for your skin and helps support your liver. It's one of those ingredients that does a little bit of everything."
    }
  ];

  return (
    <>
      <section className="header3 cid-tB85MvgqdZ py-10 text-center" id="header3-1o" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="align-center container mx-auto px-4">
          <div className="row justify-center">
            <div className="col-12 col-lg-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
                <strong>Mitolyn Ingredients</strong>
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="features20 cid-uwoOd3EPXa py-12 bg-white" id="features20-8a">
        <div className="container mx-auto px-4">
          <div className="row justify-center">
            <div className="col-md-12 col-lg-10">
              <div className="card-wrapper pb-4">
                <div className="card-box align-center mb-8">
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed" style={{ color: '#000000', fontFamily: 'Arial, sans-serif', textAlign: 'left' }}>
                    What I love about Mitolyn is that every single ingredient was chosen for a specific reason. These aren't random plants thrown together - each one has research backing its ability to support your metabolism and energy production. They work like a team, each bringing something unique to help your body function at its best. When you see the science behind each ingredient, it makes sense why people are seeing such great results.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-10">
              <div className="space-y-6">
                {ingredients.map((ingredient, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: '#374151', fontFamily: 'Arial, sans-serif' }}>
                        {ingredient.name}
                      </h3>
                      <p className="text-base md:text-lg leading-relaxed" style={{ color: '#374151', fontFamily: 'Arial, sans-serif', textAlign: 'left' }}>
                        {ingredient.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features17 cid-uwp6M28xWE py-12 bg-gradient-to-br from-blue-50 via-white to-indigo-100" id="features17-8e">
        <div className="container mx-auto px-4">
          <div className="content-wrapper">
            <div className="row align-items-center flex flex-col lg:flex-row gap-10">
              <div className="col-12 col-lg-5">
                <div className="image-wrapper rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-200 bg-white">
                  <img 
                    src="https://ik.imagekit.io/nang9yead/mitolyn-500x500.png" 
                    alt="Mitolyn order" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              <div className="col-12 col-lg flex-1">
                <div className="text-wrapper bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-10">
                  <h5 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#0f172a', fontFamily: 'Arial, sans-serif', textAlign: 'left', lineHeight: '1.35' }}>
                    Ready to see what your body can do when it's working at full capacity? Start today and give yourself the tools to burn fat more efficiently, feel more confident, and have the energy you've been missing. Your future self will thank you.
                  </h5>
                  <p className="text-xl md:text-2xl font-extrabold mb-6 text-yellow-600" style={{ fontFamily: 'Arial, sans-serif', textAlign: 'left' }}>
                    Only for: $39/per bottle
                  </p>
                  <div className="mt-4">
                    <a 
                      className="btn btn-warning bg-yellow-500 text-black px-14 py-6 rounded-md font-bold text-lg md:text-xl hover:bg-yellow-600 transition-colors inline-flex items-center shadow-lg hover:shadow-xl min-w-[260px] justify-center" 
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

