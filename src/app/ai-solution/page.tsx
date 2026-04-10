"use client";

import React from 'react';
import { Syne, DM_Sans } from 'next/font/google';

const syne = Syne({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
    variable: '--font-syne',
});

const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500'],
    style: ['normal', 'italic'],
    variable: '--font-dm-sans',
});

const SectionLabel = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <div className={`flex items-center gap-2.5 mb-4 text-[0.68rem] tracking-[0.2em] uppercase text-white ${className}`}>
        <div className="w-5 h-[1px] bg-current" />
        {children}
    </div>
);

const Card = ({ icon, title, description, className = "" }: { icon?: string, title: string, description: string, className?: string }) => (
    <div className={`group relative border border-white/10 p-10 bg-[#111111] transition-all duration-300 hover:border-[#00e5c8]/30 hover:-translate-y-1 overflow-hidden ${className}`}>
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00e5c8] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {icon && (
            <div className="w-11 h-11 bg-[#00e5c8]/10 flex items-center justify-center mb-6 text-xl">
                {icon}
            </div>
        )}
        <h4 className="font-syne text-[1.1rem] font-bold mb-3 leading-tight text-white">{title}</h4>
        <p className="text-[0.88rem] text-white/50 leading-[1.7]">{description}</p>
    </div>
);

const ProcessStep = ({ num, title, description }: { num: string, title: string, description: string }) => (
    <div className="grid grid-cols-[60px_1fr] gap-8 py-10 border-b border-white/10 first:border-t">
        <div className="font-syne text-[0.7rem] font-bold text-white tracking-[0.1em] pt-1">
            {num}
        </div>
        <div className="step-content">
            <h4 className="font-syne text-[1.2rem] font-bold mb-2.5 text-white">{title}</h4>
            <p className="text-[0.88rem] text-white/50 leading-[1.7]">{description}</p>
        </div>
    </div>
);

const ResultItem = ({ num, label }: { num: string, label: string }) => (
    <div className="flex-1 min-w-[140px] p-7 border-r border-white/10 last:border-r-0 text-center">
        <div className="font-syne text-[2rem] font-extrabold text-white leading-none mb-1.5">{num}</div>
        <div className="text-[0.72rem] text-white/50 tracking-[0.05em] uppercase">{label}</div>
    </div>
);

