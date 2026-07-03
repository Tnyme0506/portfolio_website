import { FormEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { PROFILE } from '../data';
import SectionHeading from './SectionHeading';

type Status = 'idle' | 'sending' | 'success' | 'error';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus('error');
      setError('Email service is not configured. Please email me directly.');
      return;
    }

    setStatus('sending');
    setError('');

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus('success');
      formRef.current.reset();
    } catch (err) {
      setStatus('error');
      setError('Something went wrong. Please try again or email me directly.');
      console.error(err);
    }
  };

  const contactInfo = [
    { icon: Mail, label: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { icon: Phone, label: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s/g, '')}` },
    { icon: MapPin, label: PROFILE.location, href: undefined },
  ];

  return (
    <section id="contact" className="section-container">
      <SectionHeading
        eyebrow="Let's Connect"
        title="Get in Touch"
        subtitle="Have a role, project, or idea in mind? I'd love to hear from you."
      />

      <div className="grid gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-semibold text-white">Contact Information</h3>
          <p className="text-sm text-slate-400">
            Feel free to reach out through any of the channels below.
          </p>
          <div className="mt-6 space-y-4">
            {contactInfo.map(({ icon: Icon, label, href }) => {
              const content = (
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon size={20} />
                  </span>
                  <span className="text-sm text-slate-300">{label}</span>
                </div>
              );
              return href ? (
                <a
                  key={label}
                  href={href}
                  className="block transition-opacity hover:opacity-80"
                >
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              );
            })}
          </div>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="card space-y-4 p-6"
        >
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm text-slate-300">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full rounded-lg border border-white/10 bg-base-800/60 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-accent"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm text-slate-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-lg border border-white/10 bg-base-800/60 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-accent"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm text-slate-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Your message..."
              className="w-full resize-none rounded-lg border border-white/10 bg-base-800/60 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-accent"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-base-950 transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === 'sending' ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Sending...
              </>
            ) : (
              <>
                <Send size={16} /> Send Message
              </>
            )}
          </button>

          {status === 'success' && (
            <p className="flex items-center gap-2 text-sm text-emerald-400">
              <CheckCircle2 size={16} /> Message sent! I'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="flex items-center gap-2 text-sm text-red-400">
              <AlertCircle size={16} /> {error}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
