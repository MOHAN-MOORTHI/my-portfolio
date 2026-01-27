import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const SocialSidebar = () => {
    return (
        <div className="fixed left-8 bottom-0 z-50 hidden lg:flex flex-col gap-6 items-center">
            <div className="flex flex-col gap-6">
                <a
                    href="https://github.com/MOHAN-MOORTHI"
                    target="_blank"
                    rel="noreferrer"
                    className="text-secondary hover:text-[#915eff] hover:-translate-y-1 transition-all duration-300"
                    aria-label="GitHub"
                >
                    <Github size={24} />
                </a>
                <a
                    href="https://www.linkedin.com/in/mohan-moorthi"
                    target="_blank"
                    rel="noreferrer"
                    className="text-secondary hover:text-[#915eff] hover:-translate-y-1 transition-all duration-300"
                    aria-label="LinkedIn"
                >
                    <Linkedin size={24} />
                </a>
                <a
                    href="mailto:mohangopippt@gmail.com"
                    className="text-secondary hover:text-[#915eff] hover:-translate-y-1 transition-all duration-300"
                    aria-label="Email"
                >
                    <Mail size={24} />
                </a>
            </div>
            <div className="w-[2px] h-32 bg-gradient-to-b from-secondary to-transparent"></div>
        </div>
    );
};

export default SocialSidebar;
