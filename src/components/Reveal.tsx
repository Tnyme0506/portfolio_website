import { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

type Direction = 'up' | 'left' | 'right' | 'scale';

interface Props {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  hoverLift?: boolean;
}

const OFFSET = 32;

const VARIANTS: Record<Direction, Variants> = {
  up: {
    hidden: { opacity: 0, y: OFFSET },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -OFFSET },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: OFFSET },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
};

export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  className,
  hoverLift = false,
}: Props) {
  return (
    <motion.div
      variants={VARIANTS[direction]}
      initial="hidden"
      whileInView="visible"
      whileHover={hoverLift ? { y: -6, transition: { duration: 0.2 } } : undefined}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
