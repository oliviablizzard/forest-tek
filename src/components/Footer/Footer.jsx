import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <img 
            src="https://forsec.ca/wp-content/uploads/2022/12/FSC-retina-logo-yellow-white-2.png" 
            alt="Forestry Sector Council logo" 
            className="footer-logo"
          />
          <h5>Contact Us</h5>
          <p>
            62 Parkway Drive, Unit 6<br />
            Truro Heights, Nova Scotia<br />
            B6L 1N8
          </p>
          <p>
            Phone: <a href="tel:+9028935385">(902) 893-9582</a><br />
            Email: <a href="mailto:info@forsec.ca">info@forsec.ca</a>
          </p>
        </div>
        <div className="footer-column">
          <h5>Newsletter</h5>
          <p>
            Sharing is caring—you’ll receive periodic emails with the latest workforce news, events, and best practices!
          </p>
          <a href="https://secure.forestrysectorcouncil.ca/newsletter/index.html" className="footer-button">
            Subscribe
          </a>
        </div>
        <div className="footer-column">
          <div className="social-links">
            <a href="https://www.facebook.com/forestysectorcouncil" target="_blank" rel="noopener noreferrer" className="social-icon">Facebook</a>
            <a href="https://www.youtube.com/channel/UCvZF2nnzHYz4-WYFKvseuNw" target="_blank" rel="noopener noreferrer" className="social-icon">YouTube</a>
            <a href="https://www.linkedin.com/company/forestry-sector-council/" target="_blank" rel="noopener noreferrer" className="social-icon">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Copyright 2023 Forestry Sector Council. All Rights Reserved.</p>
        <p>
          <a href="https://forestrysectorcouncil.ca/terms-and-conditions/">Terms of Use</a> | 
          <a href="https://forestrysectorcouncil.ca/privacy-policy/">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;