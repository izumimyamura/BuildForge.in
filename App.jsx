import React from 'react';
import StaggeredMenu from './components/StaggeredMenu';
import Footer from './components/Footer';
import './styles.css';

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'Services', ariaLabel: 'View our services', link: '#services' },
  { label: 'Case Studies', ariaLabel: 'View our work', link: '#work' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
];

const socialItems = [
  { label: 'LinkedIn', link: 'https://linkedin.com' },
  { label: 'Twitter', link: 'https://twitter.com' }
];

export default function App() {
  return (
    <div className="portfolio-wrapper">
      {/* Staggered Menu Setup */}
      <div className="menu-container">
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials
          displayItemNumbering={true}
          menuButtonColor="#000000"
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen={true}
          colors={['#1a1a1a', '#000000']}
          logoUrl="/logo.svg" // Replace with actual path
          accentColor="#5227FF"
        />
      </div>

      {/* Hero Section */}
      <header className="hero section">
        <h1 className="hero-title">BUILDFORGE<br/>NETWORK</h1>
        <p className="hero-subtitle">Your extended team for building, marketing & growth.</p>
        <div className="hero-text">
          <p>Ideas are easy. Building them isn't.</p>
          <p>Every growing business eventually needs more than one capability. Instead of managing multiple vendors for every problem, BuildForge Network becomes an extended team around the business.</p>
        </div>
      </header>

      {/* Capabilities Section */}
      <section id="services" className="capabilities section bg-light">
        <div className="grid-2">
          <div className="capability-card">
            <span className="num">01</span>
            <h2>Strategy</h2>
            <p>Research · Positioning · GTM · Growth direction</p>
          </div>
          <div className="capability-card">
            <span className="num">02</span>
            <h2>Brand</h2>
            <p>Identity · Messaging · Creative · Brand systems</p>
          </div>
          <div className="capability-card">
            <span className="num">03</span>
            <h2>Marketing</h2>
            <p>Content · Social · Campaigns · Performance · Community</p>
          </div>
          <div className="capability-card">
            <span className="num">04</span>
            <h2>Technology</h2>
            <p>Web · UI/UX · MVPs · Automation · AI</p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy section">
        <h2>You don't need more vendors. You need one team that gets it.</h2>
        <p>Building a company often means a designer here, a developer there, and marketing somewhere else — and suddenly the founder becomes the person connecting everyone.</p>
        
        <div className="pain-points grid-3 mt-4">
          <div>
            <h3>More Handovers</h3>
            <p>Every vendor transition loses context and momentum.</p>
          </div>
          <div>
            <h3>More Meetings</h3>
            <p>Founders spend time coordinating instead of building.</p>
          </div>
          <div>
            <h3>Context Switching</h3>
            <p>No single team understands the full picture.</p>
          </div>
        </div>
        <div className="solution-box mt-4">
          <h3>BuildForge Solves This</h3>
          <p>One team. One direction. One shared understanding.</p>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="work" className="case-studies section bg-light">
        <h2>Businesses We've Been Building With.</h2>
        
        <div className="case-card">
          <h3>Forensic Wallah</h3>
          <p className="tag">Extended Marketing Wing</p>
          <p>1 Month of BuildForge — Strategy + Content + Growth<br/>83K+ Instagram Views | 64% organic discovery at scale.</p>
          <p className="formula"><strong>Formula:</strong> Educational + Opportunity-led Content → Reach → Discovery → Growth</p>
        </div>

        <div className="case-card">
          <h3>RCET Prep Academy</h3>
          <p className="tag">Student-First Digital Growth</p>
          <p>In education, attention isn't enough. Students need clarity, credibility and consistent guidance before they decide where to invest their preparation.</p>
        </div>

        <div className="case-card">
          <h3>Wingmann</h3>
          <p className="tag">Consumer Tech & Community</p>
          <p>Brand Storytelling to make the proposition simple, clear and memorable. Turned attention into users and community.</p>
        </div>
      </section>

      {/* Custom Footer Matching Your Uploaded Image */}
      <Footer />
    </div>
  );
}
