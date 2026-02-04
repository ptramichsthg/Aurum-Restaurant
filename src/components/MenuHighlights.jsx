import React from 'react';
import { motion } from 'framer-motion';

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

export default function MenuHighlights() {
    const menuItems = [
        {
            title: "Wagyu Truffle Tartare",
            description: "A5 Wagyu, black truffle shavings, cured quail egg, gold dust",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_J2qW7FDf0DvS7XBzUYhilU_npSGI1vWYy9PZm9DTk_I5y9soMI_OrjexJN1jRUbi589XQZFjWg1s_6bpvEiAhRik0dF3QHdfvwTPCMuZ9kjmzC37jSvveaXxmeK--n0RZgrDi4SD3yDjXdcUT7WaRgyVVtYvhqM9j0jgc-SIxCFWRaWYEGIB4xSbtMOlxZ6_t8xp9b__4GNNfj0yEFBjWBRIqdztl6kfBFfkYMSnY_SKPfq5fhn_ARuHPL7_pGeVI2tub_Yj2CE"
        },
        {
            title: "Saffron Poached Lobster",
            description: "Maine lobster tail, saffron reduction, ossetra caviar",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcNw2ntYt1745t9P77JpJJKFXEsaaEnm_eDXx6n26HHppTv7V8Wf6YVWblEIw3-RwrN8fhYv75j_-GUX-YX88AoR0LF_ANc1NZaiHZAdYEx_p2OtuD6n2OmAcl2mB5rRSovjoIZNt5tET4MC3srKykp_l84Mzf0WyaczzPvrzZHqF5KLfLsN54OGtvN3T_kn25PXSDMFtOUUCxHdDuqz4f-yi4VqGdfE8e4humZny7MFzJyMa1msuNVq6LUOJR8CLmk3kgozr4QRk"
        },
        {
            title: "Gold Leaf Chocolate Dome",
            description: "70% dark chocolate, edible gold leaf, raspberry coulis core",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBphYPIq7B95Sfd1YojaCZAMBbAVopRG9rVoOY6bJAbSpP1bY4Rq-61O9yd2ooE2ck3BNirLylY2Vxi-AYyVl-LoPTuoaUlerTnKZgTZvecykClSLWR9DT_2mngqqpX_iIrDNEda7mWvix6UZFZosjRp7goyOaHovOfCul8HoxFXHLNawonvBsLQhOHB507s6rMdaN2ik_TjyAobmUltvcNHkAMrysXjgTauDlMxpYqcFqeFVjWRsb8tNgT6nGAM8XqMaKiNFWVxQQ"
        }
    ];

    return (
        <section className="py-24 px-4 md:px-10 lg:px-20 bg-[#1a180f]" id="menu">
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
