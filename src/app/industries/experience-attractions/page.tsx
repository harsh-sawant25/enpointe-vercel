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
            <section className="relative px-5 md:px-20 pt-40 pb-20 min-h-[50vh] flex flex-col justify-end border-b border-white/10 overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_100%,rgba(0,229,200,0.05)_0%,transparent_60%)]" />
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto">
                    <div className="text-[0.68rem] tracking-[0.2em] uppercase text-white mb-4">
                        Industries / Experiences & Attractions
                    </div>
                    <h1 className="font-syne text-[clamp(3.5rem,8vw,8rem)] font-extrabold leading-[0.92] tracking-[-0.04em] mb-6 text-white uppercase">
                        EXPERIENCES &<br />ATTRACTIONS
                    </h1>
                    <p className="text-base md:text-[1rem] text-white/50 max-w-[520px] font-light leading-[1.7]">
                        Unified ticketing, loyalty, and venue management systems for world-class entertainment destinations and attractions.
                    </p>
                </div>
            </section>

            {/* What We Build */}
            <section className="px-5 md:px-20 py-24 bg-[#080808]">
                <div className="max-w-7xl mx-auto">
                    <SectionLabel>What We Build</SectionLabel>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                        <Card
                            icon="🎡"
                            title="Venue Management"
                            description="Centralised operational analytics, dynamic zones, bundles, and pricing for attractions of any scale."
                        />
                        <Card
                            icon="🎟"
                            title="Unified Ticketing"
                            description="Cross-venue wallets, passes, and kiosks creating seamless guest access experiences."
                        />
                        <Card
                            icon="🍔"
                            title="F&B Integration"
                            description="Digital food ordering integrated with delivery platforms, boosting F&B revenue and customer satisfaction."
                        />
                        <Card
                            icon="💡"
                            title="AI Upselling"
                            description="Intelligent upsell recommendations at every touchpoint — digital and physical."
                        />
                        <Card
                            icon="📊"
                            title="Analytics Dashboard"
                            description="Unified financial dashboards providing 360° view of all attractions performance."
                        />
                        <Card
                            icon="🔒"
                            title="Security Compliance"
                            description="ISO 27001 and PCI DSS certified platforms aligned with enterprise security requirements."
                        />
                    </div>
                </div>
            </section>

            {/* EMAAR Case Study */}
            <section className="px-5 md:px-20 py-24 bg-[#111111]">
                <div className="max-w-7xl mx-auto">
                    <SectionLabel>Case Study</SectionLabel>
                    <div className="grid md:grid-cols-2 gap-10 md:gap-[60px] mt-10 items-start">
                        <div className="md:sticky md:top-24">
                            <div className="text-[0.65rem] tracking-[0.2em] uppercase text-white mb-2.5">
                                Global Real Estate & Attractions Leader
                            </div>
                            <h2 className="font-syne text-[clamp(2rem,4.5vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.025em] mb-5 text-white">EMAAR</h2>
                            <p className="text-base md:text-[1.05rem] text-white/50 font-light leading-[1.75] mt-4">
                                Emaar faced significant operational complexity with multiple disconnected software systems and vendors creating inefficiency across its attractions portfolio.
                            </p>

                            <div className="border border-white/10 mt-8 flex flex-wrap">
                                <ResultItem num="100%" label="Revenue Increase" />
                                <ResultItem num="80%" label="Avg Cart Value Increase" />
                            </div>
                        </div>

                        <div>
                            <div className="bg-[#00e5c8]/5 border border-[#00e5c8]/20 p-8 md:p-10 mb-10">
                                <h4 className="font-syne text-[0.75rem] font-bold text-white tracking-[0.05em] uppercase mb-3">The Challenge</h4>
                                <p className="text-[0.9rem] text-white/50 leading-[1.7]">
                                    No single view of business operations, limited insights for strategic decisions, inconsistent customer experiences across all Emaar entertainment and attractions properties.
                                </p>
                            </div>

                            <h3 className="font-syne text-[clamp(1.4rem,3vw,2.4rem)] font-bold leading-[1.1] tracking-[-0.02em] mb-4 text-white">Our Solution: Unified Ticketing Ecosystem</h3>
                            <p className="text-[0.9rem] text-white/40 mt-3 leading-[1.7] mb-7">
                                A comprehensive platform that streamlined Emaar&apos;s attractions operations, built to ISO 27001 and PCI DSS standards.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Card title="AI-Powered Upselling" description="Intelligent recommendations driving higher cart values across all touchpoints." className="p-7" />
                                <Card title="Unified Finance Dashboard" description="Single view of financial performance across all Emaar attractions." className="p-7" />
                                <Card title="Unified Customer Data" description="360° customer view with comprehensive behavioral intelligence." className="p-7" />
                                <Card title="Intelligent Analytics" description="Real-time operational dashboards enabling strategic decision-making." className="p-7" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Get Hayya Case Study */}
            <section className="px-5 md:px-20 py-24 bg-[#080808]">
                <div className="max-w-7xl mx-auto">
                    <SectionLabel>Case Study</SectionLabel>
                    <div className="grid md:grid-cols-2 gap-10 md:gap-[60px] mt-10 items-start">
                        <div className="md:sticky md:top-24">
                            <div className="text-[0.65rem] tracking-[0.2em] uppercase text-white mb-2.5">
                                GCC Entertainment Super App
                            </div>
                            <h2 className="font-syne text-[clamp(2rem,4.5vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.025em] mb-5 text-white">Get Hayya</h2>
                            <p className="text-base md:text-[1.05rem] text-white/50 font-light leading-[1.75] mt-4">
                                The GCC entertainment sector remained digitally fractured, forcing users across disconnected platforms and preventing venues from capturing cross-sector loyalty or shared data.
                            </p>

                            <div className="flex flex-wrap gap-2 mt-8">
                                {["Cinemas", "Events", "Attractions", "Dining", "Super App"].map(tag => (
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
                                    Underutilized screens & venue capacity, rising supply without demand aggregation, and fragmented booking journeys split across multiple disconnected platforms.
                                </p>
                            </div>

                            <h3 className="font-syne text-[clamp(1.4rem,3vw,2.4rem)] font-bold leading-[1.1] tracking-[-0.02em] mb-4 text-white">Our Solution</h3>
                            <p className="text-[0.9rem] text-white/40 mt-3 leading-[1.7] mb-7">
                                Get Hayya bridges the digital gap by consolidating cinemas, events, attractions, and dining into a mobile-first super app that unifies the entire consumer journey — providing venues with behavioral data and cross-selling tools needed to maximize seat utilization and long-term customer value.
                            </p>

                            <div>
                                <ProcessStep num="01" title="Real-time Seat Selection" description="Cross-venue seat availability and AI-enabled dynamic pricing engine." />
                                <ProcessStep num="02" title="Cross-Venue Loyalty" description="Unified loyalty and offers working across all connected venues." />
                                <ProcessStep num="03" title="Dining & F&B Integration" description="Seamless dining ordering and add-on booking within the super app." />
                                <ProcessStep num="04" title="Enterprise-grade CMS" description="Operator control panel for content, pricing, and offer management." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ordonex Case Study */}
            <section className="px-5 md:px-20 py-24 bg-[#111111]">
                <div className="max-w-7xl mx-auto">
                    <SectionLabel>Case Study</SectionLabel>
                    <div className="grid md:grid-cols-2 gap-10 md:gap-[60px] mt-10 items-start">
                        <div className="md:sticky md:top-24">
                            <div className="text-[0.65rem] tracking-[0.2em] uppercase text-white mb-2.5">
                                Cinema F&B Digital Ordering
                            </div>
                            <h2 className="font-syne text-[clamp(2rem,4.5vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.025em] mb-5 text-white">Ordonex</h2>
                            <p className="text-base md:text-[1.05rem] text-white/50 font-light leading-[1.75] mt-4">
                                Despite high demand, cinema concessions remained one of the region&apos;s least digitized F&B categories, preventing customers from ordering through standard delivery channels.
                            </p>

                            <div className="border border-white/10 mt-8 flex flex-wrap">
                                <ResultItem num="25%" label="F&B Revenue Increase" />
                                <ResultItem num="38%" label="Improved Customer Ratings" />
                            </div>
                        </div>

                        <div>
                            <div className="bg-[#00e5c8]/5 border border-[#00e5c8]/20 p-8 md:p-10 mb-10">
                                <h4 className="font-syne text-[0.75rem] font-bold text-white tracking-[0.05em] uppercase mb-3">The Challenge</h4>
                                <p className="text-[0.9rem] text-white/50 leading-[1.7]">
                                    Non-standard POS workflows and complex combo structures prevented cinema concession menus from being available through delivery platforms.
                                </p>
                            </div>

                            <div className="mt-7">
                                <ProcessStep num="01" title="Delivery Platform Integration" description="Real-time menu and inventory sync with major delivery partners." />
                                <ProcessStep num="02" title="Multi-partner Compatibility" description="Compatible with Vista POS and multiple delivery ecosystems." />
                                <ProcessStep num="03" title="Multilingual Support" description="Full Arabic and English language support across the platform." />
                                <ProcessStep num="04" title="CMS Operations Dashboard" description="Detailed dashboard for operations, reporting, and configuration." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Band */}
            <section className="relative px-5 md:px-20 py-24 bg-[#111111] text-center border-t border-b border-white/10 overflow-hidden">
                <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(0,229,200,0.06)_0%,transparent_70%)]" />
                <div className="relative z-10">
                    <h2 className="font-syne text-[clamp(2rem,5vw,4.5rem)] font-extrabold leading-none tracking-[-0.03em] mb-5 text-white">
                        Build the future of<br />
                        <em className="italic text-white">guest experiences.</em>
                    </h2>
                    <p className="text-[#f5f5f0]/50 text-[0.95rem] mb-9">
                        Let&apos;s talk about your venue&apos;s digital transformation.
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
