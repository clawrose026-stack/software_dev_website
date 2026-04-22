import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">Coinsetters<sup style={{ fontSize: '0.5em' }}>®</sup></div>
            <p className="footer__brand-desc">Premium software development agency crafting stunning websites and digital experiences since 2014.</p>
          </div>
          <div className="footer__links">
            <div className="footer__col">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#benefits">Why Us</a></li>
                <li><a href="#process">Process</a></li>
              </ul>
            </div>
            <div className="footer__col">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Custom Websites</a></li>
                <li><a href="#services">Web Applications</a></li>
                <li><a href="#services">E-Commerce</a></li>
                <li><a href="#services">UI/UX Design</a></li>
              </ul>
            </div>
            <div className="footer__col">
              <h4>Connect</h4>
              <ul>
                <li><a href="#quote">Get a Quote</a></li>
                <li><a href="#">Twitter / X</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Dribbble</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <span className="footer__copy">© 2026 Coinsetters®. All rights reserved.</span>
          <div className="footer__socials">
            <a href="#" aria-label="Twitter">
              <svg viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="#" aria-label="Dribbble">
              <svg viewBox="0 0 24 24">
                <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm7.938 5.563a10.18 10.18 0 012.312 6.375c-.337-.063-3.712-.75-7.125-.325-.062-.15-.125-.313-.2-.475-.2-.463-.413-.925-.637-1.375 3.8-1.55 5.525-3.775 5.65-3.95v-.25zM12 1.75c2.625 0 5.025 1.013 6.825 2.663-.1.15-1.663 2.25-5.35 3.625A88.608 88.608 0 009.5 1.963 10.303 10.303 0 0112 1.75zM7.625 2.638a104.387 104.387 0 013.95 6.05c-4.975 1.325-9.362 1.3-9.837 1.3A10.294 10.294 0 017.625 2.638zM1.75 12.013v-.338c.463.013 5.588.063 10.875-1.513.3.588.588 1.2.85 1.8l-.4.113c-5.563 1.8-8.525 6.688-8.675 6.938A10.19 10.19 0 011.75 12.013zm3.975 8.35c.1-.163 2.325-4.388 8.275-6.45.025-.013.038-.013.063-.025a65.37 65.37 0 012.262 8.05 10.236 10.236 0 01-10.6-1.575zm12.35.675a68.157 68.157 0 00-2.1-7.6c3.213-.513 6.025.325 6.387.438a10.236 10.236 0 01-4.287 7.162z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
