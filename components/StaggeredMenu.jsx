import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const StaggeredMenu = ({
  position = 'right',
  items = [],
  socialItems = [],
  displaySocials = false,
  displayItemNumbering = false,
  menuButtonColor = '#ffffff',
  openMenuButtonColor = '#000000',
  changeMenuColorOnOpen = true,
  colors = ['#1a1a1a', '#000000'],
  logoUrl = '',
  accentColor = '#5227FF',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const prelayersRef = useRef([]);
  const panelRef = useRef(null);
  const itemsRef = useRef([]);
  const tl = useRef(null);

  useEffect(() => {
    // gsap.context() guarantees React 18 / Vite strict-mode compatibility
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({ paused: true });

      const xPercent = position === 'right' ? 100 : -100;

      // 1. Setup and animate background layers
      if (prelayersRef.current.length > 0) {
        gsap.set(prelayersRef.current, { xPercent: xPercent, opacity: 1 });
        tl.current.to(prelayersRef.current, {
          xPercent: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power3.inOut'
        });
      }

      // 2. Setup and animate main panel
      gsap.set(panelRef.current, { xPercent: xPercent, opacity: 1 });
      tl.current.to(panelRef.current, {
        xPercent: 0,
        duration: 0.5,
        ease: 'power3.inOut'
      }, "-=0.3");

      // 3. Setup and animate menu text items
      gsap.set(itemsRef.current, { y: 30, opacity: 0 });
      tl.current.to(itemsRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.05,
        ease: 'power2.out'
      }, "-=0.2");
    }, containerRef);

    // Cleanup timeline on unmount
    return () => ctx.revert(); 
  }, [position]);

  useEffect(() => {
    if (tl.current) {
      if (isOpen) {
        tl.current.play();
      } else {
        tl.current.reverse();
      }
    }
  }, [isOpen]);

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
        
        {/* Added pointerEvents: 'auto' directly to ensure it stays clickable */}
        <button 
          className="sm-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          style={{ 
            color: isOpen && changeMenuColorOnOpen ? openMenuButtonColor : menuButtonColor,
            pointerEvents: 'auto',
            zIndex: 100
          }}
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
                 transition: 'transform 0.3s ease',
                 backgroundColor: 'currentColor'
               }}
             ></span>
             <span 
               className="sm-icon-line" 
               style={{ 
                 transform: isOpen ? 'translate(-50%, -50%) rotate(-45deg)' : 'translate(-50%, -50%) translateY(4px)',
                 transition: 'transform 0.3s ease',
                 backgroundColor: 'currentColor'
               }}
             ></span>
          </div>
        </button>
      </header>

      <div className="sm-prelayers">
        {colors.map((color, i) => (
          <div 
            key={i} 
            className="sm-prelayer" 
            style={{ backgroundColor: color }}
            ref={el => { if (el) prelayersRef.current[i] = el; }}
          />
        ))}
      </div>

      <div className="staggered-menu-panel" ref={panelRef}>
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
                    ref={el => { if (el) itemsRef.current[i] = el; }}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {displaySocials && (
            <div className="sm-socials">
              <h4 className="sm-socials-title">Connect</h4>
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
