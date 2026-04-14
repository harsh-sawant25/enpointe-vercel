"use client";

import React from 'react';
import { interregular, interbold } from '@/fonts';

const SectionLabel = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <div className={`${interregular.className} flex items-center gap-2.5 mb-4 text-[0.68rem] tracking-[0.2em] uppercase text-[#A6DAFF] ${className}`}>
        <div className="w-5 h-[1px] bg-[#A6DAFF]" />
        {children}
    </div>
);

const FeatureItem = ({ children }: { children: React.ReactNode }) => (
    <div className={`${interregular.className} flex items-center gap-3 text-[0.88rem] text-white/80 py-2 border-b border-white/5 last:border-b-0 leading-snug font-normal`}>
        <div className="w-1.5 h-1.5 rounded-full bg-[#A6DAFF] flex-shrink-0" />
        <span className="text-white/70">{children}</span>
    </div>
);

const ProductCard = ({ tag, title, description, features, className = "" }: { tag: string, title: string, description: string, features?: string[], className?: string }) => (
    <div className={`group relative border border-white/10 bg-[#111111] transition-all duration-300 hover:border-[#A6DAFF] overflow-hidden flex flex-col h-full ${className}`}>
        <div className="p-10 flex flex-col flex-grow">
            <div className={`${interregular.className} text-[0.6rem] tracking-[0.2em] uppercase text-white/40 mb-3 border border-white/10 inline-block px-2 py-1 self-start font-normal`}>
                {tag}
            </div>
            <h3 className={`${interbold.className} text-[1.5rem] font-bold mb-4 text-white uppercase`}>{title}</h3>
            <p className={`${interregular.className} text-[0.9rem] text-white/50 leading-[1.6] mb-8 font-normal flex-grow`}>
                {description}
            </p>
            {features && (
                <div className="space-y-1 pt-6 border-t border-white/10 mt-auto">
                    {features.map((f, i) => (
                        <FeatureItem key={i}>{f}</FeatureItem>
                    ))}
                </div>
            )}
        </div>
    </div>
);

