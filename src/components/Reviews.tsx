import Image from 'next/image';

export default function Reviews() {
  const reviews = [
    {
      name: "Chris L.",
      location: "Maryland, USA",
      rating: "⭐⭐⭐⭐⭐",
      text: "Honestly, I was skeptical at first. I'd tried so many things over the years and nothing really moved the needle. But after three months with Mitolyn, I'm down 22 pounds and I actually have energy again. Like, real energy - not the kind you get from chugging coffee all day. I don't crash in the afternoon anymore, and I'm finally seeing progress in areas that never seemed to respond to anything else. This stuff actually works."
    },
    {
      name: "Michael H.",
      location: "Nebraska, USA",
      rating: "⭐⭐⭐⭐⭐",
      text: "I've been on this weight loss journey for what feels like forever. Tried the gym, tried every diet under the sun, tried other supplements. Nothing stuck. Then I found Mitolyn and something finally clicked. Two months in and I'm 20 pounds lighter. But honestly, the weight loss is just part of it. I feel better, I'm not constantly bloated, and I actually want to be active now. It's like my body remembered how it's supposed to work."
    },
    {
      name: "Megan S.",
      location: "Oregon, USA",
      rating: "⭐⭐⭐⭐⭐",
      text: "The belly fat thing was driving me crazy. I'd work out, watch what I ate, but that stubborn area just wouldn't budge. Eight weeks with Mitolyn and I've lost 25 pounds, and most importantly, that belly fat is finally going away. My energy is through the roof, and I'm not constantly fighting cravings anymore. I love that it's all natural ingredients - no weird chemicals. This has been a total game-changer for me."
    }
  ];

  return (
    <>
      <section className="content4 cid-tTO3fIHdJP py-10 text-center" id="content4-6e" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="row justify-center">
            <div className="title col-md-12 col-lg-10">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
                <strong>Mitolyn Customer Reviews</strong>
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="content6 cid-udGuLhhhL0 py-12 bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50" id="content6-7h">
        <div className="container mx-auto px-4">
          <div className="row justify-center">
            <div className="col-md-12 col-lg-10">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-4" style={{ borderColor: '#fbbf24' }}>
                <p className="text-lg md:text-xl lg:text-2xl my-4 text-center font-semibold" style={{ color: '#000000', fontFamily: 'Arial, sans-serif' }}>
                  <span className="text-2xl mr-2">🎉</span>
                  I've been amazed by the stories coming in from people who've tried Mitolyn. We're talking about folks who finally broke through those frustrating weight loss plateaus, got their energy back, and started feeling like themselves again. The results speak for themselves - thousands of people are seeing real changes in their bodies, their energy levels, and how they feel about themselves.
                  <span className="text-2xl ml-2">🎉</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="image3 cid-uqaODZAydt py-8 bg-gradient-to-br from-blue-50 to-purple-50" id="image3-81">
        <div className="container mx-auto px-4">
          <div className="row justify-center">
            <div className="col-12 col-lg-9">
              <div className="image-wrapper rounded-2xl overflow-hidden shadow-2xl border-4" style={{ borderColor: '#8b5cf6' }}>
                <Image 
                  src="https://ik.imagekit.io/affin/mitolyn-review.webp?updatedAt=1765361274886" 
                  alt="Mitolyn-review" 
                  width={900} 
                  height={600}
                  className="w-full h-auto"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {reviews.map((review, index) => {
        const colors = [
          { bg: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)', border: '#3b82f6', accent: '#60a5fa' },
          { bg: 'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)', border: '#ec4899', accent: '#f472b6' },
          { bg: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', border: '#f59e0b', accent: '#fbbf24' }
        ];
        const colorScheme = colors[index % colors.length];
        
        return (
          <section key={index} className={`content7 cid-tTZftgi6HM${index === 1 ? 'HM' : index === 2 ? 'Slf' : ''}`} id={`content7-${index === 0 ? '6k' : index === 1 ? '6l' : '6m'}`}>
            <div className="container mx-auto px-4 py-8">
              <div className="row justify-center">
                <div className="col-12 col-md-10">
                  <div 
                    className="rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-4 relative overflow-hidden"
                    style={{ 
                      background: colorScheme.bg,
                      borderColor: colorScheme.border
                    }}
                  >
                    <div className="absolute top-4 right-4 text-4xl opacity-20">💬</div>
                    <div className="flex items-start gap-4 mb-4">
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-lg"
                        style={{ 
                          background: `linear-gradient(135deg, ${colorScheme.border} 0%, ${colorScheme.accent} 100%)`
                        }}
                      >
                        {review.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <h5 className="text-xl font-bold mb-2" style={{ color: '#000000', fontFamily: 'Arial, sans-serif' }}>
                          <strong>{review.name}</strong>
                        </h5>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</span>
                          <span className="text-sm font-semibold" style={{ color: colorScheme.border }}>Verified Purchase</span>
                        </div>
                        <p className="text-sm font-medium" style={{ color: '#666666', fontFamily: 'Arial, sans-serif' }}>
                          📍 {review.location}
                        </p>
                      </div>
                    </div>
                    <div className="relative z-10">
                      <p className="text-lg leading-relaxed mb-4 italic" style={{ color: '#000000', fontFamily: 'Arial, sans-serif', textAlign: 'left', lineHeight: '1.8' }}>
                        "{review.text}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="image3 cid-uwoeZNPP5f py-8 bg-gradient-to-br from-pink-50 to-yellow-50" id="image3-85">
        <div className="container mx-auto px-4">
          <div className="row justify-center">
            <div className="col-12 col-lg-9">
              <div className="image-wrapper rounded-2xl overflow-hidden shadow-2xl border-4" style={{ borderColor: '#f59e0b' }}>
                <Image 
                  src="https://ik.imagekit.io/affin/mitolyn-review.webp?updatedAt=1765361274886" 
                  alt="Mitolyn-reviews" 
                  width={900} 
                  height={600}
                  className="w-full h-auto"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

