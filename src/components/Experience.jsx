import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EXPERIENCE } from '../data/profile';
import { SectionBadge, SectionTitle, Chip } from './ui';
import { episodeCode, pad } from './episodes';

// Official logos are designed for light backgrounds, so they sit on a white tile.
const LogoTile = ({ src, alt = '', className = '' }) => (
  <span className={`inline-flex items-center justify-center rounded-lg bg-white px-3 py-2 ${className}`}>
    <img src={src} alt={alt} className="h-full w-auto max-w-full object-contain" />
  </span>
);

// Season 02: each role is an episode, with its highlights listed inside.
const Experience = () => {
  const [activeId, setActiveId] = useState(EXPERIENCE[0].id);
  const activeIndex = EXPERIENCE.findIndex((e) => e.id === activeId);
  const active = EXPERIENCE[activeIndex];

  return (
    <section id="experience" className="relative w-full bg-[#0b0b0b] text-white py-32 px-6 md:px-12 select-none overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <SectionBadge season={2} label="EXPERIENCE" />
            <SectionTitle top="ALL EPISODES" accent="CAREER TIMELINE." />
          </div>
          <p className="text-white/60 text-sm font-light leading-relaxed max-w-xs">
            {EXPERIENCE.length} episodes across ad tech, cloud, and enterprise software. Pick one to see its highlights.
          </p>
        </div>

        {/* Episode selector */}
        <div className="flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {EXPERIENCE.map((job, i) => {
            const isActive = job.id === activeId;
            return (
              <button
                key={job.id}
                type="button"
                onClick={() => setActiveId(job.id)}
                aria-pressed={isActive}
                className={`shrink-0 flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-all duration-300 ${
                  isActive
                    ? 'bg-red-600/15 border-red-600 shadow-[0_0_25px_rgba(229,9,20,0.35)]'
                    : 'bg-[#141414] border-white/10 hover:border-white/30'
                }`}
              >
                <LogoTile src={job.logo} className="h-10 w-[84px] shrink-0" />
                <span>
                  <span className={`block text-[10px] font-mono tracking-widest ${isActive ? 'text-red-500' : 'text-white/40'}`}>
                    EPISODE {pad(i + 1)}
                  </span>
                  <span className="block text-sm font-bold text-white whitespace-nowrap">{job.company}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Active episode */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* Episode "poster" */}
            <div className="lg:col-span-4 p-8 rounded-[2rem] bg-gradient-to-br from-[#220a0d] via-[#141414] to-[#0a0a0a] border border-white/10 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-red-500 px-2.5 py-0.5 rounded bg-red-600/10 border border-red-600/25">
                  S02 · {episodeCode(activeIndex)}
                </span>
                <span className="text-xs font-mono text-white/40">{active.highlights.length} highlights</span>
              </div>
              <LogoTile src={active.logo} alt={active.company} className="h-16 w-[180px] self-start px-4 py-3" />
              <div className="space-y-1">
                <h3 className="text-3xl font-black tracking-tight">{active.company}</h3>
                <p className="text-red-400 font-semibold">{active.role}</p>
                <p className="text-xs font-mono text-white/50 uppercase tracking-wider">
                  {active.period} · {active.location}
                </p>
              </div>
              <p className="text-sm text-white/70 font-light leading-relaxed">{active.synopsis}</p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 mt-auto">
                {active.tech.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <ol className="lg:col-span-8 flex flex-col divide-y divide-white/10 rounded-[2rem] bg-[#141414]/80 border border-white/10 overflow-hidden">
              {active.highlights.map((ep, i) => (
                <li key={i} className="group flex gap-5 md:gap-8 items-start p-6 md:p-7 hover:bg-white/[0.03] transition-colors">
                  <span className="font-display text-4xl text-white/20 group-hover:text-red-600 transition-colors leading-none w-8 shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-sm md:text-base text-white/80 font-light leading-relaxed">{ep}</p>
                </li>
              ))}
            </ol>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Experience;
