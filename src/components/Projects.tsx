import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../data';
import SectionHeading from './SectionHeading';

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <SectionHeading
        eyebrow="Selected Work"
        title="Featured Projects"
        subtitle="A few projects where I applied machine learning to real-world problems."
      />

      <div className="grid gap-8 md:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-base-900/60 backdrop-blur transition-colors duration-300 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10"
          >
            {/* Image header */}
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base-900 via-base-900/30 to-transparent" />
              <span className="absolute right-3 top-3 rounded-full bg-base-950/70 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur">
                {project.period}
              </span>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-bold text-white transition-colors group-hover:text-accent">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-4 border-t border-white/5 pt-4">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 transition-colors hover:text-accent"
                  >
                    {link.label === 'Source' ? (
                      <Github size={16} />
                    ) : (
                      <ExternalLink size={16} />
                    )}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
