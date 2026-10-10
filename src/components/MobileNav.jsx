import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { NAV } from '../data/profile';

// Menu button + full-screen section list for screens below `lg`, where the inline nav is hidden.
// The overlay is portaled to <body> so it isn't trapped by the animated header's transform.
const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    // Close if the viewport grows to desktop size while the menu is open.
    const desktop = window.matchMedia('(min-width: 1024px)');
    const onResize = () => desktop.matches && setOpen(false);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    desktop.addEventListener('change', onResize);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      desktop.removeEventListener('change', onResize);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-nav"
        className="lg:hidden flex items-center justify-center w-10 h-10 rounded border border-white/20 bg-black/40 text-white hover:border-red-600 transition-colors"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>

      {open &&
        createPortal(
          <div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Site sections"
            className="lg:hidden fixed inset-0 z-[200] bg-[#050505]/95 backdrop-blur-xl flex flex-col px-6 py-6 select-none"
          >
            <div className="flex justify-end">
              <button
                type="button"
                onClick={close}
                autoFocus
                aria-label="Close menu"
                className="flex items-center justify-center w-10 h-10 rounded border border-white/20 text-white hover:border-red-600 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center gap-2">
              {NAV.map((item, i) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={close}
                  className="group flex items-baseline gap-4 py-2 border-b border-white/10"
                >
                  <span className="font-mono text-xs text-red-500 font-bold w-6">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-display text-5xl text-white group-hover:text-red-500 transition-colors">{item.label}</span>
                </a>
              ))}
            </nav>
          </div>,
          document.body
        )}
    </>
  );
};

export default MobileNav;
