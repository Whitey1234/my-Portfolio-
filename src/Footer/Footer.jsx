import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaArrowUp, FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const socials = [
  { icon: <FaGithub />, href: 'https://github.com/Whitey1234', label: 'GitHub' },
  { icon: <FaFacebook />, href: 'https://www.facebook.com/najmul.hassan.571047', label: 'Facebook' },
  { icon: <FaTwitter />, href: 'https://x.com/NajmulHassn_', label: 'Twitter / X' },
  { icon: <FiMail />, href: 'mailto:najmulsiyam20@gmail.com', label: 'Email' },
];

const quickLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#hero"
          aria-label="Back to top"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          className="fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full border border-zinc-700 bg-zinc-900/80 text-zinc-300 shadow-lg shadow-zinc-950/50 backdrop-blur transition-colors hover:border-amber-400/60 hover:text-amber-300"
        >
          <FaArrowUp className="text-sm" />
        </motion.a>
      )}
    </AnimatePresence>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div>
            <a href="#hero" className="font-mono text-lg text-zinc-100">
              <span className="text-amber-300/90">{'[{ '}</span>
              najmul.dev
              <span className="text-amber-300/90">{' }'}</span>
            </a>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-zinc-500">
              Frontend-focused full-stack developer building fast, accessible, well-crafted web
              products.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-sm text-zinc-400 transition-colors hover:text-amber-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-zinc-800 text-sm text-zinc-400 transition-colors hover:border-amber-400/50 hover:text-amber-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-zinc-800/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-zinc-500">
            © {new Date().getFullYear()} Najmul Hassan Siyam · All rights reserved.
          </p>
          
        </div>
      </div>
      <BackToTop />
    </footer>
  );
};

export default Footer;