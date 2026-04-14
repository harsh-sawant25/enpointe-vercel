"use client";

import React from "react";
import { motion } from "framer-motion";
import "@fontsource/inter/500.css";
import "@fontsource/instrument-serif/400-italic.css";
import { gupterbold, guptermedium } from "@/fonts";

const LOGOS = [
    { src: "https://framerusercontent.com/images/cA77TQVfGxeMQJbtj3ar1ZftUU4.png", alt: "Logo 1", width: 213, height: 84 },
    { src: "https://framerusercontent.com/images/Z5j0rqrGNNye0isuEM2caxLu0.png", alt: "Logo 2", width: 135, height: 43 },
    { src: "https://framerusercontent.com/images/QUom1t7dRCPZDkD29qqHyCqYmI.png", alt: "Logo 3", width: 86, height: 17 },
    { src: "https://framerusercontent.com/images/4PenL1zRsN1Rtic33Ul9wMOL0.png", alt: "Logo 4", width: 83, height: 51 },
    { src: "https://framerusercontent.com/images/ow3KVQUjQIQtRCEI491KsQ4DIo.png", alt: "Logo 5", width: 123, height: 54 },
];

const Visionary = () => {
    return (
        <section id="reviews" className="relative w-full overflow-hidden bg-[#171717] py-20 md:py-32 z-10">

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-4"
                >
                    <h2 className="text-[44px] leading-[1.1] font-medium tracking-tight">
                        <span
                            className={`${guptermedium.className} text-white inline-block bg-clip-text pb-1`}
                        >
                            Trusted by Visionaries
                        </span>
                    </h2>
                </motion.div>

                {/* Subtitle */}
                {/* <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[#96a2b3] text-[15px] sm:text-[16px] max-w-2xl mx-auto mb-16"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                >
                    If you're still not convinced, these are a few visionaries that we have worked with
                </motion.p> */}

            </div>

            {/* Infinite Marquee Slider */}
            <div className="relative w-full flex items-center justify-center pt-8">

                {/* Edge masks for smooth fade in/out of logos */}
                <div className="absolute inset-0 z-10 pointer-events-none" style={{
                    background: "linear-gradient(to right, #171717 0%, transparent 15%, transparent 85%, #171717 100%)"
                }} />

                <div className="flex w-full overflow-hidden">
                    <motion.div
                        className="flex items-center gap-[60px] md:gap-[100px] whitespace-nowrap px-[30px] md:px-[50px]"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            ease: "linear",
                            duration: 25,
                            repeat: Infinity,
                        }}
                    >
                        {/* Double the logos array to ensure seamless infinite looping */}
                        {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 flex items-center justify-center"
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    style={{
                                        width: "auto",
                                        height: "auto",
                                        maxHeight: "50px", // constrain max height to unify scales roughly matching original aspects
                                        maxWidth: "200px"
                                    }}
                                    className="object-contain opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

        </section>
    );
};

export default Visionary;