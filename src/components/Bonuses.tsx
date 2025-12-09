import Image from 'next/image';

export default function Bonuses() {
  return (
    <>
      <section className="header3 cid-udGvtAJfqr py-10 text-center" id="header3-7i" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="align-center container mx-auto px-4">
          <div className="row justify-center">
            <div className="col-12 col-lg-9">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
                <strong>Order 6 Bottles or 3 Bottles</strong>
                <div><strong>and Get 2 FREE Bonuses!</strong></div>
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="team2 cid-uwp5OzT8i9 py-12 bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50" id="team2-8d">
        <div className="container mx-auto px-4" style={{ paddingTop: '2rem', paddingBottom: '2rem', maxWidth: '85%' }}>
          <div className="item features-image bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-6 md:p-8 shadow-xl border-4 border-yellow-400">
            <div className="item-wrapper">
              <div className="row align-items-center flex flex-col md:flex-row gap-6">
                <div className="col-12 col-md-4">
                  <div className="image-wrapper">
                    <Image 
                      src="/assets/images/mitolyn-bonus.webp" 
                      alt="Mitolyn bonus 2" 
                      width={400} 
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
                <div className="col-12 col-md flex-1">
                  <div className="card-box">
                    <h5 className="card-title mb-3 text-2xl md:text-3xl font-extrabold" style={{ color: 'rgb(228, 63, 63)' }}>
                      <strong>🎁 BONUS #1</strong>
                    </h5>
                    <h5 className="card-subtitle mb-3 text-xl md:text-2xl font-bold" style={{ color: 'rgb(16, 91, 184)' }}>
                      <strong>1-Day Kickstart Detox</strong>
                    </h5>
                    <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#000000', fontFamily: 'Arial, sans-serif', textAlign: 'left' }}>
                      When you order the 3 or 6 bottle package, you'll get this amazing 1-Day Kickstart Detox guide completely free. Think of it as giving your body a clean slate before you start with Mitolyn. The guide shows you how to make simple detox teas using stuff you probably already have in your kitchen. These teas help clear out the junk, help your body absorb nutrients better, and basically get everything ready for Mitolyn to do its thing. It's like spring cleaning for your insides.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team2 cid-uwp5LO3gdh py-12 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" id="team2-8c">
        <div className="container mx-auto px-4" style={{ paddingTop: '2rem', paddingBottom: '2rem', maxWidth: '85%' }}>
          <div className="item features-image bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-6 md:p-8 shadow-xl border-4 border-blue-400">
            <div className="item-wrapper">
              <div className="row align-items-center flex flex-col md:flex-row gap-6">
                <div className="col-12 col-md-4">
                  <div className="image-wrapper">
                    <Image 
                      src="/assets/images/mitolyn-bonus-2.webp" 
                      alt="Mitolyn bonus 2" 
                      width={400} 
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
                <div className="col-12 col-md flex-1">
                  <div className="card-box">
                    <h5 className="card-title mb-3 text-2xl md:text-3xl font-extrabold" style={{ color: 'rgb(228, 63, 63)' }}>
                      <strong>🎁 BONUS #2</strong>
                    </h5>
                    <h5 className="card-subtitle mb-3 text-xl md:text-2xl font-bold" style={{ color: 'rgb(16, 91, 184)' }}>
                      <strong>Renew You</strong>
                    </h5>
                    <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#000000', fontFamily: 'Arial, sans-serif', textAlign: 'left' }}>
                      Your second free bonus is the Renew You guide, and honestly, this one might be just as important as the supplement itself. Changing your body is hard enough without your mind working against you. This guide gives you practical ways to handle stress, build real confidence, and clear that mental fog. When you're in the right headspace, staying motivated becomes so much easier. You'll feel less anxious, more in control, and actually excited about the changes you're making instead of dreading them.
                    </p>
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

