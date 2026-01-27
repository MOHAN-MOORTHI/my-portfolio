import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { Code, Smartphone, Server, PenTool } from "lucide-react";

// Helper to get icon component
const ServiceIcon = ({ iconName }) => {
    switch (iconName) {
        case 'code': return <Code size={48} className="text-white" />;
        case 'mobile': return <Smartphone size={48} className="text-white" />;
        case 'server': return <Server size={48} className="text-white" />;
        case 'creator': return <PenTool size={48} className="text-white" />;
        default: return <Code size={48} className="text-white" />;
    }
}

const ServiceCard = ({ index, title, icon }) => (
    <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
        <Tilt
            options={{
                max: 45,
                scale: 1,
                speed: 450,
            }}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
            <ServiceIcon iconName={icon} />

            <h3 className='text-white text-[20px] font-bold text-center'>
                {title}
            </h3>
        </Tilt>
    </motion.div>
);

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-10 items-center mt-4">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='text-secondary text-[17px] max-w-3xl leading-[30px] flex-1 text-justify'
                >
                    I am a dedicated Python Full Stack Developer with a passion for building next-generation web applications. Specializing in the Python, Django, and React ecosystem, I bridge the gap between complex backend logic and responsive frontend design. My focus is on delivering high-performance, scalable solutions that solve real-world problems. I approach every project with a commitment to clean architecture, code quality, and exceptional user experience. Driven by curiosity and a results-oriented mindset, I continuously adapt to emerging technologies to create software that makes a difference.
                </motion.p>
                <motion.div
                    variants={fadeIn("left", "", 0.1, 1)}
                    className="flex-1 flex justify-center"
                >
                    <Tilt options={{ max: 45, scale: 1.1, speed: 450 }} className="rounded-full">
                        <div className="relative w-[260px] h-[260px] rounded-full p-[2px] green-pink-gradient shadow-card">
                            <img
                                src="/PHOTO.jpg"
                                alt="Mohan"
                                className="w-full h-full object-cover rounded-full border-4 border-[#915eff]"
                            />
                        </div>
                    </Tilt>
                </motion.div>
            </div>

            <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

const AboutSection = SectionWrapper(About, "about");
export default AboutSection;
