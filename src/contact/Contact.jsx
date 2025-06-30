// src/components/Contact.jsx
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMessageSquare } from 'react-icons/fi';
import { FaWhatsapp, FaTelegram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Have a project in mind or want to connect? Reach out through any of these channels
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyan-400/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400">
                <FiMail className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-white">Email</h3>
            </div>
            <a 
              href="mailto:najmulsiyam20@gmail.com" 
              className="text-gray-300 hover:text-cyan-400 transition-colors break-all"
            >
              najmulsiyam20@gmail.com
            </a>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyan-400/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-600/20 text-purple-400">
                <FiPhone className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-white">Phone</h3>
            </div>
            <a 
              href="tel:+1234567890" 
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              +8801743299919
            </a>
          </motion.div>

          {/* WhatsApp Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyan-400/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-600/20 text-green-400">
                <FaWhatsapp className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-white">WhatsApp</h3>
            </div>
            <a 
              href="https://wa.me/01743299919" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              +8801743299919
            </a>
          </motion.div>
        </div>

        {/* Additional Contact Options */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Other Ways to Connect</h3>
          <div className="flex justify-center gap-4">
            <motion.a
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://t.me/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-700 hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-400 transition-all"
              aria-label="Telegram"
            >
              <FaTelegram className="text-2xl" />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="sms:+1234567890"
              className="p-3 rounded-full bg-gray-700 hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-400 transition-all"
              aria-label="Text Message"
            >
              <FiMessageSquare className="text-2xl" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;