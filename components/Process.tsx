import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, Minus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "THINK",
    desc: "Understand before creating. We focus on rigorous research, market understanding, positioning, strategy, and comprehensive Go-to-market direction."
  },
  {
    num: "02",
    title: "BUILD",
    desc: "Turn direction into something real. We deploy high-fidelity brand identity, creative messaging, digital experiences, UI/UX, and technology automation."
  },
  {
    num: "03",
    title: "GROW",
    desc: "Put it in front of the right people. We drive acquisition through content, social campaigns, performance marketing, and community distribution."
  }
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".process-title", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%"
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="process" className="section-padding bg-[#e1e1e1] text-[#050505]">
      <div className="container">
        <div className="flex flex-col md:flex-row mb-24 justify-between items-end">
          <h2 className="text-[10vw] md:text-[8vw] leading-[0.8] tracking-tighter process-title">
            THE<br/>APPROACH
          </h2>
          <p className="max-w-md text-lg mt-8 md:mt-0 font-medium process-title">
            The deliverable follows the problem — not the other way around.
          </p>
        </div>

        <div className="border-t border-black">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="border-b border-black cursor-pointer group"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="py-8 md:py-12 flex justify-between items-center pr-4">
                <div className="flex items-baseline gap-8 md:gap-16">
                  <span className="font-mono text-sm md:text-base opacity-50">({step.num})</span>
                  <h3 className="text-3xl md:text-6xl font-normal group-hover:translate-x-4 transition-transform duration-500 font-serif-italic">
                    {step.title}
                  </h3>
                </div>
                <div className="relative w-6 h-6">
                  <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                    {openIndex === index ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                  </div>
                </div>
              </div>
              
              <div 
                className={`overflow-hidden transition-all duration-700 ease-out-expo ${openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="pb-12 md:pl-[120px] max-w-2xl">
                  <p className="text-xl md:text-2xl leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
