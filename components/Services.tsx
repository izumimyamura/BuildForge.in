import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const servicesList = [
  {
    category: "CONTENT & CREATIVE",
    items: [
      "Video Editing & Production",
      "Social Media Management",
      "High-Impact Visual Assets",
      "Storytelling & Copywriting",
      "Campaign Ideation"
    ]
  },
  {
    category: "PERFORMANCE MARKETING",
    items: [
      "Google Ads (Search & Display)",
      "Meta Ads (Facebook & Instagram)",
      "Influencer Marketing",
      "Digital Campaign Strategy",
      "Community Distribution"
    ]
  },
  {
    category: "TECHNOLOGY & WEB",
    items: [
      "Web Development",
      "UI/UX Design",
      "Product MVPs",
      "Automation Systems",
      "AI Integrations"
    ]
  },
  {
    category: "STRATEGY & BRAND",
    items: [
      "Market Positioning",
      "Go-To-Market (GTM)",
      "Brand Identity Systems",
      "Messaging & Tone of Voice",
      "Creative Direction"
    ]
  },
  {
    category: "GROWTH & ANALYTICS",
    items: [
      "Customer Acquisition",
      "Data Analytics",
      "Conversion Optimisation",
      "Growth Experimentation"
    ]
  }
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 md:py-32 bg-[#0a0a0a] text-white border-t border-white/10">
      <div className="container mx-auto px-4 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Sticky Left Column */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-5xl md:text-6xl font-heading font-black mb-6 uppercase">
                Core<br/>
                <span className="text-transparent stroke-text">Capabilities</span>
              </h2>
              <p className="font-serif-italic text-lg text-gray-400 mb-8 max-w-sm">
                Every growing business eventually needs more than one capability. We plug into the business where you need us most.
              </p>
              <div className="hidden lg:block w-16 h-[1px] bg-white/30"></div>
            </div>
          </div>

          {/* Scrolling Right Column (The Details) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            {servicesList.map((service, index) => (
              <div key={index} className="service-card border-t border-white/20 pt-6">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-mono text-gray-500">0{index + 1}</span>
                  <h3 className="text-xl font-heading font-bold uppercase tracking-wide">
                    {service.category}
                  </h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 flex-shrink-0 group-hover:bg-white transition-colors"></span>
                      <span className="font-light text-gray-300 text-base md:text-lg">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
