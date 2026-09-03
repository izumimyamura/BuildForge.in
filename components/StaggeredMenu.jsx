import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const StaggeredMenu = ({
  position = 'right',
  items = [],
  socialItems = [],
  displaySocials = false,
  displayItemNumbering = false,
  menuButtonColor = '#ffffff',
  openMenuButtonColor = '#fff',
  changeMenuColorOnOpen = true,
  colors = ['#B497CF', '#5227FF'],
  logoUrl = '',
  accentColor = '#5227FF',
  onMenuOpen,
  onMenuClose
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const prelayersRef = useRef([]);
  const panelRef = useRef(null);
  const itemsRef = useRef([]);
  const tl = useRef(null);

  useEffect(() => {
    // Initialize GSAP Timeline
    tl.current = gsap.timeline({ paused: true });

    // Animate background color layers (prelayers)
    if (prelayersRef.current.length > 0) {
      tl.current.to(prelayersRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.inOut'
      });
    }

    // Animate main menu panel
    tl.current.to(panelRef.current, {
      x: 0,
      opacity: 1,
      duration: 0.5,
      ease: 'power3.inOut'
    }, "-=0.3");

    // Animate text links staggering in
    tl.current.fromTo(itemsRef.current, 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: 'power2.out' },
      "-=0.2"
    );

    return () => {
      tl.current.kill();
    };
  }, []);

  useEffect(() => {
    // Play or reverse animation based on isOpen state
    if (isOpen) {
      tl.current.play();
      if (onMenuOpen) onMenuOpen();
    } else {
      tl.current.reverse();
      if (onMenuClose) onMenuClose();
    }
  }, [isOpen]);

  // Determine starting transform based on menu position
  const initialTransform = position === 'right' ? 'translateX(100%)' : 'translateX(-100%)';

  return (
    <div 
      className="staggered-menu-wrapper fixed-wrapper" 
      data-position={position}
      data-open={isOpen}
      ref={containerRef}
      style={{ 
        '--sm-accent': accentColor, 
        '--sm-num-opacity': displayItemNumbering ? 1 : 0 
      }}
    >
      <header className="staggered-menu-header">
        <div className="sm-logo">
          {logoUrl && <img src={logoUrl} alt="Logo" className="sm-logo-img" />}
        </div>
        
        {/* Menu Toggle Button */}
        <button 
          className="sm-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          style={{ color: isOpen && changeMenuColorOnOpen ? openMenuButtonColor : menuButtonColor }}
        >
          <div className="sm-toggle-textWrap">
            <span className="sm-toggle-textInner" style={{ fontWeight: 600 }}>
              {isOpen ? 'CLOSE' : 'MENU'}
            </span>
          </div>
          <div className="sm-icon">
             <span 
               className="sm-icon-line" 
               style={{ 
                 transform: isOpen ? 'translate(-50%, -50%) rotate(45deg)' : 'translate(-50%, -50%) translateY(-4px)',
                 transition: 'transform 0.3s ease'
               }}
             ></span>
             <span 
               className="sm-icon-line" 
               style={{ 
                 transform: isOpen ? 'translate(-50%, -50%) rotate(-45deg)' : 'translate(-50%, -50%) translateY(4px)',
                 transition: 'transform 0.3s ease'
               }}
             ></span>
          </div>
        </button>
      </header>

      {/* Decorative colored pre-layers */}
      <div className="sm-prelayers">
        {colors.map((color, i) => (
          <div 
            key={i} 
            className="sm-prelayer" 
            style={{ backgroundColor: color, transform: initialTransform }}
            ref={el => prelayersRef.current[i] = el}
          />
        ))}
      </div>

      {/* Main Menu Panel */}
      <div 
        className="staggered-menu-panel" 
        ref={panelRef}
        style={{ transform: initialTransform }}
      >
        <div className="sm-panel-inner">
          <ul className="sm-panel-list" data-numbering={displayItemNumbering}>
            {items.map((item, i) => (
              <li key={i}>
                <a 
                  href={item.link} 
                  className="sm-panel-item"
                  aria-label={item.ariaLabel}
                  onClick={() => setIsOpen(false)}
                >
                  <span 
                    className="sm-panel-itemLabel"
                    ref={el => itemsRef.current[i] = el}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {displaySocials && (
            <div className="sm-socials">
              <h4 className="sm-socials-title">Socials</h4>
              <ul className="sm-socials-list">
                {socialItems.map((item, i) => (
                  <li key={i}>
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="sm-socials-link"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StaggeredMenu;
