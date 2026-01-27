import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>My technical skills</p>
                <h2 className={styles.sectionHeadText}>Technologies.</h2>
            </motion.div>
            <div className='flex flex-row flex-wrap justify-center gap-10 mt-14'>
                {technologies.map((technology, index) => (
                    <div className='w-28 h-28 flex flex-col items-center justify-center gap-2 group cursor-pointer' key={technology.name}>
                        <motion.div
                            animate={{
                                y: [-10, 10, -10],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: index * 0.1,
                            }}

                            className="relative group-hover:scale-110 transition-transform duration-300 ease-in-out"
                        >
                            <div className="w-24 h-24 p-[2px] rounded-full green-pink-gradient shadow-card">
                                <div className="bg-tertiary w-full h-full rounded-full flex justify-center items-center overflow-hidden border-2 border-transparent hover:border-[#915eff] transition-colors">
                                    <img src={technology.icon} alt={technology.name} className="w-3/4 h-3/4 object-contain" />
                                </div>
                            </div>
                        </motion.div>
                        <p className="text-secondary text-[14px] font-bold text-center mt-1">{technology.name}</p>
                    </div>
                ))}
            </div >
        </>
    );
};

const TechSection = SectionWrapper(Tech, "tech");
export default TechSection;
