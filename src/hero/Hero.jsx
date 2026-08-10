import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  FaDownload,
  FaFacebook,
  FaGithub,
  FaTwitter,
} from 'react-icons/fa';
import { FiArrowDown, FiArrowUpRight, FiMail } from 'react-icons/fi';
import profileImage from '../assets/Najmul.jpeg';

const roles = ['Frontend Developer', 'React Specialist', 'Full-Stack Builder'];

const terminalLines = [
  { command: 'whoami', output: 'Najmul Haque — Frontend / Full-Stack Developer' },
  { command: 'stack', output: 'React 19 · Vite · Tailwind v4 · Framer Motion' },
  { command: 'location', output: 'Dhaka, Bangladesh · Remote-friendly' },
  { command: 'status', output: '● Available for new projects' },
];

const stats = [
  { value: '3+', label: 'Years experience' },
  { value: '25+', label: 'Projects shipped' },
  { value: '12+', label: 'Technologies' },
  { value: '∞', label: 'Cups of coffee' },
];

const socials = [
  { icon: <FaGithub />, href: 'https://github.com/Whitey1234', label: 'GitHub' },
  { icon: <FaFacebook />, href: 'https://www.facebook.com/najmul.hassan.571047', label: 'Facebook' },
  { icon: <FaTwitter />, href: 'https://x.com/NajmulHassn_', label: 'Twitter / X' },
  { icon: <FiMail />, href: 'mailto:najmulsiyam20@gmail.com', label: 'Email' },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), {
    stiffness: 160,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), {
    stiffness: 160,
    damping: 20,
  });

  useEffect(() => {
    const timer = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(timer);
  }, []);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-zinc-950 pb-24 pt-28 lg:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#fbbf24_0%,transparent_42%)] opacity-[0.07]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-px bg-zinc-800/60 lg:block" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8"
      >
        <div className="space-y-8">
          <motion.p variants={item} className="flex items-center gap-3 font-mono text-sm text-zinc-500">
            <span className="h-px w-8 bg-amber-400/60" />
            <span className="text-amber-300/90">$ whoami</span>
          </motion.p>

          <motion.h1
            variants={item}
            className="font-serif text-5xl leading-[1.05] tracking-tight text-zinc-100 sm:text-6xl lg:text-7xl"
          >
            Najmul
            <span className="block bg-gradient-to-r from-zinc-50 via-amber-200 to-amber-400 bg-clip-text text-transparent">
              Hassan Siyam
            </span>
          </motion.h1>

          <motion.div variants={item} className="h-9">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={roleIndex}
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -16, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="font-mono text-lg text-zinc-300 sm:text-xl"
              >
                <span className="text-amber-400/80">$</span> {roles[roleIndex]}
                <span className="ml-2 inline-block h-[1.1em] w-[0.5ch] translate-y-[0.15em] animate-pulse bg-amber-400 align-middle" />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.p variants={item} className="max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg">
            I design and build fast, accessible, polished web products with React — turning tricky
            requirements into interfaces people actually enjoy using.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-amber-400 px-6 py-3 font-mono text-sm font-semibold text-zinc-950 transition-all duration-300 hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-500/25"
            >
              Get in touch
              <FiArrowUpRight className="text-base transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-6 py-3 font-mono text-sm text-zinc-300 transition-colors duration-300 hover:border-amber-400/60 hover:text-amber-300"
            >
              <FaDownload className="text-xs" />
              Resume
            </a>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-4 pt-2">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.9 }}
                className="grid h-10 w-10 place-items-center rounded-full border border-zinc-800 bg-zinc-900/50 text-sm text-zinc-400 transition-colors hover:border-amber-400/50 hover:text-amber-300"
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.dl variants={item} className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-zinc-800 pt-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-mono text-2xl text-amber-300 sm:text-3xl">{s.value}</dd>
                <dd className="mt-1 font-sans text-xs uppercase tracking-wider text-zinc-500">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div variants={item} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="pointer-events-none absolute -inset-10 rounded-full bg-amber-400/[0.06] blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="absolute -right-2 -top-16 z-20 sm:-right-6"
          >
            <div className="group relative rotate-2 transition-transform duration-300 hover:rotate-0">
              <div className="pointer-events-none absolute -inset-1 rounded-t-xl rounded-b-2xl bg-gradient-to-b from-amber-400/30 to-transparent blur opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative overflow-hidden rounded-t-xl rounded-b-2xl border-2 border-zinc-700/80 bg-zinc-900">
                <img
                  src={profileImage}
                  alt="Najmul Haque — frontend developer"
                  className="h-36 w-28 object-cover grayscale-[20%] transition duration-500 group-hover:grayscale-0 sm:h-44 sm:w-32"
                />
              </div>
              <div className="absolute -left-5 top-3 flex items-center gap-1.5 rounded-full border border-zinc-700 bg-zinc-950/90 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-300 shadow-lg">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
                open to work
              </div>
            </div>
          </motion.div>

          <motion.div
            onMouseMove={handleMove}
            onMouseLeave={() => {
              mx.set(0);
              my.set(0);
            }}
            style={{ rotateX, rotateY, transformPerspective: 900 }}
            className="relative z-10 rounded-2xl border border-zinc-800 bg-zinc-900/70 shadow-2xl shadow-zinc-950/60 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <span className="ml-3 font-mono text-xs text-zinc-500">~/dev/najmul.conf</span>
            </div>
            <div className="space-y-3 p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
              {terminalLines.map((line, i) => (
                <motion.div
                  key={line.command}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.16, duration: 0.3 }}
                >
                  <div>
                    <span className="text-amber-400">$</span>{' '}
                    <span className="text-amber-300/90">{line.command}</span>
                  </div>
                  <div className="mt-1 text-zinc-300">
                    <span className="mr-2 text-zinc-600">→</span>
                    {line.output}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.35 }}
            className="mt-6 text-center font-mono text-xs text-zinc-600"
          >
            psst… this card tilts — move your cursor over it.
          </motion.p>
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1 text-zinc-600"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">scroll</span>
          <FiArrowDown className="text-sm" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;