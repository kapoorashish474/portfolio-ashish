import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import ProfilePicker from './ProfilePicker';

const MONOGRAM = 'AK';
const FONT = '"Bebas Neue", Impact, sans-serif';
// When the monogram's second, heavier pulse lands.
const PULSE_TIME = 0.32;
const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Netflix-style intro. After "Who's watching?", the AK monogram lands with a double pulse,
// the camera slowly pushes in, and dives through the letters into the site.
const Preloader = ({ onComplete, onProfileSelect }) => {
  const rootRef = useRef(null);
  const gateRef = useRef(null);
  const logoRef = useRef(null);
  const glowRef = useRef(null);
  const skipRef = useRef(null);
  const tlRef = useRef(null);
  const [reduced] = useState(prefersReducedMotion);
  const [started, setStarted] = useState(false);

  // Reduced motion: no profile screen, just a short fade.
  useEffect(() => {
    if (!reduced) return;
    const tl = gsap
      .timeline({ onComplete })
      .to(logoRef.current, { opacity: 1, duration: 0.3 })
      .to(rootRef.current, { autoAlpha: 0, duration: 0.4, delay: 0.6 });
    return () => tl.kill();
  }, [reduced, onComplete]);

  useEffect(() => () => tlRef.current?.kill(), []);

  const begin = (profile) => {
    if (started) return;
    setStarted(true);
    onProfileSelect?.(profile);

    const tl = gsap.timeline({ onComplete });
    tlRef.current = tl;
    tl.to(gateRef.current, { autoAlpha: 0, duration: 0.25 }, 0)
      .set(logoRef.current, { scale: 0.7, opacity: 0, transformOrigin: '50% 55%' }, 0)
      // The monogram lands.
      .to(logoRef.current, { opacity: 1, scale: 1, duration: 0.3, ease: 'power3.out' }, 0.05)
      // A heavier second pulse with a brighter glow.
      .to(logoRef.current, { scale: 1.06, duration: 0.12, ease: 'power2.out' }, PULSE_TIME + 0.05)
      .to(glowRef.current, { opacity: 1, duration: 0.15 }, PULSE_TIME + 0.05)
      .to(logoRef.current, { scale: 1, duration: 0.4, ease: 'power2.inOut' }, PULSE_TIME + 0.17)
      .to(glowRef.current, { opacity: 0.5, duration: 0.8 }, PULSE_TIME + 0.25)
      // Slow push-in, then dive through the letters.
      .to(logoRef.current, { scale: 1.18, duration: 1.1, ease: 'none' }, 0.95)
      .to(logoRef.current, { scale: 18, duration: 1.1, ease: 'power3.in' }, 2.05)
      .to(skipRef.current, { opacity: 0, duration: 0.3 }, 2.55)
      .to(rootRef.current, { autoAlpha: 0, duration: 0.45, ease: 'power2.out' }, 2.9);
  };

  const handleSkip = () => {
    tlRef.current?.kill();
    tlRef.current = gsap.to(rootRef.current, { autoAlpha: 0, duration: 0.3, onComplete });
  };

  return (
    <div ref={rootRef} className="fixed inset-0 z-[9999] bg-black flex items-center justify-center select-none overflow-hidden">
      <svg ref={logoRef} viewBox="0 0 400 260" className="w-[min(80vw,560px)] overflow-visible opacity-0" aria-label={MONOGRAM}>
        <defs>
          <linearGradient id="ak-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F01622" />
            <stop offset="100%" stopColor="#B00710" />
          </linearGradient>
          <filter id="ak-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="14" />
          </filter>
        </defs>
        <g ref={glowRef} opacity="0.5">
          <text x="200" y="222" textAnchor="middle" fontFamily={FONT} fontSize="250" letterSpacing="6" fill="#E50914" filter="url(#ak-glow)">
            {MONOGRAM}
          </text>
        </g>
        <text x="200" y="222" textAnchor="middle" fontFamily={FONT} fontSize="250" letterSpacing="6" fill="url(#ak-fill)">
          {MONOGRAM}
        </text>
      </svg>

      {!reduced && (
        <div ref={gateRef} className="absolute inset-0">
          <ProfilePicker onSelect={begin} />
        </div>
      )}

      {started && (
        <button
          ref={skipRef}
          type="button"
          onClick={handleSkip}
          className="absolute bottom-8 right-6 md:right-12 z-10 px-5 py-2 rounded border border-white/60 bg-black/40 text-white text-sm font-bold hover:bg-white hover:text-black transition-colors"
        >
          Skip Intro
        </button>
      )}
    </div>
  );
};

export default Preloader;
