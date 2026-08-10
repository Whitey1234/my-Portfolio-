import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';

const timeline = [
  {
    period: '2022 — 2026',
    degree: 'B.Sc. in Computer Science & Engineering',
    school: 'University of Global Village',
    meta: 'CGPA 3.80 / 4.00 · Dean’s List Honors',
    blurb:
      'Academic foundation in algorithms, data structures, and web systems — most of my engineering instincts were sharpened here, and a lot of it was building.',
    bullets: [
      'Winner — 2023 University Hackathon',
      'Published research on Machine Learning',
      'Lead developer — Student Portal project',
    ],
  },
  {
    period: '2024 — Present',
    degree: 'Self-directed Engineering Curriculum',
    school: 'The weekly-committed path',
    meta: 'React · Node · Firebase · System design',
    blurb:
      'Steady, deliberate deep-dives: performance budgets, design systems, accessibility, and shipping real products end-to-end for actual users.',
    bullets: [
      'Curriculum focused on frontend architecture & UI craft',
      'Daily production code across freelance & personal products',
      'Active reader of web platform changelogs & design writing',
    ],
  },
];

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Education = () => {
  return (
    <section id="education" className="relative overflow-hidden bg-zinc-950 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="05"
          label="Education"
          title="The roadmap behind the craft."
          description="Formal study gave me the foundations; shipping real products gave me the judgement."
        />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="relative space-y-14 before:absolute before:left-[7px] before:top-3 before:bottom-3 before:w-px before:bg-zinc-800 sm:space-y-16 sm:before:left-[9px]"
        >
          {timeline.map((entry) => (
            <motion.div
              key={entry.degree}
              variants={item}
              className="relative border-b border-zinc-800 pb-10 pl-10 sm:pl-14 sm:pb-12"
            >
              <span className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-amber-400 bg-zinc-950 sm:h-[19px] sm:w-[19px]" />

              <p className="font-mono text-xs text-amber-300/80">{entry.period}</p>
              <h3 className="mt-3 font-serif text-xl leading-snug text-zinc-100 sm:text-2xl">
                {entry.degree}
              </h3>
              <p className="mt-1.5 font-mono text-sm text-zinc-500">{entry.school}</p>
              <p className="mt-1.5 font-mono text-xs text-amber-300/70">{entry.meta}</p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">
                {entry.blurb}
              </p>

              <ul className="mt-5 space-y-2.5">
                {entry.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-400">
                    <span className="mt-1 text-amber-400">▹</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.p
            variants={item}
            className="pl-10 font-mono text-xs text-zinc-600 sm:pl-14"
          >
            Learning never really stops — and that’s the point.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;