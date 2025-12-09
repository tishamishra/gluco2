'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="menu menu2 cid-tB0YZQqaCG" id="menu2-0">
      <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg" style={{ backgroundColor: '#667eea', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between w-full">
            <div className="navbar-brand">
              <span className="navbar-logo">
                <Link href="/">
                  <Image 
                    src="/assets/images/mitolyn-favicon-logo-485x94.png" 
                    alt="Mitolyn official website" 
                    width={485} 
                    height={94}
                    className="h-12 w-auto"
                    priority
                  />
                </Link>
              </span>
            </div>
            <button 
              className="navbar-toggler md:hidden text-white" 
              type="button" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
            >
              <div className="hamburger">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
            <div className={`navbar-collapse ${isOpen ? 'block' : 'hidden'} md:flex md:flex-row md:items-center md:ml-auto`} id="navbarSupportedContent">
              <ul className="navbar-nav nav-dropdown flex flex-col md:flex-row md:items-center md:space-x-6 py-4 md:py-0">
                <li className="nav-item">
                  <Link className="nav-link link text-white text-lg hover:text-cyan-200 transition-colors font-medium" href="#header3-1n">
                    Benefits
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link link text-white text-lg hover:text-cyan-200 transition-colors font-medium" href="#content4-6e">
                    Reviews
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link link text-white text-lg hover:text-cyan-200 transition-colors font-medium" href="#content4-g">
                    Price
                  </Link>
                </li>
              </ul>
              <div className="navbar-buttons mt-4 md:mt-0 md:ml-6">
                <a 
                  className="btn btn-warning bg-yellow-500 text-black px-10 py-5 rounded-md font-bold hover:bg-yellow-600 transition-colors inline-flex items-center text-lg shadow-lg hover:shadow-xl min-w-[150px] justify-center" 
                  href="https://b9c6ckcm0x6mdy38yird8e5uex.hop.clickbank.net/?&traffic_source=bing" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}

