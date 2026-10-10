import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Red dot + ring cursor with a soft spotlight. Only rendered for fine pointers (mouse/trackpad).
const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const spotlightRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const spotlight = spotlightRef.current;

    gsap.set([dot, ring], { scale: 0.5, opacity: 0, transformOrigin: '50% 50%' });

    const xToDot = gsap.quickTo(dot, 'x', { duration: 0.05, ease: 'power2.out' });
    const yToDot = gsap.quickTo(dot, 'y', { duration: 0.05, ease: 'power2.out' });
    const xToRing = gsap.quickTo(ring, 'x', { duration: 0.15, ease: 'power3.out' });
    const yToRing = gsap.quickTo(ring, 'y', { duration: 0.15, ease: 'power3.out' });

    const show = () => {
      gsap.to([dot, ring], { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' });
      gsap.to(spotlight, { opacity: 1, duration: 0.3 });
    };
    const hide = () => {
      gsap.to([dot, ring], { opacity: 0, scale: 0.5, duration: 0.3, ease: 'power2.inOut' });
      gsap.to(spotlight, { opacity: 0, duration: 0.3 });
    };

    let visible = false;
    const handleMouseMove = (e) => {
      if (!visible) {
        visible = true;
        show();
      }
      xToDot(e.clientX - 6);
      yToDot(e.clientY - 6);
      xToRing(e.clientX - 24);
      yToRing(e.clientY - 24);
      spotlight.style.transform = `translate3d(${e.clientX - 350}px, ${e.clientY - 350}px, 0)`;
    };
    const handleMouseLeave = () => {
      visible = false;
      hide();
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={spotlightRef}
        className="fixed top-0 left-0 w-[700px] h-[700px] rounded-full pointer-events-none z-[9997] opacity-0 blur-[100px]"
        style={{ background: 'radial-gradient(circle, rgba(229,9,20,0.2) 0%, rgba(229,9,20,0.06) 45%, transparent 75%)' }}
      />
      <div ref={dotRef} className="fixed top-0 left-0 z-[9999] pointer-events-none w-3 h-3 bg-red-600 rounded-full shadow-[0_0_15px_#E50914]" />
      <div ref={ringRef} className="fixed top-0 left-0 z-[9999] pointer-events-none w-12 h-12 border border-red-600/60 rounded-full" />
    </>
  );
};

export default CustomCursor;
