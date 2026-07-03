import { motion } from 'framer-motion';

interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ eyebrow, title, subtitle }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="mb-14 text-center"
    >
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-slate-400">{subtitle}</p>
      )}
    </motion.div>
  );
}
