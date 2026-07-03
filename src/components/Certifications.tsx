import { Award } from 'lucide-react';
import { CERTIFICATIONS } from '../data';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Certifications() {
  return (
    <section id="certifications" className="section-container">
      <SectionHeading
        eyebrow="Continuous Learning"
        title="Certifications"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATIONS.map((cert, i) => (
          <Reveal
            key={cert.name}
            direction={i % 2 === 0 ? 'left' : 'right'}
            delay={i * 0.08}
            hoverLift
            className="card flex items-center gap-4 p-5"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-iris/10 text-iris">
              <Award size={22} />
            </span>
            <div>
              <h3 className="text-sm font-semibold text-white">{cert.name}</h3>
              <p className="text-xs text-slate-400">
                {cert.issuer}
                {cert.year ? ` · ${cert.year}` : ''}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
