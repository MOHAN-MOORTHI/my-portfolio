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

import { Tilt } from "react-tilt";

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
      shadow: "shadow-violet-500/30",
    },
    {
      type: "Phone",
      value: "+91 6381799190",
      icon: Phone,
      action: "tel:+916381799190",
      color: "from-emerald-500 to-teal-500",
      shadow: "shadow-emerald-500/30",
    },
    {
      type: "GitHub",
      value: "MOHAN-MOORTHI",
      icon: Github,
      action: "https://github.com/MOHAN-MOORTHI",
      color: "from-slate-700 to-slate-900",
      shadow: "shadow-slate-500/30",
    },
    {
      type: "LinkedIn",
      value: "mohan-moorthi",
      icon: Linkedin,
      action: "https://www.linkedin.com/in/mohan-moorthi/",
      color: "from-blue-600 to-cyan-600",
      shadow: "shadow-blue-500/30",
    },
  ];

  const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 35,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.05,   // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,   // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black/20 backdrop-blur-xl p-8 rounded-[30px] border border-white/10 relative overflow-hidden group/container'
      >
        {/* Ambient Background Glow */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-purple-500/5 to-transparent pointer-events-none" />

        <p className={`${styles.sectionSubText} text-purple-300 font-semibold tracking-wider`}>GET IN TOUCH</p>
        <h3 className={`${styles.sectionHeadText} text-white drop-shadow-lg`}>Contact.</h3>

        <div className="mt-10 grid gap-6 relative z-10">
          {contactLinks.map((item) => (
            <Tilt key={item.type} options={defaultOptions}>
              <div
                className="group relative flex items-center gap-5 p-5 bg-[#100d25]/80 backdrop-blur-md rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 overflow-hidden shadow-lg"
              >
                {/* Dynamic Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Icon Box */}
                <div className={`relative p-4 rounded-xl bg-gradient-to-br ${item.color} ${item.shadow} shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <item.icon className="w-6 h-6 text-white" />
                  {/* Internal Glow */}
                  <div className="absolute inset-0 bg-white/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Text Content */}
                <div className="flex-1 min-w-0 z-10">
                  <p className="text-xs text-gray-400 font-bold tracking-widest uppercase mb-1">{item.type}</p>
                  <a href={item.action} target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-white truncate group-hover:text-purple-200 transition-colors block font-mono">
                    {item.value}
                  </a>
                </div>

                {/* Floating Action Buttons */}
                <div className="flex gap-2 z-10 opacity-0 group-hover:opacity-100 transition-all translate-x-10 group-hover:translate-x-0 duration-300">
                  <button
                    onClick={(e) => { e.stopPropagation(); handleCopy(item.value, item.type); }}
                    className="p-2.5 bg-white/10 rounded-full hover:bg-white/20 text-white hover:text-emerald-400 transition-all transform hover:scale-110 active:scale-95 backdrop-blur-md border border-white/5"
                    title="Copy to clipboard"
                  >
                    {copied === item.type ? (
                      <span className="text-emerald-400 font-bold text-xs">✓</span>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    )}
                  </button>
                  <a
                    href={item.action}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white/10 rounded-full hover:bg-white/20 text-white hover:text-blue-400 transition-all transform hover:scale-110 active:scale-95 backdrop-blur-md border border-white/5"
                    title={`Open ${item.type}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[600px] h-[350px] relative flex items-center justify-center perspective-1000'
      >
        {/* Holographic Background Effect */}
        <div className="absolute w-[80%] h-[80%] bg-gradient-to-tr from-[#915eff]/20 via-purple-500/10 to-blue-500/20 rounded-full blur-[80px] animate-pulse-slow" />

        {/* 3D Orbit System */}
        <div className="relative w-full h-full max-w-[600px] max-h-[600px] perspective-container">
          {/* Center Core */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full blur-[20px] opacity-40 animate-pulse" />

          {/* Orbit Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-[10%] left-[10%] w-[80%] h-[80%] border border-cyan-500/20 rounded-full border-dashed"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute top-[20%] left-[20%] w-[60%] h-[60%] border border-purple-500/20 rounded-full"
          />

          {/* Floating Icons with 3D Float Animation */}
          <FloatingIcon delay={0} x="top-[15%]" y="left-[15%]">
            <div className="bg-[#1d1836] p-4 rounded-2xl border border-violet-500/50 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              <Mail className="w-8 h-8 text-violet-400" />
            </div>
          </FloatingIcon>

          <FloatingIcon delay={2} x="bottom-[20%]" y="right-[10%]">
            <div className="bg-[#1d1836] p-4 rounded-2xl border border-pink-500/50 shadow-[0_0_20px_rgba(236,72,153,0.3)]">
              <Send className="w-8 h-8 text-pink-400" />
            </div>
          </FloatingIcon>

          <FloatingIcon delay={1} x="top-[30%]" y="right-[20%]">
            <div className="bg-[#1d1836] p-4 rounded-2xl border border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <Phone className="w-6 h-6 text-emerald-400" />
            </div>
          </FloatingIcon>

          <FloatingIcon delay={3} x="bottom-[25%]" y="left-[20%]">
            <div className="bg-[#1d1836] p-4 rounded-2xl border border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <Github className="w-6 h-6 text-blue-400" />
            </div>
          </FloatingIcon>

          {/* Connecting Digital Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_0_8px_rgba(145,94,255,0.5)]">
            <motion.path
              d="M150,150 Q300,300 450,150"
              fill="none"
              stroke="url(#gradient-line)"
              strokeWidth="2"
              strokeDasharray="10 10"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: 100 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <defs>
              <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#915eff" stopOpacity="0" />
                <stop offset="50%" stopColor="#915eff" />
                <stop offset="100%" stopColor="#915eff" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

const ContactSection = SectionWrapper(Contact, "contact");
export default ContactSection;
