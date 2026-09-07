import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const statements = [
  "We Build Brands.",
  "We Build Growth.",
  "We Build What's Next.",
  "One Network. Many Specialists.",
  "Think. Build. Grow."
];

export default function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states for everything but the first one
      gsap.set(textRefs.current.slice(1), { opacity: 0, scale: 0.8, filter: 'blur(10px)' });
      gsap.set(textRefs.current[0], { opacity: 1, scale: 1, filter: 'blur(0px)' });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${statements.length * 120}%`, // Gives plenty of scroll room
          pin: true,
          scrub: 1, // Smooth scrubbing
        }
      });

      // Create a smooth cross-fade timeline for each statement
      textRefs.current.forEach((el, i) => {
        if (i > 0) {
          tl.to(textRefs.current[i - 1], { opacity: 0, scale: 1.2, filter: 'blur(10px)', duration: 1 }, `step${i}`)
            .to(el, { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1 }, `step${i}`);
        }
      });
      
      // Add a little dead space at the end before unpinning
      tl.to({}, { duration: 1 });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-screen bg-[#050505] text-[#e1e1e1] overflow-hidden relative flex items-center justify-center">
      <div className="absolute inset-0 opacity-20">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-white rounded-full blur-[150px] animate-pulse"></div>
      </div>

      <div className="relative z-10 container text-center h-full flex flex-col justify-center items-center">
         {statements.map((text, i) => (
           <h2 
             key={i}
             ref={el => textRefs.current[i] = el}
             className="absolute w-full text-[6vw] md:text-[5vw] font-heading font-bold uppercase leading-tight mix-blend-difference"
           >
             {text}
           </h2>
         ))}
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-xs font-mono tracking-[0.2em] opacity-50">
        ( THE MANIFESTO )
      </div>
    </section>
  );
}
