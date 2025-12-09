import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <section className="content13 cid-tB7Yu884tX py-12 bg-gray-800" id="content13-1f">
        <div className="container mx-auto px-4">
          <div className="row justify-center">
            <div className="col-md-12 col-lg-10">
              <div className="row justify-center flex flex-col md:flex-row gap-12">
                <div className="col-12 col-lg-6">
                  <h4 className="text-2xl md:text-3xl font-bold mb-6 text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
                    Quick Links
                  </h4>
                  <ul className="list space-y-4">
                    <li>
                      <Link href="#header3-1l" className="text-white hover:text-yellow-400 transition-colors text-lg md:text-xl">
                        What is Mitolyn?
                      </Link>
                    </li>
                    <li>
                      <Link href="#header3-1m" className="text-white hover:text-yellow-400 transition-colors text-lg md:text-xl">
                        How Does Mitolyn Work?
                      </Link>
                    </li>
                    <li>
                      <Link href="#header3-1o" className="text-white hover:text-yellow-400 transition-colors text-lg md:text-xl">
                        Ingredients of Mitolyn
                      </Link>
                    </li>
                    <li>
                      <Link href="#header3-1n" className="text-white hover:text-yellow-400 transition-colors text-lg md:text-xl">
                        Mitolyn Benefits
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-lg-6">
                  <h4 className="text-2xl md:text-3xl font-bold mb-6 text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
                    More Information
                  </h4>
                  <ul className="list space-y-4">
                    <li>
                      <Link href="#header3-1p" className="text-white hover:text-yellow-400 transition-colors text-lg md:text-xl">
                        Frequently Asked Questions
                      </Link>
                    </li>
                    <li>
                      <Link href="#content4-6e" className="text-white hover:text-yellow-400 transition-colors text-lg md:text-xl">
                        Mitolyn Customer Reviews
                      </Link>
                    </li>
                    <li>
                      <Link href="#content4-g" className="text-white hover:text-yellow-400 transition-colors text-lg md:text-xl">
                        Mitolyn Price
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content5 cid-tRZgrFnffb py-8 bg-gray-900 border-t border-gray-700" id="content5-3c">
        <div className="container mx-auto px-4">
          <div className="row justify-center">
            <div className="col-md-12 col-lg-10">
              <p className="text-sm md:text-base leading-relaxed text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
                <strong>FDA Compliance</strong><br />
                All content and information found on this page are for informational purposes only and are not intended to diagnose, treat, cure or prevent any disease. The FDA hasn't evaluated the statements provided on this page. Make sure you consult with a licensed doctor before taking any supplement or making any changes to your diet or exercise plan. Individual results may vary.<br /><br />
                The display of third-party trademarks and trade names on this site does not necessarily indicate any affiliation or endorsements of our website. If you click a merchant link and buy a product or service on their website, we may be paid a fee by the merchant.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="footer3 cid-tRZg6gyR1I py-8 bg-gray-900 border-t border-gray-700" id="footer3-3b">
        <div className="container mx-auto px-4">
          <div className="media-container-row align-center">
            <div className="row row-copirayt">
              <div className="flex flex-wrap justify-center gap-4 mb-4">
                <Link href="/privacy-policy" className="text-white hover:text-yellow-400 transition-colors text-sm font-medium">
                  Privacy Policy
                </Link>
                <span className="text-gray-400">|</span>
                <Link href="/disclaimer" className="text-white hover:text-yellow-400 transition-colors text-sm font-medium">
                  Disclaimer
                </Link>
                <span className="text-gray-400">|</span>
                <Link href="/terms" className="text-white hover:text-yellow-400 transition-colors text-sm font-medium">
                  Terms
                </Link>
                <span className="text-gray-400">|</span>
                <Link href="/order-tracking" className="text-white hover:text-yellow-400 transition-colors text-sm font-medium">
                  Order Tracking
                </Link>
                <span className="text-gray-400">|</span>
                <Link href="/refund-policy" className="text-white hover:text-yellow-400 transition-colors text-sm font-medium">
                  Refund Policy
                </Link>
                <span className="text-gray-400">|</span>
                <Link href="/contact-us" className="text-white hover:text-yellow-400 transition-colors text-sm font-medium">
                  Contact Us
                </Link>
              </div>
              <p className="text-center text-sm text-white">
                © Copyright 2024 - <Link href="/" className="text-yellow-400 hover:text-yellow-500 transition-colors font-medium">Mitolyn</Link> All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

