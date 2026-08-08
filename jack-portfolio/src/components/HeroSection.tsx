import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col overflow-x-clip">
      {/* Navbar is rendered by App.tsx outside this section */}
      <div className="flex-1 flex flex-col justify-between">
        {/* Spacer to push heading down */}
        <div />

        {/* Heading */}
        <div className="overflow-hidden w-full">
          <FadeIn delay={0.15} y={40} duration={0.8}>
            <h1
              className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full
                         text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]
                         mt-6 sm:mt-4 md:-mt-5"
            >
              Hi, i&apos;m jack
            </h1>
          </FadeIn>
        </div>

        {/* Bottom bar */}
        <div className="flex items-end justify-between pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
          <FadeIn delay={0.35} y={20} duration={0.7}>
            <p
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug
                         max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
              style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
            >
              a 3d creator driven by crafting striking and unforgettable projects
            </p>
          </FadeIn>
          <FadeIn delay={0.5} y={20} duration={0.7}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>

      {/* Portrait */}
      <FadeIn delay={0.6} y={30} duration={0.8}>
        <div
          className="absolute left-1/2 -translate-x-1/2 z-10
                     w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]
                     top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0"
        >
          <Magnet padding={150} strength={3}>
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
              alt="Jack"
              className="w-full h-auto object-contain"
            />
          </Magnet>
        </div>
      </FadeIn>
    </section>
  );
}
