import { useRef, useState, useCallback } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  className?: string;
  padding?: number;
  strength?: number;
}

export default function Magnet({ children, className = '', padding = 150, strength = 3 }: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('translate3d(0px, 0px, 0px)');
  const [transition, setTransition] = useState('transform 0.6s ease-in-out');

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = Math.abs(e.clientX - centerX);
      const distY = Math.abs(e.clientY - centerY);
      if (distX > rect.width / 2 + padding || distY > rect.height / 2 + padding) {
        setTransition('transform 0.6s ease-in-out');
        setTransform('translate3d(0px, 0px, 0px)');
        return;
      }
      const deltaX = (e.clientX - centerX) / strength;
      const deltaY = (e.clientY - centerY) / strength;
      setTransition('transform 0.3s ease-out');
      setTransform(`translate3d(${deltaX}px, ${deltaY}px, 0px)`);
    },
    [padding, strength],
  );

  const handleMouseLeave = useCallback(() => {
    setTransition('transform 0.6s ease-in-out');
    setTransform('translate3d(0px, 0px, 0px)');
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
}
