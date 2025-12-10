import Image from 'next/image';

export default function ActNow() {
  return (
    <>
      <section className="header10 cid-uwzIBlzE5e py-12 text-center" id="header10-w" style={{ background: '#1098b7' }}>
        <div className="align-center container-fluid mx-auto px-4">
          <div className="row justify-center">
            <div className="col-md-12 col-lg-9">
              <h3 className="mbr-section-title mbr-fonts-style mb-3 display-2 text-2xl md:text-3xl lg:text-4xl font-bold text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
                Don't Wait Any Longer! Limited Time Deal - Mitolyn Sale Live
              </h3>
              <div className="image-wrap mt-4">
                <img 
                  src="https://ik.imagekit.io/affin/mitolyn-buy-480x451.webp?updatedAt=1765361274874" 
                  alt="buy Mitolyn" 
                  title="Mitolyn"
                  className="w-full max-w-2xl mx-auto"
                  style={{ 
                    maxWidth: '100%', 
                    width: '100%',
                    height: 'auto',
                    minHeight: '500px',
                    objectFit: 'contain'
                  }}
                />
                <br />
                <h3 className="mbr-text mbr-fonts-style display-2 text-xl md:text-2xl font-semibold text-white mt-4" style={{ fontFamily: 'Arial, sans-serif' }}>
                  Regular Price: <s>$127/per bottle</s>
                </h3>
                <p className="mbr-text mbr-fonts-style display-2 text-2xl md:text-3xl font-bold text-white mt-2" style={{ fontFamily: 'Arial, sans-serif' }}>
                  <strong>Only for: $39/per bottle</strong>
                </p>
                <div className="mbr-section-btn mt-3">
                  <a 
                    className="btn btn-danger display-7 bg-red-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition-all duration-300 inline-flex items-center justify-center text-base md:text-lg shadow-lg hover:shadow-xl" 
                    href="https://b9c6ckcm0x6mdy38yird8e5uex.hop.clickbank.net/?&traffic_source=bing" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    GET YOUR 83% DISCOUNT NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

