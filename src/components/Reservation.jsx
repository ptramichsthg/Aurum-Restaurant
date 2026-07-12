import React from 'react';
import { motion } from 'framer-motion';

export default function Reservation() {
    return (
        <section className="py-32 px-4 relative overflow-hidden flex items-center justify-center" id="reservations">
            {/* Parallax Background */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed bg-no-repeat"
                role="img"
                aria-label="Fine dining table setting"
                style={{
                    backgroundImage: 'url("/assets/images/hero.jpg")',
                    filter: 'brightness(0.3)'
                }}
            ></div>

            <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-background-dark to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-[#15130b] to-transparent"></div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center gap-8"
            >
                <span className="text-primary/80 text-sm uppercase tracking-[0.3em] font-medium border-x border-primary/30 px-6 py-1">Reservations</span>

                <h2 className="text-white font-serif text-5xl md:text-7xl font-medium tracking-wide">
                    Secure Your Table
                </h2>

                <p className="text-aurum-offwhite/90 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto font-display">
                    Tables are released 30 days in advance. We invite you to join us for an evening of culinary excellence.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 w-full sm:w-auto">
                    <button className="bg-primary hover:bg-white text-background-dark font-bold py-5 px-12 rounded-sm transition-all duration-300 tracking-[0.2em] text-xs uppercase hover:scale-105 min-w-[200px]">
                        Book a Table
                    </button>
                    <button className="bg-transparent border border-white/30 text-white hover:bg-white hover:text-background-dark font-bold py-5 px-12 rounded-sm transition-all duration-300 tracking-[0.2em] text-xs uppercase hover:scale-105 min-w-[200px]">
                        Private Events
                    </button>
                </div>
            </motion.div>
        </section>
    );
}
