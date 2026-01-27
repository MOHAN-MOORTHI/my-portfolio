import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="w-full bg-primary/20 backdrop-blur-md border-t border-[#1d1836] py-8 flex flex-col items-center gap-4 text-gray-500 relative z-10">
            <div className="flex gap-6">
                <a href="https://github.com/MOHAN-MOORTHI" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#915eff] transition-colors p-2 rounded-full hover:bg-white/5">
                    <Github size={20} />
                    <span className="hidden sm:inline">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/mohan-moorthi" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#915eff] transition-colors p-2 rounded-full hover:bg-white/5">
                    <Linkedin size={20} />
                    <span className="hidden sm:inline">LinkedIn</span>
                </a>
                <a href="mailto:mohangopippt@gmail.com" className="flex items-center gap-2 hover:text-[#915eff] transition-colors p-2 rounded-full hover:bg-white/5">
                    <Mail size={20} />
                    <span className="hidden sm:inline">Email</span>
                </a>
            </div>
            <p className="text-[14px]">
                &copy; {new Date().getFullYear()} MOHAN P. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
