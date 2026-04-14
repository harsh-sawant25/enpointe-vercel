"use client";
import { motion } from "framer-motion";
import { guptermedium, gupterregular, gupterbold, interextrabold } from "@/fonts";
import React, { useRef, useEffect, useState } from "react";

/* ─── DATA ─── */
const CLIENTS = [
    "Cinépolis",
    "Dharma",
    "EMAAR",
    "NMD",
    "People Matters",
    "Novo Cinemas",
    "Star Cinemas",
];

interface StatItem {
    number: string;
    suffix: string;
    label: string;
    description: string;
}

const CLIENT_DATA: Record<string, StatItem[]> = {
    "Cinépolis": [
        { number: "15", suffix: "M+", label: "Annual Admissions", description: "Across primary markets" },
        { number: "800", suffix: "+", label: "Active Screens", description: "Managed via Enpointe" },
        { number: "99.9", suffix: "%", label: "Uptime", description: "Kiosk & digital operations" },
        { number: "12", suffix: "", label: "Years Partnered", description: "Long-term tech collaboration" },
    ],
    "Dharma": [
        { number: "50", suffix: "+", label: "Blockbusters", description: "Distribution managed digitally" },
        { number: "25", suffix: "M+", label: "Fan Engagement", description: "Across social platforms" },
        { number: "5", suffix: "K+", label: "Theaters", description: "Distribution network" },
        { number: "100", suffix: "%", label: "Digital Workflow", description: "Automation achievement" },
    ],
    "EMAAR": [
        { number: "120", suffix: "M+", label: "Visitors", description: "Managed yearly" },
        { number: "1500", suffix: "+", label: "Digital Screens", description: "Across properties" },
        { number: "45", suffix: "+", label: "Properties", description: "Global presence" },
        { number: "20", suffix: "M+", label: "Loyalty Users", description: "Integrated systems" },
    ],
    "NMD": [
        { number: "10", suffix: "M+", label: "Active Users", description: "Daily mobile interactions" },
        { number: "500", suffix: "+", label: "Retail Points", description: "Automated distribution" },
        { number: "15", suffix: "K+", label: "Daily Transactions", description: "Processed securely" },
        { number: "30", suffix: "sec", label: "Avg Response", description: "Customer support speed" },
    ],
    "People Matters": [
        { number: "2", suffix: "M+", label: "HR Leaders", description: "Community reach" },
        { number: "150", suffix: "+", label: "Events", description: "Managed digitally" },
        { number: "500", suffix: "K+", label: "Active Learners", description: "Platform engagement" },
        { number: "10", suffix: "yr", label: "Engagement", description: "Average client retention" },
    ],
    "Novo Cinemas": [
        { number: "12", suffix: "M+", label: "Tickets Sold", description: "Regional dominance" },
        { number: "200", suffix: "+", label: "Screens", description: "Premium experience" },
        { number: "85", suffix: "%", label: "Mobile Booking", description: "Digital transformation" },
        { number: "4", suffix: ".8", label: "User Rating", description: "App store excellence" },
    ],
    "Star Cinemas": [
        { number: "8", suffix: "M+", label: "Annual Footfall", description: "In-mall experiences" },
        { number: "150", suffix: "+", label: "Screens", description: "Expanding footprint" },
        { number: "95", suffix: "%", label: "Service Score", description: "Customer satisfaction" },
        { number: "5", suffix: "yr", label: "Tech Upgrade", description: "Continuous innovation" },
    ],
};

/* ─── Animated counter hook ─── */
function useCountUp(target: number, duration = 2000, shouldStart = false) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!shouldStart) return;

        // Reset count when target changes
        setCount(0);

        const startTime = performance.now();
        let animationFrame: number;

        const step = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) {
                animationFrame = requestAnimationFrame(step);
            }
        };

        animationFrame = requestAnimationFrame(step);
        return () => cancelAnimationFrame(animationFrame);
    }, [shouldStart, target, duration]);

    return count;
}

