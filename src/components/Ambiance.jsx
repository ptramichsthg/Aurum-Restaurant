import React from 'react';
import { motion } from 'framer-motion';

export default function Ambiance() {
    const images = [
        {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgBA_e8ZBdJ084bdwM39tkkNI2Uou1oWNt0ySmMHIPAthlfzEXY9rvse8Cwq5U3tDY55e-fKow8efSUd5N-jB5KHQFsV3-wnjnDrLkjMgvtyCPTfBJDoStN5DWqEACFERzdlZTZ5FqTKQLiY8Kt8BxqgSZjvilr96CgmRiaVrMp7Qp7AVDD2a-ZC_TCBln7PIEgVqj6Mmju7_Bm_GAhM6JNv8RnpOonbUuC9wo5VOssqpBTPcugAZ5MZnrNak4HRjOIMfvdRg6B-Y",
            alt: "Dining Hall",
            className: "md:col-span-2 md:row-span-2"
        },
        {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyJcZJ7zXT9Uj0u-lil3EkKWQ5lY20iC-4jif96nYHG9709E58t6GK6HsuYcEBIwhvTHH3Hl1jCWPmVt-Ps0tWMTTezZIjPSr2GrxgzOe2uAHgNtiNXB9wxw9FgcwCXQj3jhjTifKWm-V2e7gUsNQL5dF3evPkJbUNt-5CQcowGN2Plkl0cNkf8gSPUtRPaYJVECR68QbqmCwtDTLOiB_rPjtQ5E-aSOObGtz5-chbJ896FdFWrXsAY1oMVqb0unEJ71bZ4c9LJQw",
            alt: "Wine Detail",
            className: "md:col-span-1 md:row-span-1"
        },
        {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqoowULCwK9vPtwfrxyFW2JVo7lqQxmLZ8Xaa_HJxl0qRXOcdM6G-Yi5wxYdPKlpvnez4xpxqo3UurnTkmd-KbxHyjg0D3rI2LvdPuhvhQOa65qA2LviLOFmo9ZpytdyTB3ZUVSodWwHQUeZ1syM3BCJvJw8v7axj0IG3AsK9c0RAbKZtUhlvgIvz8NifM5-u-kxzrwvEe03iJfIln1Mzam2kUwTHfjj0p2J8ZBx7dTFqtgN-57buaMRhFWp2LtdqJeqAZ_0kAJCs",
            alt: "Private Room",
            className: "md:col-span-1 md:row-span-2"
        },
        {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_soo5GTJkqOg_m6oMN3DSHKyNdRnoEgBWCEtEFdFLJHgVPQrAqnVM6qxEDN1tqeYOeQaSaJDULiPJZ4ozgpNoVed45d7E3AKfxesYUOlmuV5y-RVNais40lxjnHtatf49tedy7Ty_MsY2n-k_X1CsWhv7iiyvruGLwBd7TExq-AwVQlvlTNBb43PGk1ZGq6AOWQuzUX1_5gEiGCO7Asvw7KSEXtMac8GwiNO9yC11anFeRqcEDh19cRyQOD_89Xze5kfwVLsRyJw",
            alt: "Cocktail",
            className: "md:col-span-1 md:row-span-1"
        }
    ];

    return (
        <section className="py-24 px-4 md:px-10 lg:px-20 bg-background-dark border-t border-[#302c1c]" id="ambiance">
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
                        <button className="size-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 group">
                            <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        </button>
                        <button className="size-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 group">
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[700px]">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`${img.className} rounded-sm overflow-hidden relative group cursor-pointer`}
                        >
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 w-full h-full"></div>
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110"
                                style={{ backgroundImage: `url("${img.src}")` }}
                            >
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
                                <span className="text-white/80 font-serif italic text-xl tracking-wider">{img.alt}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
