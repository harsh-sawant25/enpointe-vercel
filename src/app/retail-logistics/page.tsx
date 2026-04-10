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
                        Industries / Retail & Logistics
                    </div>
                    <h1 className="font-syne text-[clamp(3.5rem,8vw,8rem)] font-extrabold leading-[0.92] tracking-[-0.04em] mb-6 text-white uppercase">
                        RETAIL &<br />LOGISTICS
                    </h1>
                    <p className="text-base md:text-[1rem] text-white/50 max-w-[520px] font-light leading-[1.7]">
                        AI-driven operational ecosystems that eliminate manual inefficiency, optimize supply chains, and create seamless commerce experiences.
                    </p>
                </div>
            </section>

            {/* Capability Overview */}
            <section className="px-5 md:px-20 py-24 bg-[#080808]">
                <div className="max-w-7xl mx-auto">
                    <SectionLabel>Capability Overview</SectionLabel>
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="font-syne text-[clamp(2rem,4.5vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.025em] mb-5 text-white">
                                From warehouses to <em className="italic text-white">digital storefronts.</em>
                            </h2>
                            <p className="text-base md:text-[1.05rem] text-white/50 font-light leading-[1.75] mt-4">
                                We apply AI and intelligent automation across the full logistics and retail stack — from ERP-grade operational ecosystems to conversational commerce platforms that drive confident purchase decisions.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Card
                                icon="🏭"
                                title="Operations AI"
                                description="Predictive procurement, automated dispatch, and quality control systems."
                            />
                            <Card
                                icon="📦"
                                title="Supply Chain ERP"
                                description="Custom ERP systems optimizing end-to-end logistics workflows."
                            />
                            <Card
                                icon="🛒"
                                title="Commerce Intelligence"
                                description="AI shopping assistants driving confident purchase decisions."
                            />
                            <Card
                                icon="🧾"
                                title="Invoice Automation"
                                description="AI-powered invoice processing from receipt to accounting integration."
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Sarmix Case Study */}
            <section className="px-5 md:px-20 py-24 bg-[#111111]">
                <div className="max-w-7xl mx-auto">
                    <SectionLabel>Case Study</SectionLabel>
                    <div className="grid md:grid-cols-2 gap-10 md:gap-[60px] mt-10 items-start">
                        <div className="md:sticky md:top-24">
                            <div className="text-[0.65rem] tracking-[0.2em] uppercase text-white mb-2.5">
                                Industrial Operations
                            </div>
                            <h2 className="font-syne text-[clamp(2rem,4.5vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.025em] mb-5 text-white">Sarmix</h2>
                            <p className="text-base md:text-[1.05rem] text-white/50 font-light leading-[1.75] mt-4">
                                Sarmix faced significant operational risk, as manual workflows across all core processes created pervasive inefficiencies and human error.
                            </p>

                            <div className="border border-white/10 mt-8 flex flex-wrap">
                                <ResultItem num="23%" label="Error Reduction" />
                                <ResultItem num="37%" label="Operational Cost Savings" />
                            </div>
                            <div className="border border-white/10 flex flex-wrap border-t-0">
                                <ResultItem num="30%" label="Throughput Increase" />
                                <div className="flex-1 min-w-[140px] p-7 border-r border-white/10 last:border-r-0" />
                            </div>
                        </div>

                        <div>
                            <div className="bg-[#00e5c8]/5 border border-[#00e5c8]/20 p-8 md:p-10 mb-10">
                                <h4 className="font-syne text-[0.75rem] font-bold text-white tracking-[0.05em] uppercase mb-3">The Challenge</h4>
                                <p className="text-[0.9rem] text-white/50 leading-[1.7]">
                                    Substantial inconsistencies across planning and dispatch, lack of reactive quality management resulting in high correction costs, strained vendor relationships due to manual invoicing errors, and labor-intensive yard and fleet operations.
                                </p>
                            </div>

                            <h3 className="font-syne text-[clamp(1.4rem,3vw,2.4rem)] font-bold leading-[1.1] tracking-[-0.02em] mb-4 text-white">Our Solution: AI Operational Ecosystem</h3>
                            <p className="text-[0.9rem] text-white/40 mt-3 leading-[1.7] mb-7">
                                We replaced isolated tools with an integrated ecosystem that leverages AI for predictive quality control and automated gate management.
                            </p>

                            <div>
                                <ProcessStep num="01" title="Predictive Procurement" description="AI-driven demand forecasting reducing overstock and shortages." />
                                <ProcessStep num="02" title="Automated Quality Control" description="Real-time defect detection replacing manual inspection workflows." />
                                <ProcessStep num="03" title="Intelligent Dispatch" description="AI-optimized fleet routing and yard management reducing idle time." />
                                <ProcessStep num="04" title="Automated Invoicing" description="Eliminated manual invoicing errors, improving vendor relationships." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pridel Logistics Case Study */}
            <section className="px-5 md:px-20 py-24 bg-[#080808]">
                <div className="max-w-7xl mx-auto">
                    <SectionLabel>Case Study</SectionLabel>
                    <div className="grid md:grid-cols-2 gap-10 md:gap-[60px] mt-10 items-start">
                        <div className="md:sticky md:top-24">
                            <div className="text-[0.65rem] tracking-[0.2em] uppercase text-white mb-2.5">
                                Logistics & Invoice Processing
                            </div>
                            <h2 className="font-syne text-[clamp(2rem,4.5vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.025em] mb-5 text-white">Pridel Logistics</h2>
                            <p className="text-base md:text-[1.05rem] text-white/50 font-light leading-[1.75] mt-4">
                                Pridel faced significant operational hurdles, manually processing over 500 daily invoices, leading to errors and delays across their logistics operation.
                            </p>

                            <div className="border border-white/10 mt-8 flex flex-wrap">
                                <ResultItem num="50%" label="Extraction Accuracy Increase" />
                                <ResultItem num="40%" label="Cost Savings" />
                            </div>
                        </div>

                        <div>
                            <div className="bg-[#00e5c8]/5 border border-[#00e5c8]/20 p-8 md:p-10 mb-10">
                                <h4 className="font-syne text-[0.75rem] font-bold text-white tracking-[0.05em] uppercase mb-3">The Challenge</h4>
                                <p className="text-[0.9rem] text-white/50 leading-[1.7]">
                                    Manual email and invoice processing, high error rates and discrepancies, slow payment cycles impacting cash flow, and lack of a unified approval workflow across the organization.
                                </p>
                            </div>

                            <div className="mt-7">
                                <ProcessStep num="01" title="Automated Invoice Intake" description="AI extraction from emails and PDFs — near-zero manual data entry." />
                                <ProcessStep num="02" title="Unified Approval Workflow" description="Digital approval chain with custom templates for commercials." />
                                <ProcessStep num="03" title="Accounting Integration" description="Seamless sync with existing accounting systems and ERP." />
                                <ProcessStep num="04" title="Reporting Dashboard" description="Customizable cloud-hosted dashboard for full financial visibility." />
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
                        Let&apos;s optimize your<br />
                        <em className="italic text-white">operations with AI.</em>
                    </h2>
                    <p className="text-[#f5f5f0]/50 text-[0.95rem] mb-9">
                        Tell us about your operational challenges — we&apos;ll build the solution.
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
