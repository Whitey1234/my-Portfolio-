import { motion } from 'framer-motion';
import { FaCss3Alt, FaFigma, FaGit, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import {
  SiAxios,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiNextdotjs,
  SiRedux,
  SiShadcnui,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si';
import SectionHeading from '../components/SectionHeading';

const categories = [
  {
    name: 'Frontend',
    role: 'UI, state & framework',
    dot: 'bg-amber-400',
    skills: [
      { name: 'Next.js', icon: <SiNextdotjs className="text-zinc-100" /> },
      { name: 'React', icon: <FaReact className="text-cyan-400" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-400" /> },
      { name: 'Redux Toolkit', icon: <SiRedux className="text-purple-400" /> },
      { name: 'Redux', icon: <SiRedux className="text-fuchsia-400" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-300" /> },
      { name: 'shadcn/ui', icon: <SiShadcnui className="text-zinc-200" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
      { name: 'Vite', icon: <SiVite className="text-purple-400" /> },
    ],
  },
  {
    name: 'Backend & Data',
    role: 'APIs, auth & persistence',
    dot: 'bg-amber-400',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
      { name: 'Express', icon: <SiExpress className="text-zinc-300" /> },
      { name: 'Firebase', icon: <SiFirebase className="text-amber-500" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
      { name: 'Socket.IO', icon: <SiSocketdotio className="text-zinc-200" /> },
    ],
  },
  {
    name: 'Tooling & Deployment',
    role: 'Workflow, design & infra',
    dot: 'bg-amber-400',
    skills: [
      { name: 'Git', icon: <FaGit className="text-orange-600" /> },
      { name: 'Figma', icon: <FaFigma className="text-purple-300" /> },
      { name: 'Axios', icon: <SiAxios className="text-purple-500" /> },
      { name: 'Linux / VPS', icon: <SiLinux className="text-zinc-300" /> },
    ],
  },
];

const ticker = [
  'React',
  'Next.js',
  'TypeScript',
  'Redux Toolkit',
  'Tailwind CSS',
  'shadcn/ui',
  'Vite',
  'Node.js',
  'Express',
  'Firebase',
  'MongoDB',
  'Git',
  'Figma',
  'Linux',
  'REST APIs',
  'Socket.IO',
  'Framer Motion',
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Skills = () => {
  return (
    <section id="skills" className="relative overflow-hidden bg-zinc-950 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="03"
          label="Skills"
          title="A pragmatic, modern toolchain."
          description="What I reach for when the work has to ship — quickly, and to a standard I’m proud to own."
        />
      </div>

      <div className="relative mb-16 border-y border-zinc-800 bg-zinc-900/40 py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
          className="flex w-max items-center whitespace-nowrap"
        >
          {[0, 1].map((copy) => (
            <div key={copy} aria-hidden={copy === 1} className="flex items-center gap-10 pr-10">
              {ticker.map((name, i) => (
                <span
                  key={i}
                  className="flex items-center gap-10 font-mono text-sm uppercase tracking-widest text-zinc-500"
                >
                  {name}
                  <span className="text-amber-400/70">✦</span>
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-10 lg:grid-cols-3 lg:gap-8"
        >
          {categories.map((category) => (
            <motion.div key={category.name} variants={item}>
              <div className="mb-5 flex items-center gap-3">
                <span className={`h-2 w-2 rotate-45 ${category.dot}`} />
                <h3 className="font-mono text-sm uppercase tracking-[0.25em] text-zinc-200">
                  {category.name}
                </h3>
                <span className="hidden h-px flex-1 bg-zinc-800 sm:block" />
                <span className="font-mono text-xs text-zinc-600">{category.role}</span>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 transition-colors duration-300 hover:border-amber-400/40"
                  >
                    <div className="bg-[radial-gradient(ellipse_at_center,#fbbf24_0%,transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-10 pointer-events-none absolute inset-0" />
                    <span className="text-2xl sm:text-3xl">{skill.icon}</span>
                    <span className="mt-3 block font-sans text-sm font-medium text-zinc-300 transition-colors duration-300 group-hover:text-zinc-100">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;