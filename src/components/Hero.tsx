import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, ArrowDown } from 'lucide-react';
import { PROFILE } from '../data';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
    >
      <div className="mx-auto w-full max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300"
        >
          <MapPin size={14} className="text-accent" />
          {PROFILE.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text font-display text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl"
        >
          {PROFILE.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 bg-gradient-to-r from-accent to-iris bg-clip-text text-lg font-semibold text-transparent sm:text-2xl"
        >
          {PROFILE.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400"
        >
          {PROFILE.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-base-950 transition-transform hover:scale-105"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
          >
            View Projects
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex items-center justify-center gap-5"
        >
          {[
            { icon: Github, href: PROFILE.socials.github, label: 'GitHub' },
            { icon: Linkedin, href: PROFILE.socials.linkedin, label: 'LinkedIn' },
            { icon: Mail, href: `mailto:${PROFILE.email}`, label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-slate-400 transition-colors hover:text-accent"
            >
              <Icon size={22} />
            </a>
          ))}
        </motion.div>
      </div>

      <a
        href="#skills"
        aria-label="Scroll to content"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-accent"
      >
        <ArrowDown size={22} className="animate-bounce" />
      </a>
    </section>
  );
}
