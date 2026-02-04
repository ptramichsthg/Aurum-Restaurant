import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-[#15130b] border-t border-[#302c1c] py-20 px-6">
            <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center gap-12">

                {/* Brand Mark */}
                <div className="flex flex-col items-center gap-4 group cursor-default">
                    <div className="size-10 text-primary transition-transform duration-700 group-hover:rotate-180">
                        <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd"></path>
                        </svg>
                    </div>
                    <h2 className="text-white text-3xl font-bold tracking-[0.3em] font-serif uppercase">AURUM</h2>
                </div>

                {/* Minimal Nav */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                    {['Menu', 'Philosophy', 'Ambiance', 'Reservations', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-text-gold-muted hover:text-white transition-colors text-xs uppercase tracking-[0.2em] font-medium"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* Divider */}
                <div className="w-12 h-px bg-primary/30"></div>

                {/* Socials & Info */}
                <div className="flex flex-col gap-6 items-center">
                    <div className="flex gap-8">
                        {['Instagram', 'Facebook', 'Twitter'].map((social) => (
                            <a key={social} className="text-[#605739] hover:text-primary transition-colors duration-300" href="#">
                                <span className="text-xs uppercase tracking-widest">{social}</span>
                            </a>
                        ))}
                    </div>
                    <p className="text-[#433d28] text-[10px] uppercase tracking-widest">
                        123 Luxury Avenue, Metropolis, NY 10012
                        <span className="mx-3">•</span>
                        © 2026 Aurum Restaurant
                    </p>
                </div>
            </div>
        </footer>
    );
}
