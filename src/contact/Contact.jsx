import { motion } from 'framer-motion';
import { FaFacebook, FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiArrowUpRight, FiMail, FiPhone } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';

const channels = [
  {
    icon: <FiMail />,
    label: 'Email',
    value: 'najmulsiyam20@gmail.com',
    href: 'mailto:najmulsiyam20@gmail.com',
    hint: 'Best for briefs & offers',
  },
  {
    icon: <FiPhone />,
    label: 'Phone',
    value: '+880 1743 299 919',
    href: 'tel:+8801743299919',
    hint: 'Mon–Fri · 10:00–19:00 BD time',
  },
  {
    icon: <FaWhatsapp />,
    label: 'WhatsApp',
    value: 'Chat on WhatsApp',
    href: 'https://wa.me/8801743299919',
    hint: 'Usually the fastest reply',
  },
];

const socials = [
  { icon: <FaGithub />, href: 'https://github.com/Whitey1234', label: 'GitHub' },
  { icon: <FaFacebook />, href: 'https://www.facebook.com/najmul.hassan.571047', label: 'Facebook' },
  { icon: <FaTwitter />, href: 'https://x.com/NajmulHassn_', label: 'Twitter / X' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-zinc-900/40 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,#fbbf24_0%,transparent_50%)] opacity-[0.05]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="06"
          label="Contact"
          title="Let’s build something worth shipping."
          description="Whether it’s a full product, a tricky component, or a straight code review — I’m easy to talk to."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col items-center gap-4"
        >
          <a
            href="mailto:najmulsiyam20@gmail.com"
            className="group inline-flex items-center gap-3 rounded-xl bg-amber-400 px-7 py-4 font-mono text-sm font-semibold text-zinc-950 shadow-lg shadow-amber-500/20 transition-all duration-300 hover:scale-[1.03] hover:bg-amber-300"
          >
            najmulsiyam20@gmail.com
            <FiArrowUpRight className="text-base transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <p className="flex items-center gap-2 font-mono text-xs text-zinc-500">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
            Usually replies within 24 hours
          </p>
        </motion.div>

        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="mt-16 grid gap-4 sm:grid-cols-3"
        >
          {channels.map((channel) => (
            <motion.a
              key={channel.label}
              variants={fadeUp}
              href={channel.href}
              target={channel.href.startsWith('http') ? '_blank' : undefined}
              rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors duration-300 hover:border-amber-400/50"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-lg border border-zinc-700 bg-zinc-950/60 text-lg text-amber-300 transition-colors duration-300 group-hover:border-amber-400/60">
                  {channel.icon}
                </span>
                <FiArrowUpRight className="text-zinc-600 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-amber-300" />
              </div>
              <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.3em] text-amber-300/80">
                {channel.label}
              </p>
              <p className="mt-2 break-all font-sans text-base font-medium text-zinc-200">
                {channel.value}
              </p>
              <p className="mt-1 font-mono text-xs text-zinc-500">{channel.hint}</p>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="mt-14 flex items-center justify-center gap-3"
        >
          <span className="hidden h-px w-16 bg-zinc-800 sm:block" />
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="grid h-11 w-11 place-items-center rounded-full border border-zinc-800 bg-zinc-900/50 text-base text-zinc-400 transition-colors hover:border-amber-400/50 hover:text-amber-300"
            >
              {s.icon}
            </motion.a>
          ))}
          <span className="hidden h-px w-16 bg-zinc-800 sm:block" />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;