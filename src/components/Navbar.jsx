import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            
            setIsScrolled(window.scrollY > 50);
        };

        const sections = ['philosophy', 'menu', 'ambiance', 'contact'];
        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of viewport
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach((sectionId) => {
            const element = document.getElementById(sectionId);
            if (element) {
                observer.observe(element);
            }
        });

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    const navLinks = [
        { name: 'Philosophy', id: 'philosophy' },
        { name: 'Menu', id: 'menu' },
        { name: 'Ambiance', id: 'ambiance' },
        { name: 'Contact', id: 'contact' }
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 z-50 w-full transition-all duration-300 border-b ${isScrolled
                    ? 'bg-background-dark/95 backdrop-blur-md border-[#433d28] py-2'
                    : 'bg-transparent border-transparent py-6'
                    }`}
            >
                <div className="layout-container flex justify-center">
                    <div className="w-full max-w-[1200px] px-6 flex items-center justify-between">
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="flex items-center gap-3 text-white cursor-pointer group"
                        >
                            <div className={`size-8 text-primary transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'} group-hover:scale-110`}>
                                <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd"></path>
                                </svg>
                            </div>
                            <h2 className="text-white text-2xl font-bold tracking-[0.2em] font-serif uppercase group-hover:text-primary transition-colors">Aurum</h2>
                        </a>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex flex-1 justify-end gap-12 items-center">
                            <div className="flex gap-10">
                                {navLinks.map((item) => (
                                    <a
                                        key={item.name}
                                        href={`#${item.id}`}
                                        className={`text-xs uppercase tracking-[0.15em] font-medium relative group transition-colors duration-300 ${activeSection === item.id ? 'text-primary' : 'text-white/90 hover:text-primary'
                                            }`}
                                    >
                                        {item.name}
                                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                                            }`}></span>
                                    </a>
                                ))}
                            </div>
                            <a href="#reservations" className="relative overflow-hidden group border border-primary/50 hover:border-primary px-8 py-2.5 rounded-sm transition-all duration-300 flex items-center justify-center">
                                <span className="absolute inset-0 w-full h-full bg-primary/10 transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0"></span>
                                <span className="relative text-primary text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors">Reserve</span>
                            </a>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button aria-label="Toggle Menu" className="lg:hidden text-white cursor-pointer z-50 bg-transparent border-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <span className="material-symbols-outlined text-3xl">{isMenuOpen ? 'close' : 'menu'}</span>
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="fixed inset-0 z-40 bg-background-dark/98 backdrop-blur-xl lg:hidden flex flex-col items-center justify-center gap-8"
                    >
                        <div className="flex flex-col items-center gap-8">
                            {navLinks.map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1 }}
                                    href={`#${item.id}`}
                                    className={`text-2xl font-serif tracking-widest transition-colors ${activeSection === item.id ? 'text-primary' : 'text-white hover:text-primary'
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </motion.a>
                            ))}

                            <motion.a
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                href="#reservations"
                                onClick={() => setIsMenuOpen(false)}
                                className="mt-8 border border-primary text-primary px-10 py-3 rounded-sm uppercase tracking-widest text-sm hover:bg-primary hover:text-black transition-all text-center inline-block"
                            >
                                Reserve Table
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
