import { motion } from 'framer-motion';
import { STATS } from '../data/profile';

// "Top 10"-style strip: big outlined numbers next to labels.
const Stats = () => (
  <section className="relative w-full bg-[#050505] text-white py-16 px-6 md:px-12 border-y border-white/5 select-none">
    <div className="max-w-7xl mx-auto">
      <div className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold mb-8">Top Numbers</div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
            className="flex flex-col gap-2"
          >
            <span
              className="font-display text-6xl md:text-7xl leading-none text-transparent"
              style={{ WebkitTextStroke: '2px rgba(229,9,20,0.9)' }}
            >
              {s.value}
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-white/60">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
