"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const WORK_ITEMS = [
    {
        title: "Star Cinemas",
        image: "https://framerusercontent.com/images/z9OqV4u4eNKy1lUREVgOWq7XoA.jpeg?width=1024&height=768", // Placeholder if specific not found
        link: "/works/star-cinemas"
    },
    {
        title: "Empire Cinemas",
        image: "https://framerusercontent.com/images/z9OqV4u4eNKy1lUREVgOWq7XoA.jpeg?width=1024&height=768", // Using Emaar's for consistent placeholder look
        link: "/works/empire-cinemas"
    },
    {
        title: "People Matters",
        image: "https://framerusercontent.com/images/z9OqV4u4eNKy1lUREVgOWq7XoA.jpeg?width=1024&height=768",
        link: "/works/people-matters"
    },
    {
        title: "Emaar",
        image: "https://framerusercontent.com/images/z9OqV4u4eNKy1lUREVgOWq7XoA.jpeg?width=1024&height=768",
        link: "/works/emaar"
    }
];

const WorkCard = ({ item }: { item: typeof WORK_ITEMS[0] }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative w-full aspect-[4/3] overflow-hidden rounded-[20px] bg-[#f5f5f5]"
        >
            <Link href={item.link} className="block w-full h-full cursor-pointer">
                {/* Background Pattern / Image */}
                <div
                    className="absolute inset-0 bg-repeat bg-[length:64px_64px] opacity-10 group-hover:scale-110 transition-transform duration-700 ease-out"
                    style={{
                        backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>')`
                    }}
                />

                {/* Real Image */}
                <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Hover Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
                    <h4 className="text-white text-2xl md:text-3xl font-medium flex items-center gap-3">
                        {item.title}
                        <ArrowUpRight className="w-6 h-6" />
                    </h4>
                </div>
            </Link>
        </motion.div>
    );
};

const WorksPage = () => {
    return (
        <main className="bg-white min-h-screen">
            {/* ── Hero Section (framer-mvba9z) ── */}
            <section
                className="relative w-full py-20 md:py-32 bg-white"
                data-framer-name="Hero"
            >
                <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full"
                    >
                        <h1
                            className="text-black font-semibold uppercase leading-[1em] mb-6"
                            style={{
                                fontSize: "clamp(60px, 12vw, 174px)",
                                letterSpacing: "-0.09em",
                                fontFamily: '"Inter", sans-serif',
                            }}
                        >
                            Industry Name
                        </h1>
                        <p
                            className="text-black px-2 font-medium text-lg md:text-xl lg:text-2xl max-w-2xl"
                            style={{
                                letterSpacing: "-0.03em",
                                fontFamily: '"Inter", sans-serif'
                            }}
                        >
                            Test Description
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── Work Section (framer-1ixq4vy) ── */}
            <section className="bg-white pb-32" data-framer-name="Work">
                <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">

                    {/* Section Header */}
                    {/* <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12 md:mb-20"
                    >
                        <h5 
                            className="text-black text-[24px] md:text-[30px] font-medium lowercase"
                            style={{ 
                                letterSpacing: "-0.03em",
                                fontFamily: '"Inter", sans-serif'
                            }}
                        >
                            work 2020 - 2024
                        </h5>
                    </motion.div> */}

                    {/* Work Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                        {WORK_ITEMS.map((item, index) => (
                            <WorkCard key={index} item={item} />
                        ))}
                    </div>

                    {/* Load More Button */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-20 flex justify-center"
                    >
                        <button className="bg-[#f5f5f5] text-black px-10 py-5 rounded-full text-lg font-medium hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105">
                            Load More
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* ── CTA Section (framer-pie3k7-container) ── */}
            <section
                className="w-full bg-[#171717] py-32 md:py-48"
                data-framer-name="CTA"
            >
                <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-start gap-12"
                    >
                        <h4
                            className="text-white font-medium leading-[1.1] max-w-4xl tracking-tight text-left"
                            style={{
                                fontSize: "clamp(36px, 6vw, 56px)",
                                letterSpacing: "-0.05em",
                                fontFamily: '"Inter", sans-serif'
                            }}
                        >
                            <span
                                className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-[#383838]"
                                style={{
                                    backgroundImage: "linear-gradient(95deg, rgb(255, 255, 255) 37%, rgb(56, 56, 56) 95%)"
                                }}
                            >
                                Curious about what we can create together? <br />
                                Let’s bring something extraordinary to life!
                            </span>
                        </h4>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Link
                                href="/contact"
                                className="inline-block bg-white text-black px-10 py-5 rounded-[4px] text-[18px] font-medium transition-colors hover:bg-white/95"
                                style={{ fontFamily: '"Inter", sans-serif' }}
                            >
                                Get in Touch
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default WorksPage;