import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
    return (
        <div className='flex flex-col md:flex-row gap-6 mb-10 w-full group'>
            <div className='flex flex-col items-center'>
                <div
                    className='flex justify-center items-center w-16 h-16 rounded-full border-4 border-white z-10 shadow-lg overflow-hidden shrink-0'
                    style={{ background: experience.iconBg }}
                >
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className='w-[60%] h-[60%] object-contain'
                    />
                </div>
                <div className='w-1 h-full bg-gradient-to-b from-gray-300 to-transparent dark:from-white/20 -mt-2 rounded-full' />
            </div>

            <div className='bg-tertiary p-8 rounded-2xl w-full flex-1 relative md:top-2 shadow-card border border-white/5 hover:border-white/10 transition-colors'>
                <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
                        <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
                            {experience.company_name}
                        </p>
                    </div>
                </div>
                <div className="mt-2 text-white-100 text-[14px] font-mono opacity-80 mb-4 block">
                    {experience.date}
                </div>

                <ul className='list-disc ml-5 space-y-2'>
                    {experience.points.map((point, index) => (
                        <li
                            key={`experience-point-${index}`}
                            className='text-white-100 text-[14px] pl-1 tracking-wider text-justify leading-6'
                        >
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    What I have done so far
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    Work Experience.
                </h2>
            </motion.div>

            <div className='mt-20 flex flex-col'>
                {experiences.map((experience, index) => (
                    <ExperienceCard
                        key={`experience-${index}`}
                        experience={experience}
                    />
                ))}
            </div>
        </>
    );
};

const ExperienceSection = SectionWrapper(Experience, "work");
export default ExperienceSection;
