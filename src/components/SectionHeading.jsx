import { motion } from 'framer-motion';

const SectionHeading = ({ index, label, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="mb-14 md:mb-20"
    >
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-amber-300/90">{index}</span>
        <span className="h-px w-10 bg-amber-400/40" />
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-amber-300/90">
          {label}
        </span>
      </div>
      <h2 className="mt-5 font-sans text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;