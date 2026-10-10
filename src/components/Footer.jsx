import { PROFILE, LINKS, NAV } from '../data/profile';

const SOCIALS = [
  { label: 'LinkedIn', href: LINKS.linkedin },
  { label: 'GitHub', href: LINKS.github },
  { label: 'Email', href: `mailto:${LINKS.email}` },
];

const Footer = () => (
  <footer className="bg-[#050505] text-white py-16 px-6 md:px-12 border-t border-white/10 select-none relative z-10">
    <div className="max-w-7xl mx-auto flex flex-col space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-white/10">
        <div className="space-y-2">
          <div className="font-display text-3xl text-red-600 flex items-center gap-2 drop-shadow-[0_2px_15px_rgba(220,38,38,0.9)]">
            {PROFILE.firstName}
            <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
          </div>
          <p className="text-xs font-mono text-white/50 tracking-widest uppercase">{PROFILE.headline}</p>
        </div>
        <nav className="flex flex-wrap gap-6 md:gap-8 text-xs font-mono uppercase tracking-widest text-white/70">
          {NAV.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="hover:text-red-500 transition-colors">
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs font-mono text-white/60">
        <div className="flex items-center gap-6">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors uppercase tracking-wider"
            >
              {s.label} //
            </a>
          ))}
        </div>
        <div className="text-white/40 tracking-widest uppercase">Location: {PROFILE.location}</div>
      </div>

      <div className="pt-6 border-t border-white/5 text-[11px] font-mono text-white/40 uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} {PROFILE.fullName}. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
