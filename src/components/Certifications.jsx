import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { certifications } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { Award, ExternalLink } from "lucide-react";

const CertificationCard = ({ index, name, issuer, date, link }) => (
    <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className="w-full xs:w-[320px]"
    >
        <Tilt
            options={{
                max: 45,
                scale: 1,
                speed: 450,
            }}
            className='w-full'
        >
            <div className="w-full green-pink-gradient p-[1px] rounded-3xl shadow-card">
                <div className="bg-tertiary p-8 rounded-3xl h-full flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 rounded-full bg-black-200 shadow-inner">
                                <Award className="text-[#915eff] w-8 h-8" />
                            </div>
                            <p className='text-secondary text-[12px] font-bold bg-black-200 py-1 px-3 rounded-full shadow-sm'>
                                {date}
                            </p>
                        </div>

                        <h3 className='text-white font-bold text-[20px] leading-[30px] line-clamp-2 min-h-[60px]'>
                            {name}
                        </h3>
                        <p className='mt-2 text-secondary text-[14px] flex items-center gap-1'>
                            Issued by <span className="text-white font-semibold">{issuer}</span>
                        </p>
                    </div>

                    {link && (
                        <div className="mt-6 pt-4 border-t border-white/10">
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-[#915eff] hover:text-white transition-colors text-[14px] font-bold group"
                            >
                                View Certificate
                                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </Tilt>
    </motion.div>
);

const Certifications = () => {
    return (
        <div className={`mt-12 bg-black-100 rounded-[20px]`}>
            <div
                className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
            >
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>My achievements</p>
                    <h2 className={styles.sectionHeadText}>Certifications.</h2>
                </motion.div>
            </div>
            <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
                {certifications.map((cert, index) => (
                    <CertificationCard key={cert.name} index={index} {...cert} />
                ))}
            </div>
        </div>
    );
};

const CertificationsSection = SectionWrapper(Certifications, "certifications");
export default CertificationsSection;
