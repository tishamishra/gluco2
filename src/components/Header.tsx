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
      <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg relative" style={{ backgroundColor: '#667eea', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex items-center justify-between w-full">
            <div className="navbar-brand flex-shrink-0">
              <span className="navbar-logo">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <Image 
                    src="https://ik.imagekit.io/affin/mitolyn-favicon-logo-485x94.webp?updatedAt=1765361274883" 
                    alt="Mitolyn official website" 
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
              className={`navbar-toggler md:hidden text-white p-2 flex-shrink-0 z-50 relative focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600 rounded ${isOpen ? 'active' : ''}`}
              type="button" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
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
                className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300"
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
              ></div>
            )}

            {/* Mobile Menu */}
            <div 
              className={`navbar-collapse-mobile md:flex md:flex-row md:items-center md:ml-auto fixed md:relative top-0 md:top-auto right-0 md:right-auto h-full md:h-auto w-80 md:w-auto max-w-[85vw] md:max-w-none z-50 md:z-auto transform transition-transform duration-300 ease-in-out ${
                isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
              } bg-gradient-to-b md:bg-transparent from-purple-700 to-purple-800 md:from-transparent md:to-transparent shadow-2xl md:shadow-none`}
              id="navbarSupportedContent"
            >
              <div className="flex flex-col h-full md:h-auto py-20 md:py-0 px-6 md:px-0">
                <ul className="navbar-nav nav-dropdown flex flex-col md:flex-row md:items-center md:space-x-6 space-y-4 md:space-y-0 mb-6 md:mb-0">
                  <li className="nav-item">
                    <Link 
                      className="nav-link link text-white text-lg md:text-base hover:text-cyan-200 transition-all duration-300 font-medium py-3 md:py-2 px-4 md:px-2 rounded-lg md:rounded-none hover:bg-white hover:bg-opacity-10 md:hover:bg-transparent" 
                      href="#header3-1n"
                      onClick={() => setIsOpen(false)}
                    >
                      Benefits
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link 
                      className="nav-link link text-white text-lg md:text-base hover:text-cyan-200 transition-all duration-300 font-medium py-3 md:py-2 px-4 md:px-2 rounded-lg md:rounded-none hover:bg-white hover:bg-opacity-10 md:hover:bg-transparent" 
                      href="#content4-6e"
                      onClick={() => setIsOpen(false)}
                    >
                      Reviews
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link 
                      className="nav-link link text-white text-lg md:text-base hover:text-cyan-200 transition-all duration-300 font-medium py-3 md:py-2 px-4 md:px-2 rounded-lg md:rounded-none hover:bg-white hover:bg-opacity-10 md:hover:bg-transparent" 
                      href="#content4-g"
                      onClick={() => setIsOpen(false)}
                    >
                      Price
                    </Link>
                  </li>
                </ul>
                <div className="navbar-buttons mt-4 md:mt-0 md:ml-6">
                  <a 
                    className="btn btn-warning bg-yellow-500 text-black px-6 py-4 md:px-10 md:py-5 rounded-lg md:rounded-md font-bold hover:bg-yellow-600 transition-all duration-300 inline-flex items-center text-base md:text-lg shadow-lg hover:shadow-xl w-full md:w-auto justify-center transform hover:scale-105 md:hover:scale-100" 
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

