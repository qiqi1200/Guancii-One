import { useState, useEffect, useRef, useCallback } from 'react';

const VIDEOS = [
  {
    url: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260629_030107_874273ea-684a-4e90-bb96-8fdfde48d53d.mp4',
    label: 'WATER WAVE',
  },
  {
    url: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260629_032424_3c9c2a9d-807b-4482-80e6-dd6d9dfd4545.mp4',
    label: 'GRIDWAVE',
  },
  {
    url: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260627_094019_4214ea73-b963-46a4-8327-61489192de99.mp4',
    label: 'LIGHT TUNNEL',
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [videoSources, setVideoSources] = useState(() => VIDEOS.map(() => null));
  const revealRefs = useRef([]);

  // Preload videos as blobs
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const sources = await Promise.all(
        VIDEOS.map(async (v) => {
          try {
            const resp = await fetch(v.url);
            const blob = await resp.blob();
            return URL.createObjectURL(blob);
          } catch {
            return v.url;
          }
        }),
      );
      if (!cancelled) setVideoSources(sources);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // IntersectionObserver for reveal animations
  const revealRef = useCallback((el) => {
    if (!el) return;
    if (revealRefs.current.includes(el)) return;
    revealRefs.current.push(el);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 },
    );
    obs.observe(el);
  }, []);

  const dotColor = activeIndex === 0 ? '#F598F2' : '#ffffff';
  const dotGlow = activeIndex === 0 ? '#F598F2' : '#ffffff';
  const accentColor = activeIndex === 0 ? '#F598F2' : '#ffffff';

  return (
    <section className="absolute inset-0 w-full h-full">
      {/* Fallback gradient (visible when videos can't load) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a1e] via-[#0d0d1a] to-[#0a1628] z-0" />

      {/* Videos */}
      {VIDEOS.map((v, i) => (
        <video
          key={i}
          muted
          autoPlay
          playsInline
          loop
          className={`video-crossfade absolute inset-0 w-full h-full object-cover ${
            i === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src={videoSources[i] || v.url} type="video/mp4" />
        </video>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 z-[1]" />

      {/* Hero Content */}
      <div className="relative z-[2] mx-auto max-w-[1340px] h-full flex flex-col justify-end items-end gap-[150px] pt-[190px] px-[15px] md-tablet:px-[18px] mobile:justify-end mobile:items-start mobile:gap-[72px] mobile:pt-[140px] mobile:px-[18px]">
        {/* Section 1 — Switcher + Availability */}
        <div className="flex w-full items-end mobile:flex-col mobile:gap-7">
          <div className="flex-[4] flex flex-col gap-1">
            {VIDEOS.map((v, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`role-link text-left ${
                  i === activeIndex ? 'opacity-100' : 'opacity-55 hover:opacity-75'
                }`}
              >
                <span className="text-[8px] leading-3 tracking-[-0.08px] font-medium uppercase align-middle">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-xs leading-4 tracking-[-0.12px] font-medium uppercase ml-1 align-middle">
                  / {v.label}
                </span>
              </button>
            ))}
          </div>

          <div className="flex-1 flex items-center gap-3 mobile:self-start mobile:mt-2">
            <span
              className="dot-pulse w-[7px] h-[7px] rounded-full block"
              style={{
                backgroundColor: dotColor,
                boxShadow: `0 0 10px ${dotGlow}, 0 0 20px ${dotGlow}`,
              }}
            />
            <span className="text-xs leading-4 tracking-[-0.12px] font-medium text-white/80">
              Available for work
            </span>
          </div>
        </div>

        {/* Section 2 — Name + CTA */}
        <div className="flex w-full pb-[60px] md-tablet:gap-7 md-tablet:pb-[52px] mobile:flex-col mobile:gap-8 mobile:pb-11">
          <div className="flex-[2]">
            <h1
              ref={revealRef}
              className="reveal-up text-[200px] leading-[81%] tracking-[-6px] font-medium uppercase md-tablet:text-[129.6px] md-tablet:leading-[113.4px] md-tablet:tracking-[-7.7px] mobile:text-[clamp(68px,21vw,80px)] mobile:leading-[96px] mobile:tracking-[-4.8px]"
            >
              Viktor
              <span style={{ color: accentColor }}>.</span>
            </h1>
          </div>

          <div className="flex-1 pl-[50px] flex flex-col justify-end md-tablet:pl-[24px] mobile:pl-0">
            <p
              ref={revealRef}
              className="reveal-right text-base leading-6 tracking-[-0.16px] font-medium max-w-[420px]"
            >
              I craft bold brands and modern websites with purpose. Every pixel, every interaction—designed to make an
              impact.
            </p>
            <div className="mt-6">
              <button ref={revealRef} className="start-project-btn reveal-right revealed-delay">
                start a project
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="relative z-[1]">
                  <path
                    d="M1 8H15M15 8L8 1M15 8L8 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
