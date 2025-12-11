'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white' : 'bg-[#dc2626]'
      }`}
    >
      <nav className="w-full px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-extrabold" style={{ 
            color: isScrolled ? '#dc2626' : '#ffffff',
            fontWeight: 900,
            letterSpacing: '-0.02em',
          }}>
            GlycoMute
          </Link>

          {/* Desktop Menu - Always visible on larger screens */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <Link 
              href="#about" 
              className="nav-link font-semibold px-4 py-2 rounded transition-all duration-300" 
              style={{ 
                color: isScrolled ? '#1a1a1a' : '#ffffff',
                fontWeight: 600,
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                fontSize: '0.875rem',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = isScrolled ? 'rgba(220, 38, 38, 0.1)' : 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              About
            </Link>
            <Link 
              href="#ingredients" 
              className="nav-link font-semibold px-4 py-2 rounded transition-all duration-300" 
              style={{ 
                color: isScrolled ? '#1a1a1a' : '#ffffff',
                fontWeight: 600,
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                fontSize: '0.875rem',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = isScrolled ? 'rgba(220, 38, 38, 0.1)' : 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Ingredients
            </Link>
            <Link 
              href="#benefits" 
              className="nav-link font-semibold px-4 py-2 rounded transition-all duration-300" 
              style={{ 
                color: isScrolled ? '#1a1a1a' : '#ffffff',
                fontWeight: 600,
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                fontSize: '0.875rem',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = isScrolled ? 'rgba(220, 38, 38, 0.1)' : 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Benefits
            </Link>
            <a 
              href="https://sweetfend.com/c/order-now.php?affiliate=ubro12&pid=pre1&tid=ubro12" 
              target="_blank"
              rel="noopener noreferrer"
              className="order-now-btn relative overflow-hidden font-bold transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #ffea64 0%, #ffd700 50%, #ffea64 100%)',
                color: '#8b6914',
                fontWeight: 800,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                fontSize: '0.875rem',
                textDecoration: 'none',
                padding: '12px 28px',
                borderRadius: '8px',
                boxShadow: '0 4px 15px rgba(255, 234, 100, 0.5), 0 2px 8px rgba(139, 105, 20, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                position: 'relative',
                display: 'inline-block',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #fff197 0%, #ffea64 50%, #fff197 100%)';
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 234, 100, 0.7), 0 4px 12px rgba(139, 105, 20, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #ffea64 0%, #ffd700 50%, #ffea64 100%)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 234, 100, 0.5), 0 2px 8px rgba(139, 105, 20, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)';
              }}
            >
              <span style={{ 
                position: 'relative', 
                zIndex: 2, 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px',
                textShadow: '0 1px 2px rgba(255, 255, 255, 0.5)'
              }}>
                Order Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ 
                  width: '18px', 
                  height: '18px',
                  filter: 'drop-shadow(0 1px 1px rgba(255, 255, 255, 0.5))',
                  transition: 'transform 0.3s ease'
                }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <span style={{
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                transition: 'left 0.5s ease'
              }}
              onMouseEnter={(e) => {
                const btn = e.currentTarget.parentElement;
                if (btn) {
                  const shine = btn.querySelector('span[style*="position: absolute"]') as HTMLElement;
                  if (shine) shine.style.left = '100%';
                }
              }}
              />
            </a>
          </div>

          {/* Mobile Menu Button - Only on very small screens */}
          <button
            className="sm:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            style={{ color: isScrolled ? '#1a1a1a' : '#ffffff' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu - Only on small screens */}
        {isOpen && (
          <div className="sm:hidden fixed inset-0 top-20 bg-white z-40">
            <div className="flex flex-col p-6 space-y-3">
              <Link 
                href="#about" 
                className="text-lg font-semibold py-3 px-4 rounded transition-all duration-300" 
                style={{
                  color: '#1a1a1a',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase',
                  backgroundColor: 'transparent'
                }}
                onClick={() => setIsOpen(false)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(220, 38, 38, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                About
              </Link>
              <Link 
                href="#ingredients" 
                className="text-lg font-semibold py-3 px-4 rounded transition-all duration-300" 
                style={{
                  color: '#1a1a1a',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase',
                  backgroundColor: 'transparent'
                }}
                onClick={() => setIsOpen(false)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(220, 38, 38, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                Ingredients
              </Link>
              <Link 
                href="#benefits" 
                className="text-lg font-semibold py-3 px-4 rounded transition-all duration-300" 
                style={{
                  color: '#1a1a1a',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase',
                  backgroundColor: 'transparent'
                }}
                onClick={() => setIsOpen(false)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(220, 38, 38, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                Benefits
              </Link>
              <Link 
                href="#faq" 
                className="text-lg font-semibold py-3 px-4 rounded transition-all duration-300" 
                style={{
                  color: '#1a1a1a',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase',
                  backgroundColor: 'transparent'
                }}
                onClick={() => setIsOpen(false)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(220, 38, 38, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                FAQ
              </Link>
              <a 
                href="https://sweetfend.com/c/order-now.php?affiliate=ubro12&pid=pre1&tid=ubro12" 
                target="_blank"
                rel="noopener noreferrer"
                className="order-now-btn-mobile relative overflow-hidden font-bold text-center mt-4 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #ffea64 0%, #ffd700 50%, #ffea64 100%)',
                  color: '#8b6914',
                  fontWeight: 800,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  padding: '14px 32px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 15px rgba(255, 234, 100, 0.5), 0 2px 8px rgba(139, 105, 20, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  display: 'block',
                  cursor: 'pointer'
                }}
                onClick={() => setIsOpen(false)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #fff197 0%, #ffea64 50%, #fff197 100%)';
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 234, 100, 0.7), 0 4px 12px rgba(139, 105, 20, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #ffea64 0%, #ffd700 50%, #ffea64 100%)';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 234, 100, 0.5), 0 2px 8px rgba(139, 105, 20, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)';
                }}
              >
                <span style={{ 
                  position: 'relative', 
                  zIndex: 2, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  gap: '8px',
                  textShadow: '0 1px 2px rgba(255, 255, 255, 0.5)'
                }}>
                  Order Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ 
                    width: '18px', 
                    height: '18px',
                    filter: 'drop-shadow(0 1px 1px rgba(255, 255, 255, 0.5))'
                  }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
