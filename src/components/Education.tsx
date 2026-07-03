import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { EDUCATION } from '../data';
import SectionHeading from './SectionHeading';

export default function Education() {
  return (
    <section id="education" className="section-container">
      <SectionHeading
        eyebrow="Academic Background"
        title="Education"
        subtitle="A multidisciplinary foundation spanning data analytics, biological sciences, and engineering."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {EDUCATION.map((edu, i) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className="card flex flex-col p-6"
          >
            <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <GraduationCap size={22} />
            </span>
            <span className="text-sm font-semibold text-accent">{edu.year}</span>
            <h3 className="mt-2 text-base font-bold text-white">{edu.degree}</h3>
            <p className="mt-2 text-sm text-slate-400">{edu.institution}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
