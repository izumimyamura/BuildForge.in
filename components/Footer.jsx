import React from 'react';

export default function Footer() {
  return (
    <footer className="custom-footer">
      <div className="footer-content">
        
        {/* Left Column: Brand Info */}
        <div className="footer-brand">
          <h2 className="footer-logo"><strong>B</strong> BUILDFORGE</h2>
          <h3 className="footer-tagline">
            Your extended team for<br />
            building, marketing & growth
          </h3>
          <p className="footer-copyright">Think. Build. Grow. since 2024</p>
        </div>

        {/* Right Columns: Links */}
        <div className="footer-links-grid">
          <div className="footer-col">
            <h4>Capabilities</h4>
            <ul>
              <li><a href="#strategy">Strategy</a></li>
              <li><a href="#brand">Brand</a></li>
              <li><a href="#marketing">Marketing</a></li>
              <li><a href="#technology">Technology</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Work</h4>
            <ul>
              <li><a href="#forensic">Forensic Wallah</a></li>
              <li><a href="#rcet">RCET Prep</a></li>
              <li><a href="#wingmann">Wingmann ↗</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li><a href="mailto:ceo@buildforge.site">ceo@buildforge.site</a></li>
              <li><a href="tel:+918171945200">+91 81719 45200</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

      </div>

      {/* Massive Background Text */}
      <div className="footer-watermark">BUILDFORGE</div>
    </footer>
  );
}
