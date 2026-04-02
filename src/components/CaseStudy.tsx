"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const SECTORS = [
    {
        title: "Energy, Climate\n& Sustainability",
        description: "The world is changing fast - and you’re leading the charge. We help energy, climate, and sustainability brands communicate purpose, build belief, and inspire action through strategy-led brand design, digital and marketing.",
        video: "https://cms.fableco.uk/wp-content/uploads/2025/11/ENERGY_CLIMATE_SUSTAINABILITY-SHOWREEL-Small-Compressed-v5.mp4",
        link: "/renewable-energy-branding"
    },
    {
        title: "Professional\n& Legal Services",
        description: "Reputation is your most valuable asset - we help you protect and amplify it. From brand positioning to visual identity and websites, we help you create a powerful brand image and presence that drives recognition, engagement, and growth.",
        video: "https://cms.fableco.uk/wp-content/uploads/2025/09/LAW_FIRM_SHOWREEL_Small-opt.mp4",
        link: "/professional-legal-services-branding-websites"
    },
    {
        title: "Technology\n& Innovation",
        description: "Innovative ideas deserve standout brands. We help tech and innovation leaders bring clarity to complexity, tell impactful stories, and create brand and digital experiences that drive momentum and market growth.",
        video: "https://cms.fableco.uk/wp-content/uploads/2025/09/TECH_INNOVATION_SHOWREEL-Small-opt.mp4",
        link: "/technology-and-innovation-branding-and-websites"
    },
    {
        title: "Finance, Insurance\n& Investments",
        description: "In today’s financial world, trust is the currency that matters most. We help finance and investment brands cut through noise with sharp strategy, fearless identity, and digital platforms built for what’s next - driving trust, accelerating engagement, and creating lasting value.",
        video: "https://cms.fableco.uk/wp-content/uploads/2025/10/FINANCIAL-INVESTMENT-REEL-v17-940x540-Opt.mp4",
        link: "/finance-insurance-investments"
    }
];

const SectorCard = ({ sector, setIsHovering }: any) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    return (
        <motion.a
            href={sector.link}
            className="relative flex-shrink-0 w-[300px] md:w-[400px] lg:w-[480px] group"
            onMouseEnter={() => {
                setIsHovering(true);
                const playPromise = videoRef.current?.play();
                if (playPromise !== undefined) {
                    playPromise.catch(() => { });
                }
            }}
            onMouseLeave={() => {
                setIsHovering(false);
                if (videoRef.current) {
                    videoRef.current.pause();
                    videoRef.current.currentTime = 0;
                }
            }}
        >
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-[#222] max-h-[35vh]">
                <video
                    ref={videoRef}
                    src={sector.video}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                    muted
                    loop
                    playsInline
                />
            </div>

            <div className="mt-5 space-y-2">
                <h3
                    className="text-[20px] md:text-[26px] lg:text-[32px] leading-[1.1] font-normal whitespace-pre-line text-white"
                    style={{ fontFamily: '"Gupter", serif' }}
                >
                    {sector.title}
                </h3>
                <p
                    className="text-[12px] md:text-[14px] text-[#888] leading-relaxed max-w-[440px]"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                >
                    {sector.description}
                </p>
            </div>
        </motion.a>
    );
};

const CaseStudy = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-65%"]);
    const springX = useSpring(x, { stiffness: 100, damping: 30, restDelta: 0.001 });

    return (
        <section
            ref={targetRef}
            className="relative h-[300vh] bg-[#171717] text-white"
        >
            <div className="sticky top-0 h-screen flex flex-col pt-20 md:pt-28 pb-8 overflow-hidden">

                {/* Intro Section */}
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full mb-8 md:mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-20">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2"
                        >
                            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#888]" style={{ fontFamily: '"Inter", sans-serif' }}>
                                Areas of Focus
                            </span>
                        </motion.div>

                        <div className="lg:col-span-10 lg:pl-12">
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[16px] md:text-[18px] lg:text-[22px] max-w-[700px] leading-[1.4] text-[#888]"
                                style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}
                            >
                                Working at the intersection of strategy & creativity, developing high-growth corporate brands that not only lead today but inspire the possibilities of tomorrow.
                            </motion.p>
                        </div>
                    </div>
                </div>

                {/* Horizontal Scrolling Sectors */}
                <div className="relative w-full pl-6 md:pl-12 lg:pl-[25%] pr-[20%] flex-grow flex items-start">
                    <motion.div
                        style={{ x: springX }}
                        className="flex gap-8 md:gap-16 w-fit"
                    >
                        {SECTORS.map((sector, index) => (
                            <SectorCard
                                key={index}
                                sector={sector}
                                setIsHovering={setIsHovering}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>

            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Gupter:wght@400;500;700&display=swap');
            `}</style>
        </section>
    );
};

export default CaseStudy;