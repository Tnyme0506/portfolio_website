import 'react-vertical-timeline-component/style.min.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { Briefcase } from 'lucide-react';
import { EXPERIENCE } from '../data';
import SectionHeading from './SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <SectionHeading
        eyebrow="Where I've Worked"
        title="Professional Experience"
        subtitle="From full-stack automation to production AI safety infrastructure."
      />

      <VerticalTimeline lineColor="rgba(255,255,255,0.08)">
        {EXPERIENCE.map((item) => (
          <VerticalTimelineElement
            key={`${item.company}-${item.role}`}
            date={item.period}
            iconStyle={{
              background: '#0ea5e9',
              color: '#05070d',
              boxShadow: '0 0 0 4px rgba(14,165,233,0.15)',
            }}
            icon={<Briefcase />}
          >
            <h3 className="text-lg font-bold text-white">{item.role}</h3>
            <h4 className="text-sm font-semibold text-accent">{item.company}</h4>
            {item.note && (
              <p className="mt-1 text-xs italic text-slate-400">{item.note}</p>
            )}
            <ul className="mt-4 space-y-3">
              {item.bullets.map((bullet) => (
                <li key={bullet.title} className="text-sm text-slate-300">
                  <span className="font-semibold text-white">
                    {bullet.title}:
                  </span>{' '}
                  <span className="text-slate-400">{bullet.description}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
