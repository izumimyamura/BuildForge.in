import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import WorkGallery from './components/WorkGallery';
import Process from './components/Process';
import Marquee from './components/Marquee';
import CustomCursor from './components/CustomCursor';
import Manifesto from './components/Manifesto';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#050505] text-[#e1e1e1]">
      <div className="noise-overlay"></div>
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <Intro />
        <Manifesto />
        <Process />
        <Marquee />
        <WorkGallery />
      </main>
    </div>
  );
}
