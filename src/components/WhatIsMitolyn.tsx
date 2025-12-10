import Image from 'next/image';

export default function WhatIsMitolyn() {
  return (
    <>
      <section className="header3 cid-tB83YwBUMj py-10 text-center" id="header3-1l" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="align-center container mx-auto px-4">
          <div className="row justify-center">
            <div className="col-12 col-lg-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
                <strong>What is Mitolyn?</strong>
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="image1 cid-uppXbGMVU6 py-12 bg-white" id="image1-80">
        <div className="container mx-auto px-4">
          <div className="row align-items-center flex flex-col md:flex-row gap-8">
            <div className="col-12 col-lg-4">
              <div className="image-wrapper rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="https://ik.imagekit.io/affin/mitolyn-supplement.webp?updatedAt=1765361274900" 
                  alt="Mitolyn-supplement" 
                  width={400} 
                  height={400}
                  className="w-full h-auto"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </div>
            <div className="col-12 col-lg flex-1">
              <div className="text-wrapper">
                <p className="text-base md:text-lg lg:text-xl leading-relaxed" style={{ color: '#000000', fontFamily: 'Arial, sans-serif', textAlign: 'left' }}>
                  You know that feeling when you're doing everything right - eating well, staying active - but the scale just won't budge? That's where Mitolyn comes in. The real problem isn't always what you're eating or how much you're moving. Sometimes, it's those tiny power plants inside your cells called mitochondria that just aren't firing on all cylinders. When they're sluggish, your metabolism slows down, and fat starts sticking around no matter what you do.
                  <br /><br />
                  Here's what makes Mitolyn different: instead of just masking the problem, it actually fixes what's broken. The formula brings together six incredible natural ingredients - think Haematococcus algae, Amla fruit, raw cacao, and Schisandra berries - that specifically target mitochondrial health. These aren't random plants thrown together. Each one was picked because research shows it helps your cells produce energy more efficiently. The result? Your body starts burning fat like it's supposed to, you get more pep in your step, and you feel less stressed overall.
                  <br /><br />
                  There's been a lot of buzz lately about something called the "purple peel method" - basically a simple trick that can triple your fat-burning results. When you combine this approach with Mitolyn, the effects are pretty remarkable. People are seeing results they never thought possible, and the best part is you don't have to completely overhaul your life. It's about working smarter, not harder.
                  <br /><br />
                  At the end of the day, Mitolyn isn't just another weight loss pill. It's a way to actually fix your metabolism from the inside out. Whether you've been fighting the same ten pounds for months or you're just tired of feeling drained all the time, this could be the missing piece you've been looking for.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

