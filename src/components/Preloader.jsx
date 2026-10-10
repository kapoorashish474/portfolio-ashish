import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { PROFILE } from '../data/profile';

const Preloader = ({ onComplete }) => {
  const preloaderRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ onComplete });

    tl.set(preloaderRef.current, { autoAlpha: 1 })
      .fromTo(
        contentRef.current,
        { scale: 0.95, opacity: 0, filter: 'blur(8px)' },
        { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out' }
      )
      .to(contentRef.current, { scale: 1.05, opacity: 0, filter: 'blur(10px)', duration: 0.4, ease: 'power2.in', delay: 0.6 })
      .to(preloaderRef.current, { opacity: 0, duration: 0.5, ease: 'power2.inOut' });

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div ref={preloaderRef} className="fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center select-none overflow-hidden">
      <div ref={contentRef} className="flex flex-col items-center gap-4">
        <div className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping" />
        <h1 className="font-display text-3xl md:text-4xl uppercase tracking-[0.3em] text-white">{PROFILE.firstName}</h1>
      </div>
    </div>
  );
};

export default Preloader;
