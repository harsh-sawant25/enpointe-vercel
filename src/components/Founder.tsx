import React from 'react'
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/gupter/400.css";
import { motion } from "framer-motion";

const Founder = () => {
    return (
        < section
            id="founder-note"
            className="relative w-full bg-white rounded-t-[40px] md:rounded-t-[80px] -mt-[40px] md:-mt-[70px] z-20"
        >
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-16 md:pt-24 md:pb-24 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full max-w-[800px] mx-auto"
                >
                    <h3
                        className="text-center text-[#171717] tracking-[-0.03em] leading-[1.4]"
                        style={{ fontFamily: '"Inter", sans-serif', fontSize: "32px" }}
                    >
                        Businesses run on a network of{" "}
                        <span
                            className="font-normal"
                            style={{ fontFamily: '"Gupter", serif', fontSize: "32px" }}
                        >
                            interconnected systems.
                        </span>{" "}
                        From ticketing and payments to venue operations and guest interactions, every part
                        of the experience depends on{" "}
                        <span
                            className="font-normal"
                            style={{ fontFamily: '"Gupter", serif', fontSize: "32px" }}
                        >
                            technology working together
                        </span>
                        . <br /> We build the technology that makes this possible
                    </h3>
                </motion.div>
            </div>
            <div className="w-full h-[1px] bg-black/[0.1]" />
        </section >
    )
}

export default Founder