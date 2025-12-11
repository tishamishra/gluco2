export default function Reviews() {
  const reviews = [
    {
      name: "Olivia C.",
      location: "Miami, USA",
      image: "https://ik.imagekit.io/affin/glycomute/leptithinmax-review-3.webp?updatedAt=1765391042861",
      rating: "⭐⭐⭐⭐⭐",
      verified: "Verified Purchase",
      text: "I always struggled with sugar cravings and afternoon crashes, which made managing my weight and energy so hard. GlycoMute completely changed that for me. It helped balance my blood sugar, reduced my cravings, and kept my energy steady all day. In just 10 weeks, I felt healthier, lighter, and more in control. If you want safe and effective blood sugar support, GlycoMute is the one!"
    },
    {
      name: "David T.",
      location: "New York, USA",
      image: "https://ik.imagekit.io/affin/glycomute/leptithinmax-review-2.webp?updatedAt=1765391042870",
      rating: "⭐⭐⭐⭐⭐",
      verified: "Verified Purchase",
      text: "Managing my blood sugar used to feel like a constant struggle. I would get tired easily, especially after meals, and my energy was all over the place. Since starting GlycoMute, my readings have become more stable, and I feel more energized throughout the day. It also helped reduce my cravings, which made staying consistent with my diet much easier. GlycoMute has truly helped me regain balance and confidence."
    },
    {
      name: "Jessica M.",
      location: "Chicago, USA",
      image: "https://ik.imagekit.io/affin/glycomute/leptithinmax-review-1.webp?updatedAt=1765391042934",
      rating: "⭐⭐⭐⭐⭐",
      verified: "Verified Purchase",
      text: "I used to experience sudden sugar crashes during the day, which made it hard to focus and stay productive. After taking GlycoMute consistently, my energy levels feel smoother, my cravings are under control, and my blood sugar readings have improved noticeably. I finally feel stable, clear-headed, and more in control of my daily routine. GlycoMute has been a real game-changer for my wellness."
    }
  ];

  return (
    <section className="bg-gray-50 py-16" id="reviews">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2 style={{
            fontWeight: 900,
            letterSpacing: '-0.02em',
          }}>Customer Testimonials</h2>
          <p style={{
            fontWeight: 500,
            letterSpacing: '0.01em'
          }}>Real stories from real customers who have experienced the benefits of GlycoMute</p>
        </div>

        <div className="grid md:grid-cols-1 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="card">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src={review.image} 
                    alt={`${review.name} review`}
                    className="w-24 h-24 rounded-full object-cover border-4"
                    style={{ borderColor: 'var(--secondary)' }}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h5 className="font-extrabold text-lg" style={{
                      fontWeight: 800,
                      letterSpacing: '-0.01em',
                    }}>{review.name}</h5>
                    <span className="text-sm text-gray-500" style={{ fontWeight: 500 }}>- {review.location}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-yellow-400" style={{ fontWeight: 700 }}>{review.rating}</span>
                    <span className="text-sm text-green-600 font-bold" style={{ fontWeight: 700 }}>{review.verified}</span>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed" style={{
                    fontWeight: 500,
                    letterSpacing: '0.01em'
                  }}>
                    "{review.text}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
