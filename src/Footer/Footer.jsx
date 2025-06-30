// src/components/Footer.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
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
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white border-t border-gray-700/50">
      <motion.div
        className="container mx-auto px-4 py-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left Section - Branding */}
          <motion.div 
            className="text-center md:text-left"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
              {"{ Najmul.dev }"}
            </h2>
            <p className="text-gray-400 max-w-md">
              Crafting digital experiences with clean code and creative solutions.
            </p>
          </motion.div>

          {/* Middle Section - Quick Links */}
          <motion.div
            className="flex flex-col items-center md:items-start"
            variants={itemVariants}
          >
            <h3 className="text-lg font-semibold text-cyan-400 mb-4">Quick Links</h3>
            <div className="flex flex-col items-center md:items-start gap-2">
              <a href="#hero" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</a>
              <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">About</a>
              <a href="#projects" className="text-gray-300 hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </motion.div>

          {/* Right Section - Social Links */}
          <motion.div
            className="flex flex-col items-center md:items-end"
            variants={itemVariants}
          >
            <h3 className="text-lg font-semibold text-cyan-400 mb-4">Connect With Me</h3>
            <div className="flex gap-4">
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
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Copyright */}
        <motion.div
          className="border-t border-gray-700/50 mt-12 pt-8 text-center text-gray-400"
          variants={itemVariants}
        >
          <p>© {new Date().getFullYear()} Najmul Hassan siyam. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Built with  ❤️
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;