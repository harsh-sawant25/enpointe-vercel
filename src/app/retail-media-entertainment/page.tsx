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
    <div className={`${interregular.className} flex items-center gap-3 text-[0.88rem] text-white/60 py-2 border-b border-white/5 last:border-b-0 font-normal`}>
        <div className="w-1.5 h-1.5 rounded-full bg-[#A6DAFF]/60 flex-shrink-0" />
        {children}
    </div>
);

const ProductCard = ({ tag, title, description, features, className = "" }: { tag: string, title: string, description: string, features?: string[], className?: string }) => (
    <div className={`group relative border border-white/10 p-0 bg-[#111111] transition-all duration-300 hover:border-[#A6DAFF] overflow-hidden ${className}`}>
        <div className="p-10">
            <div className={`${interregular.className} text-[0.6rem] tracking-[0.2em] uppercase text-white/40 mb-3 border border-white/10 inline-block px-2 py-1 font-normal`}>
                {tag}
            </div>
            <h3 className={`${interbold.className} text-[1.5rem] font-bold mb-4 text-white uppercase`}>{title}</h3>
            <p className={`${interregular.className} text-[0.9rem] text-white/50 leading-[1.6] mb-8 font-normal min-h-[80px]`}>
                {description}
            </p>
            {features && (
                <div className="space-y-1 pt-6 border-t border-white/10">
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
        <div className={`${interregular.className} bg-[#171717] text-[#f5f5f0]`}>
            {/* Page Hero */}
            <section className="relative px-5 md:px-20 pt-40 pb-20 min-h-[50vh] flex flex-col justify-end border-b border-white/10 overflow-hidden text-white">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-0" />
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto">
                    <div className={`${interregular.className} text-[0.68rem] tracking-[0.2em] uppercase text-[#A6DAFF] mb-4`}>
                        Products / Retail, Media & Entertainment Tech
                    </div>
                    <h1 className={`${interbold.className} text-[clamp(2.5rem,8vw,8rem)] font-bold leading-[0.92] tracking-[-0.04em] mb-6 uppercase`}>
                        PLATFORM<br />ECOSYSTEM.
                    </h1>
                    <p className={`${interregular.className} text-base md:text-[1rem] text-white/50 max-w-[550px] font-normal leading-[1.7]`}>
                        End-to-end products unifying fragmented customer journeys in experience-driven industries — from intelligent ticketing to OTT streaming and rights management.
                    </p>
                </div>
            </section>

            {/* Product Portfolio */}
            <section className="px-5 md:px-20 py-24 bg-[#171717]">
                <div className="max-w-7xl mx-auto">
                    <SectionLabel>Our Product Portfolio</SectionLabel>
                    <h2 className={`${interbold.className} text-[clamp(2rem,4.5vw,4rem)] font-bold leading-[1.05] tracking-[-0.025em] mb-8 text-white`}>
                        Built from real enterprise <em className="italic text-white">deployments.</em>
                    </h2>
                    <p className={`${interregular.className} text-base md:text-[1.1rem] text-white/50 font-normal leading-[1.75] max-w-[800px] mb-16 px-1 border-l-2 border-white/10`}>
                        Each product represents a repeatable, scalable solution to high-impact business problems — designed to integrate seamlessly into enterprise ecosystems, accelerating AI adoption while reducing time-to-value.
                    </p>

                    {/* NUVIO - Featured Product */}
                    <div className="border border-white/10 bg-[#111111] transition-all hover:border-[#A6DAFF] mb-10 overflow-hidden">
                        <div className="p-10 md:p-14">
                            <div className={`${interregular.className} text-[0.65rem] tracking-[0.2em] uppercase text-white/40 mb-4 border border-white/10 inline-block px-3 py-1.5 font-normal`}>
                                Cinema & Experiences
                            </div>
                            <h3 className={`${interbold.className} text-[2.5rem] md:text-[4rem] font-bold mb-6 text-white leading-none`}>NUVIO</h3>
                            <p className={`${interregular.className} text-base md:text-[1.1rem] text-white/50 leading-[1.7] max-w-[700px] font-normal`}>
                                End-to-end ticketing and experience platform built for cinemas, attractions, and large-scale venues — with 350K+ transactions processed monthly and 30+ years shaping cinema technology.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 border-t border-white/10">
                            <div className="p-10 border-b md:border-b-0 md:border-r border-white/10">
                                <SectionLabel className="mb-8">For Cinemas</SectionLabel>
                                <div className="space-y-4">
                                    <FeatureItem>Multi-format film management (4D, IMAX, DMAX)</FeatureItem>
                                    <FeatureItem>Integrated ticketing, POS, and F&B</FeatureItem>
                                    <FeatureItem>Distributor-grade reporting and analytics</FeatureItem>
                                    <FeatureItem>Real-time seat and occupancy intelligence</FeatureItem>
                                    <FeatureItem>TMS and digital signage integration</FeatureItem>
                                </div>
                            </div>
                            <div className="p-10">
                                <SectionLabel className="mb-8">For Experiences</SectionLabel>
                                <div className="space-y-4">
                                    <FeatureItem>Attractions, events, retail, hybrid venues</FeatureItem>
                                    <FeatureItem>Unified kiosks, wallets, and passes</FeatureItem>
                                    <FeatureItem>Dynamic zones, bundles, and pricing</FeatureItem>
                                    <FeatureItem>Centralised operational analytics</FeatureItem>
                                    <FeatureItem>ISO 27001 and PCI DSS certified</FeatureItem>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats row for Nuvio */}
                    <div className="grid grid-cols-2 md:grid-cols-4 border border-white/10 bg-[#171717] mb-20 divide-x divide-y md:divide-y-0 divide-white/10">
                        {[
                            { num: "350K+", label: "Monthly Transactions" },
                            { num: "30+", label: "Years in Technology" },
                            { num: "6+", label: "Countries Deployed" },
                            { num: "3K+", label: "Screens Powered" },
                        ].map((s, i) => (
                            <div key={i} className="p-8 text-center flex flex-col items-center justify-center">
                                <div className={`${interbold.className} text-[2.2rem] font-bold text-[#A6DAFF] leading-none mb-2`}>{s.num}</div>
                                <div className={`${interregular.className} text-[0.65rem] text-white/40 tracking-[0.05em] uppercase font-normal`}>{s.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* More products grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ProductCard
                            tag="Digital Signage"
                            title="Arzen"
                            description="Enterprise-grade digital signage platform centralizing content management and enabling seamless distribution across large screen networks."
                            features={[
                                "Real-time display control & intelligent CMS",
                                "Modular content creation & remote access",
                                "Schedule creation and template designer",
                                "Retail, Cinemas, Airports, Metro, Healthcare"
                            ]}
                        />
                        <ProductCard
                            tag="OTT Streaming"
                            title="Streaming Platform"
                            description="State-of-the-art OTT streaming platform delivering video content with advanced monetization, cross-platform accessibility, and integrated ad engine."
                            features={[
                                "Real-time multi-bitrate streaming",
                                "Integrated ad engine & subscription management",
                                "Catalog management & content discovery",
                                "Media, Education, Corporate Training"
                            ]}
                        />
                        <ProductCard
                            tag="Rights Management"
                            title="Rights Platform"
                            description="Switzerland-domiciled, secure, cloud-based platform simplifying rights, contracts, royalties, and billing for media and IP-intensive industries."
                            features={[
                                "300+ rights secured via the platform",
                                "Automated royalty calculations & payments",
                                "5+ production houses onboarded",
                                "Film, TV, Music Publishing, Gaming"
                            ]}
                        />
                        <ProductCard
                            tag="Expense Management"
                            title="Production Finance"
                            description="Industry-agnostic, cloud-based platform and mobile app streamlining all enterprise and production-related financial workflows."
                            features={[
                                "$150M+ movie production expenses processed",
                                "Mobile-first approval system with digital docs",
                                "Duplicate detection & multi-project support",
                                "Entertainment, IT, Consulting, Professional Services"
                            ]}
                        />
                        <ProductCard
                            tag="CRM Partner"
                            title="Netcore Integration"
                            description="Full-stack CRM and customer engagement platform — a unified customer platform combining data, automation, and personalization."
                            features={[
                                "Customer Data Platform (CDP)",
                                "Omnichannel: Email, SMS, WhatsApp, Web, App",
                                "AI-led personalization & lifecycle marketing",
                                "Higher conversion, improved retention"
                            ]}
                        />
                        <ProductCard
                            tag="Horror OTT"
                            title="Slasher"
                            description="First-ever horror OTT experience in the GCC — 100,000+ subscribers and growing daily, powered by Enpointe's streaming platform infrastructure."
                            features={[
                                "100K+ subscribers & growing",
                                "New subscribers daily across GCC",
                                "900+ horror titles in catalog",
                                "First-mover in GCC horror streaming"
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* CTA Band */}
            {/* <section className="relative px-5 md:px-20 py-24 bg-[#171717] text-center border-t border-white/10 overflow-hidden">
                <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
                <div className="relative z-10">
                    <h2 className={`${interbold.className} text-[clamp(2rem,5vw,4.5rem)] font-bold leading-none tracking-[-0.03em] mb-5 text-white`}>
                        Ready to deploy our<br />
                        <em className="italic text-white">platform ecosystem?</em>
                    </h2>
                    <p className={`${interregular.className} text-white/50 text-[0.95rem] mb-9 font-normal`}>
                        Let&apos;s match the right product to your business challenge.
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
