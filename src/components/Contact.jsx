import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section className="py-24 px-4 md:px-10 lg:px-20 bg-[#1a180f] relative overflow-hidden" id="contact">
            {/* Background patterns */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-[1200px] mx-auto z-10 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col gap-10"
                    >
                        <div>
                            <span className="text-primary text-sm uppercase tracking-[0.2em] font-medium mb-3 block">Get In Touch</span>
                            <h2 className="text-white font-serif text-5xl md:text-6xl font-medium leading-tight">
                                Visit Us
                            </h2>
                        </div>

                        <div className="flex flex-col gap-8">
                            <div className="group">
                                <h4 className="text-white font-serif text-xl mb-2 flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary font-light">location_on</span>
                                    Location
                                </h4>
                                <p className="text-text-gold-muted font-light leading-relaxed pl-9 group-hover:text-white transition-colors">
                                    123 Luxury Avenue, <br />
                                    Metropolis, NY 10012
                                </p>
                            </div>

                            <div className="group">
                                <h4 className="text-white font-serif text-xl mb-2 flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary font-light">call</span>
                                    Reservations
                                </h4>
                                <p className="text-text-gold-muted font-light leading-relaxed pl-9 group-hover:text-white transition-colors">
                                    +1 (555) 123-4567 <br />
                                    reservations@aurum.com
                                </p>
                            </div>

                            <div className="group">
                                <h4 className="text-white font-serif text-xl mb-2 flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary font-light">schedule</span>
                                    Opening Hours
                                </h4>
                                <div className="pl-9 text-text-gold-muted font-light group-hover:text-white transition-colors">
                                    <div className="flex justify-between max-w-[200px] border-b border-[#302c1c] pb-2 mb-2">
                                        <span>Mon - Sun</span>
                                        <span>17:00 - 23:00</span>
                                    </div>
                                    <div className="flex justify-between max-w-[200px]">
                                        <span>Happy Hour</span>
                                        <span>16:00 - 18:00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="bg-surface-dark/30 backdrop-blur-sm border border-[#605739]/30 p-8 md:p-12 rounded-sm"
                    >
                        <h3 className="text-white font-serif text-3xl mb-8">Send a Message</h3>
                        <form className="flex flex-col gap-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-text-gold-muted text-xs uppercase tracking-widest">Name</label>
                                    <input type="text" className="bg-transparent border-b border-[#605739]/50 text-white py-2 focus:border-primary focus:outline-hidden transition-colors font-light" placeholder="Your Name" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-text-gold-muted text-xs uppercase tracking-widest">Email</label>
                                    <input type="email" className="bg-transparent border-b border-[#605739]/50 text-white py-2 focus:border-primary focus:outline-hidden transition-colors font-light" placeholder="your@email.com" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-text-gold-muted text-xs uppercase tracking-widest">Subject</label>
                                <select className="bg-transparent border-b border-[#605739]/50 text-white py-2 focus:border-primary focus:outline-hidden transition-colors font-light [&>option]:bg-background-dark">
                                    <option>General Inquiry</option>
                                    <option>Private Events</option>
                                    <option>Press</option>
                                    <option>Careers</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-text-gold-muted text-xs uppercase tracking-widest">Message</label>
                                <textarea rows="4" className="bg-transparent border-b border-[#605739]/50 text-white py-2 focus:border-primary focus:outline-hidden transition-colors font-light resize-none" placeholder="How can we assist you?"></textarea>
                            </div>
                            <button className="mt-4 border border-primary text-primary hover:bg-primary hover:text-background-dark py-4 rounded-sm text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 w-full sm:w-auto self-start px-10">
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
