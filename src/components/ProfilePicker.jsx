import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { VIEWER_PROFILES } from '../data/profile';

// Simple smiley "avatar" like the Netflix profile tiles.
const Avatar = ({ color, shade }) => (
  <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
    <defs>
      <linearGradient id={`avatar-${color}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor={color} />
        <stop offset="100%" stopColor={shade} />
      </linearGradient>
    </defs>
    <rect width="100" height="100" fill={`url(#avatar-${color})`} />
    <circle cx="34" cy="40" r="6" fill="#fff" />
    <circle cx="66" cy="40" r="6" fill="#fff" />
    <path d="M28 62 Q50 82 72 62" stroke="#fff" strokeWidth="6" fill="none" strokeLinecap="round" />
  </svg>
);

// "Who's watching?" screen shown before the intro.
const ProfilePicker = ({ onSelect }) => {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.picker-title', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' });
      gsap.fromTo('.picker-tile', { opacity: 0, y: 30, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.12, delay: 0.15, ease: 'power3.out' });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="absolute inset-0 flex flex-col items-center justify-center gap-10 md:gap-14 bg-[#141414] px-6">
      <h1 className="picker-title text-3xl md:text-5xl font-medium text-white tracking-tight">Who&rsquo;s watching?</h1>

      <ul className="flex flex-wrap items-start justify-center gap-6 md:gap-10">
        {VIEWER_PROFILES.map((profile, i) => (
          <li key={profile.id} className="picker-tile">
            <button
              type="button"
              onClick={() => onSelect(profile)}
              autoFocus={i === 0}
              className="group flex flex-col items-center gap-4 focus:outline-none"
            >
              <span className="block w-28 h-28 md:w-40 md:h-40 rounded-md overflow-hidden ring-0 ring-white transition-all duration-200 group-hover:ring-4 group-focus-visible:ring-4 group-hover:scale-105">
                <Avatar color={profile.color} shade={profile.shade} />
              </span>
              <span className="text-sm md:text-lg text-white/60 transition-colors group-hover:text-white group-focus-visible:text-white">
                {profile.name}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfilePicker;
