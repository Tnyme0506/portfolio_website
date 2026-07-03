import { Code2, BrainCircuit, Server, Database, BarChart3 } from 'lucide-react';
import { SKILLS } from '../data';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const ICONS = [Code2, BrainCircuit, Server, Database, BarChart3];

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <SectionHeading
        eyebrow="What I Work With"
        title="Technical Skills"
        subtitle="A snapshot of the tools and technologies I use to build data pipelines, ML models, and AI safety systems."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((group, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <Reveal
              key={group.category}
              direction="scale"
              delay={i * 0.08}
              hoverLift
              className="card p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon size={20} />
                </span>
                <h3 className="text-base font-semibold text-white">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
