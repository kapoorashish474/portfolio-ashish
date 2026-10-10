import { PROFILE, LINKS } from '../data/profile';

const ICONS = {
  linkedin: (
    <>
      <circle cx="4.98" cy="5" r="2.5" />
      <rect x="3" y="9" width="4" height="12" />
      <path d="M9.5 9h3.8v1.7h.06C13.9 9.7 15.2 8.7 17.1 8.7c4 0 4.75 2.6 4.75 6V21h-4v-5.6c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95V21h-4V9z" />
    </>
  ),
  github: (
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
  ),
  email: (
    <path d="M3 5.5h18a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1zm1.4 2 7.6 5.7 7.6-5.7H4.4zM20 9.2l-7.4 5.55a1 1 0 0 1-1.2 0L4 9.2v7.3h16V9.2z" />
  ),
};

const SOCIALS = [
  { id: 'linkedin', label: 'LinkedIn', href: LINKS.linkedin },
  { id: 'github', label: 'GitHub', href: LINKS.github },
  { id: 'email', label: 'Email', href: `mailto:${LINKS.email}` },
];

const Footer = () => (
  <footer className="bg-[#050505] text-white py-16 px-6 md:px-12 border-t border-white/10 select-none relative z-10">
    <div className="max-w-7xl mx-auto flex flex-col space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs font-mono text-white/60">
        <ul className="flex items-center gap-4">
          {SOCIALS.map((s) => (
            <li key={s.id}>
              <a
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
                className="flex items-center justify-center w-11 h-11 rounded-full border border-white/15 bg-white/[0.03] text-white/70 transition-all duration-300 hover:text-white hover:bg-red-600 hover:border-red-600 hover:shadow-[0_0_20px_rgba(229,9,20,0.6)] hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  {ICONS[s.id]}
                </svg>
              </a>
            </li>
          ))}
        </ul>
        <div className="text-white/40 tracking-widest uppercase">Location: {PROFILE.location}</div>
      </div>

      <div className="flex items-center justify-between gap-6 pt-6 border-t border-white/5 text-[11px] font-mono text-white/40 uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} {PROFILE.fullName}. All Rights Reserved.</p>
        <a href="#home" className="group flex items-center gap-2 text-white/60 hover:text-red-500 transition-colors">
          Back to top
          <svg className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
