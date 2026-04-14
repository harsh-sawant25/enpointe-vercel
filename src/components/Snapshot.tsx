"use client";
import { interbold, intermedium } from '@/fonts';
import React from 'react';

const Snapshot = () => {
    const cards = [
        {
            label: "Build",
            title: "End-to-End Product Development",
            description: "From idea to production — full product engineering lifecycle."
        },
        {
            label: "Transform",
            title: "Legacy to AI-Native",
            description: "Modernize existing systems with AI and cloud-native architecture."
        },
        {
            label: "Augment",
            title: "Embedded Engineering Teams",
            description: "Scale your internal capability with our specialist engineers."
        },
        {
            label: "Scale",
            title: "Ongoing Optimization",
            description: "Continuous improvement, support, and platform evolution."
        }
    ];

    return (
        <section className="bg-[#080808] text-[#f5f5f0] py-32 px-6 md:px-20 overflow-hidden">
            {/* Section Label */}
            <div
                className="flex items-center gap-2.5 text-white text-[0.68rem] tracking-[0.2em] uppercase mb-10"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
                <div className="w-5 h-[1px] bg-white" />
                Our Impact
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[60px] items-start">

                {/* Left Column: Text Content */}
                <div className="max-w-[640px]">
                    <h2
                        className="text-[clamp(2rem,4.5vw,4rem)] font-[800] leading-[1.05] tracking-[-0.025em] mb-5"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                        A snapshot of the work we've delivered so far.
                    </h2>

                    <p
                        className="text-[rgba(245,245,240,0.5)] text-[1.05rem] leading-[1.75] font-[300] mb-9"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                        Enpointe's bespoke solutions are built at the intersection of deep engineering expertise,
                        domain understanding, and AI-first thinking — partnering with enterprises across media,
                        retail, logistics, and emerging digital ecosystems.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-9">
                        <button className="bg-[#f5f5f0] text-[#080808] text-[0.8rem] font-[700] tracking-[0.08em] uppercase py-4 px-8 hover:bg-black hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                            About Us
                        </button>
                        <button className="bg-transparent text-[#f5f5f0] border border-[rgba(255,255,255,0.25)] text-[0.8rem] font-[500] tracking-[0.06em] uppercase py-4 px-8 hover:border-black hover:text-white transition-all duration-300">
                            Our Work
                        </button>
                    </div>
                </div>

                {/* Right Column: Grid Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 bg-[rgba(255,255,255,0.08)] gap-px border border-[rgba(255,255,255,0.08)]">
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className="bg-[#111111] p-9 group"
                        >
                            <div
                                className={`${interbold.className} text-[#A6DAFF] text-[0.62rem] tracking-[0.2em] uppercase mb-2`}
                            >
                                {card.label}
                            </div>
                            <h4
                                className={`${interbold.className} text-white text-[1rem] font-[700] mb-2 leading-snug`}
                            >
                                {card.title}
                            </h4>
                            <p
                                className={`${intermedium.className} text-[rgba(245,245,240,0.5)] text-[0.82rem] leading-[1.6]`}
                                style={{ fontFamily: "'DM Sans', sans-serif" }}
                            >
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Snapshot;