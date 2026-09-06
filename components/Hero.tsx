import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      gsap.set(".hero-char", { yPercent: 120, rotateZ: 10 });

      tl.to(".hero-char", {
        yPercent: 0,
        rotateZ: 0,
        stagger: 0.05,
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

  const title = "BUILDFORGE";

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-[#050505] text-[#e1e1e1]">
      <div className="hero-bg absolute inset-0 z-0 opacity-40">
         <img 
           src="https://images.unsplash.com/photo-1618172193763-c511deb635ca?q=80&w=2864&auto=format&fit=crop" 
           alt="Hero background"
           className="w-full h-full object-cover grayscale contrast-125 scale-105"
         />
         <div className="absolute inset-0 bg-[#050505]/60 mix-blend-multiply"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 w-full h-full flex flex-col justify-between p-4 sm:p-6 md:p-12">
        <div className="flex justify-between items-start hero-fade mt-16 md:mt-20">
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
               <a href="mailto:ceo@buildforge.site" className="px-4 h-8 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors text-xs">
                 EMAIL
               </a>
             </div>
           </div>
        </div>

        <div className="relative mb-8 md:mb-12">
          <h1 ref={titleRef} className="text-[12vw] sm:text-[10vw] md:text-[9vw] leading-[1.1] font-heading font-black tracking-tight text-white">
            <div className="flex flex-wrap">
              {title.split("").map((char, i) => (
                <span key={i} className="hero-char inline-block origin-bottom will-change-transform">{char}</span>
              ))}
            </div>
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mt-6 md:mt-12 border-t border-white/20 pt-4 md:pt-8 hero-fade gap-4 md:gap-6">
            <div className="flex-1 max-w-2xl">
              <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-serif-italic text-gray-300 leading-snug mb-4 md:mb-6">
                "Ideas are easy. Building them isn't. You don't need more vendors. You need one team that gets it."
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 text-[10px] md:text-xs font-mono uppercase tracking-wider opacity-70">
                <div>
                  <div className="text-white/40 mb-1">Wing 01</div>
                  <div>Strategy</div>
                </div>
                <div>
                  <div className="text-white/40 mb-1">Wing 02</div>
                  <div>Brand</div>
                </div>
                <div>
                  <div className="text-white/40 mb-1">Wing 03</div>
                  <div>Marketing</div>
                </div>
                <div>
                  <div className="text-white/40 mb-1">Wing 04</div>
                  <div>Technology</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
