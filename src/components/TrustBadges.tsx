import Image from 'next/image';

export default function TrustBadges() {
  const badges = [
    {
      image: "https://ik.imagekit.io/affin/glycomute/glycomute-supplement.png",
      alt: "GlycoMute product",
      title: "GMP Certified"
    },
    {
      image: "https://ik.imagekit.io/affin/glycomute/glycomute-supplement.png",
      alt: "GlycoMute product",
      title: "FDA Approved"
    },
    {
      image: "https://ik.imagekit.io/affin/glycomute/glycomute-supplement.png",
      alt: "GlycoMute product",
      title: "Made in USA"
    },
    {
      image: "https://ik.imagekit.io/affin/glycomute/glycomute-supplement.png",
      alt: "GlycoMute product",
      title: "100% Natural"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>
            Trusted & Certified
          </h2>
          <p className="text-purple-100 text-lg" style={{ fontFamily: 'Arial, sans-serif' }}>
            Quality you can trust, backed by certifications
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-2xl border-4 border-white hover:border-pink-300 transform hover:scale-110 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <Image 
                  src={badge.image}
                  alt={badge.alt}
                  width={200}
                  height={120}
                  className="object-contain"
                />
              </div>
              <h3 className="text-center font-bold text-gray-800" style={{ fontFamily: 'Arial, sans-serif' }}>
                {badge.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

