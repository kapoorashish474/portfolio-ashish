// Shared building blocks used across sections.
import { pad } from './episodes';

// Card with a red radial highlight that follows the mouse.
export const SpotlightCard = ({ className = '', size = 400, children, ref, ...rest }) => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <div ref={ref} onMouseMove={handleMouseMove} className={`relative group overflow-hidden ${className}`} {...rest}>
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(${size}px circle at var(--mouse-x) var(--mouse-y), rgba(229,9,20,0.16), transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
};

// "SEASON 01 | ABOUT" pill shown above each section title.
export const SectionBadge = ({ season, label }) => (
  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-black/80 backdrop-blur-2xl border border-red-600/40 text-xs font-mono uppercase tracking-widest text-white shadow-2xl">
    <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
    <span className="text-red-500 font-bold">SEASON {pad(season)}</span>
    <span className="text-white/40">|</span>
    <span>{label}</span>
  </div>
);

export const SectionTitle = ({ top, accent }) => (
  <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-[1.05]">
    {top} <br />
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-600 to-red-700 drop-shadow-[0_0_30px_rgba(229,9,20,0.4)]">
      {accent}
    </span>
  </h2>
);

export const Chip = ({ children, className = '' }) => (
  <span className={`px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-white/80 ${className}`}>
    {children}
  </span>
);
