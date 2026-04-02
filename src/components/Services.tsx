"use client";
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const revealVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1] // Custom quintic ease-out for smoothness
        }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25, // More deliberate delay between items
            delayChildren: 0.1
        }
    }
};

const Services = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const circleY = useSpring(useTransform(scrollYProgress, [0, 1], [100, -100]), {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section
            ref={containerRef}
            className="bg-[#171717] text-white overflow-hidden py-24 md:py-40 relative"
            id="expertise"
        >
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">

                {/* Intro Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-32 relative">
                    {/* Sidebar Label */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <span className="text-[12px] uppercase tracking-[0.2em] font-medium text-[#888]" style={{ fontFamily: '"Inter", sans-serif' }}>
                            Expertise
                        </span>
                    </motion.div>

                    {/* Main Content */}
                    <div className="lg:col-span-10 lg:pl-12">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="max-w-[900px]"
                        >
                            <motion.p
                                variants={revealVariant}
                                className="text-[24px] md:text-[32px] lg:text-[42px] leading-[1.2] tracking-tight mb-12"
                                style={{ fontFamily: '"Gupter", serif', fontWeight: 400 }}
                            >
                                Grounded in deep research and sharp strategy, we&nbsp;define clear paths forward to uncover growth - where every creative move is strategically led.&nbsp;We craft purposeful identities and seamless brand experiences across digital, web, and marketing - made for impact today, and momentum tomorrow.
                            </motion.p>

                            <motion.div variants={revealVariant} className="flex items-center gap-4">
                                <a
                                    href="/services"
                                    className="group flex items-center gap-3 text-[16px] font-medium hover:text-[#aaa] transition-colors"
                                    style={{ fontFamily: '"Inter", sans-serif' }}
                                >
                                    <span>Our Services</span>
                                    <div className="w-10 h-10 border border-[#444] rounded-full flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
                                        <svg
                                            className="w-4 h-4 text-white group-hover:text-black transition-colors"
                                            viewBox="0 0 18 14"
                                            fill="none"
                                            stroke="currentColor"
                                        >
                                            <path strokeWidth="1.2" d="m11.127.96 6.41 6.412m0 0-6.41 6.41m6.41-6.41H.162" />
                                        </svg>
                                    </div>
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Expertise Items Grid with Vertical Lines */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }} // Wait until 30% of the grid is in view
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border-t border-[#333] pt-20 relative"
                >
                    {/* Floating 'Learn More' Circle */}
                    {/* <motion.div 
                        style={{ y: circleY }}
                        className="hidden lg:flex absolute left-[35%] top-1/2 -translate-y-1/2 z-20 w-[140px] h-[140px] bg-[#222] rounded-full flex-col items-center justify-center border border-[#333] pointer-events-none select-none"
                    >
                        <span className="text-[12px] font-bold tracking-widest text-white">LEARN MORE</span>
                    </motion.div> */}

                    {[
                        {
                            title: "Strategy",
                            desc: "Grounded in research, driven by strategy, and crafted for impact - we turn insight into distinctive brand frameworks that build relevance, deepen connection, and drive momentum."
                        },
                        {
                            title: "Branding",
                            desc: "Designed to elevate, we craft impeccable visual and verbal identities that reflect who you are today and where you're headed next - whether refining your brand or redefining it entirely."
                        },
                        {
                            title: "Design",
                            desc: "Inspiring, striking, and strategic. We design communications that elevate perception, build recognition, and strengthen your brand’s reputation - built for clarity, crafted for impact."
                        },
                        {
                            title: "Websites",
                            desc: "Smart, functional, and beautifully designed. Websites that look sharp, work hard, and drive results. We design and build digital brand experiences, seamlessly blending form and function."
                        },
                        {
                            title: "Marketing",
                            desc: "Ideas that move people. Backed by insight, built to perform, and made to last. We create smart, purposeful campaigns and content that connect with clarity and impact."
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            variants={revealVariant}
                            className={`flex flex-col gap-10 p-8 pt-0 relative border-l border-[#333] ${index === 4 ? 'border-r' : ''} lg:border-r-0 h-full`}
                        >
                            <h3
                                className="text-[32px] md:text-[42px] leading-none tracking-tight"
                                style={{ fontFamily: '"Gupter", serif', fontWeight: 400, color: '#fff' }}
                            >
                                {item.title}
                            </h3>
                            <p
                                className="text-[15px] md:text-[16px] leading-[1.6] text-[#888] tracking-tight"
                                style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}
                            >
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Bottom Border Line Extension */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#333]" />
        </section>
    );
};

export default Services;