import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#050505] text-[#e1e1e1] py-24 border-t border-white/10 overflow-hidden">
      
      {/* Massive Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-heading font-black text-white/[0.02] whitespace-nowrap pointer-events-none z-0">
        BUILDFORGE
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-heading font-black mb-8">
              LET'S BUILD<br />
              <span className="text-transparent stroke-text">SOMETHING THAT MATTERS.</span>
            </h2>
            <p className="font-serif-italic text-xl text-gray-400 mb-8">
              Bring us the problem. We'll bring the team.
            </p>
          </div>

          <div className="flex flex-col gap-10 min-w-[250px]">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-4">Contact</h3>
              <ul className="flex flex-col gap-3 font-mono text-sm md:text-base">
                <li>
                  <a href="mailto:ceo@squadranlabs.in" className="hover:text-white text-gray-300 transition-colors inline-block group">
                    ceo@squadranlabs.in
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-white mt-1"></span>
                  </a>
                </li>
                <li>
                  <a href="tel:+918171945200" className="hover:text-white text-gray-300 transition-colors inline-block group">
                    +91 81719 45200
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-white mt-1"></span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-4">Socials & Web</h3>
              <ul className="flex flex-col gap-3 font-mono text-sm md:text-base">
                <li>
                  <a href="https://buildforge.site" target="_blank" rel="noreferrer" className="hover:text-white text-gray-300 transition-colors inline-block group">
                    buildforge.site
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-white mt-1"></span>
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white text-gray-300 transition-colors inline-block group">
                    LinkedIn: BuildForge Network
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-white mt-1"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs text-gray-600">
          <p>© {new Date().getFullYear()} BuildForge Network. All rights reserved.</p>
          <p>Think. Build. Grow.</p>
        </div>
      </div>
    </footer>
  );
}
