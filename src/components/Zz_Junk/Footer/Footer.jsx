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

<section class="header-wrapper">
    <header class="header">
        {/* <!-- Secondary Header --> */}
        <div class="secondary-header">
            <nav class="secondary-menu" aria-label="Secondary Menu">
                <ul class="menu">
                    <li class="menu-item dropdown">
                        <a href="https://forsec.ca/about-us/" aria-haspopup="true">About</a>
                        <ul class="sub-menu">
                            <li><a href="/about/#mission">Mission, Vision & Values</a></li>
                            <li><a href="/about/#bod">Board of Directors</a></li>
                            <li><a href="/about/#team">Meet The Team</a></li>
                        </ul>
                    </li>
                    <li class="menu-item"><a href="https://forsec.ca/contact/">Contact</a></li>
                    <li class="menu-item button"><a href="https://secure.forestrysectorcouncil.ca/">Member Login</a></li>
                </ul>
            </nav>
        </div>

        {/* <!-- Logo and Main Navigation --> */}
        <div class="header-content">
            <a href="https://forsec.ca/" class="logo">
                <img src="https://forestrysectorcouncil.ca/wp-content/uploads/2022/12/FSC-logo-yellow-white-2.png" 
                    alt="Forestry Sector Council Logo" />
            </a>
            <nav class="main-menu" aria-label="Main Menu">
                <ul class="menu">
                    <li><a href="https://forsec.ca/">Home</a></li>
                    <li class="dropdown">
                        <a href="https://forsec.ca/membership/" aria-haspopup="true">Membership</a>
                        <ul class="sub-menu">
                            <li><a href="https://forsec.ca/membership/">Become A Member</a></li>
                            <li><a href="https://forsec.ca/?page_id=268">Member Directory</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="https://forsec.ca/forestry-careers/" aria-haspopup="true">Work in Forestry</a>
                        <ul class="sub-menu">
                            <li><a href="https://forsec.ca/resources/training-library/">Education & Training</a></li>
                            <li><a href="https://forsec.ca/job-postings/">Job Postings</a></li>
                            <li><a href="/forestry-careers/#careerfaq">FAQs</a></li>
                        </ul>
                    </li>
                    {/* <!-- Additional menu items follow similarly --> */}
                </ul>
            </nav>
        </div>
    </header>
</section>
    </footer>

  );
};

export default Footer;