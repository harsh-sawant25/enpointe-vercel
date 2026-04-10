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
                        Industries / Ecommerce & Publishing
                    </div>
                    <h1 className="font-syne text-[clamp(3.5rem,8vw,8rem)] font-extrabold leading-[0.92] tracking-[-0.04em] mb-6 text-white uppercase">
                        ECOMMERCE &<br />PUBLISHING
                    </h1>
                    <p className="text-base md:text-[1rem] text-white/50 max-w-[520px] font-light leading-[1.7]">
                        Unified CMS, CRM, and AI-native editorial platforms that power intelligent content operations and drive digital commerce at scale.
                    </p>
                </div>
            </section>

            {/* What We Build */}
            <section className="px-5 md:px-20 py-24 bg-[#080808]">
                <div className="max-w-7xl mx-auto">
                    <SectionLabel>What We Build</SectionLabel>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                        <Card
                            icon="✍"
                            title="AI-Native CMS"
                            description="Centralized content, workflows, SEO optimization, and AI-assisted publishing for editorial teams."
                        />
                        <Card
                            icon="🎯"
                            title="CRM & Lifecycle Marketing"
                            description="Lead scoring, segmentation, engagement tracking, and omnichannel lifecycle automation."
                        />
                        <Card
                            icon="📈"
                            title="Analytics & Intelligence"
                            description="Unified dashboards for behavior, funnels, and campaign performance across all channels."
                        />
                        <Card
                            icon="🎟"
                            title="Events Platform"
                            description="End-to-end event registration, management, and engagement for digital and in-person events."
                        />
                        <Card
                            icon="🛍"
                            title="Conversational Commerce"
                            description="AI shopping assistant helping customers make confident purchase decisions."
                        />
                        <Card
                            icon="⚖"
                            title="Rights Management"
                            description="Secure, cloud-based platform for rights, contracts, royalties, and billing."
                        />
                    </div>
                </div>
            </section>

            {/* People Matters Case Study */}
            <section className="px-5 md:px-20 py-24 bg-[#111111]">
                <div className="max-w-7xl mx-auto">
                    <SectionLabel>Case Study</SectionLabel>
                    <div className="grid md:grid-cols-2 gap-10 md:gap-[60px] mt-10 items-start">
                        <div className="md:sticky md:top-24">
                            <div className="text-[0.65rem] tracking-[0.2em] uppercase text-white mb-2.5">
                                B2B Publishing & HR Media
                            </div>
                            <h2 className="font-syne text-[clamp(2rem,4.5vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.025em] mb-5 text-white">People Matters</h2>
                            <p className="text-base md:text-[1.05rem] text-white/50 font-light leading-[1.75] mt-4">
                                People Matters faced a complex and fragmented digital ecosystem spanning various content, events, marketing, and CRM systems — limiting scalability and hindering user experience.
                            </p>

                            <div className="border border-white/10 mt-8 flex flex-wrap">
                                <ResultItem num="140%" label="Page Traffic Increase" />
                                <ResultItem num="60%" label="Editorial Efficiency Increase" />
                            </div>
                        </div>

                        <div>
                            <div className="bg-[#00e5c8]/5 border border-[#00e5c8]/20 p-8 md:p-10 mb-10">
                                <h4 className="font-syne text-[0.75rem] font-bold text-white tracking-[0.05em] uppercase mb-3">The Challenge</h4>
                                <p className="text-[0.9rem] text-white/50 leading-[1.7]">
                                    No unified CMS or content workflow, fragmented events, marketing, and email systems, limited personalisation and segmented communication, and lack of centralised analytics.
                                </p>
                            </div>

                            <h3 className="font-syne text-[clamp(1.4rem,3vw,2.4rem)] font-bold leading-[1.1] tracking-[-0.02em] mb-4 text-white">Our Solution: AI Native CMS + CRM</h3>
                            <p className="text-[0.9rem] text-white/40 mt-3 leading-[1.7] mb-7">
                                We transformed People Matters&apos; digital stack into a unified, AI-driven platform integrating content, events, marketing automation, CRM, analytics, and a fully revamped website.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Card title="Unified CMS & Website Revamp" description="Centralized content, workflows, SEO, and AI-assisted publishing." className="p-7" />
                                <Card title="AI Native CRM" description="Lead scoring, segmentation, and engagement tracking across all regions." className="p-7" />
                                <Card title="360° Analytics Dashboard" description="Unified dashboards for behaviour, funnels, and campaign performance." className="p-7" />
                                <Card title="Events Integration" description="End-to-end event management woven into the editorial workflow." className="p-7" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dharma Productions Case Study */}
            <section className="px-5 md:px-20 py-24 bg-[#080808]">
                <div className="max-w-7xl mx-auto">
                    <SectionLabel>Case Study</SectionLabel>
                    <div className="grid md:grid-cols-2 gap-10 md:gap-[60px] mt-10 items-start">
                        <div className="md:sticky md:top-24">
                            <div className="text-[0.65rem] tracking-[0.2em] uppercase text-white mb-2.5">
                                Bollywood Production House
                            </div>
                            <h2 className="font-syne text-[clamp(2rem,4.5vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.025em] mb-5 text-white">Dharma Productions</h2>
                            <p className="text-base md:text-[1.05rem] text-white/50 font-light leading-[1.75] mt-4">
                                Comprehensive digital transformation for one of India&apos;s most celebrated film production houses — website, mobile application, and audience engagement platform.
                            </p>

                            <div className="flex flex-wrap gap-2 mt-8">
                                {["Website", "Mobile App", "Fan Engagement", "CMS"].map(tag => (
                                    <span key={tag} className="text-[0.68rem] tracking-[0.08em] uppercase text-white/50 border border-white/10 px-3 py-1.5">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="bg-[#00e5c8]/5 border border-[#00e5c8]/20 p-8 md:p-10 mb-10">
                                <h4 className="font-syne text-[0.75rem] font-bold text-white tracking-[0.05em] uppercase mb-3">The Transformation</h4>
                                <p className="text-[0.9rem] text-white/50 leading-[1.7]">
                                    Unified digital experience platform integrating content management, fan engagement, and a multidomain CMS with integrated CRM for streamlined communication across all Dharma touchpoints.
                                </p>
                            </div>

                            <div className="mt-7">
                                <ProcessStep num="01" title="Unified Digital Experience" description="Web and mobile platform creating a cohesive brand and fan experience." />
                                <ProcessStep num="02" title="Multidomain CMS" description="Streamlined content publishing across all Dharma properties and brands." />
                                <ProcessStep num="03" title="CRM Integration" description="Audience segmentation and engagement automation for film launches." />
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
                        Power your content<br />
                        <em className="italic text-white">and commerce operations.</em>
                    </h2>
                    <p className="text-[#f5f5f0]/50 text-[0.95rem] mb-9">
                        Let&apos;s build an intelligent publishing ecosystem for your brand.
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