const Page = () => {
    return (
        <div className={`${syne.variable} ${dmSans.variable} font-dm-sans bg-[#080808] text-[#f5f5f0] selection:bg-[#00e5c8]/30`}>
            {/* Page Hero */}
            <section
                className="relative px-5 md:px-20 pt-40 pb-20 min-h-[60vh] flex flex-col justify-end border-b border-white/10 overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #080808 0%, #0a1a0e 100%)' }}
            >
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_100%,rgba(0,229,200,0.05)_0%,transparent_60%)]" />
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto">
                    <div className="text-[0.68rem] tracking-[0.2em] uppercase text-white mb-4">
                        AI Transformation
                    </div>
                    <h1 className="font-syne text-[clamp(3.5rem,8vw,8rem)] font-extrabold leading-[0.92] tracking-[-0.04em] mb-6 text-white uppercase">
                        INTELLIGENCE<br />BY DESIGN.
                    </h1>
                    <p className="text-base md:text-[1rem] text-white/50 max-w-[550px] font-light leading-[1.7]">
                        We guide organisations through their AI transformation journey — from strategy and roadmaps to agentic systems and enterprise deployments that deliver real ROI.
                    </p>
                </div>
            </section>

            {/* Our AI Approach */}
            <section className="px-5 md:px-20 py-24 bg-[#111111]">
                <div className="max-w-7xl mx-auto">
                    <SectionLabel>Our AI Approach</SectionLabel>
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="font-syne text-[clamp(2rem,4.5vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.025em] mb-5 text-white">
                                AI + Engineering.<br /><em className="italic text-white">Not just consulting.</em>
                            </h2>
                            <p className="text-base md:text-[1.05rem] text-white/50 font-light leading-[1.75] mt-4">
                                Enpointe&apos;s AI transformation practice is built on real-world enterprise deployments across 20+ countries. We combine strategic AI roadmapping with full-stack engineering — ensuring every AI initiative translates to measurable business outcomes.
                            </p>
                        </div>
                        <div>
                            <ProcessStep num="01" title="Assess & Strategize" description="Map your business processes, identify high-impact AI opportunities, and build a practical roadmap." />
                            <ProcessStep num="02" title="Prototype & Validate" description="Build focused proof-of-concepts to validate AI value before full-scale deployment." />
                            <ProcessStep num="03" title="Engineer & Deploy" description="Full-stack AI engineering — LLMs, computer vision, NLP, and agentic workflows." />
                            <ProcessStep num="04" title="Scale & Optimise" description="Continuous improvement, model fine-tuning, and ROI measurement post-deployment." />
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Capabilities */}
            <section className="px-5 md:px-20 py-24 bg-[#080808]">
                <div className="max-w-7xl mx-auto">
                    <SectionLabel>AI Capabilities</SectionLabel>
                    <h2 className="font-syne text-[clamp(2rem,4.5vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.025em] mb-12 text-white">
                        What we <em className="italic text-white">engineer.</em>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card icon="💬" title="Conversational AI" description="AI chatbots and voice assistants integrated with enterprise systems for customer service, booking, and discovery." />
                        <Card icon="🧠" title="Enterprise LLM Deployment" description="Private, secure LLM deployments — including offline-first capabilities for sensitive industries." />
                        <Card icon="👁" title="Computer Vision" description="Video analytics, CCTV intelligence, footfall analysis, and occupancy pattern detection." />
                        <Card icon="🔄" title="Agentic Automation" description="Multi-step AI agents handling complex workflows — procurement, QC, invoicing, and more." />
                        <Card icon="📊" title="Data Intelligence" description="Conversational analytics platforms with natural language querying across your entire data estate." />
                        <Card icon="🎨" title="AI Content Engines" description="Content regeneration, meme marketing automation, and AI-assisted editorial workflows." />
                    </div>
                </div>
            </section>

            {/* Archaea / Kantham Case Study */}
            <section className="px-5 md:px-20 py-24 bg-[#111111]">
                <div className="max-w-7xl mx-auto">
                    <SectionLabel>Case Study — Enterprise AI</SectionLabel>
                    <div className="grid md:grid-cols-2 gap-10 md:gap-[60px] mt-10 items-start">
                        <div className="md:sticky md:top-24">
                            <div className="text-[0.65rem] tracking-[0.2em] uppercase text-white mb-2.5">
                                Enterprise Developer Tools
                            </div>
                            <h2 className="font-syne text-[clamp(2rem,4.5vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.025em] mb-4 text-white">
                                Archaea<br />
                                <span className="text-[1.4rem] text-white/40 font-bold">(Kantham)</span>
                            </h2>
                            <p className="text-base md:text-[1.05rem] text-white/50 font-light leading-[1.75] mt-4">
                                Kantham found the modern developer ecosystem overly complex, leading to fragmented tools and workflow inefficiencies — with heavy dependence on internet-based AI tools.
                            </p>

                            <div className="border border-white/10 mt-8 flex flex-wrap">
                                <ResultItem num="150%" label="Developer Productivity Increase" />
                                <ResultItem num="90%" label="Code Quality & Security Improvement" />
                            </div>
                        </div>

                        <div>
                            <div className="bg-[#00e5c8]/5 border border-[#00e5c8]/20 p-8 md:p-10 mb-10">
                                <h4 className="font-syne text-[0.75rem] font-bold text-white tracking-[0.05em] uppercase mb-3">The Challenge</h4>
                                <p className="text-[0.9rem] text-white/50 leading-[1.7]">
                                    Fragmented developer tools, heavy dependence on internet-based AI, high time spent on manual debugging, and inconsistent code quality and security checks across teams.
                                </p>
                            </div>

                            <h3 className="font-syne text-[clamp(1.4rem,3vw,2.4rem)] font-bold leading-[1.1] tracking-[-0.02em] mb-4 text-white">Our Solution: Enterprise Offline AI Code Assistant</h3>
                            <p className="text-[0.9rem] text-white/40 mt-3 leading-[1.7] mb-7">
                                A custom platform integrated with VSCode providing comprehensive AI-driven code assistance with robust offline capabilities.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Card title="Code Intelligence (Offline First)" description="Semantic search, contextual Q&A, and code explanations — without internet dependency." className="p-7" />
                                <Card title="Automated Security & Fixes" description="AI-powered prioritized vulnerability findings and guided remediation." className="p-7" />
                                <Card title="Modern Workflow & Productivity" description="Integrated Git workflows, AI-assisted code completion, and test generation within VS Code." className="p-7" />
                                <Card title="Consistent Quality Gates" description="Automated compliance with documentation standards across all code commits." className="p-7" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Novo Cinemas AI Chatbot */}
            <section className="px-5 md:px-20 py-24 bg-[#080808]">
                <div className="max-w-7xl mx-auto">
                    <SectionLabel>Case Study — Conversational AI</SectionLabel>
                    <div className="grid md:grid-cols-2 gap-10 md:gap-[60px] mt-10 items-start">
                        <div className="md:sticky md:top-24">
                            <div className="text-[0.65rem] tracking-[0.2em] uppercase text-white mb-2.5">
                                GCC Premium Cinema Chain
                            </div>
                            <h2 className="font-syne text-[clamp(2rem,4.5vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.025em] mb-5 text-white">Novo Cinemas AI Chatbot</h2>
                            <p className="text-base md:text-[1.05rem] text-white/50 font-light leading-[1.75] mt-4">
                                Novo Cinemas faced fragmented customer interactions across channels, leading to high drop-offs and inefficient support operations.
                            </p>

                            <div className="border border-white/10 mt-8 flex flex-wrap">
                                <ResultItem num="30%" label="Increase in Booking Conversion" />
                                <ResultItem num="45%" label="Reduction in Support Load" />
                            </div>
                        </div>

                        <div>
                            <div className="bg-[#00e5c8]/5 border border-[#00e5c8]/20 p-8 md:p-10 mb-10">
                                <h4 className="font-syne text-[0.75rem] font-bold text-white tracking-[0.05em] uppercase mb-3">The Challenge</h4>
                                <p className="text-[0.9rem] text-white/50 leading-[1.7]">
                                    Manual handling of customer queries, high response times impacting booking conversions, limited personalization in movie discovery, and disconnected booking, support, and information systems.
                                </p>
                            </div>

                            <h3 className="font-syne text-[clamp(1.4rem,3vw,2.4rem)] font-bold leading-[1.1] tracking-[-0.02em] mb-4 text-white">Conversational AI Booking Ecosystem</h3>
                            <p className="text-[0.9rem] text-white/40 mt-3 leading-[1.7] mb-7">
                                An AI-powered chatbot unifying movie discovery, ticket booking, and customer support into a single conversational experience — integrated seamlessly with Novo&apos;s ecosystem.
                            </p>

                            <div>
                                <ProcessStep num="01" title="Conversational Discovery" description="AI-driven movie recommendations based on preferences, history, and real-time availability." />
                                <ProcessStep num="02" title="End-to-End Booking Flow" description="Seat selection, F&B add-ons, and payment — all within the chat interface." />
                                <ProcessStep num="03" title="Automated Support" description="Intelligent handling of FAQs, booking modifications, and refund requests." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meldit / Youngun Case Study */}
            <section className="px-5 md:px-20 py-24 bg-[#111111]">
                <div className="max-w-7xl mx-auto">
                    <SectionLabel>Case Study — AI Marketing</SectionLabel>
                    <div className="grid md:grid-cols-2 gap-10 md:gap-[60px] mt-10 items-start">
                        <div className="md:sticky md:top-24">
                            <div className="text-[0.65rem] tracking-[0.2em] uppercase text-white mb-2.5">
                                Social Media & Meme Marketing
                            </div>
                            <h2 className="font-syne text-[clamp(2rem,4.5vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.025em] mb-5 text-white">Meldit AI</h2>
                            <p className="text-base md:text-[1.05rem] text-white/50 font-light leading-[1.75] mt-4">
                                The primary challenge was the lack of a consolidated system to manage meme marketing campaigns across scattered posts, vendors, and accounts.
                            </p>

                            <div className="flex flex-wrap gap-2 mt-8">
                                {["Marketing Automation", "AI Content", "Vendor Management"].map(tag => (
                                    <span key={tag} className="text-[0.68rem] tracking-[0.08em] uppercase text-white/50 border border-white/10 px-3 py-1.5">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="bg-[#00e5c8]/5 border border-[#00e5c8]/20 p-8 md:p-10 mb-10">
                                <h4 className="font-syne text-[0.75rem] font-bold text-white tracking-[0.05em] uppercase mb-3">The Challenge</h4>
                                <p className="text-[0.9rem] text-white/50 leading-[1.7]">
                                    Fragmented process making it difficult to manage scattered posts, track different vendors and accounts, and maintain a seamless campaign execution process — leading to poor campaign visibility and accountability.
                                </p>
                            </div>

                            <div className="mt-7">
                                <ProcessStep num="01" title="AI-Led Content Generation" description="Automated meme creation and content adaptation for social formats." />
                                <ProcessStep num="02" title="Vendor & Account Tracking" description="Centralized dashboard for managing all publisher accounts and vendors." />
                                <ProcessStep num="03" title="Execution Workflow Integration" description="End-to-end campaign execution pipeline with approval workflows and performance reporting." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Band */}
            <section className="relative px-5 md:px-20 py-24 bg-[#080808] text-center border-t border-b border-white/10 overflow-hidden">
                <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(0,229,200,0.06)_0%,transparent_70%)]" />
                <div className="relative z-10">
                    <h2 className="font-syne text-[clamp(2rem,5vw,4.5rem)] font-extrabold leading-none tracking-[-0.03em] mb-5 text-white">
                        Start your<br />
                        <em className="italic text-white">AI transformation.</em>
                    </h2>
                    <p className="text-[#f5f5f0]/50 text-[0.95rem] mb-9">
                        We&apos;ll build the roadmap and engineer the future — together.
                    </p>
                    <div
                        className="w-[54px] h-[54px] border border-white/10 rounded-full flex items-center justify-center mx-auto cursor-pointer text-xl transition-all duration-200 hover:border-[#00e5c8] hover:bg-[#00e5c8]/10"
                        onClick={() => { }}
                    >
                        →
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;
