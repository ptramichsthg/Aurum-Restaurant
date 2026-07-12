import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Ambiance() {
    const allImages = [
        {
            src: "/assets/images/ambiance-1.jpg",
            alt: "Dining Hall",
            className: "md:col-span-2 md:row-span-2"
        },
        {
            src: "/assets/images/ambiance-2.jpg",
            alt: "Wine Detail",
            className: "md:col-span-1 md:row-span-1"
        },
        {
            src: "/assets/images/ambiance-3.jpg",
            alt: "Private Room",
            className: "md:col-span-1 md:row-span-2"
        },
        {
            src: "/assets/images/ambiance-4.jpg",
            alt: "Cocktail",
            className: "md:col-span-1 md:row-span-1"
        }
    ];

    const [images, setImages] = useState(allImages);

    const handleNext = () => {
        setImages((prev) => {
            const newImages = [...prev];
            const first = newImages.shift();
            newImages.push(first);
            // Re-apply layout classes so they stay in the same layout structure
            return newImages.map((img, i) => ({ ...img, className: allImages[i].className }));
        });
    };

    const handlePrev = () => {
        setImages((prev) => {
            const newImages = [...prev];
            const last = newImages.pop();
            newImages.unshift(last);
            return newImages.map((img, i) => ({ ...img, className: allImages[i].className }));
        });
    };

    return (
        <section className="py-24 px-4 md:px-10 lg:px-20 bg-background-dark border-t border-surface-border" id="ambiance">
            <div className="max-w-[1200px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
                >
                    <div>
                        <span className="text-primary text-sm uppercase tracking-widest font-medium mb-2 block">Atmosphere</span>
                        <h2 className="text-white font-serif text-5xl md:text-6xl font-medium mb-6">The Ambiance</h2>
                        <p className="text-text-gold-muted max-w-lg text-lg font-light leading-relaxed">
                            Designed for intimacy and grandeur. Every corner of AURUM tells a story of elegance, where golden light meets shadow in a dance of luxury.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <button onClick={handlePrev} aria-label="Previous image" className="size-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 group cursor-pointer">
                            <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        </button>
                        <button onClick={handleNext} aria-label="Next image" className="size-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 group cursor-pointer">
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[700px]">
                    <AnimatePresence mode="popLayout">
                        {images.map((img, index) => (
                            <motion.div
                                key={img.src} // Using src as key for animation tracking
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className={`${img.className} rounded-sm overflow-hidden relative group cursor-pointer`}
                            >
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 w-full h-full"></div>
                                <div
                                    className="w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110"
                                    role="img"
                                    aria-label={img.alt}
                                    style={{ backgroundImage: `url("${img.src}")` }}
                                >
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
                                    <span className="text-white/80 font-serif italic text-xl tracking-wider">{img.alt}</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
