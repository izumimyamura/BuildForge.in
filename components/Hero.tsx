import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      gsap.set(".hero-char", { yPercent: 120, rotateZ: 10 });

      tl.to(".hero-char", {
        yPercent: 0,
        rotateZ: 0,
        stagger: 0.04,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.5
      });
      
      gsap.from(".hero-fade", {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.2,
        delay: 1
      });

      gsap.to(".hero-bg", {
        yPercent: 30,
        scale: 1.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-[#050505] text-[#e1e1e1] flex flex-col">
      <div className="hero-bg absolute inset-0 z-0 opacity-40">
         <img 
           src="https://images.unsplash.com/photo-1618172193763-c511deb635ca?q=80&w=2864&auto=format&fit=crop" 
           alt="Hero background"
           className="w-full h-full object-cover grayscale contrast-125 scale-105"
         />
         <div className="absolute inset-0 bg-[#050505]/60 mix-blend-multiply"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 w-full flex-1 flex flex-col justify-between p-4 sm:p-6 md:p-12 pt-24 md:pt-28">
        
        <div className="flex justify-between items-start hero-fade">
           <div className="flex flex-col gap-2 md:gap-3">
             <div className="text-[10px] md:text-xs font-mono uppercase tracking-widest opacity-60">
               ( Est. 2024 )
             </div>
             <div className="hidden md:block text-xs font-mono uppercase tracking-wider opacity-40 max-w-[200px]">
               Extended Team<br/>
               <span className="text-white/60">Building, Marketing & Growth</span>
             </div>
           </div>
           <div className="hidden md:flex text-right flex-col items-end gap-2 md:gap-3">
             <div className="flex items-center gap-2">
               <span className="text-xs font-mono uppercase tracking-wider opacity-50">Accepting Projects</span>
               <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
             </div>
             <div className="text-xs font-mono uppercase tracking-wider opacity-50">
               Global / Remote
             </div>
             <div className="flex gap-2 mt-2">
               <a href="mailto:ceo@squadranlabs.in" className="px-4 h-8 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors text-xs">
                 EMAIL
               </a>
             </div>
           </div>
        </div>

        <div className="relative mt-auto mb-4 md:mb-8">
          <div className="flex flex-col leading-[0.85] font-heading font-black tracking-tight uppercase mb-8 md:mb-10 w-full">
            <div className="overflow-hidden">
              <div className="text-[12vw] sm:text-[9.5vw] md:text-[8.5vw] text-white whitespace-nowrap">
                {"BUILDFORGE".split("").map((char, i) => (
                  <span key={`bf-${i}`} className="hero-char inline-block origin-bottom will-change-transform">{char}</span>
                ))}
              </div>
            </div>
            
            <div className="overflow-hidden">
              <div className="text-[12vw] sm:text-[9.5vw] md:text-[8.5vw] text-transparent stroke-text whitespace-nowrap ml-1 md:ml-2">
                {"NETWORK".split("").map((char, i) => (
                  <span key={`nw-${i}`} className="hero-char inline-block origin-bottom will-change-transform">{char}</span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between border-t border-white/20 pt-6 md:pt-8 hero-fade gap-6 md:gap-8">
            <div className="flex-1 max-w-4xl">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif-italic text-gray-300 leading-snug mb-6 md:mb-8">
                "WE BUILD BRANDS. WE BUILD GROWTH. WE BUILD WHAT'S NEXT. An extended team for businesses that need strategy, creative and execution to move together."
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 text-[10px] md:text-xs font-mono uppercase tracking-wider opacity-70">
                <div><div className="text-white/40 mb-1">01</div><div>Strategy</div></div>
                <div><div className="text-white/40 mb-1">02</div><div>Brand</div></div>
                <div><div className="text-white/40 mb-1">03</div><div>Content</div></div>
                <div><div className="text-white/40 mb-1">04</div><div>Marketing</div></div>
                <div><div className="text-white/40 mb-1">05</div><div>Growth</div></div>
                <div><div className="text-white/40 mb-1">06</div><div>Technology</div></div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
