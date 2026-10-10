import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { PROFILE, LINKS, NAV, RECOGNITION } from '../data/profile';

const Hero = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const glareRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const card = cardRef.current;

    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: 'power4.out' } })
        .fromTo('header', { y: -60, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
        .fromTo(
          '.hero-anim-item',
          { y: 50, opacity: 0, filter: 'blur(10px)' },
          { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.1, stagger: 0.12 },
          '-=0.7'
        )
        .fromTo(
          card,
          { scale: 0.75, opacity: 0, rotationY: 35, rotationX: -15 },
          { scale: 1, opacity: 1, rotationY: 0, rotationX: 0, duration: 1.4, ease: 'back.out(1.2)' },
          '-=0.9'
        );
    }, section);

    // 3D tilt + glare on the poster card, following the mouse.
    const xTilt = gsap.quickTo(card, 'rotationY', { duration: 0.4, ease: 'power3.out' });
    const yTilt = gsap.quickTo(card, 'rotationX', { duration: 0.4, ease: 'power3.out' });
    const glareX = gsap.quickTo(glareRef.current, 'x', { duration: 0.3, ease: 'power2.out' });
    const glareY = gsap.quickTo(glareRef.current, 'y', { duration: 0.3, ease: 'power2.out' });

    const handleMouseMove = (e) => {
      const r = card.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      xTilt((dx / (r.width / 2)) * 12);
      yTilt(-(dy / (r.height / 2)) * 12);
      glareX(dx);
      glareY(dy);
    };
    const handleMouseLeave = () => {
      xTilt(0);
      yTilt(0);
    };

    section.addEventListener('mousemove', handleMouseMove);
    section.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      ctx.revert();
      section.removeEventListener('mousemove', handleMouseMove);
      section.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#050505] overflow-hidden flex flex-col select-none"
    >
      {/* Background gradient + scrolling role marquee */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/90 to-[#050505] z-0">
        <div className="absolute inset-0 flex items-center pointer-events-none overflow-hidden opacity-10">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...PROFILE.roles, ...PROFILE.roles].map((role, idx) => (
              <span key={idx} className="font-display text-[14vw] text-red-600 mx-8 uppercase">
                {role} &bull;
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="relative z-50 w-full max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
        <a href="#home" className="font-display text-3xl text-red-600 tracking-wide drop-shadow-[0_2px_15px_rgba(229,9,20,0.9)]">
          {PROFILE.firstName} {PROFILE.lastName}
        </a>
        <nav className="hidden lg:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-white/80">
          {NAV.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="hover:text-red-500 transition-colors">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="px-5 py-2 rounded bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(229,9,20,0.6)] hover:scale-105 active:scale-95"
        >
          Hire Me
        </a>
      </header>

      <div ref={contentRef} className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex-1 flex flex-col justify-between pb-10 gap-10">
        {/* Series badge */}
        <div className="hero-anim-item flex flex-wrap items-center justify-between gap-4 w-full pt-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded bg-black/80 backdrop-blur-2xl border border-red-600/40 text-xs font-mono uppercase tracking-widest text-white shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
            <span className="text-red-500 font-bold tracking-wider">ENGINEERING SERIES</span>
            <span className="text-white/40">|</span>
            <span className="text-white/80">SEASONS {PROFILE.seasons}</span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-white/50 tracking-wider">
            <span className="px-2 py-0.5 border border-white/20 rounded bg-black/40">{PROFILE.years} YEARS</span>
            <span className="px-2 py-0.5 border border-white/20 rounded bg-black/40">AWS ML CERTIFIED</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 my-auto">
          {/* Left: name and pitch */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-5 text-left">
            <div className="hero-anim-item flex items-center gap-3">
              <span className="px-2.5 py-0.5 bg-red-600 text-white font-black text-xs rounded tracking-widest shadow-[0_0_20px_rgba(229,9,20,0.8)]">
                NOW STREAMING
              </span>
              <span className="text-white/80 text-xs font-mono tracking-widest uppercase">Kargo · NYC</span>
            </div>

            <h1 className="hero-anim-item font-display text-7xl md:text-8xl text-white leading-[0.9] drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]">
              {PROFILE.firstName} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-600 to-red-700 drop-shadow-[0_0_35px_rgba(220,38,38,0.5)]">
                {PROFILE.lastName}
              </span>
            </h1>

            <p className="hero-anim-item text-sm font-mono uppercase tracking-widest text-red-400 font-bold">{PROFILE.headline}</p>

            <div className="hero-anim-item flex flex-wrap items-center gap-3 text-xs font-mono text-white/70">
              <span className="px-2 py-0.5 bg-red-500/10 border border-red-500/30 rounded text-red-500 font-bold">~1M daily requests</span>
              {PROFILE.heroStack.map((s) => (
                <span key={s} className="flex items-center gap-3">
                  <span className="text-white/40">•</span>
                  {s}
                </span>
              ))}
            </div>

            <p className="hero-anim-item text-sm md:text-base text-white/80 font-light leading-relaxed max-w-md">{PROFILE.pitch}</p>

            <div className="hero-anim-item flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#experience"
                className="px-8 py-3.5 bg-white text-black font-bold text-xs uppercase tracking-widest rounded hover:bg-red-600 hover:text-white transition-all duration-300 shadow-[0_10px_35px_rgba(255,255,255,0.3)] flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                Play Career
              </a>
              <a
                href="#projects"
                className="px-8 py-3.5 bg-neutral-900/80 text-white border border-white/20 font-bold text-xs uppercase tracking-widest rounded hover:bg-neutral-800 transition-all duration-300 backdrop-blur-md flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                More Info
              </a>
            </div>
          </div>

          {/* Center: tilting poster frame (photo slot) */}
          <div className="lg:col-span-4 flex justify-center [perspective:1200px]">
            <div ref={cardRef} className="relative group transform-gpu will-change-transform">
              <div className="absolute -inset-3 bg-gradient-to-r from-red-600/70 via-rose-600/40 to-red-900/20 rounded-3xl blur-3xl opacity-90 animate-pulse" />
              <div className="relative w-[280px] md:w-[320px] p-3.5 bg-[#141414]/90 backdrop-blur-2xl rounded-2xl border border-red-600/40 shadow-[0_40px_80px_rgba(0,0,0,0.95)] overflow-hidden">
                <div
                  ref={glareRef}
                  className="absolute inset-[-50%] w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none transform-gpu z-40"
                />
                <div className="absolute top-6 left-6 z-30 px-3 py-1 bg-red-600 text-white font-mono text-[10px] font-bold tracking-widest rounded shadow-xl">
                  FEATURED
                </div>
                {PROFILE.photo ? (
                  <img
                    src={PROFILE.photo}
                    alt={PROFILE.fullName}
                    className="w-full h-[330px] md:h-[390px] object-cover object-top rounded-xl"
                  />
                ) : (
                  <div className="w-full h-[330px] md:h-[390px] rounded-xl bg-gradient-to-b from-[#1c1c1c] to-[#0a0a0a] border border-dashed border-white/10 flex flex-col items-center justify-end p-8">
                    <span className="font-display text-6xl text-white/10 leading-none">{PROFILE.firstName}</span>
                    <span className="mt-3 font-mono text-[10px] tracking-[0.3em] text-white/25 uppercase">Photo coming soon</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right: recognition */}
          <div className="hero-anim-item lg:col-span-3 flex flex-col items-start lg:items-end text-left lg:text-right">
            <div className="p-5 bg-black/80 backdrop-blur-2xl border border-white/15 rounded-xl shadow-2xl max-w-xs space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">Awards & Credentials</h3>
              <ul className="space-y-2 text-xs text-white/80 leading-relaxed font-light">
                {RECOGNITION.map((r) => (
                  <li key={r.title}>
                    <span className="text-white font-medium">{r.title}</span>
                    <br />
                    <span className="text-white/50">{r.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="hero-anim-item flex items-center justify-between text-xs font-mono text-white/50 tracking-widest uppercase">
          <span>Kargo · Microsoft · AWS</span>
          <a href={`mailto:${LINKS.email}`} className="hover:text-red-500 transition-colors hidden sm:inline">
            {LINKS.email}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
