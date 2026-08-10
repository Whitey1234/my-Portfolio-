import { animate, motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import profileImage from '../assets/Najmul.jpeg';

const metrics = [
  { to: 1, suffix: '+', label: 'Year experience' },
  { to: 25, suffix: '+', label: 'Projects shipped' },
  { to: 12, suffix: '+', label: 'Technologies' },
  { to: 40, suffix: '+', label: 'Contributions' },
];

const focusAreas = [
  'Frontend architecture',
  'Design systems',
  'Performance & a11y',
  'API design',
  'UI motion',
  'Real-time · Socket.IO',
  'Lean full-stack',
];

const CountUp = ({ to, suffix = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.4,
      ease: 'easeOut',
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref} className="font-mono text-3xl text-amber-300 sm:text-4xl">
      {value}
      <span className="text-amber-500/70">{suffix}</span>
    </span>
  );
};

const About = () => {
  const portraitRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: portraitRef,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section id="about" className="relative overflow-hidden bg-zinc-900/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          label="About"
          title="I care about craft, not just working code."
          description="A quick snapshot of who I am, what I measure, and where I focus my effort."
        />

        <div className="grid gap-6 lg:grid-cols-12">
          <motion.div
            ref={portraitRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative h-full rounded-2xl border border-zinc-800 bg-zinc-900/50 p-3">
              <div className="relative h-72 overflow-hidden rounded-xl sm:h-80 lg:h-[26rem]">
                <motion.img
                  style={{ y: imgY }}
                  src={profileImage}
                  alt="Najmul Haque — portrait"
                  className="h-[calc(100%+60px)] w-full scale-105 object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
              </div>

              <div className="absolute -top-3 right-6 rounded-full border border-zinc-700 bg-zinc-950/90 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-zinc-300 shadow-lg">
                <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-amber-400" />
                Dhaka, BD
              </div>

              <div className="absolute -bottom-5 left-6 rounded-xl border border-zinc-700 bg-zinc-950/90 px-4 py-3 shadow-xl backdrop-blur">
                <CountUp to={1} suffix="+" />
                <p className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                  Year building for the web
                </p>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8"
            >
              <h3 className="font-serif text-2xl leading-snug text-zinc-100 sm:text-3xl">
                I design and build interfaces that feel fast, look intentional, and
                survive real users.
              </h3>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-zinc-400">
                <p>
                  I’m a full stack developer with 1+ year of experience building for the web.
                  My day-to-day is Next.js, React, Node.js, and MongoDB — plus real-time features
                  with Socket.IO. But my real job is turning messy requirements into products that
                  are fast, accessible, and pleasant to use.
                </p>
                <p>
                  I sweat the details others skip: motion that respects
                  <span className="text-zinc-300"> reduced-motion</span>, states that are never
                  half-built, and performance budgets I can actually defend. I’ve shipped booking
                  platforms, recipe apps, and payment dashboards — each with clean architecture and
                  real users.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-amber-300/90">
                By the numbers
              </p>
              <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4">
                {metrics.map((m) => (
                  <div key={m.label} className="border-l border-amber-400/30 pl-4">
                    <CountUp to={m.to} suffix={m.suffix} />
                    <p className="mt-1 font-sans text-xs uppercase tracking-wider text-zinc-500">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-amber-300/90">
                Where I focus
              </p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-md border border-zinc-800 bg-zinc-950/70 px-3 py-1.5 font-mono text-xs text-zinc-300 transition-colors duration-300 hover:border-amber-400/50 hover:text-amber-300"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;