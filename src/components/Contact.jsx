import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";


// ... existing imports ...

const Contact = () => {
  // Form logic removed as per request


  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl bg-[#100d25]'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="mt-2 mb-4 text-white space-y-1 text-sm bg-tertiary/50 p-4 rounded-xl">
          <p className="flex items-center gap-2">
            <span className="font-bold text-[#915eff]">Email:</span>
            <a href="mailto:mohangopippt@gmail.com" className="hover:text-white transition-colors">mohangopippt@gmail.com</a>
          </p>
          <p className="flex items-center gap-2">
            <span className="font-bold text-[#915eff]">Phone:</span>
            <a href="tel:+916381799190" className="hover:text-white transition-colors">+91 6381799190</a>
          </p>
          <p className="flex items-center gap-2">
            <span className="font-bold text-[#915eff]">GitHub:</span>
            <a href="https://github.com/MOHAN-MOORTHI" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors break-all">https://github.com/MOHAN-MOORTHI</a>
          </p>
          <p className="flex items-center gap-2">
            <span className="font-bold text-[#915eff]">LinkedIn:</span>
            <a href="https://www.linkedin.com/in/mohan-moorthi/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors break-all">https://www.linkedin.com/in/mohan-moorthi/</a>
          </p>
        </div>


      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

const ContactSection = SectionWrapper(Contact, "contact");
export default ContactSection;
