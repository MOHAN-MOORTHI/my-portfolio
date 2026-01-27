import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate sending email
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);

            // Trigger confetti
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                zIndex: 999999
            });

            setForm({
                name: "",
                email: "",
                message: "",
            });
            setTimeout(() => setSuccess(false), 5000);
        }, 1000);
    };

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

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='mt-4 flex flex-col gap-4'
                >
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-1 text-sm'>Your Name</span>
                        <input
                            required
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your good name?"
                            className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-sm'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-1 text-sm'>Your Email</span>
                        <input
                            required
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your web address?"
                            className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-sm'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-1 text-sm'>Your Message</span>
                        <textarea
                            required
                            rows={4}
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder='What you want to say?'
                            className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-sm'
                        />
                    </label>

                    <button
                        type='submit'
                        className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#1d1836] text-sm'
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                    {success && (
                        <p className="text-green-400 text-sm font-semibold mt-2">
                            Thank you! I will get back to you soon.
                        </p>
                    )}
                </form>
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
