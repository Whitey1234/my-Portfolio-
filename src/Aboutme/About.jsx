// src/components/About.jsx
import { motion } from 'framer-motion';
import profileImage from '../assets/Najmul.jpeg';

const About = () => {
  // Floating orb variants
  const orbVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    floatReverse: {
      y: [0, 25, 0],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="about" className="relative py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        variants={orbVariants}
        initial="float"
        animate="float"
        className="absolute -left-20 top-1/4 w-40 h-40 rounded-full bg-cyan-400/10 blur-xl"
      />
      <motion.div
        variants={orbVariants}
        initial="floatReverse"
        animate="floatReverse"
        className="absolute -right-20 bottom-1/4 w-60 h-60 rounded-full bg-blue-500/10 blur-xl"
      />
      <motion.div
        variants={orbVariants}
        initial="float"
        animate="float"
        className="absolute right-1/4 top-20 w-24 h-24 rounded-full bg-cyan-400/5 blur-lg"
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Pulsing Center Orb */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-500/10 blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            The creative mind behind innovative web solutions
          </p>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Photo - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group lg:w-1/3 flex justify-center"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src={profileImage}
                alt="Najmul Haque"
                className="w-full h-auto max-w-md transform group-hover:scale-105 transition-all duration-500 border-4 border-gray-800 group-hover:border-cyan-400/50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          </motion.div>

          {/* Text - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-2/3 space-y-6"
          >
            <h3 className="text-3xl font-semibold text-white">
              Turning <span className="text-cyan-400">Ideas</span> Into <span className="text-blue-400">Experiences</span>
            </h3>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                With over 3 years of experience in web development, I specialize in creating 
                pixel-perfect, performant applications that users love. My journey began 
                when I discovered the magic of turning code into visual experiences.
              </p>
              
              <p>
                I approach each project with a unique blend of technical precision and 
                creative thinking. Whether it's building responsive interfaces or solving 
                complex problems, I believe in writing clean, maintainable code.
              </p>
              
              <p>
                Beyond coding, I'm an active contributor to developer communities and enjoy 
                mentoring newcomers. When I'm not at my desk, you'll find me exploring new 
                technologies or hiking for creative inspiration.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="#contact"
                whileHover={{ 
                  y: -3,
                  scale: 1.03,
                  boxShadow: "0 10px 20px -5px rgba(34, 211, 238, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
              >
                Let's Collaborate
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ 
                  y: -3,
                  scale: 1.03,
                  boxShadow: "0 10px 20px -5px rgba(34, 211, 238, 0.2)"
                }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-md border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 shadow-lg"
              >
                View Projects
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;