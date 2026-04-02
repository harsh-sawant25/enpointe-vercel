"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const EmaarWorkPage = () => {
    return (
        <main className="min-h-screen bg-black">
            {/* ── Project Hero Section (Hero_el) ── */}
            <section
                className="relative w-full h-[90vh] flex flex-col justify-end overflow-hidden"
                style={{ "--bg-gradient-width": "63%" } as any}
            >
                {/* Background Image (Hero_bg) */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://cms.fableco.uk/wp-content/uploads/2024/08/Screenshot-2024-08-09-at-14.40.27-scaled.png"
                        alt="Project Background"
                        className="w-full h-full object-cover object-center translate-y-[-5%]"
                        style={{ filter: "brightness(0.8)" }}
                    />
                    {/* Gradient Overlay (Hero_el_hasBgGradient) */}
                    <div
                        className="absolute inset-0 z-10"
                        style={{
                            background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0) 100%)"
                        }}
                    />
                </div>

                {/* Content (Hero_inner) */}
                <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-12 pb-16 md:pb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col gap-4"
                    >
                        <h1
                            className="text-white font-medium leading-[1.1] max-w-4xl"
                            style={{
                                fontSize: "clamp(32px, 7vw, 72px)",
                                letterSpacing: "-0.04em",
                                fontFamily: '"Gupter", serif'
                            }}
                        >
                            Branding & Website for FinTech Company
                        </h1>
                        <h2
                            className="text-white/80 font-medium text-lg md:text-2xl lg:text-3xl"
                            style={{
                                letterSpacing: "-0.02em",
                                fontFamily: '"Inter", sans-serif'
                            }}
                        >
                            Zodia Custody
                        </h2>
                    </motion.div>
                </div>
            </section>

            {/* ── About Section (framer-1umkkq1) ── */}
            <section
                className="w-full bg-white py-20 md:py-32"
                data-framer-name="About"
            >
                <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
                    {/* Header Row (Header Section) */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 md:mb-24">
                        <motion.h5
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-black text-[30px] font-medium lowercase"
                            style={{
                                letterSpacing: "-0.03em",
                                fontFamily: '"Inter", sans-serif'
                            }}
                        >
                            about.
                        </motion.h5>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <a
                                href="https://www.framer.com/?via=hodak"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-[#f5f5f5] text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-all duration-300"
                                style={{ fontFamily: '"Inter", sans-serif' }}
                            >
                                See It Live
                            </a>
                        </motion.div>
                    </div>

                    {/* Content Section (framer-1p47sy6) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mb-20 md:mb-32"
                    >
                        <p
                            className="text-black text-2xl md:text-3xl lg:text-4xl font-medium leading-tight mb-8"
                            style={{ letterSpacing: "-0.04em", fontFamily: '"Inter", sans-serif' }}
                        >
                            Bringing Emaar&apos;s Attractions Operations Under One Roof
                        </p>
                        <p
                            className="text-black/60 text-lg md:text-xl lg:text-2xl leading-relaxed"
                            style={{ letterSpacing: "-0.02em", fontFamily: '"Inter", sans-serif' }}
                        >
                            Emaar is one of the most recognised real estate and lifestyle developers in the world, operating a wide portfolio of attractions, entertainment destinations and retail experiences across the UAE and beyond.
                        </p>
                    </motion.div>

                    {/* Image Gallery (Images) */}
                    <div className="flex flex-col gap-6 md:gap-10">
                        {/* Image Row 1 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full aspect-[16/9] overflow-hidden rounded-[20px] md:rounded-[40px] bg-[#f5f5f5]"
                        >
                            <img
                                src="https://framerusercontent.com/images/i34MU1fbvqLJVd0w98qfWEGCts.jpeg?width=2048"
                                alt="Showcase 1"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Image Row 2 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                                className="aspect-[4/3] overflow-hidden rounded-[20px] md:rounded-[40px] bg-[#f5f5f5]"
                            >
                                <img
                                    src="https://framerusercontent.com/images/G0QtFFNJbmTzRJEvIYb5k4WI8o.jpeg?width=1024"
                                    alt="Showcase 2"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                                className="aspect-[4/3] overflow-hidden rounded-[20px] md:rounded-[40px] bg-[#f5f5f5]"
                            >
                                <img
                                    src="https://framerusercontent.com/images/Cyi6iLN4TJjRaufkfnAgzlNnJDg.jpeg?width=1024"
                                    alt="Showcase 3"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Challenge Section (framer-1c0o656) ── */}
            <section
                className="w-full bg-white pb-20 md:pb-32"
                data-framer-name="Challenge"
            >
                <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
                    {/* Header Section (Header Section) */}
                    <div className="mb-12 md:mb-16">
                        <motion.h5
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-black text-[30px] font-medium lowercase"
                            style={{
                                letterSpacing: "-0.03em",
                                fontFamily: '"Inter", sans-serif'
                            }}
                        >
                            challenge.
                        </motion.h5>
                    </div>

                    {/* Content Section (framer-tlfugy) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-8xl flex flex-col gap-8 mb-20 md:mb-32"
                    >
                        <p
                            className="text-black text-lg md:text-xl lg:text-2xl leading-relaxed font-medium"
                            style={{ letterSpacing: "-0.02em", fontFamily: '"Inter", sans-serif' }}
                        >
                            Experience and attractions businesses globally are shifting toward connected operations — where ticketing, guest data, finance and on-site commerce all run from one place. Without that, operators end up managing multiple disconnected systems, making it hard to get a clear view of performance or deliver a consistent experience to guests.
                        </p>
                        <p
                            className="text-black/60 text-lg md:text-xl lg:text-2xl leading-relaxed"
                            style={{ letterSpacing: "-0.02em", fontFamily: '"Inter", sans-serif' }}
                        >
                            Emaar was facing exactly this. Across their attractions portfolio, different systems and vendors were handling different parts of the business. There was no single view of operations, limited data to make decisions from, and guests were experiencing inconsistency across venues.
                        </p>
                    </motion.div>

                    {/* Image Grid (Images) */}
                    <div className="flex flex-col gap-6 md:gap-10">
                        {/* Image Row 1 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="aspect-[4/3] overflow-hidden rounded-[20px] md:rounded-[40px] bg-[#f5f5f5]"
                            >
                                <img
                                    src="https://framerusercontent.com/images/8vsos78cRZFUd6Lw2cysrDc6jM.jpeg?width=1024"
                                    alt="Challenge Showcase 1"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                                className="aspect-[4/3] overflow-hidden rounded-[20px] md:rounded-[40px] bg-[#f5f5f5]"
                            >
                                <img
                                    src="https://framerusercontent.com/images/rW6FPokV6Uy00TT5s4auZQUtLs.jpeg?width=1024"
                                    alt="Challenge Showcase 2"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>

                        {/* Image Row 2 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                                className="aspect-[4/3] overflow-hidden rounded-[20px] md:rounded-[40px] bg-[#f5f5f5]"
                            >
                                <img
                                    src="https://framerusercontent.com/images/fZrRE6jNvSg4gqScYLN5JyRBpY.jpeg?width=1024"
                                    alt="Challenge Showcase 3"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                                className="aspect-[4/3] overflow-hidden rounded-[20px] md:rounded-[40px] bg-[#f5f5f5]"
                            >
                                <img
                                    src="https://framerusercontent.com/images/RqNmi0Pz9c376oZhuA7p0KPQm8.jpeg?width=1024"
                                    alt="Challenge Showcase 4"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Result Section (framer-gt2qy3) ── */}
            <section
                className="w-full bg-white pb-32"
                data-framer-name="Result"
            >
                <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
                    {/* Header Section (Header Section) */}
                    <div className="mb-12 md:mb-16">
                        <motion.h5
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-black text-[30px] font-medium lowercase"
                            style={{
                                letterSpacing: "-0.03em",
                                fontFamily: '"Inter", sans-serif'
                            }}
                        >
                            what we built.
                        </motion.h5>
                    </div>

                    {/* Content Section (framer-jwihma) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl flex flex-col gap-6 mb-20 md:mb-32"
                    >
                        <p
                            className="text-black text-lg md:text-xl lg:text-2xl leading-relaxed"
                            style={{ letterSpacing: "-0.02em", fontFamily: '"Inter", sans-serif' }}
                        >
                            We consolidated Emaar&apos;s attractions operations onto a single unified platform — bringing ticketing, finance, customer data and on-site commerce together in one place.
                        </p>
                        <p
                            className="text-black text-lg md:text-xl lg:text-2xl leading-relaxed"
                            style={{ letterSpacing: "-0.02em", fontFamily: '"Inter", sans-serif' }}
                        >
                            The platform was built to <strong className="font-semibold text-black">ISO 27001 and PCI DSS security standards</strong>, fully aligned with Emaar&apos;s internal compliance requirements.
                        </p>
                        <p
                            className="text-black text-lg md:text-xl lg:text-2xl leading-relaxed"
                            style={{ letterSpacing: "-0.02em", fontFamily: '"Inter", sans-serif' }}
                        >
                            AI-powered upselling was built into the customer journey, driving higher spend per visit through relevant, timely recommendations.
                        </p>
                    </motion.div>

                    {/* Image Grid (Images) */}
                    <div className="flex flex-col gap-6 md:gap-10">
                        {/* Image Row 1 - Two Side by Side */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="aspect-[4/3] overflow-hidden rounded-[20px] md:rounded-[40px] bg-[#f5f5f5]"
                            >
                                <img
                                    src="https://framerusercontent.com/images/4zNalo8YtA3CrN8xtTB6W17oc.jpeg?width=1024"
                                    alt="Result Showcase 1"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                                className="aspect-[4/3] overflow-hidden rounded-[20px] md:rounded-[40px] bg-[#f5f5f5]"
                            >
                                <img
                                    src="https://framerusercontent.com/images/4zNalo8YtA3CrN8xtTB6W17oc.jpeg?width=1024"
                                    alt="Result Showcase 2"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>

                        {/* Image Row 2 - Large Showcase */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                            className="w-full aspect-[16/9] overflow-hidden rounded-[20px] md:rounded-[40px] bg-[#f5f5f5]"
                        >
                            <img
                                src="https://framerusercontent.com/images/Jd0azu7V5Erc4if4CmHqgHrqCVQ.jpeg?width=2048"
                                alt="Result Showcase 3"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Impact Section (framer-1wlg082) ── */}
            <section
                className="w-full bg-white pb-32"
                data-framer-name="Testimonial"
            >
                <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
                    {/* Header Section (Header Section) */}
                    <div className="mb-12 md:mb-16">
                        <motion.h5
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-black text-[30px] font-medium lowercase"
                            style={{
                                letterSpacing: "-0.03em",
                                fontFamily: '"Inter", sans-serif'
                            }}
                        >
                            impact
                        </motion.h5>
                    </div>

                    {/* Content Section (framer-1d8632r) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <ul className="flex flex-col gap-6 list-none">
                            {[
                                { text: "100% increase in average cart value", bold: true },
                                { text: "80% increase in revenue across attractions", bold: true },
                                { text: "Unified finance dashboard across all attraction sites", bold: false },
                                { text: "Full 360° view of customer data across venues", bold: true }
                            ].map((item, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="text-black text-lg md:text-xl lg:text-2xl leading-relaxed flex items-start"
                                    style={{ letterSpacing: "-0.02em", fontFamily: '"Inter", sans-serif' }}
                                >
                                    <span className="mr-4">•</span>
                                    <span>
                                        {item.bold ? (
                                            <strong className="font-semibold">{item.text}</strong>
                                        ) : (
                                            item.text
                                        )}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* ── Similar Work Section (framer-r1tkxf) ── */}
            <section
                className="w-full bg-white pb-32"
                data-framer-name="Similar work"
            >
                <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
                    {/* Header Row */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 md:mb-24">
                        <motion.h5
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-black text-[30px] font-medium lowercase"
                            style={{
                                letterSpacing: "-0.03em",
                                fontFamily: '"Inter", sans-serif'
                            }}
                        >
                            more to explore.
                        </motion.h5>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Link
                                href="/works"
                                className="inline-block bg-[#f5f5f5] text-black px-8 py-3 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-all duration-300"
                                style={{ fontFamily: '"Inter", sans-serif' }}
                            >
                                Show More
                            </Link>
                        </motion.div>
                    </div>

                    {/* Work Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                        {/* Card 1: Star Cinemas */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative w-full aspect-[16/10] md:aspect-[4/3] overflow-hidden rounded-[20px] md:rounded-[40px] bg-[#f5f5f5]"
                        >
                            <Link href="/works/star-cinemas" className="block w-full h-full">
                                <div
                                    className="absolute inset-0 bg-repeat bg-[length:64px_64px] opacity-10 group-hover:scale-110 transition-transform duration-700 ease-out z-0"
                                    style={{
                                        backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>')`
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                <div className="absolute inset-0 flex flex-col justify-end p-10 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 z-20">
                                    <h4 className="text-white text-2xl md:text-3xl font-medium" style={{ fontFamily: '"Inter", sans-serif' }}>
                                        Star Cinemas
                                    </h4>
                                </div>
                            </Link>
                        </motion.div>

                        {/* Card 2: Empire Cinemas */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                            className="group relative w-full aspect-[16/10] md:aspect-[4/3] overflow-hidden rounded-[20px] md:rounded-[40px] bg-[#f5f5f5]"
                        >
                            <Link href="/works/empire-cinemas" className="block w-full h-full">
                                <div
                                    className="absolute inset-0 bg-repeat bg-[length:64px_64px] opacity-10 group-hover:scale-110 transition-transform duration-700 ease-out z-0"
                                    style={{
                                        backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>')`
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                <div className="absolute inset-0 flex flex-col justify-end p-10 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 z-20">
                                    <h4 className="text-white text-2xl md:text-3xl font-medium" style={{ fontFamily: '"Inter", sans-serif' }}>
                                        Empire Cinemas
                                    </h4>
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section
                className="w-full bg-[#171717] py-32 md:py-48"
                data-framer-name="CTA"
            >
                <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-start gap-12"
                    >
                        <h4
                            className="text-white font-medium leading-[1.1] max-w-4xl tracking-tight text-left"
                            style={{
                                fontSize: "clamp(36px, 6vw, 56px)",
                                letterSpacing: "-0.05em",
                                fontFamily: '"Inter", sans-serif'
                            }}
                        >
                            <span
                                className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-[#383838]"
                                style={{
                                    backgroundImage: "linear-gradient(95deg, rgb(255, 255, 255) 37%, rgb(56, 56, 56) 95%)"
                                }}
                            >
                                Curious about what we can create together? <br />
                                Let’s bring something extraordinary to life!
                            </span>
                        </h4>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Link
                                href="/contact"
                                className="inline-block bg-white text-black px-10 py-5 rounded-[4px] text-[18px] font-medium transition-colors hover:bg-white/95"
                                style={{ fontFamily: '"Inter", sans-serif' }}
                            >
                                Get in Touch
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default EmaarWorkPage;