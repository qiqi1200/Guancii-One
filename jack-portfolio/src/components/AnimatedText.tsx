import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedText({ text, className = '', style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = text.split('');

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((char, i) => {
        const start = i / chars.length;
        const end = (i + 1) / chars.length;
        return (
          <CharSpan key={i} char={char} scrollYProgress={scrollYProgress} start={start} end={end} />
        );
      })}
    </p>
  );
}

function CharSpan({
  char,
  scrollYProgress,
  start,
  end,
}: {
  char: string;
  scrollYProgress: any;
  start: number;
  end: number;
}) {
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
  return <motion.span style={{ opacity }}>{char === ' ' ? '\u00A0' : char}</motion.span>;
}
