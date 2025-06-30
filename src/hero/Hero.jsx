import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaTwitter, FaLinkedin, FaFacebook, FaInstagram, FaDownload } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import profileImage from '../assets/Najmul.jpeg';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const socialLinks = [
    { 
      id: 1, 
      icon: <FaGithub className="text-xl" />, 
      url: "https://github.com/Whitey1234",
      color: "hover:text-gray-400",
      bg: "hover:bg-gray-800/50"
    },
    { 
      id: 2, 
      icon: <FaFacebook className="text-xl" />, 
      url: "https://www.facebook.com/najmul.hassan.571047",
      color: "hover:text-blue-400",
      bg: "hover:bg-blue-800/30"
    },
    { 
      id: 3, 
      icon: <FaTwitter className="text-xl" />, 
      url: "https://x.com/NajmulHassn_",
      color: "hover:text-cyan-400",
      bg: "hover:bg-cyan-800/30"
    },
    { 
      id: 4, 
      icon: <FiMail className="text-xl" />, 
      url: "mailto:najmulsiyam20@gmail.com",
      color: "hover:text-red-400",
      bg: "hover:bg-red-800/30"
    },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-20 px-4 md:pt-16">
      <motion.div
        className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text Content */}
        <motion.div 
          className="md:w-1/2 space-y-4 md:space-y-6"
          variants={itemVariants}
        >
          <motion.h1 
            className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
            variants={itemVariants}
          >
            Hi, I'm Najmul
          </motion.h1>

          <motion.div 
            className="text-xl md:text-3xl font-semibold h-10 md:h-12"
            variants={itemVariants}
          >
            <TypeAnimation
              sequence={[
                'Frontend Developer',
                1500,
                'React Specialist',
                1500,
                'Firebase Expert',
                1500,
                'Fullstack Enthusiast',
                1500
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400"
            />
          </motion.div>

          <motion.p 
            className="text-gray-300 text-base md:text-lg max-w-lg"
            variants={itemVariants}
          >
            I craft beautiful, responsive web applications with modern technologies. 
            Passionate about creating intuitive user experiences and clean code.
          </motion.p>

          {/* Social Media Icons */}
          <motion.div 
            className="flex gap-3 pb-2 md:pb-4"
            variants={itemVariants}
          >
            {socialLinks.map(({ id, icon, url, color, bg }) => (
              <motion.a
                key={id}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-300 ${color} ${bg} p-2 rounded-full transition-all duration-300`}
                whileHover={{ 
                  y: -5,
                  scale: 1.2,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                {icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div className="flex flex-col sm:flex-row gap-3 md:gap-4" variants={itemVariants}>
            <a
              href="#contact"
              className="px-4 py-2 md:px-6 md:py-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-cyan-500/30 hover:scale-105 text-center"
            >
              Get In Touch
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-4 py-2 md:px-6 md:py-3 rounded-md border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 transition-all hover:shadow-cyan-400/20 hover:scale-105 flex items-center justify-center gap-2"
            >
              <FaDownload className="text-sm" />
              <span>Resume</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div 
          className="md:w-1/2 flex justify-center mb-8 md:mb-0"
          variants={itemVariants}
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
            <div className="relative">
              <img
                src={profileImage}
                alt="Najmul Haque"
                className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-gray-800 group-hover:border-cyan-400 transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-white/30 transition-all duration-300"></div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Animated Background Elements */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-cyan-400/10 absolute left-4 md:-left-10 bottom-1/4"
        ></motion.div>
        <motion.div
          animate={{
            y: [0, -30, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-blue-500/10 absolute right-4 md:-right-10 bottom-1/3"
        ></motion.div>
      </div>
    </section>
  );
};

export default Hero;