import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LINKS } from '../data/profile';
import { SectionBadge } from './ui';

const CHANNELS = [
  { label: 'Email', value: LINKS.email, href: `mailto:${LINKS.email}` },
  { label: 'LinkedIn', value: 'linkedin.com/in/ashkap', href: LINKS.linkedin },
  { label: 'GitHub', value: 'github.com/kapoorashish474', href: LINKS.github },
];

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '20%']);

  return (
    <section ref={ref} id="contact" className="bg-[#0b0b0b] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-white/10 select-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/15 rounded-full blur-[160px] pointer-events-none z-0" />

      <motion.div style={{ y }} className="absolute inset-0 flex justify-center overflow-hidden pointer-events-none z-0 pt-12 opacity-10">
        <h2 className="font-display text-[25vw] leading-[0.75] text-red-600 uppercase scale-y-[1.6] origin-top">CONTACT</h2>
      </motion.div>

      <div className="relative z-10 w-full flex justify-end">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-[#141414]/95 backdrop-blur-2xl border-t border-l border-white/15 w-full md:w-[90%] lg:w-[82%] p-8 md:p-16 text-white rounded-tl-[3rem] shadow-[0_-25px_60px_rgba(0,0,0,0.9)] relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-90" />

          <div className="mb-12">
            <SectionBadge season={6} label="GET IN TOUCH" />
          </div>

          <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.05] mb-4">
            Ready for the <span className="text-red-600">next season?</span>
          </h3>
          <p className="text-white/60 font-light max-w-xl mb-12">
            Open to staff-level engineering and leadership roles in AI and cloud platforms. The fastest way to reach me is email.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {CHANNELS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={`${c.label}: ${c.value}`}
                className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-red-600 hover:bg-red-600/10 transition-all duration-300 flex items-center justify-between gap-3"
              >
                {/* Only the channel name is shown; the address stays in the link itself. */}
                <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">{c.label}</span>
                <svg className="w-4 h-4 shrink-0 text-white transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
