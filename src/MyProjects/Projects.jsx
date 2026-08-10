import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import {
  FaFirefoxBrowser,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import { FiCode, FiExternalLink, FiGithub } from 'react-icons/fi';
import {
  SiCloudinary,
  SiD3Dotjs,
  SiExpress,
  SiFirebase,
  SiJsonwebtokens,
  SiMongodb,
  SiNextdotjs,
  SiRedux,
  SiShadcnui,
  SiSocketdotio,
  SiTailwindcss,
} from 'react-icons/si';
import SectionHeading from '../components/SectionHeading';
import bazarica from '../assets/bazarica.png';
import img1 from '../assets/6861bbace64c3b108d347197.jpg';
import img2 from '../assets/all-devices-black.png';
import img3 from '../assets/6861c6d3aa250f50426fde67.jpg';
import passport from '../assets/passport-extractor.png';
import quadra from '../assets/quadra.png';
import socialbd from '../assets/socialbd.png';

const projects = [
  {
    id: 1,
    title: 'Bazarica',
    image: bazarica,
    description:
      'Multi-Vendor E-commerce Platform with admin, vendor & user dashboards, role-based auth, sales analytics, and multi-courier delivery via Pathao & RedX.',
    role: 'Full Stack Developer',
    technologies: [
      'Next.js',
      'React.js',
      'Redux Toolkit',
      'Tailwind CSS',
      'shadcn/ui',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'Firebase',
      'Cloudinary',
      'Pathao API',
      'RedX API',
    ],
    liveLink: 'https://bazarica.vercel.app/',
    demo: [
      { role: 'Admin', email: 'admin@gmail.com', password: '12345678' },
      { role: 'Vendor / Seller', email: 'riyaz@gmail.com', password: '12345678' },
      { role: 'User', email: 'user@gmail.com', password: '12345678' },
    ],
    challenges: [
      'Designing a tri-role system (admin, vendor, user) with JWT-based authorization',
      'Integrating multiple courier APIs (Pathao & RedX) into a single checkout flow',
      'Keeping inventory, orders, and returns in sync across three dashboards',
    ],
    improvements: [
      'Add real-time order tracking with Socket.IO',
      'Introduce multiple payment gateways & mobile banking',
      'Expand analytics with product-level forecasting',
    ],
  },
  {
    id: 2,
    title: 'SocialBD',
    image: socialbd,
    description:
      'Modern social networking platform with a community forum, quiz system, gamification, real-time chat, and full admin/user dashboards.',
    role: 'Full Stack Developer',
    technologies: [
      'Next.js',
      'React.js',
      'Zustand',
      'Tailwind CSS',
      'shadcn/ui',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Socket.IO',
      'JWT',
      'Cloudinary',
    ],
    liveLink: 'https://socialbd.net/',
    demo: [
      { role: 'User', email: 'user@gmail.com', password: '12345678' },
      { role: 'Admin', email: 'admin@gmail.com', password: '12345678' },
    ],
    challenges: [
      'Real-time chat & notifications over Socket.IO with online presence',
      'Gamification — points, streaks, and rewards tied to user activity',
      'Scaling forum feeds, quizzes, and posts under one role-aware schema',
    ],
    improvements: [
      'Add end-to-end encryption for direct messages',
      'Introduce video rooms & live streaming',
      'Feed ranking with a personalized engagement algorithm',
    ],
  },
  {
    id: 3,
    title: 'Passport Extractor',
    image: passport,
    description:
      'AI OCR tool powered by Tesseract.js — detects and parses the ICAO MRZ zone of passports, extracting number, name, nationality, DOB, gender & expiry with auto-correction.',
    role: 'Full Stack Developer',
    technologies: [
      'Next.js',
      'React.js',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Tesseract.js',
    ],
    liveLink: 'https://passport-extractor-lac.vercel.app/',
    challenges: [
      'Accurate MRZ detection & parsing per the ICAO 9303 standard',
      'OCR error detection and auto-correction on real document scans',
      'Real-time image processing without sacrificing response speed',
    ],
    improvements: [
      'Add NFC chip reading as a fallback',
      'Support MRZ variants from more visa/travel documents',
      'Add liveness checks to prevent document spoofing',
    ],
  },
  {
    id: 4,
    title: 'Quadra',
    image: quadra,
    description:
      'Modern, full-stack social media application built with Next.js and Node.js — real-time messaging, post interactions, notifications, and more.',
    role: 'Full Stack Developer',
    technologies: [
      'Next.js',
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Socket.IO',
      'shadcn/ui',
      'CSS3',
      'JavaScript',
    ],
    liveLink: 'https://quadra-blush.vercel.app/',
    challenges: [
      'Real-time messaging with Socket.IO and reliable online presence',
      'Live notifications and post interactions without page reloads',
      'Structuring a scalable social feed and follow graph on MongoDB',
    ],
    improvements: [
      'Add voice & video calling',
      'Introduce end-to-end encryption for private chats',
      'Feed ranking with a personalized engagement algorithm',
    ],
  },
  {
    id: 5,
    title: 'Language Master',
    image: img1,
    description:
      'A full-featured tutor booking platform with easy scheduling, community posts, and an admin dashboard.',
    role: 'Lead Full Stack Developer',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    liveLink: 'https://tutor-booking--ass-11.web.app',
    githubLink: 'https://github.com/Whitey1234/tutor-booked',
    challenges: [
      'Real-time session availability across overlapping timezones',
      'Optimizing the booking flow for slow mobile networks',
      'Splitting a monolithic admin surface into role-based views',
    ],
    improvements: [
      'Add AI-powered tutor matching',
      'Implement PWA support for offline schedules',
      'Expand analytics for session feedback',
    ],
  },
  {
    id: 6,
    title: 'Recipe Book',
    image: img2,
    description:
      'A recipe platform with 100+ searchable recipes, user-friendly filtering, and an admin dashboard.',
    role: 'Full stack developer',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    liveLink: 'https://recipe-book-1fb64.web.app/',
    githubLink: 'https://github.com/Whitey1234/recipe-books',
    challenges: [
      'Real-time sync across multiple devices',
      'Granular per-user content permissions',
      'Keeping the category filtering instant on large lists',
    ],
    improvements: [
      'Add weekly meal-planning views',
      'Implement ingredient-based pantry matching',
      'Add nutrition breakdowns per recipe',
    ],
  },
  {
    id: 7,
    title: 'Pay Needs',
    image: img3,
    description:
      'A smart payments solution with data-driven dashboards and responsive visualizations.',
    role: 'Full Stack Developer',
    technologies: ['tailwind', 'React', 'Express', 'MongoDB', 'D3.js'],
    liveLink: 'https://payneeds-ass9.web.app/',
    githubLink: 'https://github.com/Whitey1234/payNeeds',
    challenges: [
      'Handling large transaction datasets efficiently',
      'Building responsive, readable data visualizations',
      'Designing secure auth + payment flow',
    ],
    improvements: [
      'Add competitor comparison features',
      'Implement predictive spend analytics',
      'Expand third-party integrations',
    ],
  },
];

const techIcons = {
  'React': <FaReact className="text-cyan-400" />,
  'React.js': <FaReact className="text-cyan-400" />,
  'Next.js': <SiNextdotjs className="text-zinc-100" />,
  'Node.js': <FaNodeJs className="text-green-500" />,
  'MongoDB': <SiMongodb className="text-green-600" />,
  'Express': <SiExpress className="text-zinc-300" />,
  'Express.js': <SiExpress className="text-zinc-300" />,
  'Firebase': <SiFirebase className="text-amber-500" />,
  'Tailwind CSS': <SiTailwindcss className="text-cyan-300" />,
  'tailwind': <SiTailwindcss className="text-cyan-300" />,
  'Redux Toolkit': <SiRedux className="text-purple-400" />,
  'shadcn/ui': <SiShadcnui className="text-zinc-200" />,
  'Socket.IO': <SiSocketdotio className="text-zinc-200" />,
  'JWT': <SiJsonwebtokens className="text-rose-400" />,
  'Cloudinary': <SiCloudinary className="text-sky-400" />,
  'D3.js': <SiD3Dotjs className="text-amber-400" />,
};

const TechChip = ({ tech }) => (
  <span className="flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-950/60 px-2 py-1 font-mono text-[11px] text-zinc-400">
    <span className="text-sm">{techIcons[tech] ?? <FiCode />}</span>
    {tech}
  </span>
);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="relative overflow-hidden bg-zinc-900/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          label="Projects"
          title="Selected work & case studies."
          description="A few products I built end-to-end — real constraints, real users, and the decisions behind each one."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="grid overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 lg:grid-cols-5"
        >
          <div className="group relative min-h-64 overflow-hidden sm:min-h-80 lg:col-span-3">
            <img
              src={featured.image}
              alt={featured.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-amber-400/40 bg-zinc-950/80 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-amber-300 backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
              Featured
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 p-6 sm:p-8 lg:col-span-2">
            <div className="space-y-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-amber-300/90">
                Case study · 01
              </p>
              <h3 className="font-serif text-2xl text-zinc-100 sm:text-3xl">{featured.title}</h3>
              <p className="text-base leading-relaxed text-zinc-400">{featured.description}</p>
              <p className="font-mono text-xs text-zinc-500">{featured.role}</p>
              <div className="flex flex-wrap gap-2">
                {featured.technologies.map((tech) => (
                  <TechChip key={tech} tech={tech} />
                ))}
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setSelectedProject(featured)}
                className="group inline-flex items-center gap-2 rounded-lg border border-amber-400/50 px-5 py-2.5 font-mono text-sm text-amber-300 transition-all duration-300 hover:bg-amber-400 hover:text-zinc-950"
              >
                Read case study
                <FiExternalLink className="text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <a
                href={featured.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-sm text-zinc-400 transition-colors hover:text-zinc-100"
              >
                <FiExternalLink />
                Live
              </a>
              {featured.githubLink && (
                <a
                  href={featured.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                >
                  <FiGithub />
                  Source
                </a>
              )}
            </div>
          </div>
        </motion.div>

        <div className="mt-12">
          <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.3em] text-amber-300/90">
            Selected works
          </p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            className="border-b border-zinc-800"
          >
            {rest.map((project) => (
              <motion.button
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
                onClick={() => setSelectedProject(project)}
                className="group grid w-full gap-2 border-t border-zinc-800 py-6 text-left transition-colors duration-300 hover:bg-zinc-800/40 sm:grid-cols-12 sm:items-center sm:gap-4 sm:px-4"
              >
                <span className="font-mono text-xs text-amber-300/70 sm:col-span-1">
                  0{project.id}
                </span>
                <h3 className="font-sans text-lg font-semibold capitalize text-zinc-200 transition-colors duration-300 group-hover:text-amber-300 sm:col-span-3">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-500 sm:col-span-4 sm:line-clamp-1">
                  {project.description}
                </p>
                <span className="hidden flex-wrap gap-1.5 sm:col-span-3 sm:flex">
                  {project.technologies.slice(0, 2).map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-zinc-800 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-zinc-500"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 2 && (
                    <span className="font-mono text-[10px] text-zinc-600">
                      +{project.technologies.length - 2}
                    </span>
                  )}
                </span>
                <span className="hidden justify-end font-mono text-sm text-zinc-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-amber-300 sm:col-span-1 sm:flex">
                  →
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/85 p-4 backdrop-blur-sm"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-zinc-800 bg-zinc-950"
            >
              <div className="relative h-60 overflow-hidden sm:h-80">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project details"
                  className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-zinc-700 bg-zinc-950/80 text-zinc-300 backdrop-blur transition-colors hover:border-amber-400/60 hover:text-amber-300"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 sm:p-10">
                <h3 className="font-serif text-2xl text-zinc-100 sm:text-3xl">
                  {selectedProject.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-zinc-400">
                  {selectedProject.description}
                </p>
                <p className="mt-2 font-mono text-xs text-zinc-500">{selectedProject.role}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <TechChip key={tech} tech={tech} />
                  ))}
                </div>

                {selectedProject.demo && (
                  <div className="mt-6 rounded-xl border border-amber-400/20 bg-amber-400/[0.04] px-4 py-3">
                    <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-amber-300/90">
                      Demo credentials
                    </p>
                    <div className="mt-2 flex flex-col gap-1.5 sm:flex-row sm:flex-wrap sm:gap-x-6">
                      {selectedProject.demo.map((cred) => (
                        <p key={cred.role} className="font-mono text-xs text-zinc-400">
                          <span className="text-zinc-200">{cred.role}</span> · {cred.email} ·{' '}
                          {cred.password}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-10 grid gap-10 md:grid-cols-2">
                  <div>
                    <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-amber-300/90">
                      Challenges faced
                    </p>
                    <FaFirefoxBrowser className="mb-3 text-lg text-amber-400" />
                    <ul className="space-y-3 text-sm leading-relaxed text-zinc-400">
                      {selectedProject.challenges.map((challenge, i) => (
                        <li key={i} className="flex gap-2.5">
                          <span className="mt-0.5 text-amber-400">▹</span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-amber-300/90">
                      What’s next
                    </p>
                    <ul className="space-y-3 text-sm leading-relaxed text-zinc-400">
                      {selectedProject.improvements.map((improvement, i) => (
                        <li key={i} className="flex gap-2.5">
                          <span className="mt-0.5 text-amber-400/60">→</span>
                          {improvement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-4 border-t border-zinc-800 pt-6">
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-5 py-2.5 font-mono text-sm font-semibold text-zinc-950 transition-all duration-300 hover:bg-amber-300"
                  >
                    <FiExternalLink />
                    Live demo
                  </a>
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-5 py-2.5 font-mono text-sm text-zinc-300 transition-colors duration-300 hover:border-amber-400/60 hover:text-amber-300"
                    >
                      <FiGithub />
                      View source
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;