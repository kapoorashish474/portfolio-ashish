import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS } from '../data/profile';
import { SectionBadge } from './ui';
import { episodeCode } from './episodes';

gsap.registerPlugin(ScrollTrigger);

const COLS = 3;
const GAP = 40;

// Grid slot for each card around the folder. Up to 8 cards wrap a 3x3 grid and leave
// the center cell (where the folder sits) empty; more cards fall back to a plain grid.
const getGridPos = (index, count) => {
  const cells = count <= 8 ? [0, 1, 2, 3, 5, 6, 7, 8] : null;
  const cell = cells ? cells[index] : index;
  return { row: Math.floor(cell / COLS), col: cell % COLS };
};
const ROWS = PROJECTS.length <= 8 ? Math.ceil(([0, 1, 2, 3, 5, 6, 7, 8][PROJECTS.length - 1] + 1) / COLS) : Math.ceil(PROJECTS.length / COLS);

const ProjectCard = ({ project, index, compact = false }) => (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className={`w-full h-full rounded-[24px] overflow-hidden border border-white/15 bg-[#141414]/95 backdrop-blur-2xl shadow-[0_25px_50px_rgba(0,0,0,0.9)] transition-all duration-500 group flex flex-col justify-between relative ${
      compact ? 'p-6' : 'p-7 hover:scale-[1.04] hover:border-red-600 hover:shadow-[0_35px_80px_rgba(229,9,20,0.35)] hover:-translate-y-2'
    }`}
  >
    <div className="flex items-center justify-between">
      <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-red-500 bg-red-600/10 px-2.5 py-1 rounded border border-red-600/20">
        {episodeCode(index)}
      </span>
      <div className="flex items-center gap-2">
        {project.badge && <span className="text-xs font-mono text-red-400 font-bold uppercase">{project.badge}</span>}
        <span className="text-[10px] font-mono border border-white/30 px-1 text-white/70">
          {project.link.includes('github.com') ? 'CODE' : 'LIVE'}
        </span>
      </div>
    </div>

    <div className="space-y-2 my-auto">
      <div className="text-[11px] font-mono uppercase tracking-widest text-white/40">{project.category}</div>
      <h3 className={`${compact ? 'text-xl' : 'text-2xl'} font-black text-white tracking-tight group-hover:text-red-500 transition-colors duration-300`}>
        {project.title}
      </h3>
      <p className="text-xs text-white/70 font-light leading-relaxed line-clamp-2">{project.description}</p>
    </div>

    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
      {project.tags.slice(0, compact ? 3 : 4).map((tag) => (
        <span key={tag} className="text-[10px] font-mono text-white/70 bg-white/5 px-2 py-0.5 rounded">
          {tag}
        </span>
      ))}
    </div>
    <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-red-600 group-hover:shadow-[0_0_15px_#E50914] transition-all" />
  </a>
);

const Projects = () => {
  const containerRef = useRef(null);
  const folderBackRef = useRef(null);
  const folderFrontRef = useRef(null);
  const cardsRef = useRef([]);
  const mobileCardsRef = useRef([]);
  const mobileCarouselRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([folderBackRef.current, folderFrontRef.current], { xPercent: -50, yPercent: -50 });
      gsap.set(folderFrontRef.current, { transformOrigin: 'bottom center' });

      const mm = gsap.matchMedia();

      mm.add('(min-width: 768px)', () => {
        const cards = cardsRef.current;
        gsap.set(cards, { xPercent: -50, yPercent: -50, rotation: () => gsap.utils.random(-6, 6), scale: 0.85, x: 0, y: 0 });

        let floatTween;
        const stopFloat = () => floatTween && floatTween.kill();

        // Folder opens, cards rise out of it, then spread into the grid and gently float.
        gsap
          .timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 50%',
              end: 'bottom 50%',
              toggleActions: 'play reverse play reverse',
              onEnter: stopFloat,
              onEnterBack: stopFloat,
              onLeave: stopFloat,
              onLeaveBack: stopFloat,
            },
            onComplete: () => {
              floatTween = gsap.to(cards, {
                y: '+=12',
                rotation: '+=1',
                duration: 3.5,
                yoyo: true,
                repeat: -1,
                ease: 'sine.inOut',
                stagger: { amount: 1.5, from: 'random' },
              });
            },
          })
          .to(folderFrontRef.current, { rotationX: -130, duration: 1.2, ease: 'power3.inOut' })
          .to(cards, { y: -140, scale: 0.9, zIndex: 70, duration: 0.6, stagger: 0.04, ease: 'back.out(1.2)' }, '-=0.6')
          .to(
            cards,
            {
              x: (i) => (getGridPos(i, cards.length).col - (COLS - 1) / 2) * ((cards[0]?.offsetWidth || 360) + GAP),
              y: (i) => (getGridPos(i, cards.length).row - (ROWS - 1) / 2) * ((cards[0]?.offsetHeight || 240) + GAP),
              rotation: () => gsap.utils.random(-3, 3),
              scale: 1,
              duration: 1.4,
              stagger: { amount: 0.4, from: 'center' },
              ease: 'expo.out',
            },
            '-=0.2'
          );

        return stopFloat;
      });

      mm.add('(max-width: 767px)', () => {
        const cardW = window.innerWidth * 0.8;
        mobileCardsRef.current.forEach((card, i) => {
          gsap.set(card, { x: -(i * (cardW + 20)), y: 0, scale: 0.4, opacity: 0, rotation: gsap.utils.random(-15, 15) });
        });

        gsap
          .timeline({ scrollTrigger: { trigger: containerRef.current, start: 'top 60%' } })
          .to(folderFrontRef.current, { rotationX: -130, duration: 0.8, ease: 'power3.inOut' })
          .to(mobileCardsRef.current, { y: -100, opacity: 1, scale: 0.85, duration: 0.6, stagger: 0.05, ease: 'back.out(1.2)' }, '-=0.4')
          .to(
            mobileCardsRef.current,
            {
              x: 0,
              y: 0,
              rotation: 0,
              scale: (i) => (i === 0 ? 1 : 0.92),
              opacity: (i) => (i === 0 ? 1 : 0.5),
              duration: 0.8,
              stagger: 0.08,
              ease: 'expo.out',
              onComplete: () => {
                const el = mobileCarouselRef.current;
                if (el) {
                  el.style.overflowX = 'auto';
                  el.style.pointerEvents = 'auto';
                }
              },
            },
            '-=0.2'
          );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="bg-[#0b0b0b] min-h-[100svh] md:min-h-[170vh] relative overflow-x-clip text-white w-full flex items-center justify-center py-24 md:py-40 select-none"
    >
      <div className="absolute top-10 left-0 w-full flex flex-col items-center pointer-events-none z-0">
        <div className="mb-2">
          <SectionBadge season={5} label="PROJECTS" />
        </div>
        <h2 className="font-display text-[18vw] md:text-[20vw] text-white/[0.03] leading-none whitespace-nowrap uppercase">ORIGINALS</h2>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[55vw] bg-red-600/15 rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="mt-12 relative w-full max-w-7xl h-full flex items-center justify-center [perspective:2000px] z-10">
        <div className="relative w-0 h-0 [transform-style:preserve-3d]">
          {/* Folder back */}
          <div
            ref={folderBackRef}
            className="absolute w-[85vw] md:w-[32vw] max-w-[380px] aspect-video bg-[#141414] rounded-[24px] border border-red-600/40 shadow-[0_20px_50px_rgba(229,9,20,0.25)] flex items-center justify-center"
            style={{ zIndex: 5 }}
          >
            <div className="absolute -top-6 left-6 w-32 h-8 bg-[#1f1f1f] rounded-t-xl border-t border-red-600/30" />
            <div className="relative z-10 text-red-600 font-mono font-black text-2xl tracking-widest uppercase opacity-60">GITHUB_REPOS</div>
          </div>

          {/* Desktop cards */}
          {PROJECTS.map((project, i) => (
            <div
              key={project.title}
              ref={(el) => (cardsRef.current[i] = el)}
              className="hidden md:block absolute w-[33vw] max-w-[380px] aspect-[16/10] will-change-transform"
              style={{ zIndex: 10 + i }}
            >
              <ProjectCard project={project} index={i} />
            </div>
          ))}

          {/* Folder front flap */}
          <div ref={folderFrontRef} className="absolute w-[85vw] md:w-[32vw] max-w-[380px] aspect-video pointer-events-none will-change-transform" style={{ zIndex: 60 }}>
            <div className="absolute bottom-0 w-full h-[85%] bg-[#1c1c1c] rounded-b-[24px] rounded-t-md shadow-[0_-5px_20px_rgba(0,0,0,0.8)] flex flex-col justify-end p-6 border-t border-red-600/40">
              <div className="w-20 h-1.5 bg-white/20 rounded-full mx-auto mb-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile swipeable carousel */}
      <div
        ref={mobileCarouselRef}
        className="md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen py-12 flex items-center gap-6 px-[12.5vw] pointer-events-none z-[100] snap-x snap-mandatory overflow-x-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {PROJECTS.map((project, i) => (
          <div key={`mob-${project.title}`} ref={(el) => (mobileCardsRef.current[i] = el)} className="shrink-0 w-[78vw] aspect-[4/3] snap-center will-change-transform">
            <ProjectCard project={project} index={i} compact />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
