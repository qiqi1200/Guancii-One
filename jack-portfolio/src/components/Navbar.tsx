import FadeIn from './FadeIn';

const links = ['About', 'Price', 'Projects', 'Contact'];

export default function Navbar() {
  return (
    <FadeIn delay={0} y={-20} duration={0.7} as="nav">
      <nav className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8">
        {links.map((link) => (
          <a
            key={link}
            href={link === 'Contact' ? '#contact' : `#${link.toLowerCase()}`}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider
                       text-sm md:text-lg lg:text-[1.4rem]
                       hover:opacity-70 transition-opacity duration-200"
          >
            {link}
          </a>
        ))}
      </nav>
    </FadeIn>
  );
}