/* ─── Stat Card ─── */
const StatCard = ({ stat, inView, delay }: { stat: StatItem; inView: boolean; delay: number }) => {
    const numericValue = parseInt(stat.number, 10);
    const count = useCountUp(numericValue, 2000, inView);

    return (
        <div
            className="py-10 px-7 md:py-12 md:px-9 border-r border-[rgba(255,255,255,0.08)] last:border-r-0
        opacity-0 translate-y-0 transition-all duration-700 ease-out"
            style={{
                transitionDelay: `${delay}ms`,
                ...(inView ? { opacity: 1, transform: "translateY(0)" } : {}),
            }}
        >
            {/* Big Number */}
            <div
                className={`${gupterbold.className} text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-[-0.04em] text-[#f5f5f0] mb-2.5`}
            >
                {count}
                <span className="text-white">{stat.suffix}</span>
            </div>

            {/* Label */}
            <div
                className={`${gupterregular.className} text-[0.78rem] text-[rgba(245,245,240,0.5)] uppercase tracking-[0.1em] leading-[1.5]`}
            >
                {stat.label}
                <br />
                {stat.description}
            </div>
        </div>
    );
};

/* ─── Main Stats Component ─── */
const Stats = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [inView, setInView] = useState(false);
    const [activeClient, setActiveClient] = useState<string>(CLIENTS[0]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const activeStats = CLIENT_DATA[activeClient] || [];

    return (
        <section
            ref={sectionRef}
            id="our-impact"
            className="bg-[#111111]"
            style={{ padding: 0 }}
        >
            {/* Google Fonts */}
            {/* <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');
      `}</style> */}
            {/* ── Header ── */}
            <div className="px-6 pt-16 pb-0 md:px-20 md:pt-20">
                {/* Section label  */}
                <div
                    className={`${guptermedium.className} flex items-center gap-2.5 text-[0.68rem] tracking-[0.2em] uppercase text-white mb-4`}
                >
                    <span className="block w-5 h-px bg-white" />
                    Trusted by Visionaries
                </div>

                {/* Display heading */}
                <h2
                    className={`${interextrabold.className} text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] tracking-[-0.025em] text-[#f5f5f0] mb-12`}
                >
                    Our Clients
                </h2>
            </div>

            {/* ── Mobile Client Selector ── */}
            <div className="md:hidden px-6 pb-8 -mt-4 opacity-0 translate-y-4 transition-all duration-700 delay-300"
                style={inView ? { opacity: 1, transform: "translateY(0)" } : {}}
            >
                <div className="relative group">
                    <select
                        value={activeClient}
                        onChange={(e) => setActiveClient(e.target.value)}
                        className={`${gupterbold.className} w-full bg-[#1a1a1a] border border-[rgba(255,255,255,0.1)] text-white py-5 px-6 rounded-none appearance-none uppercase tracking-[0.12em] text-[0.85rem] focus:outline-none focus:border-white transition-colors cursor-pointer`}
                    >
                        {CLIENTS.map((name) => (
                            <option key={name} value={name} className="bg-[#111] py-2">
                                {name}
                            </option>
                        ))}
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none group-hover:translate-y-[-40%] transition-transform duration-300">
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 7L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    {/* Visual embellishment */}
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.2)] to-transparent" />
                </div>
            </div>

            {/* ── Client Logo Row (Desktop Only) ── */}
            <div
                className="hidden md:flex items-center justify-center flex-wrap gap-8 lg:gap-14 border-t border-[rgba(255,255,255,0.08)] px-10"
            >
                {CLIENTS.map((name, i) => (
                    <button
                        key={name}
                        onClick={() => setActiveClient(name)}
                        className={`
              ${gupterbold.className} py-8
              text-center text-[0.75rem] tracking-[0.12em] uppercase
              transition-colors duration-300 relative group
              ${activeClient === name ? "text-white" : "text-[rgba(245,245,240,0.5)] hover:text-[#f5f5f0]"}
              opacity-0 translate-y-3
            `}
                        style={{
                            transitionDelay: `${i * 60}ms`,
                            ...(inView ? { opacity: 1, transform: "translateY(0)" } : {}),
                        }}
                    >
                        {name}
                        {/* Apple-Style Gliding Indicator Line */}
                        {activeClient === name && (
                            <motion.div
                                layoutId="activeDesktopClientIndicator"
                                className="absolute bottom-0 left-0 w-full h-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.6)]"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30,
                                }}
                            />
                        )}
                        {/* Hover line for inactive tabs */}
                        {activeClient !== name && (
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        )}
                    </button>
                ))}
            </div>

            {/* ── Stats Row ── */}
            <div className="px-6 py-16 md:px-20 md:py-20">
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[rgba(255,255,255,0.08)]"
                >
                    {activeStats.map((stat, i) => (
                        <StatCard key={`${activeClient}-${stat.label}`} stat={stat} inView={inView} delay={i * 120} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;