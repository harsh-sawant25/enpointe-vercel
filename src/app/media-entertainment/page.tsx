"use client";

import React from 'react';
import { interregular, interbold } from '@/fonts';
import { motion } from 'framer-motion';

const SectionLabel = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <div className={`${interregular.className} flex items-center gap-2.5 mb-4 text-[0.68rem] tracking-[0.2em] uppercase text-[#A6DAFF] ${className}`}>
        <div className="w-5 h-[1px] bg-current" />
        {children}
    </div>
);

const Card = ({ icon, title, description }: { icon: string, title: string, description: string }) => (
    <div className="group relative border border-white/10 p-10 bg-[#111111] transition-all duration-300 hover:border-[#A6DAFF] hover:-translate-y-1 overflow-hidden">
        {/* <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00e5c8] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" /> */}
        <div className="w-11 h-11 bg-[#A6DAFF]/10 flex items-center justify-center mb-6 text-xl">
            {icon}
        </div>
        <h4 className={`${interbold.className} text-[1.1rem] font-bold mb-3 leading-tight text-white`}>{title}</h4>
        <p className={`${interregular.className} text-[0.88rem] text-white/50 leading-[1.7] font-normal`}>{description}</p>
    </div>
);

const ProcessStep = ({ num, title, description }: { num: string, title: string, description: string }) => (
    <div className="grid grid-cols-[60px_1fr] gap-8 py-10 border-b border-white/10 first:border-t">
        <div className={`${interbold.className} text-[0.7rem] font-bold text-white tracking-[0.1em] pt-1`}>
            {num}
        </div>
        <div className="step-content">
            <h4 className={`${interbold.className} text-[1.2rem] font-bold mb-2.5 text-white`}>{title}</h4>
            <p className={`${interregular.className} text-[0.88rem] text-white/50 leading-[1.7] font-normal`}>{description}</p>
        </div>
    </div>
);

const ResultItem = ({ num, label }: { num: string, label: string }) => (
    <div className="flex-1 min-w-[140px] p-7 border-r border-white/10 last:border-r-0 text-center">
        <div className={`${interbold.className} text-[2rem] font-bold text-[#A6DAFF] leading-none mb-1.5`}>{num}</div>
        <div className={`${interregular.className} text-[0.72rem] text-[#F5F5F0]/50 tracking-[0.05em] uppercase font-normal`}>{label}</div>
    </div>
);

