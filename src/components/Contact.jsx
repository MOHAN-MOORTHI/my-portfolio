import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";


import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";

const FloatingIcon = ({ delay, children, x, y }) => (
  <motion.div
    animate={{
      y: [0, -20, 0],
      x: [0, 10, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
      delay: delay,
    }}
    className={`absolute ${x} ${y} p-4 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_0_15px_rgba(139,92,246,0.1)]`}
  >
    {children}
  </motion.div>
);

const Contact = () => {
  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-[10px] p-8 rounded-2xl border border-white/10'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="mt-8 flex flex-col gap-6">
          <a
            href="mailto:mohangopippt@gmail.com"
            className="group flex items-center gap-4 text-white hover:text-[#915eff] transition-all bg-white/5 p-4 rounded-xl hover:bg-white/10"
          >
            <div className="p-3 bg-gradient-to-tr from-violet-600 to-indigo-600 rounded-lg group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <span className="font-medium">mohangopippt@gmail.com</span>
            </div>
          </a>

          <a
            href="tel:+916381799190"
            className="group flex items-center gap-4 text-white hover:text-[#915eff] transition-all bg-white/5 p-4 rounded-xl hover:bg-white/10"
          >
            <div className="p-3 bg-gradient-to-tr from-violet-600 to-indigo-600 rounded-lg group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Phone</p>
              <span className="font-medium">+91 6381799190</span>
            </div>
          </a>

          <a
            href="https://github.com/MOHAN-MOORTHI"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 text-white hover:text-[#915eff] transition-all bg-white/5 p-4 rounded-xl hover:bg-white/10"
          >
            <div className="p-3 bg-gradient-to-tr from-violet-600 to-indigo-600 rounded-lg group-hover:scale-110 transition-transform">
              <Github className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-400">GitHub</p>
              <span className="font-medium break-all">github.com/MOHAN-MOORTHI</span>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/mohan-moorthi/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 text-white hover:text-[#915eff] transition-all bg-white/5 p-4 rounded-xl hover:bg-white/10"
          >
            <div className="p-3 bg-gradient-to-tr from-violet-600 to-indigo-600 rounded-lg group-hover:scale-110 transition-transform">
              <Linkedin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-400">LinkedIn</p>
              <span className="font-medium break-all">linkedin.com/in/mohan-moorthi</span>
            </div>
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] relative flex items-center justify-center'
      >
        {/* Animated Background Blob */}
        <div className="absolute w-[80%] h-[80%] bg-[#915eff]/20 rounded-full blur-[100px] animate-pulse" />

        {/* Floating Icons Animation */}
        <div className="relative w-full h-full max-w-[500px] max-h-[500px]">
          <FloatingIcon delay={0} x="top-[10%]" y="left-[10%]">
            <Mail className="w-12 h-12 text-[#915eff]" />
          </FloatingIcon>

          <FloatingIcon delay={1.5} x="bottom-[20%]" y="right-[10%]">
            <Send className="w-10 h-10 text-pink-500" />
          </FloatingIcon>

          <FloatingIcon delay={2.5} x="top-[40%]" y="left-[60%]">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#915eff] to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
              <Phone className="w-8 h-8 text-white" />
            </div>
          </FloatingIcon>

          {/* Connecting Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
            <motion.path
              d="M100,100 Q250,250 400,100"
              fill="none"
              stroke="#915eff"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <motion.path
              d="M150,400 Q250,250 350,400"
              fill="none"
              stroke="#ec008c"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

const ContactSection = SectionWrapper(Contact, "contact");
export default ContactSection;
