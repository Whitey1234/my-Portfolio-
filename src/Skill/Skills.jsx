// src/components/Skills.jsx
import { motion } from 'framer-motion';
import { FaReact, FaCss3Alt, FaHtml5, FaNodeJs, FaGit, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiFirebase, SiMongodb, SiExpress, SiVite, SiAxios } from 'react-icons/si';

const Skills = () => {
  // Skill categories
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "React", icon: <FaReact className="text-cyan-400" />, level: 90 },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: 85 },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: 95 },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, level: 90 },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-300" />, level: 85 },
        { name: "Vite", icon: <SiVite className="text-purple-400" />, level: 80 }
      ],
      color: "from-cyan-400 to-blue-500"
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 80 },
        { name: "Express", icon: <SiExpress className="text-gray-300" />, level: 75 },
        { name: "Firebase", icon: <SiFirebase className="text-amber-500" />, level: 85 },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, level: 70 }
      ],
      color: "from-green-400 to-blue-600"
    },
    {
      name: "Tools",
      skills: [
        { name: "Axios", icon: <SiAxios className="text-purple-500" />, level: 85 },
        { name: "Git", icon: <FaGit className="text-orange-600" />, level: 80 },
        { name: "Figma", icon: <FaFigma className="text-purple-300" />, level: 75 }
      ],
      color: "from-purple-400 to-indigo-500"
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const progressBar = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1.5,
        delay: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Technologies I work with daily to create amazing experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyan-400/30 transition-all duration-300`}
            >
              <div className={`text-xl font-semibold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.name}
              </div>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">
                        {skill.icon}
                      </div>
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="ml-auto text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        variants={progressBar}
                        initial="hidden"
                        whileInView="visible"
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Icons Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                opacity: 0,
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 5
              }}
              className="absolute text-gray-500/20 text-4xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              {i % 3 === 0 ? <FaReact /> : i % 3 === 1 ? <SiJavascript /> : <FaNodeJs />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;