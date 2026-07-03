import { Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE } from '../data';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row md:px-8">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a
            href={PROFILE.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-slate-500 transition-colors hover:text-accent"
          >
            <Github size={20} />
          </a>
          <a
            href={PROFILE.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-slate-500 transition-colors hover:text-accent"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            aria-label="Email"
            className="text-slate-500 transition-colors hover:text-accent"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
