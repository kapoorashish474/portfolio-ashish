import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EXPERTISE } from '../data/profile';
import { SpotlightCard, SectionBadge, SectionTitle } from './ui';

gsap.registerPlugin(ScrollTrigger);

const GRADIENTS = [
  'from-[#1f0a0c] via-[#121212] to-[#0a0a0a]',
  'from-[#1a0809] via-[#111111] to-[#090909]',
  'from-[#220a0d] via-[#131313] to-[#0a0a0a]',
  'from-[#1d090b] via-[#101010] to-[#080808]',
];

// Sticky stacked cards: earlier cards shrink and blur as later ones slide over them.
const Expertise = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardRefs.current;
      cards.slice(0, -1).forEach((card, index) => {
        gsap.to(card, {
          scale: 0.92 - index * 0.025,
          y: -15 - index * 8,
          filter: 'blur(6px)',
          opacity: 0.4,
          scrollTrigger: { trigger: card, start: `top ${90 + index * 20}px`, end: 'bottom top', scrub: true },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="expertise" ref={sectionRef} className="relative w-full bg-[#050505] text-white py-24 px-6 md:px-12 select-none">
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="space-y-4 max-w-xl">
            <SectionBadge episode="EPISODE 03" label="EXPERTISE" />
            <SectionTitle top="DIRECTOR'S CUT" accent="WHAT I DO BEST." />
          </div>
          <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed max-w-xs">
            Leading teams and shipping AI and cloud platforms from design through production.
          </p>
        </div>

        <div className="relative flex flex-col gap-8 pb-20">
          {EXPERTISE.map((item, index) => (
            <SpotlightCard
              key={item.title}
              ref={(el) => (cardRefs.current[index] = el)}
              size={350}
              className={`sticky w-full p-6 md:p-8 rounded-2xl bg-gradient-to-br ${GRADIENTS[index % GRADIENTS.length]} backdrop-blur-2xl border border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.85)] flex flex-col justify-between min-h-[230px] md:min-h-[250px] transform-gpu hover:border-red-600/50`}
              style={{ zIndex: index + 1, top: `${95 + index * 16}px` }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent z-10" />
              <div className="flex items-center justify-between w-full mb-4 relative z-10">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-red-500 px-2.5 py-0.5 rounded bg-red-600/10 border border-red-600/25">
                  {item.tag}
                </span>
                <span className="text-2xl md:text-3xl font-mono font-black text-white/20">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center my-auto relative z-10">
                <h3 className="lg:col-span-5 text-2xl md:text-3xl font-black text-white tracking-tight leading-snug group-hover:text-red-500 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="lg:col-span-7 text-xs md:text-sm text-white/70 font-light leading-relaxed">{item.text}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
