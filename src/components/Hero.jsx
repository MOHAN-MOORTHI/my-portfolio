import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

import { Typewriter } from './';

const Hero = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <ComputersCanvas />

      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-0"></div>

      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10 pointer-events-none`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient bg-gradient-to-b from-[#915EFF] to-transparent' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Mohan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <Typewriter text="I architect robust full-stack solutions and craft seamless, high-performance web experiences." delay={30} startDelay={1000} />
          </p>

          <div className="mt-8 flex gap-4 pointer-events-auto">
            <a href="#projects" className="bg-[#915EFF] text-white py-3 px-8 rounded-xl font-bold shadow-md shadow-primary hover:bg-[#7e4bd4] transition-colors">
              View Work
            </a>
            <a href="#contact" className="bg-transparent border border-white text-white py-3 px-8 rounded-xl font-bold hover:bg-white hover:text-primary transition-colors">
              Contact Me
            </a>
          </div>
        </div>


        {/* Time Display in Hero */}
        <div className="absolute right-0 top-0 hidden lg:block pointer-events-auto">
          <h2 className="text-[80px] font-bold text-white/10 select-none font-mono">
            {time.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}
          </h2>
        </div>
      </div>





      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center pointer-events-none'>
        <a href='#about' className="pointer-events-auto">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-white/50 flex justify-center items-start p-2 hover:border-white transition-colors'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-white mb-1'
            />
          </div>
        </a>
      </div>
    </section >
  );
};

export default Hero;
