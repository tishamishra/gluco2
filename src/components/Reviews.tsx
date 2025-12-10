import Image from 'next/image';

export default function Reviews() {
  const reviews = [
    {
      name: "Jennifer L.",
      location: "Austin, TX",
      image: "https://ik.imagekit.io/affin/mitolyn-review-1.webp",
      rating: "⭐⭐⭐⭐⭐",
      weightLoss: "29 lbs",
      text: "Mitolyn has transformed my entire lifestyle. Mitolyn helped me lose 29 pounds after countless other approaches didn't work. Mitolyn gave me the energy I needed to stay active and feel confident again. I used to avoid social gatherings because I wasn't happy with how I looked, but now I'm proud of my appearance. My confidence has increased dramatically, and I finally feel like the person I always wanted to be."
    },
    {
      name: "David P.",
      location: "Charlotte, NC",
      image: "https://ik.imagekit.io/affin/mitolyn-review-3.webp",
      rating: "⭐⭐⭐⭐⭐",
      weightLoss: "24 lbs",
      text: "Mitolyn gave my metabolism the jumpstart it desperately needed. Mitolyn helped me shed 24 pounds of stubborn belly fat that had resisted diet and exercise for years. Mitolyn's natural formula works differently - I feel more mobile, my energy is better than ever, and my clothes fit perfectly now. Mitolyn truly delivers on its promises."
    },
    {
      name: "Lisa W.",
      location: "Seattle, WA",
      image: "https://ik.imagekit.io/affin/mitolyn-review-2.webp",
      rating: "⭐⭐⭐⭐⭐",
      weightLoss: "35 lbs",
      text: "Mitolyn restored my energy and helped me reconnect with my family. Mitolyn enabled me to drop 35 pounds that I had struggled with for years. Mitolyn's benefits go beyond just weight loss - I can now stay energized throughout the day and really enjoy quality time with my kids. Mitolyn has been a remarkable transformation for my overall health and daily life."
    }
  ];

  return (
    <>
      <section className="content4 cid-uwxIN8BMra py-6 md:py-8 text-center" id="content4-6e" style={{ background: '#ec4899' }}>
        <div className="container mx-auto px-4">
          <div className="row justify-center">
            <div className="title col-md-12 col-lg-10">
              <h3 className="mbr-section-title mbr-fonts-style align-center mb-2 display-2 text-3xl md:text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
                <strong>Mitolyn Customer Reviews</strong>
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="team2 cid-uwxKdDai1K py-6 md:py-8" id="team2-8" style={{ background: 'linear-gradient(to bottom, #fafafa 0%, #fce7f3 100%)' }}>
        <div className="container mx-auto px-4">
          {reviews.map((review, index) => (
            <div key={index} className="item features-image mb-4 md:mb-6 last:mb-0">
              <div className="item-wrapper bg-white rounded-2xl shadow-xl p-6 border-4 border-pink-200 hover:border-pink-400 transition-all duration-300">
                <div className="row align-items-center flex flex-col md:flex-row gap-4 md:gap-6">
                  <div className="col-12 col-md-2">
                    <div className="image-wrapper relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full blur-xl opacity-50"></div>
                      <img 
                        src={review.image} 
                        alt={`${review.name} - Mitolyn review`} 
                        title="Mitolyn"
                        className="w-full rounded-full object-cover relative z-10 border-4 border-pink-300 shadow-xl"
                        style={{ 
                          width: '120px',
                          height: '120px',
                          objectFit: 'cover'
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md">
                    <div className="card-box">
                      <h5 className="card-title mbr-fonts-style m-0 mb-3 display-7 text-xl md:text-2xl font-bold" style={{ fontFamily: 'Arial, sans-serif', color: '#000000' }}>
                        <div><span style={{ fontSize: '1.5rem' }}><strong>{review.name} - {review.location}</strong></span><br /></div>
                      </h5>
                      <h6 className="card-subtitle mbr-fonts-style mb-3 display-4 text-lg font-bold" style={{ fontFamily: 'Arial, sans-serif', color: '#393193' }}>
                        <strong>{review.rating} Verified Purchase</strong>
                      </h6>
                      <p className="mbr-text mbr-fonts-style display-7 text-base md:text-lg leading-relaxed" style={{ fontFamily: 'Arial, sans-serif', color: '#000000' }}>
                        <strong>{review.name.split(' ')[0]} lost {review.weightLoss}...</strong><br />
                        {review.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

