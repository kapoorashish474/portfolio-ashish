import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROFILE, EDUCATION, RECOGNITION } from '../data/profile';
import { SpotlightCard, SectionBadge, SectionTitle, Chip } from './ui';

gsap.registerPlugin(ScrollTrigger);

const CORE_STACK = ['AWS', 'Azure', 'Kubernetes', 'Docker', 'React', 'Node.js', 'Python', 'Snowflake', 'LLMs', 'MCP'];

const cardClass =
  'p-8 md:p-12 bg-[#141414]/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl hover:border-red-600/60 transition-colors duration-500';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-card',
        { y: 80, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power4.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', toggleActions: 'play none none reverse' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative w-full bg-[#050505] text-white py-32 px-6 md:px-12 select-none overflow-hidden">
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full space-y-16">
        <div className="flex flex-col items-start space-y-4">
          <SectionBadge episode="EPISODE 01" label="ABOUT" />
          <SectionTitle top="SERIES SYNOPSIS" accent="THE ENGINEER." />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Summary */}
          <SpotlightCard className={`about-card md:col-span-7 flex flex-col justify-between ${cardClass}`}>
            <div className="absolute top-0 right-0 p-8 text-white/5 font-mono text-7xl font-black pointer-events-none">01</div>
            <div className="space-y-5 relative z-10">
              <h3 className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">Summary</h3>
              <p className="text-lg md:text-xl font-medium text-white/90 leading-relaxed">{PROFILE.summary[0]}</p>
              <p className="text-sm md:text-base text-white/60 font-light leading-relaxed">{PROFILE.summary[1]}</p>
            </div>
            <div className="pt-8 flex flex-wrap gap-2 relative z-10">
              {PROFILE.focusTags.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
          </SpotlightCard>

          {/* Education + recognition */}
          <SpotlightCard className={`about-card md:col-span-5 flex flex-col gap-8 ${cardClass}`}>
            <div className="absolute top-0 right-0 p-8 text-white/5 font-mono text-7xl font-black pointer-events-none">02</div>
            <div className="space-y-4 relative z-10">
              <h3 className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">Education</h3>
              {EDUCATION.map((e) => (
                <div key={e.degree}>
                  <div className="text-white font-semibold">{e.degree}</div>
                  <div className="text-sm text-white/60 font-light">
                    {e.school} · {e.period}
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-3 relative z-10">
              <h3 className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">Recognition</h3>
              <ul className="space-y-3 text-sm text-white/80 font-light">
                {RECOGNITION.map((r) => (
                  <li key={r.title} className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold">&#8250;</span>
                    <span>
                      {r.link ? (
                        <a href={r.link} target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-red-500 underline decoration-red-600/50 underline-offset-4">
                          {r.title}
                        </a>
                      ) : (
                        <strong className="text-white">{r.title}</strong>
                      )}
                      <span className="block text-white/50">{r.detail}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </SpotlightCard>

          {/* Stack */}
          <SpotlightCard size={500} className={`about-card md:col-span-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 ${cardClass}`}>
            <div className="space-y-2 text-left relative z-10">
              <h3 className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">Production Stack</h3>
              <p className="text-base md:text-lg font-semibold text-white">Tools shipped to production at Kargo, Microsoft, and AWS.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 relative z-10">
              {CORE_STACK.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-wider text-white hover:bg-red-600/20 hover:border-red-600/40 hover:scale-105 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};

export default About;
