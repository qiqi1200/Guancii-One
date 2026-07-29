import { Sparkles, Moon, Play, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#07050f] font-sans">
      {/* ============= Aurora / Ambient Background ============= */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Color sweep */}
        <div
          className="absolute inset-0 animate-morph-bg"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 20% 20%, rgba(107,107,250,0.15) 0%, transparent 70%),
              radial-gradient(ellipse 60% 50% at 80% 80%, rgba(135,89,224,0.12) 0%, transparent 70%),
              radial-gradient(ellipse 70% 40% at 50% 50%, rgba(60,40,180,0.08) 0%, transparent 70%),
              radial-gradient(ellipse 90% 40% at 30% 70%, rgba(147,147,255,0.06) 0%, transparent 70%)
            `,
            backgroundSize: '200% 200%',
          }}
        />

        {/* Aurora orbs */}
        <div
          className="aurora-orb w-[500px] h-[500px] -top-40 -left-40 opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(107,107,250,0.2) 0%, transparent 70%)',
            animation: 'aurora 25s linear infinite alternate',
          }}
        />
        <div
          className="aurora-orb w-[400px] h-[400px] -bottom-32 -right-20 opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(135,89,224,0.18) 0%, transparent 70%)',
            animation: 'aurora 30s linear infinite alternate-reverse',
          }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* ============= Floating decorative elements ============= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] right-[10%] animate-float-slow opacity-20">
          <div className="w-16 h-16 rounded-full border border-white/10 bg-white/[0.02]" />
        </div>
        <div className="absolute top-[35%] left-[8%] animate-float-slower opacity-15">
          <div className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.02]" />
        </div>
        <div className="absolute bottom-[30%] right-[5%] animate-float-slow opacity-10">
          <div className="w-24 h-24 rounded-full border border-white/5" />
        </div>
      </div>

      {/* ============= Navbar ============= */}
      <nav className="relative z-10 mx-auto max-w-7xl px-6 py-7 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6b6bfa] to-[#8759e0] flex items-center justify-center shadow-lg shadow-[#6b6bfa]/25 group-hover:shadow-[#6b6bfa]/40 transition-shadow">
            <Sparkles size={16} className="text-white" />
          </div>
          <span className="font-serif italic text-xl text-white tracking-tight">
            Lumora
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="nav-link text-sm font-light tracking-wide">Features</a>
          <a href="#" className="nav-link text-sm font-light tracking-wide">Science</a>
          <a href="#" className="nav-link text-sm font-light tracking-wide">Stories</a>
          <a href="#" className="nav-link text-sm font-light tracking-wide">Pricing</a>
        </div>

        {/* CTA */}
        <button className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-white text-sm font-light tracking-wide transition-all">
          Start Free Trial
          <ArrowRight size={14} />
        </button>

        {/* Mobile hamburger */}
        <button className="md:hidden text-white/70 hover:text-white transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* ============= Hero Content ============= */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-20 md:pt-28 pb-20 flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
        {/* Left — Text */}
        <div className="flex-1 text-center lg:text-left">
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-white/60 text-xs font-light tracking-wider uppercase mb-8 animate-fade-in">
            <Moon size={12} className="text-[#9393ff]" />
            Find your calm
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5.75rem] font-serif italic leading-[1.05] tracking-tight text-white mb-6 animate-fade-up" style={{ animationDelay: '0.15s', animationFillMode: 'both' }}>
            Breathe.
            <br />
            <span className="gradient-text">Be present.</span>
            <br />
            Thrive.
          </h1>

          {/* Subtext */}
          <p className="max-w-lg mx-auto lg:mx-0 text-base md:text-lg text-white/50 font-light leading-relaxed mb-10 animate-fade-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            Lumora is your daily sanctuary — guided meditations, focus sessions, and breathwork 
            designed to bring clarity to a noisy world.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.45s', animationFillMode: 'both' }}>
            <button className="lumora-btn lumora-btn-primary">
              <Play size={16} fill="currentColor" />
              Begin Your Journey
            </button>
            <button className="lumora-btn lumora-btn-ghost">
              See How It Works
            </button>
          </div>

          {/* Trust bar */}
          <div className="mt-14 flex flex-wrap items-center gap-8 justify-center lg:justify-start text-white/30 text-sm font-light animate-fade-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-[#07050f] bg-gradient-to-br from-white/20 to-white/5"
                  />
                ))}
              </div>
              <span className="text-white/40">2.4k+ <span className="text-white/20">users</span></span>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <div className="flex items-center gap-1.5">
              <span className="text-amber-400/70">★★★★★</span>
              <span className="text-white/40">4.9</span>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <span>Featured in <span className="text-white/50">Forbes</span></span>
          </div>
        </div>

        {/* Right — Visual */}
        <div className="flex-1 flex justify-center lg:justify-end w-full animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
          <div className="relative w-full max-w-[500px] aspect-[3/4]">
            {/* Glass card mockup */}
            <div className="absolute inset-0 glass-card rounded-[32px] overflow-hidden">
              {/* Top bar */}
              <div className="px-6 pt-6 pb-4 flex items-center justify-between border-b border-white/[0.04]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#6b6bfa] to-[#8759e0] flex items-center justify-center">
                    <Sparkles size={12} className="text-white" />
                  </div>
                  <span className="font-serif italic text-sm text-white/60">Lumora</span>
                </div>
                <span className="text-[10px] text-white/20 uppercase tracking-widest font-light">LIVE SESSION</span>
              </div>

              {/* Session content */}
              <div className="p-6 flex flex-col items-center justify-center h-[calc(100%-60px)] text-center">
                {/* Animated pulse ring */}
                <div className="relative mb-8">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#6b6bfa]/20 to-[#8759e0]/20 flex items-center justify-center animate-glow-pulse">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#6b6bfa]/40 to-[#8759e0]/40 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6b6bfa] to-[#8759e0] flex items-center justify-center shadow-xl shadow-[#6b6bfa]/30">
                        <Play size={20} className="text-white ml-0.5" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                  {/* Orbiting ring */}
                  <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="56" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                    <circle
                      cx="60" cy="60" r="56" fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="1.5"
                      strokeDasharray="352"
                      strokeDashoffset="88"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6b6bfa" />
                        <stop offset="100%" stopColor="#8759e0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <h3 className="text-white text-xl font-serif italic mb-1">Morning Calm</h3>
                <p className="text-white/30 text-xs font-light tracking-wide mb-6">10 min · Guided Meditation</p>

                {/* Progress dots */}
                <div className="flex gap-1.5 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-700 ${
                        i < 2 ? 'bg-[#6b6bfa]' : 'bg-white/10'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400/70 animate-pulse" />
                  <span className="text-white/25 text-[10px] font-light tracking-wider">PAUSED · 3:42 remaining</span>
                </div>
              </div>
            </div>

            {/* Decorative glow behind card */}
            <div className="absolute -inset-10 bg-gradient-to-br from-[#6b6bfa]/10 via-transparent to-[#8759e0]/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>

      {/* ============= Scroll indicator ============= */}
      <div className="relative z-10 flex flex-col items-center gap-2 pb-8">
        <span className="text-white/20 text-[10px] uppercase tracking-[0.2em] font-light">Scroll to explore</span>
        <div className="scroll-indicator">
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round">
            <rect x="1" y="1" width="14" height="22" rx="7" />
            <circle cx="8" cy="8" r="2" fill="rgba(255,255,255,0.3)" stroke="none" />
          </svg>
        </div>
      </div>
    </section>
  );
}
