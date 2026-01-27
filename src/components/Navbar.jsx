import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { Typewriter } from './';

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute("id");
                        const navLink = navLinks.find((nav) => nav.id === id);
                        if (navLink) {
                            setActive(navLink.title);
                        }
                    }
                });
            },
            {
                threshold: 0.2, // Trigger early when entering
                rootMargin: "-100px 0px -50% 0px"
            }
        );

        navLinks.forEach((nav) => {
            const section = document.getElementById(nav.id);
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        if (theme === "light") {
            document.documentElement.classList.add("light");
            document.documentElement.classList.remove("dark");
        } else {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const handleDownloadCV = () => {
        // Replace with actual resume path when available
        window.open('/MOHAN P_MCA 2023_RESUME.pdf', '_blank');
    };

    return (
        <nav
            className={`${styles.paddingX
                } w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${scrolled ? (theme === 'light' ? "bg-white/80 shadow-md backdrop-blur-md" : "bg-primary/90 backdrop-blur-md") : "bg-transparent backdrop-blur-[2px]"
                }`}
        >
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link
                    to='/'
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <p className={`text-[32px] font-bold cursor-pointer flex items-center ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                        <span className="text-[#915EFF] mr-2">
                            <Typewriter text="PORTFOLIO" delay={100} />
                        </span>
                    </p>
                </Link>

                <div className="hidden sm:flex flex-row gap-8 items-center">
                    <ul className='list-none flex flex-row gap-8'>
                        {navLinks.map((nav) => (
                            <li
                                key={nav.id}
                                className={`${active === nav.title
                                    ? (theme === 'light' ? "text-primary" : "text-white")
                                    : (theme === 'light' ? "text-gray-600" : "text-gray-300")
                                    } hover:${theme === 'light' ? 'text-black' : 'text-white'} text-[18px] font-medium cursor-pointer transition-colors`}
                                onClick={() => setActive(nav.title)}
                            >
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>

                    {/* Resume Button */}
                    <button
                        onClick={handleDownloadCV}
                        className={`flex items-center gap-2 py-2 px-4 rounded-full border border-[#915eff] text-[#915eff] hover:bg-[#915eff] hover:text-white transition-all font-medium text-[16px]`}
                    >
                        <Download size={18} />
                        <span>CV</span>
                    </button>

                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-full hover:bg-opacity-20 hover:bg-gray-500 transition-all ${theme === 'light' ? 'text-black' : 'text-white'}`}
                        aria-label="Toggle Theme"
                    >
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                </div>

                <div className='sm:hidden flex items-center gap-4'>
                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-full ${theme === 'light' ? 'text-black' : 'text-white'}`}
                    >
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                    <div onClick={() => setToggle(!toggle)} className={`cursor-pointer ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                        {toggle ? <X /> : <Menu />}
                    </div>
                </div>

                <div
                    className={`${!toggle ? "hidden" : "flex"
                        } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-slate-800`}
                >
                    <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                        {navLinks.map((nav) => (
                            <li
                                key={nav.id}
                                className={`font-sans font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-gray-300"
                                    }`}
                                onClick={() => {
                                    setToggle(!toggle);
                                    setActive(nav.title);
                                }}
                            >
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                        <li
                            className="font-sans font-medium cursor-pointer text-[16px] text-[#915eff] flex items-center gap-2 mt-2"
                            onClick={handleDownloadCV}
                        >
                            <Download size={16} />
                            <span>Download CV</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