const Page = () => {
    return (
        <div className={`${interregular.className} bg-[#171717] text-[#f5f5f0] min-h-screen`}>
            {/* Page Hero */}
            <section className="relative px-5 md:px-20 pt-40 pb-20 min-h-[50vh] flex flex-col justify-end border-b border-white/10 overflow-hidden text-white">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-0" />
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto">
                    <div className={`${interregular.className} text-[0.68rem] tracking-[0.2em] uppercase text-[#A6DAFF] mb-4`}>
                        Products / Productivity Tools
                    </div>
                    <h1 className={`${interbold.className} text-[clamp(2.5rem,8vw,8rem)] font-bold leading-[0.92] tracking-[-0.04em] mb-6 uppercase`}>
                        PRODUCTIVITY<br />WORKSPACE<br />TOOLS.
                    </h1>
                    <p className={`${interregular.className} text-base md:text-[1rem] text-white/50 max-w-[550px] font-normal leading-[1.7]`}>
                        From conversational data intelligence to AI meeting assistants — our productivity suite eliminates friction and surfaces what matters.
                    </p>
                </div>
            </section>

            {/* The Suite */}
            <section className="px-5 md:px-20 py-24 bg-[#171717]">
                <div className="max-w-7xl mx-auto">
                    <SectionLabel>The Suite</SectionLabel>
                    <h2 className={`${interbold.className} text-[clamp(2rem,4.5vw,4rem)] font-bold leading-[1.05] tracking-[-0.025em] mb-4 text-white`}>
                        From internal productivity to<br /><em className="italic text-white">customer intelligence.</em>
                    </h2>
                    <p className={`${interregular.className} text-base md:text-[1.1rem] text-white/50 font-normal leading-[1.75] max-w-[800px] mb-16`}>
                        Enpointe accelerates AI adoption through ready products and custom AI engineering — modular tools that slot into your existing workflow.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ProductCard
                            tag="Data Intelligence"
                            title="AI Data Analyst"
                            description="Conversational data intelligence connected to multiple platforms for all cross-functional teams — ask questions in natural language, get instant insights."
                            features={[
                                "Unified data layer connecting all business tools",
                                "Real-time auto-generated dashboards and trends",
                                "Natural language querying across all data sources",
                                "For Ecommerce, Finance, SaaS, and Sales teams"
                            ]}
                        />
                        <ProductCard
                            tag="Meeting Intelligence"
                            title="MeetMemo"
                            description="AI-powered meeting assistant that captures, summarizes, and organizes meeting content automatically across calls, video, audio, and chat."
                            features={[
                                "Real-time transcription and summary generation",
                                "Highlights, action items, and concern tracking",
                                "Collaborative Knowledge Hub — Spaces & Memo.ry AI",
                                "Mobile, desktop, extensions, and hardware support"
                            ]}
                        />
                        <ProductCard
                            tag="AI Chat Aggregator"
                            title="Polymind"
                            description="AI-powered workspace unifying multiple AI models — enabling individuals and teams to collaborate on shared chats, organize work into projects, and manage usage seamlessly."
                            features={[
                                "Multiple AI models in one governed workspace",
                                "Team collaboration on shared AI conversations",
                                "Project organization and structured workflows",
                                "Token control and usage management"
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Consumer Intelligence */}
            <section className="px-5 md:px-20 py-24 bg-[#171717]">
                <div className="max-w-7xl mx-auto">
                    <SectionLabel>Consumer Intelligence</SectionLabel>
                    <h2 className={`${interbold.className} text-[clamp(2rem,4.5vw,4rem)] font-bold leading-[1.05] tracking-[-0.025em] mb-12 text-white`}>
                        AI tools for <em className="italic text-white">growth teams.</em>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ProductCard
                            tag="Content Intelligence"
                            title="AI Content Regeneration Engine"
                            description="Repurposes long-form content into high-performing social formats for influencers and content teams — maximising reach across every platform."
                            features={[
                                "Long-form to social format conversion",
                                "Platform-optimized content variations",
                                "Influencer and brand team workflows"
                            ]}
                        />
                        <ProductCard
                            tag="Vision Intelligence"
                            title="Video & CCTV Analytics"
                            description="Converts video and CCTV feeds into actionable insights — behaviour analysis, footfall tracking, occupancy patterns, and operational intelligence."
                            features={[
                                "Real-time footfall and occupancy analytics",
                                "Behavioural pattern detection",
                                "For retail, venues, and public spaces"
                            ]}
                        />
                        <ProductCard
                            tag="Conversational Commerce"
                            title="AI Shopping Assistant"
                            description="Helps customers make confident purchase decisions through intelligent, conversational guidance — reducing abandonment and boosting conversion."
                            features={[
                                "Intelligent product recommendations",
                                "Conversational decision-making support",
                                "For Ecommerce and retail platforms"
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Industry Applications */}
            <section className="px-5 md:px-20 py-24 bg-[#171717]">
                <div className="max-w-7xl mx-auto">
                    <SectionLabel>Industry Applications</SectionLabel>
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-24 mt-8 items-center">
                        <div>
                            <h2 className={`${interbold.className} text-[clamp(2rem,4.5vw,4rem)] font-bold leading-[1.05] tracking-[-0.025em] mb-4 text-white`}>
                                Built for the <em className="italic text-white">teams that drive your business.</em>
                            </h2>
                            <p className={`${interregular.className} text-base md:text-[1.1rem] text-white/50 font-normal leading-[1.75]`}>
                                Our productivity suite is designed for the full enterprise — from product and engineering to finance, sales, and content teams.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3 content-start">
                            {[
                                "Ecommerce & Retail",
                                "Marketing & Growth",
                                "Finance & Operations",
                                "SaaS & Product Teams",
                                "Sales & CRM",
                                "Project Management",
                                "Consulting & Legal",
                                "Human Resources"
                            ].map((tag, i) => (
                                <span
                                    key={i}
                                    className={`${interregular.className} text-[0.75rem] md:text-[0.8rem] tracking-[0.05em] text-white/70 border border-white/10 px-4 py-2.5 bg-white/5 hover:bg-white/10 transition-colors font-normal`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Band */}
            {/* <section className="relative px-5 md:px-20 py-24 bg-[#171717] text-center border-t border-b border-white/10 overflow-hidden">
                <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
                <div className="relative z-10">
                    <h2 className={`${interbold.className} text-[clamp(2rem,5vw,4.5rem)] font-bold leading-none tracking-[-0.03em] mb-5 text-white`}>
                        Ready to supercharge<br />
                        <em className="italic text-white">your team&apos;s productivity?</em>
                    </h2>
                    <p className={`${interregular.className} text-white/50 text-[0.95rem] mb-9 font-normal`}>
                        Get a demo of any product in our AI workspace suite.
                    </p>
                    <div
                        className="w-[54px] h-[54px] border border-white/10 rounded-full flex items-center justify-center mx-auto cursor-pointer text-xl transition-all duration-200 hover:border-white hover:bg-white/10"
                        onClick={() => { }}
                    >
                        →
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default Page;