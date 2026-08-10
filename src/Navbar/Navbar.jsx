import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaDownload, FaTimes } from 'react-icons/fa';

const navItems = [
  { id: 1, label: 'Home', to: 'hero', offset: -72 },
  { id: 2, label: 'About', to: 'about', offset: -72 },
  { id: 3, label: 'Skills', to: 'skills', offset: -72 },
  { id: 4, label: 'Projects', to: 'projects', offset: -72 },
  { id: 5, label: 'Education', to: 'education', offset: -72 },
  { id: 6, label: 'Contact', to: 'contact', offset: -72 },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-zinc-800/80 bg-zinc-950/85 shadow-lg shadow-zinc-950/50 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <motion.div
        style={{ scaleX: progress }}
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-amber-500/60 via-amber-300 to-amber-400/80"
      />

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="font-mono text-lg tracking-tight text-zinc-100">
          <span className="text-amber-300/90">{'[{ '}</span>
          najmul.dev
          <span className="text-amber-300/90">{' }'}</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map(({ id, label, to, offset }) => (
            <Link
              key={id}
              to={to}
              smooth
              duration={500}
              spy
              offset={offset}
              activeClass="text-amber-300"
              className="relative cursor-pointer font-mono text-sm text-zinc-400 transition-colors hover:text-zinc-100"
            >
              {label}
            </Link>
          ))}
        </nav>

        <a
          href="/resume.pdf"
          download
          className="group hidden items-center gap-2 rounded-lg border border-amber-400/50 px-4 py-2 font-mono text-sm text-amber-300 transition-all duration-300 hover:bg-amber-400 hover:text-zinc-950 hover:shadow-lg hover:shadow-amber-500/20 md:inline-flex"
        >
          <FaDownload className="text-xs transition-transform group-hover:translate-y-0.5" />
          Resume
        </a>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="text-zinc-300 transition-colors hover:text-amber-300 md:hidden"
        >
          {open ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-md md:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {navItems.map(({ id, label, to, offset }) => (
                <Link
                  key={id}
                  to={to}
                  smooth
                  duration={500}
                  spy
                  offset={offset}
                  onClick={() => setOpen(false)}
                  className="block py-2 font-mono text-sm text-zinc-400 hover:text-amber-300"
                >
                  {label}
                </Link>
              ))}
              <a
                href="/resume.pdf"
                download
                className="mt-3 inline-flex items-center gap-2 rounded-lg border border-amber-400/50 px-4 py-2 font-mono text-sm text-amber-300"
              >
                <FaDownload className="text-xs" />
                Download Resume
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;