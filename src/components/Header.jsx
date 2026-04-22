import { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header__brand">
          <a href="#" className="header__logo">Coinsetters<sup style={{ fontSize: '0.5em' }}>®</sup></a>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-links">
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About Us</a></li>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
            <li><a href="#benefits" onClick={(e) => { e.preventDefault(); scrollToSection('benefits'); }}>Why Us</a></li>
            <li><a href="#process" onClick={(e) => { e.preventDefault(); scrollToSection('process'); }}>Process</a></li>
          </ul>
          <button className="header__cta" onClick={() => scrollToSection('quote')}>Request a Quote</button>
        </nav>
        <div className={`header__burger ${mobileOpen ? 'active' : ''}`} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      <nav className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
        <a href="#about" onClick={() => scrollToSection('about')}>About Us</a>
        <a href="#services" onClick={() => scrollToSection('services')}>Services</a>
        <a href="#benefits" onClick={() => scrollToSection('benefits')}>Why Us</a>
        <a href="#process" onClick={() => scrollToSection('process')}>Process</a>
        <a href="#quote" onClick={() => scrollToSection('quote')}>Get a Quote</a>
      </nav>
    </>
  );
}

export default Header;
