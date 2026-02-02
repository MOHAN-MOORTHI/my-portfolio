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
  const [copied, setCopied] = React.useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const contactLinks = [
    {
      type: "Email",
      value: "mohangopippt@gmail.com",
      icon: Mail,
      action: "mailto:mohangopippt@gmail.com",
      color: "from-violet-600 to-indigo-600",
    },
    {
      type: "Phone",
      value: "+91 6381799190",
      icon: Phone,
      action: "tel:+916381799190",
      color: "from-emerald-500 to-teal-500",
    },
    {
      type: "GitHub",
      value: "MOHAN-MOORTHI",
      icon: Github,
      action: "https://github.com/MOHAN-MOORTHI",
      color: "from-slate-700 to-slate-900",
    },
    {
      type: "LinkedIn",
      value: "mohan-moorthi",
      icon: Linkedin,
      action: "https://www.linkedin.com/in/mohan-moorthi/",
      color: "from-blue-600 to-cyan-600",
    },
  ];

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-[10px] p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden'
      >
        {/* Shine effect */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-purple-500/20 rounded-full blur-[80px]" />

        <p className={`${styles.sectionSubText} text-purple-200`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400`}>Contact.</h3>

        <div className="mt-10 grid gap-6">
          {contactLinks.map((item) => (
            <div
              key={item.type}
              className="group relative flex items-center gap-5 p-5 bg-white/5 rounded-2xl border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300 overflow-hidden"
            >
              {/* Hover Clean Sweep Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

              {/* Icon */}
              <div className={`p-4 bg-gradient-to-br ${item.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>

              {/* Text Info */}
              <div className="flex-1 min-w-0 z-10">
                <p className="text-sm text-gray-400 font-medium tracking-wide uppercase mb-1">{item.type}</p>
                <a href={item.action} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-white truncate hover:text-purple-300 transition-colors block">
                  {item.value}
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-300">
                <button
                  onClick={() => handleCopy(item.value, item.type)}
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 text-white transition-colors relative"
                  title="Copy to clipboard"
                >
                  {copied === item.type ? (
                    <span className="text-emerald-400 font-bold text-xs px-1">Copied!</span>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  )}
                </button>
                <a
                  href={item.action}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 text-white transition-colors"
                  title={`Open ${item.type}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] relative flex items-center justify-center'
      >
        {/* Refined Animated Background Blob */}
        <div className="absolute w-[90%] h-[90%] bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-[100px] animate-pulse" />

        {/* Floating Icons Animation - More scattered and dynamic */}
        <div className="relative w-full h-full max-w-[500px] max-h-[500px]">
          <FloatingIcon delay={0} x="top-[5%]" y="left-[5%]">
            <Mail className="w-10 h-10 text-white" />
          </FloatingIcon>

          <FloatingIcon delay={2} x="bottom-[15%]" y="right-[5%]">
            <Send className="w-8 h-8 text-pink-400" />
          </FloatingIcon>

          <FloatingIcon delay={1} x="top-[35%]" y="right-[15%]">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-teal-500/20 rotate-12">
              <Phone className="w-6 h-6 text-white" />
            </div>
          </FloatingIcon>

          <FloatingIcon delay={3} x="bottom-[30%]" y="left-[15%]">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center shadow-lg border border-white/20 -rotate-6">
              <Github className="w-6 h-6 text-white" />
            </div>
          </FloatingIcon>

          {/* Abstract Geometric Element */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[30%] left-[30%] w-[40%] h-[40%] border border-white/5 rounded-full border-dashed"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-[20%] left-[20%] w-[60%] h-[60%] border border-white/5 rounded-full border-dotted"
          />
        </div>
      </motion.div>
    </div>
  );
};

const ContactSection = SectionWrapper(Contact, "contact");
export default ContactSection;
