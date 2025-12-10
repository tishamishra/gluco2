'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on escape key and prevent body scroll when open
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <section className="menu menu2 cid-tB0YZQqaCG" id="menu2-0">
      <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg relative" style={{ backgroundColor: '#0ea5e9', background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 50%, #14b8a6 100%)', zIndex: 1000 }}>
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex items-center justify-between w-full relative">
            <div className="navbar-brand flex-shrink-0 z-50 relative">
              <span className="navbar-logo">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <Image 
                    src="https://ik.imagekit.io/affin/mitolyn-favicon-logo-485x94.webp?updatedAt=1765361274883" 
                    alt="mitolyn official website" 
                    width={485} 
                    height={94}
                    className="h-8 sm:h-10 md:h-12 w-auto max-w-[200px] sm:max-w-[250px] md:max-w-none"
                    priority
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </Link>
              </span>
            </div>
            <button 
              className={`navbar-toggler md:hidden text-white p-2 flex-shrink-0 z-[1001] relative focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600 rounded ${isOpen ? 'active' : ''}`}
              type="button" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
              style={{ position: 'relative', zIndex: 1001 }}
            >
              <div className={`hamburger ${isOpen ? 'is-active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
            
            {/* Mobile Menu Backdrop */}
            {isOpen && (
              <div 
                className="fixed inset-0 bg-black bg-opacity-50 z-[999] md:hidden transition-opacity duration-300"
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
                style={{ position: 'fixed', zIndex: 999 }}
              ></div>
            )}

            {/* Desktop Menu */}
            <div 
              className="desktop-menu hidden md:flex md:flex-row md:items-center md:ml-auto"
            >
              <ul className="navbar-nav nav-dropdown flex flex-row items-center space-x-6">
                <li className="nav-item">
                  <Link 
                    className="nav-link link text-white text-base hover:text-cyan-200 transition-all duration-300 font-medium py-2 px-2" 
                    href="#mitolyn-about"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    className="nav-link link text-white text-base hover:text-cyan-200 transition-all duration-300 font-medium py-2 px-2" 
                    href="#mitolyn-ingredients"
                  >
                    Ingredients
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    className="nav-link link text-white text-base hover:text-cyan-200 transition-all duration-300 font-medium py-2 px-2" 
                    href="#mitolyn-pricing"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    className="nav-link link text-white text-base hover:text-cyan-200 transition-all duration-300 font-medium py-2 px-2" 
                    href="#mitolyn-faq"
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
              <div className="navbar-buttons ml-6">
                <a 
                  className="btn btn-danger bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold hover:from-pink-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center text-base shadow-2xl hover:shadow-3xl transform hover:scale-105" 
                  href="https://b9c6ckcm0x6mdy38yird8e5uex.hop.clickbank.net/?&traffic_source=bing" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  Order Now!
                </a>
              </div>
            </div>

            {/* Mobile Menu */}
            <div 
              className={`md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-cyan-700 to-teal-800 shadow-2xl transform transition-transform duration-300 ease-in-out z-[1000] ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
              id="navbarSupportedContent"
              style={{ position: 'fixed', zIndex: 1000 }}
            >
              <div className="flex flex-col h-full py-20 px-6 overflow-y-auto">
                <ul className="navbar-nav nav-dropdown flex flex-col space-y-4 mb-6">
                  <li className="nav-item">
                    <Link 
                      className="nav-link link text-white text-lg hover:text-cyan-200 transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-white hover:bg-opacity-10" 
                      href="#mitolyn-about"
                      onClick={() => setIsOpen(false)}
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link 
                      className="nav-link link text-white text-lg hover:text-cyan-200 transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-white hover:bg-opacity-10" 
                      href="#mitolyn-ingredients"
                      onClick={() => setIsOpen(false)}
                    >
                      Ingredients
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link 
                      className="nav-link link text-white text-lg hover:text-cyan-200 transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-white hover:bg-opacity-10" 
                      href="#mitolyn-pricing"
                      onClick={() => setIsOpen(false)}
                    >
                      Pricing
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link 
                      className="nav-link link text-white text-lg hover:text-cyan-200 transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-white hover:bg-opacity-10" 
                      href="#mitolyn-faq"
                      onClick={() => setIsOpen(false)}
                    >
                      FAQs
                    </Link>
                  </li>
                </ul>
                <div className="navbar-buttons mt-4">
                  <a 
                    className="btn btn-warning bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-4 rounded-full font-bold hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 inline-flex items-center justify-center text-base shadow-2xl hover:shadow-3xl w-full transform hover:scale-105" 
                    href="https://b9c6ckcm0x6mdy38yird8e5uex.hop.clickbank.net/?&traffic_source=bing" 
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                  >
                    Order Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}

