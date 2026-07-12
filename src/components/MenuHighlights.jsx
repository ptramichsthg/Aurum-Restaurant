import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const MenuItem = ({ title, description, image, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
        className="group flex flex-col gap-5 cursor-pointer"
    >
        <div className="overflow-hidden rounded-sm aspect-4/5 relative">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
            <div
                className="w-full h-full bg-center bg-no-repeat bg-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                role="img"
                aria-label={title}
                style={{ backgroundImage: `url("${image}")` }}
            >
            </div>
            <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20 bg-linear-to-t from-black/80 to-transparent">
                <span className="text-white text-xs uppercase tracking-widest border-b border-primary pb-1">View Details</span>
            </div>
        </div>
        <div className="text-center px-2">
            <h4 className="text-white text-2xl font-serif font-medium mb-2 group-hover:text-primary transition-colors duration-300">{title}</h4>
            <p className="text-text-gold-muted text-sm font-light leading-relaxed">{description}</p>
        </div>
    </motion.div>
);

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    delay: PropTypes.number.isRequired,
};

export default function MenuHighlights() {
    const menuItems = [
        {
            title: "Wagyu Truffle Tartare",
            description: "A5 Wagyu, black truffle shavings, cured quail egg, gold dust",
            image: "/assets/images/menu-1.jpg"
        },
        {
            title: "Saffron Poached Lobster",
            description: "Maine lobster tail, saffron reduction, ossetra caviar",
            image: "/assets/images/menu-2.jpg"
        },
        {
            title: "Gold Leaf Chocolate Dome",
            description: "70% dark chocolate, edible gold leaf, raspberry coulis core",
            image: "/assets/images/menu-3.jpg"
        }
    ];

    return (
        <section className="py-24 px-4 md:px-10 lg:px-20 bg-surface-darkest" id="menu">
            <div className="max-w-[1200px] mx-auto flex flex-col gap-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center gap-4"
                >
                    <span className="text-primary text-sm uppercase tracking-widest font-medium">Gastronomy</span>
                    <h2 className="text-white font-serif text-5xl md:text-6xl font-medium">Curated Highlights</h2>
                    <div className="h-px w-24 bg-white/20 mt-4"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {menuItems.map((item, index) => (
                        <MenuItem
                            key={index}
                            {...item}
                            delay={index * 0.2}
                        />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex justify-center mt-8"
                >
                    <button className="border border-primary text-primary hover:bg-primary hover:text-background-dark px-10 py-3 rounded-sm text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300">
                        View Full Menu
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
