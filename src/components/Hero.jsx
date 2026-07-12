import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <header className="relative flex min-h-[95vh] flex-col items-center justify-center overflow-hidden bg-background-dark">
            {/* Background Image with Zoom Effect */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "easeOut" }}
                    className="w-full h-full bg-cover bg-center bg-no-repeat"
                    role="img"
                    aria-label="Fine dining ambiance background"
                    style={{ backgroundImage: 'linear-gradient(rgba(20, 18, 10, 0.6), rgba(20, 18, 10, 0.4)), url("/assets/images/hero.jpg")' }}
                />
                <div className="absolute inset-0 bg-linear-to-b from-background-dark/30 via-transparent to-background-dark/80"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center gap-6"
                >
                    <div className="flex items-center gap-4">
                        <div className="h-px w-12 bg-primary/60"></div>
                        <p className="text-primary text-sm md:text-base uppercase tracking-[0.3em] font-medium font-sans">Fine Dining Reimagined</p>
                        <div className="h-px w-12 bg-primary/60"></div>
                    </div>

                    <h1 className="text-white text-5xl md:text-7xl lg:text-9xl font-serif font-medium leading-none tracking-tight break-words max-w-full">
                        AURUM
                    </h1>

                    <p className="text-aurum-offwhite/90 text-lg md:text-2xl font-light leading-relaxed max-w-2xl mx-auto font-display tracking-wide">
                        Experience the pinnacle of culinary artistry. <br className="hidden md:block" />
                        A symphony of rare flavors and <span className="text-primary italic font-serif">golden moments</span>.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                    <a href="#reservations" className="inline-block relative overflow-hidden group border border-primary text-primary px-12 py-4 rounded-sm transition-all duration-300 hover:bg-primary hover:text-background-dark text-center">
                        <span className="relative text-sm md:text-base font-bold uppercase tracking-[0.2em]">Reserve Your Table</span>
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 animate-bounce text-white/40 cursor-pointer hover:text-primary transition-colors"
            >
                <span className="material-symbols-outlined text-4xl font-thin">keyboard_arrow_down</span>
            </motion.div>
        </header>
    );
}
