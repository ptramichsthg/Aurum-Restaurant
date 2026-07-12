import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const FeatureCard = ({ icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
        className="flex flex-col gap-4 p-8 rounded-sm border border-[#605739]/20 bg-surface-dark/30 backdrop-blur-sm hover:bg-surface-dark/50 hover:border-primary/30 transition-all duration-500 group"
    >
        <div className="text-primary mb-2 group-hover:scale-110 transition-transform duration-500 origin-left">
            <span className="material-symbols-outlined text-4xl font-light">{icon}</span>
        </div>
        <h3 className="text-white text-xl font-serif font-medium tracking-wide">{title}</h3>
        <p className="text-text-gold-muted text-sm leading-relaxed font-light">{description}</p>
    </motion.div>
);

FeatureCard.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    delay: PropTypes.number.isRequired,
};

export default function Philosophy() {
    return (
        <section className="py-24 px-4 md:px-10 lg:px-20 bg-background-dark relative overflow-hidden" id="philosophy">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-b from-primary/5 to-transparent pointer-events-none opacity-30"></div>

            <div className="max-w-[1200px] mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col gap-8"
                    >
                        <div className="flex flex-col gap-2">
                            <div className="h-px w-16 bg-primary"></div>
                            <span className="text-primary text-sm uppercase tracking-[0.2em] font-medium">Our Story</span>
                        </div>

                        <h2 className="text-white font-serif text-5xl md:text-6xl font-medium leading-tight">
                            Culinary Artistry <br />
                            <span className="text-primary italic">Meet Tradition</span>
                        </h2>

                        <p className="text-text-gold-muted text-lg leading-relaxed font-light max-w-lg">
                            At AURUM, we believe dining is an immersive art form. Our ingredients are sourced from the rarest corners of the globe, prepared with meticulous precision to create an unforgettable gastronomic journey. We don't just serve food; we curate memories.
                        </p>

                        <button className="flex items-center gap-3 text-white text-sm uppercase tracking-widest font-bold hover:text-primary transition-colors mt-4 group w-fit">
                            Read Our Full Story
                            <span className="material-symbols-outlined text-lg group-hover:translate-x-2 transition-transform duration-300">arrow_forward</span>
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="relative h-[500px] w-full"
                    >
                        <div className="absolute inset-0 border border-primary/20 translate-x-4 translate-y-4 rounded-sm z-0"></div>
                        <div className="relative h-full w-full rounded-sm overflow-hidden z-10 group">
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-700"></div>
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                                role="img"
                                aria-label="Chef plating a high-end dish with tweezers"
                                style={{ backgroundImage: 'url("/assets/images/chef.jpg")' }}
                            >
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard
                        icon="eco"
                        title="Sustainably Sourced"
                        description="Ingredients selected for their peak freshness and ethical origins from local artisans."
                        delay={0}
                    />
                    <FeatureCard
                        icon="restaurant"
                        title="Masterful Technique"
                        description="Traditional methods meet avant-garde innovation in our state-of-the-art kitchen."
                        delay={0.2}
                    />
                    <FeatureCard
                        icon="concierge"
                        title="Unparalleled Service"
                        description="A dedicated team ensuring your evening is nothing short of perfection."
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    );
}
