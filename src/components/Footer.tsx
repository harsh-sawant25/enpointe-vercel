"use client";

import React from 'react';
import { intersemibold, interregular } from '@/fonts';

const Footer = () => {
    return (
        <footer className="relative bg-[#000000] py-[120px] px-5 md:px-[80px] overflow-hidden border-t border-white/10">
            {/* graphics_blurred-sphere 1 (framer-1tjngxh) */}
            <div className="absolute top-[-25%] left-[-15%] w-[800px] h-[800px] bg-[#00e5c8]/10 rounded-full blur-[140px] pointer-events-none opacity-60" />
            
            {/* graphics_blurred-sphere 2 (framer-15ryv6w) */}
            <div className="absolute bottom-[-15%] right-[0%] w-[700px] h-[700px] bg-[#5844E3]/10 rounded-full blur-[140px] pointer-events-none opacity-50" />
            
            {/* graphics_blurred-sphere 3 (framer-1nwlup1) */}
            <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-[#A6DAFF]/5 rounded-full blur-[120px] pointer-events-none opacity-40" />

            {/* overlay_image (framer-254tl8) - Sublte noise/grain texture */}
            <div 
                className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                style={{ 
                    backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`,
                    backgroundSize: '150px'
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[400px]">
                <div className="flex flex-col items-center">
                    {/* Heading 1 (framer-1n61q4w) */}
                    <div className="mb-[24px]">
                        <h2 className={`${intersemibold.className} text-[36px] md:text-[48px] text-white text-center font-semibold leading-[1.2] md:leading-[69.12px] tracking-[-1.5px] md:tracking-[-2.02px]`}>
                            <p>Let&apos;s make something</p>
                            <p>great together.</p>
                        </h2>
                    </div>

                    {/* p.paragraph-dark (framer-md6ud9) */}
                    <div className="mb-[48px]">
                        <div className={`${interregular.className} flex flex-col items-center text-center`}>
                            <p className="text-[15px] leading-[32px] tracking-[0.2px] text-white/60 font-normal">
                                Let us know what challenges you are
                            </p>
                            <p className="text-[15px] leading-[32px] tracking-[0.2px] text-white/60 font-normal">
                                trying to solve so we can help.
                            </p>
                        </div>
                    </div>

                    {/* Link SVG (framer-1j4r3ix) */}
                    <div className="cursor-pointer group flex items-center justify-center">
                        <div className="w-[64px] h-[64px] rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-white group-hover:border-white group-hover:scale-105 active:scale-95">
                            <svg 
                                width="32" 
                                height="32" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="text-white group-hover:text-black transition-colors"
                            >
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;