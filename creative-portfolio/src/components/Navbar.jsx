import { useState, useEffect } from 'react';

const navItems = [
  { num: '01', label: 'Works' },
  { num: '02', label: 'Services' },
  { num: '03', label: 'About' },
  { num: '04', label: 'Contact' },
];

export default function Navbar({ menuOpen, setMenuOpen }) {
  const [clock, setClock] = useState('');

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setClock(
        new Intl.DateTimeFormat('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
          .format(now)
          .replace(/\//g, ':'),
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* Desktop (≥810px) & Tablet (810–1199) */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent py-9 px-[15px] md-tablet:py-[30px] md-tablet:px-[18px] mobile:hidden">
        <div className="mx-auto w-full max-w-[1340px] flex items-center justify-between">
          <ul className="flex items-center gap-8 md-tablet:gap-4">
            {navItems.map((item) => (
              <li key={item.num}>
                <a href="#" className="nav-link-underline text-white">
                  <span className="text-[8px] leading-3 tracking-[-0.08px] font-medium uppercase align-middle">
                    {item.num}
                  </span>
                  <span className="text-xs leading-4 tracking-[-0.12px] font-medium uppercase ml-1 align-middle">
                    / {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6">
            <span className="text-xs leading-4 tracking-[-0.12px] font-medium text-white">
              Davies@gmail.com
            </span>
            <span className="text-xs leading-4 tracking-[-0.12px] font-medium text-white/80 tabular-nums">
              CLP {clock}
            </span>
          </div>
        </div>
      </nav>

      {/* Mobile (<810px) */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent py-6 px-[18px] hidden mobile:block">
        <div className="flex items-center justify-between">
          <div />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-xs leading-4 tracking-[-0.12px] font-medium uppercase focus:outline-none"
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel (separate from nav bar, so it can expand downward) */}
      <div
        className={`absolute top-0 left-0 w-full z-[9] pt-[72px] px-[18px] hidden mobile:block ${
          menuOpen ? '' : 'pointer-events-none'
        }`}
      >
        <div className={`mobile-menu-grid ${menuOpen ? 'open' : ''}`}>
          <div>
            <div className="pt-4 pb-6">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.num}>
                    <a
                      href="#"
                      className="text-[28px] leading-8 tracking-[-0.84px] font-medium text-white block"
                    >
                      {item.num} / {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-white/20">
                <p className="text-xs leading-4 tracking-[-0.12px] font-medium text-white/80">
                  Davies@gmail.com
                </p>
                <p className="text-xs leading-4 tracking-[-0.12px] font-medium text-white/60 tabular-nums mt-1">
                  CLP {clock}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