const Page = () => {
    return (
        <div className={`${interregular.className} bg-[#171717] text-[#f5f5f0]`}>
            {/* Page Hero */}
            <section className="relative px-5 md:px-20 pt-40 pb-20 min-h-[50vh] flex flex-col justify-end border-b border-white/10 overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_100%,rgba(0,229,200,0.05)_0%,transparent_60%)]" /> */}
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto">
                    <div className={`${interregular.className} text-[0.68rem] tracking-[0.2em] uppercase text-[#A6DAFF] mb-4`}>
                        Industries / Media & Entertainment
                    </div>
                    <h1 className={`${interbold.className} text-[48px] md:text-[115px] font-bold leading-[0.92] tracking-[-0.04em] mb-6 text-white uppercase`}>
                        MEDIA &<br />ENTERTAINMENT
                    </h1>
                    <p className={`${interregular.className} text-base md:text-[16px] text-[#F5F5F0]/50 max-w-[520px] font-normal leading-[32px]`}>
                        Transforming cinema chains, OTT platforms, and production ecosystems with end-to-end digital engineering and AI-powered experiences.
                    </p>
                </div>
            </section>

            {/* Our Approach */}
            <section className="px-5 md:px-20 py-24 bg-[#171717]">
                <div className="max-w-7xl mx-auto">
                    <SectionLabel>Our Approach</SectionLabel>
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className={`${interbold.className} text-[48px] font-bold leading-[64.2px] -tracking-[2px] mb-5 text-white`}>
                                Where cinema meets <span className='text-[#A6DAFF]'>intelligent engineering</span>.
                            </h2>
                            <p className={`${interregular.className} text-base md:text-[18px] text-white/50 font-normal leading-[1.75] mt-4`}>
                                From fragmented ticketing systems to unified digital ecosystems, we&apos;ve spent 30+ years shaping how cinema and entertainment businesses operate at scale — combining cloud architecture, mobile-first design, and AI to drive measurable revenue growth.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Card
                                icon="🎬"
                                title="Cinema Tech"
                                description="End-to-end ticketing, POS, F&B and kiosk platforms for cinema operators."
                            />
                            <Card
                                icon="📱"
                                title="Mobile-First"
                                description="Native apps, progressive web apps and seamless digital journeys."
                            />
                            <Card
                                icon="📡"
                                title="OTT Streaming"
                                description="Multi-bitrate streaming with integrated ad engines and subscription management."
                            />
                            <Card
                                icon="🤖"
                                title="AI Personalization"
                                description="Dynamic pricing, intelligent upselling, and conversational booking experiences."
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Cinépolis Case Study */}
            <section className="px-5 md:px-20 py-24 bg-[#171717]">
                <div className="max-w-7xl mx-auto">
                    <SectionLabel>Case Study</SectionLabel>
                    <div className="grid md:grid-cols-2 gap-10 md:gap-[60px] mt-10 items-start">
                        <div className="md:sticky md:top-24">
                            <div className={`${interregular.className} text-[11px] tracking-[0.2em] uppercase text-[#A6DAFF] mb-2.5`}>
                                World&apos;s 4th Largest Cinema Chain
                            </div>
                            <h2 className={`${interbold.className} text-[clamp(2rem,4.5vw,4rem)] font-bold leading-[1.05] tracking-[-0.025em] mb-5 text-white`}>Cinépolis</h2>
                            <p className={`${interregular.className} text-base md:text-[1.05rem] text-white/50 font-normal leading-[1.75] mt-4`}>
                                Cinépolis faced significant operational and customer experience hurdles across its vast network in India and the GCC — from fragmented ticketing to static pricing.
                            </p>

                            <div className="border border-white/10 mt-8 mb-8 flex flex-wrap">
                                <ResultItem num="1M+" label="App Downloads in Year 1" />
                                <ResultItem num="15–20%" label="F&B Revenue Uplift" />
                            </div>
                            <div className="border border-white/10 flex flex-wrap">
                                <ResultItem num="1000+" label="Repeat Visit Improvement" />
                                <ResultItem num="↑" label="Incremental Revenue via Dynamic Pricing" />
                            </div>
                        </div>

                        <div>
                            <div className="bg-[#A6DAFF]/6 border border-[#00e5c8]/20 p-8 md:p-10 mb-10">
                                <h4 className={`${interbold.className} text-[0.75rem] font-bold text-[#A6DAFF] tracking-[0.05em] uppercase mb-3`}>The Challenge</h4>
                                <p className={`${interregular.className} text-[0.9rem] text-[#F5F5F0]/50 leading-[1.7] font-normal`}>
                                    Fragmented ticketing systems across regions, inconsistent customer journeys, static pricing unable to respond to real-time demand, disconnected F&B flows limiting upsell revenue, and high reliance on physical box offices causing queues.
                                </p>
                            </div>

                            <h3 className={`${interbold.className} text-[clamp(1.4rem,3vw,2.4rem)] font-bold leading-[1.1] tracking-[-0.02em] mb-4 text-white`}>Our Solution</h3>
                            <p className={`${interregular.className} text-[0.9rem] text-white/40 mt-3 leading-[1.7] font-normal`}>
                                We engineered a comprehensive, bespoke digital ecosystem designed to streamline operations, enhance customer experience, and drive revenue growth across all Cinépolis touchpoints.
                            </p>

                            <div className="mt-7">
                                <ProcessStep
                                    num="01"
                                    title="Unified Digital Platform"
                                    description="Single platform across web, mobile, kiosk, and POS with consistent UX."
                                />
                                <ProcessStep
                                    num="02"
                                    title="Dynamic Pricing Engine"
                                    description="Real-time demand-responsive pricing across all formats and locations."
                                />
                                <ProcessStep
                                    num="03"
                                    title="Integrated F&B Flows"
                                    description="Seamless concession ordering woven into the digital booking journey."
                                />
                                <ProcessStep
                                    num="04"
                                    title="Loyalty & CRM"
                                    description="AI-powered loyalty program driving repeat visits and personalized engagement."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Star Cinemas Case Study */}
            <section className="px-5 md:px-20 py-24 bg-[#171717]">
                <div className="max-w-7xl mx-auto">
                    <SectionLabel>Case Study</SectionLabel>
                    <div className="grid md:grid-cols-2 gap-10 md:gap-[60px] mt-10 items-start">
                        <div className="md:sticky md:top-24">
                            <div className={`${interregular.className} text-[11px] tracking-[0.2em] uppercase text-[#A6DAFF] mb-2.5`}>
                                14 Locations Across UAE
                            </div>
                            <h2 className={`${interbold.className} text-[clamp(2rem,4.5vw,4rem)] font-bold leading-[1.05] tracking-[-0.025em] mb-5 text-white`}>Star Cinemas</h2>
                            <p className={`${interregular.className} text-base md:text-[1.05rem] text-white/50 font-normal leading-[1.75] mt-4`}>
                                A leading cinema chain with 14 locations across the UAE, facing outdated software and limited digital presence.
                            </p>

                            <div className="border border-white/10 mt-8 flex flex-wrap">
                                <ResultItem num="15K+" label="Daily Digital Transactions" />
                                <ResultItem num="20–60%" label="Increase in Online Share" />
                            </div>
                        </div>

                        <div>
                            <div className="bg-[#A6DAFF]/6 border border-[#00e5c8]/20 p-8 md:p-10 mb-10">
                                <h4 className={`${interbold.className} text-[0.75rem] font-bold text-[#A6DAFF] tracking-[0.05em] uppercase mb-3`}>The Challenge</h4>
                                <p className={`${interregular.className} text-[0.9rem] text-[#F5F5F0]/50 leading-[1.7] font-normal`}>
                                    Outdated and fragmented cinema software across 14 UAE locations, inefficient operations, limited digital presence, manual ticketing & concession sales, and weak customer engagement.
                                </p>
                            </div>

                            <div className="mt-7">
                                <ProcessStep
                                    num="01"
                                    title="Platform Migration"
                                    description="Migrated legacy systems to a scalable, cloud-native Nuvio platform."
                                />
                                <ProcessStep
                                    num="02"
                                    title="Digital Channel Unification"
                                    description="Unified website, mobile app, and kiosks into a single customer journey."
                                />
                                <ProcessStep
                                    num="03"
                                    title="Ticket Express & F&B Express"
                                    description="Faster ticketing and concession ordering with reduced wait times."
                                />
                                <ProcessStep
                                    num="04"
                                    title="Arzen Digital Signage"
                                    description="Centralized signage for promotions, trailers, and in-cinema engagement."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Empire Cinemas Case Study */}
            <section className="px-5 md:px-20 py-24 bg-[#171717]">
                <div className="max-w-7xl mx-auto">
                    <SectionLabel>Case Study</SectionLabel>
                    <div className="grid md:grid-cols-2 gap-10 md:gap-[60px] mt-10 items-start">
                        <div className="md:sticky md:top-24">
                            <div className={`${interregular.className} text-[11px] tracking-[0.2em] uppercase text-[#A6DAFF] mb-2.5`}>
                                Kingdom of Saudi Arabia
                            </div>
                            <h2 className={`${interbold.className} text-[clamp(2rem,4.5vw,4rem)] font-bold leading-[1.05] tracking-[-0.025em] mb-5 text-white`}>Empire Cinemas KSA</h2>
                            <p className={`${interregular.className} text-base md:text-[1.05rem] text-white/50 font-normal leading-[1.75] mt-4`}>
                                A leading KSA cinema chain modernizing its digital infrastructure to combat legacy limitations and low online engagement.
                            </p>

                            <div className="border border-white/10 mt-8 flex flex-wrap">
                                <ResultItem num="100K+" label="App Downloads" />
                                <ResultItem num="20K+" label="Daily Digital Transactions" />
                            </div>
                            <div className="border border-white/10 mt-0 flex flex-wrap border-t-0">
                                <ResultItem num="40%" label="Online Share Increase" />
                                <ResultItem num="0.01%" label="Ticketing Failure Rate" />
                            </div>
                        </div>

                        <div>
                            <div className="bg-[#A6DAFF]/6 border border-[#00e5c8]/20 p-8 md:p-10 mb-10">
                                <h4 className={`${interbold.className} text-[0.75rem] font-bold text-[#A6DAFF] tracking-[0.05em] uppercase mb-3`}>The Challenge</h4>
                                <p className={`${interregular.className} text-[0.9rem] text-[#F5F5F0]/50 leading-[1.7] font-normal`}>
                                    Legacy client-server cinema software limiting scalability, operational inefficiencies, low online engagement, high counter dependency, and need for a cloud-first resilient architecture.
                                </p>
                            </div>

                            <div className="mt-7">
                                <ProcessStep
                                    num="01"
                                    title="Cloud-Based Cinema Architecture"
                                    description="Migrated legacy systems to a scalable, cloud-native platform."
                                />
                                <ProcessStep
                                    num="02"
                                    title="Digital Asset Revamp"
                                    description="Rebuilt website, mobile app, and kiosks for seamless UX."
                                />
                                <ProcessStep
                                    num="03"
                                    title="Nuvio Integration"
                                    description="Unified ticketing on a modern cloud cinema platform, reducing TCO."
                                />
                                <ProcessStep
                                    num="04"
                                    title="Loyalty CRM System"
                                    description="Built a custom CRM to personalize engagement and drive repeat visits."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Band */}
            {/* <section className="relative px-5 md:px-20 py-24 bg-[#171717] text-center border-t border-b border-white/10 overflow-hidden">
                <div className="absolute inset-0 z-0" />
                <div className="relative z-10">
                    <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-bold leading-none tracking-[-0.03em] mb-5 text-white">
                        Ready to transform your<br />
                        <em className="italic text-white">entertainment business?</em>
                    </h2>
                    <p className="text-[#f5f5f0]/50 text-[0.95rem] mb-9 font-normal">
                        Let us know what challenges you are facing so we can help.
                    </p>
                    <div
                        className="w-[54px] h-[54px] border border-white/10 rounded-full flex items-center justify-center mx-auto cursor-pointer text-xl transition-all duration-200 hover:border-[#A6DAFF]"
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
