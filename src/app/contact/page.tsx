// import Image from "next/image";
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
// import { plusjakartasans } from "../layout";
// import Link from "next/link";

const AccordionItem = ({ question, answer, initialOpen = false }: { question: string; answer: string; initialOpen?: boolean }) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  return (
    <div 
      className="border border-white/10 rounded-[10px] overflow-hidden transition-all duration-300"
      style={{ 
        backgroundColor: "#171717",
        boxShadow: "rgba(207, 231, 255, 0.2) 0px 2px 1px 0px inset"
      }}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <p className="m-0 text-[18px] font-medium opacity-80 group-hover:opacity-100 transition-opacity" style={{ fontFamily: '"Inter", sans-serif' }}>
          {question}
        </p>
        <div className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(213, 219, 230)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </button>
      
      <div 
        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="p-6 pt-0 opacity-60 leading-relaxed text-[16px]">
          {answer}
        </div>
      </div>

      {/* Accordion Light Effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.05]" 
        style={{ background: "radial-gradient(50% 50% at 7.2% 6.1%, rgba(184, 199, 217, 0.5) 0%, rgba(4, 7, 13, 0) 100%)" }} 
      />
    </div>
  );
};

const Page = () => {
  return (
    <div className="bg-[#171717] text-white overflow-hidden min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap');
      `}</style>

      {/* Main Section */}
      <section className="relative w-full overflow-hidden" id="contact">
        <div className="w-full max-w-[1200px] mx-auto px-6 py-24 flex flex-col items-center gap-16">

          {/* Heading Section */}
          <div className="flex flex-col items-center gap-6 text-center w-full" id="heading">
            {/* CONTACT Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="inline-flex items-center justify-center px-6 py-2 border border-white/10 rounded-[60px]"
                style={{ backgroundColor: "#171717" }}
              >
                <p
                  className="m-0 text-[12px] tracking-[0.1em] font-semibold"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  CONTACT
                </p>
              </div>
            </motion.div>

            {/* Reach Us Anytime Title */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2
                className="m-0 text-[44px] md:text-[56px] lg:text-[64px]"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 500,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em"
                }}
              >
                <span style={{
                  backgroundImage: "linear-gradient(161deg, rgb(213, 219, 230) 51.657657657657666%, rgb(4, 7, 13) 166%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}>
                  Reach Us <span style={{ fontFamily: '"Instrument Serif", serif', fontStyle: "italic", fontWeight: 400, color: "rgb(228, 233, 242)", WebkitTextFillColor: "rgb(228, 233, 242)" }}>Anytime</span>
                </span>
              </h2>
            </motion.div>

            {/* Subtitle */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p
                className="m-0 text-[18px] opacity-60 max-w-[500px]"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                Have questions or need help? We’re here for you
              </p>
            </motion.div>
          </div>
          {/* Form & Contacts Section */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8" id="form">
            
            {/* Left Column: Contact Cards */}
            <div className="flex flex-col gap-6">
              {/* Email Us Card */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative overflow-hidden p-8 border border-white/10 rounded-[16px] flex flex-col gap-6"
                style={{
                  backgroundColor: "#171717",
                  boxShadow: "rgba(207, 231, 255, 0.2) 0px 2px 1px 0px inset"
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: "#171717",
                      boxShadow: "rgba(207, 231, 255, 0.2) 0px 1px 1px 0px inset"
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <p className="m-0 text-[20px] font-semibold" style={{ fontFamily: '"Inter", sans-serif' }}>Email Us</p>
                </div>
                <p className="m-0 text-[15px] opacity-60 leading-relaxed">
                  Facing technical challenges or product concerns? We’re here to assist
                </p>
                <a
                  href="mailto:landio@support.com"
                  className="text-[16px] text-[#0099FF] hover:underline"
                >
                  landio@support.com
                </a>
                
                {/* Light Overlay */}
                <div className="absolute inset-0 pointer-events-none" style={{
                  background: "radial-gradient(50% 50% at 93.7% 8.1%, rgba(184, 199, 217, 0.1) 0%, rgba(4, 7, 13, 0) 100%)",
                }} />
              </motion.div>

              {/* Contact Sales Card */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative overflow-hidden p-8 border border-white/10 rounded-[16px] flex flex-col gap-6"
                style={{
                  backgroundColor: "#171717",
                  boxShadow: "rgba(207, 231, 255, 0.2) 0px 2px 1px 0px inset"
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: "rgb(16, 19, 28)",
                      boxShadow: "rgba(207, 231, 255, 0.2) 0px 1px 1px 0px inset"
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                    </svg>
                  </div>
                  <p className="m-0 text-[20px] font-semibold" style={{ fontFamily: '"Inter", sans-serif' }}>Contact Sales</p>
                </div>
                <p className="m-0 text-[15px] opacity-60 leading-relaxed">
                  Let’s collaborate on custom solutions or discuss product insights
                </p>
                <a
                  href="https://calendly.com/"
                  className="text-[16px] text-[#0099FF] hover:underline"
                  target="_blank"
                  rel="noopener"
                >
                  Book a call
                </a>

                {/* Light Overlay */}
                <div className="absolute inset-0 pointer-events-none" style={{
                  background: "radial-gradient(50% 50% at 93.7% 8.1%, rgba(184, 199, 217, 0.1) 0%, rgba(4, 7, 13, 0) 100%)",
                }} />
              </motion.div>
            </div>

            {/* Right Column: Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative p-10 border border-white/10 rounded-[16px]"
              style={{ backgroundColor: "#171717" }}
            >
              <form className="flex flex-col gap-8">
                <div className="flex items-center gap-4 mb-2">
                  <p className="m-0 text-[20px] font-medium opacity-80" style={{ fontFamily: '"Inter", sans-serif' }}>
                    We’d love to help! Let us know how
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                  {/* Full Name */}
                  <div className="flex flex-col gap-3">
                    <label className="text-[14px] opacity-60 font-medium">Full Name</label>
                    <input
                      type="text"
                      placeholder="Ikta Sollork"
                      className="bg-transparent border-b border-white/10 py-3 outline-none focus:border-white/30 transition-colors text-[16px]"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="flex flex-col gap-3">
                    <label className="text-[14px] opacity-60 font-medium">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="landio@support.com"
                      className="bg-transparent border-b border-white/10 py-3 outline-none focus:border-white/30 transition-colors text-[16px]"
                    />
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-3 md:col-span-2">
                    <label className="text-[14px] opacity-60 font-medium">Subject Of Interest</label>
                    <input
                      type="text"
                      placeholder="Regarding Product"
                      className="bg-transparent border-b border-white/10 py-3 outline-none focus:border-white/30 transition-colors text-[16px]"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-3 md:col-span-2">
                    <label className="text-[14px] opacity-60 font-medium">How may we assist you?</label>
                    <textarea
                      placeholder="Give us more info.."
                      className="bg-transparent border-b border-white/10 py-3 outline-none focus:border-white/30 transition-colors text-[16px] min-h-[100px] resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button - Exactly as per user-provided HTML */}
                <div className="relative mt-4">
                    <button 
                      type="submit" 
                      className="relative w-full h-[60px] flex items-center justify-center rounded-[8px] bg-[#171717] border-[4px] border-[#272727] outline-none cursor-pointer group"
                      style={{ opacity: 1 }}
                    >
                      {/* Glow Layer - Only visible on hover, bleeds below for the 'bloom' effect */}
                      <div
                        className="absolute inset-x-0 -bottom-4 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                        style={{
                          height: "100%",
                          background: "radial-gradient(35% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
                          filter: "blur(20px)",
                          borderRadius: "8px",
                          zIndex: 0,
                        }}
                      />

                    {/* Stroke Layer - Now synchronizes with the Glow on hover */}
                    <div
                      className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                      style={{
                        background: "radial-gradient(20.7% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
                        borderRadius: "8px",
                      }}
                    />

                    {/* Fill Layer */}
                    <div
                      className="absolute inset-[1px] pointer-events-none"
                      style={{
                        backgroundColor: "#171717",
                        borderRadius: "8px",
                        opacity: 1
                      }}
                    />

                    {/* Content Layer */}
                    <div
                      className="relative z-10 flex items-center justify-center w-full"
                      style={{ opacity: 1 }}
                    >
                      <p
                        className="m-0 text-[16px] font-semibold tracking-wide"
                        style={{ fontFamily: '"Inter", sans-serif' }}
                      >
                        Send Your Message
                      </p>
                    </div>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Decorative Background Elements */}
        {/* Border / Divider */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/5" />

        {/* BG Shape */}
        <div
          className="absolute -bottom-[20%] right-[-10%] w-[60%] aspect-square pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(148, 209, 255, 0.03) 0%, transparent 70%)",
            transform: "rotate(-13deg)"
          }}
        />
      </section>

      {/* FAQ Section */}
      <section className="relative w-full overflow-hidden py-24 border-t border-white/5" id="faq" style={{ backgroundColor: "#171717" }}>
        <div className="w-full max-w-[1200px] mx-auto px-6 flex flex-col items-center gap-16">
          
          {/* FAQ Heading */}
          <div className="flex flex-col items-center gap-6 text-center w-full">
            {/* FAQ'S Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center justify-center px-6 py-2 border border-white/10 rounded-[60px]" style={{ backgroundColor: "#171717" }}>
              <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(213, 219, 230)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
                <p className="m-0 text-[12px] tracking-[0.1em] font-semibold" style={{ fontFamily: '"Inter", sans-serif' }}>FAQ&apos;S</p>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="m-0 text-[44px] md:text-[56px] text-white"
              style={{ 
                fontFamily: '"Inter", sans-serif', 
                fontWeight: 500,
                lineHeight: 1.1,
                letterSpacing: "-0.03em"
              }}
            >
              <span style={{
                backgroundImage: "linear-gradient(161deg, rgb(213, 219, 230) 51.657657657657666%, rgb(4, 7, 13) 166%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>
                Frequently Asked <span style={{ fontFamily: '"Instrument Serif", serif', fontStyle: "italic", fontWeight: 400, color: "rgb(228, 233, 242)", WebkitTextFillColor: "rgb(228, 233, 242)" }}>Questions</span>
              </span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="m-0 text-[18px] opacity-60 font-normal" style={{ fontFamily: '"Inter", sans-serif' }}>
              Find quick answers to the most common support questions
            </motion.p>
          </div>

          {/* FAQ Content Grid */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-12">
            
            {/* Left Column: Summary Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div 
                className="p-8 border border-white/10 rounded-[20px] flex flex-col items-center text-center gap-8 relative overflow-hidden"
                style={{ 
                  backgroundColor: "#171717",
                  boxShadow: "rgba(207, 231, 255, 0.2) 0px 2px 1px 0px inset"
                }}
              >
                <div 
                  className="w-12 h-12 flex items-center justify-center rounded-lg"
                  style={{ 
                    backgroundColor: "#171717",
                    boxShadow: "rgba(207, 231, 255, 0.2) 0px 1px 1px 0px inset"
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(213, 219, 230)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A4.5 4.5 0 0 0 13.5 3.5c-1.3 0-2.6.5-3.5 1.5-.8.8-1.3 1.5-1.5 2.5" />
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                  </svg>
                </div>
                
                <div className="flex flex-col gap-3">
                  <p className="m-0 text-[20px] font-medium text-white">Still Have Questions?</p>
                  <p className="m-0 text-[15px] opacity-60 leading-relaxed">
                    Still have questions? Feel free to get in touch with us today!
                  </p>
                </div>

                <a 
                  href="/contact"
                  className="w-full py-4 rounded-[8px] flex items-center justify-center gap-2 border border-white/10 hover:opacity-100 transition-opacity"
                  style={{ 
                    background: "linear-gradient(180deg, rgb(20, 20, 20) 0%, rgba(255, 255, 255, 0.07) 100%)",
                    backdropFilter: "blur(5px)"
                  }}
                >
                  <span className="text-[14px] font-medium opacity-80">Ask A Question</span>
                </a>

                {/* Light Effect */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-[0.1]" 
                  style={{ background: "radial-gradient(50% 50% at 93.7% 8.1%, rgba(184, 199, 217, 0.5) 0%, rgba(4, 7, 13, 0) 100%)" }} 
                />
              </div>
            </motion.div>

            {/* Right Column: Accordion */}
            <div className="flex flex-col gap-4">
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}><AccordionItem question="What types of processes can you automate?" answer="We specialize in automating repetitive workflows across operations, marketing, sales, and customer support using AI and custom logic." initialOpen={true} /></motion.div>
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}><AccordionItem question="Do I need technical knowledge to use your service?" answer="Not at all. Our team handles the setup, integration, and optimization. You just focus on your goals — we’ll automate the rest." /></motion.div>
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}><AccordionItem question="Can you integrate with our existing tools?" answer="Yes! We support integrations with CRMs, project management tools, communication apps, and more — tailored to your stack." /></motion.div>
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}><AccordionItem question="How long does implementation take?" answer="Most clients see their first automation live within 1–2 weeks, depending on complexity and the number of workflows." /></motion.div>
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}><AccordionItem question="Is your AI secure and compliant?" answer="Absolutely. We use enterprise-grade security practices and ensure compliance with major data privacy standards like GDPR." /></motion.div>
            </div>
          </div>
        </div>

        {/* Decorative Shapes */}
        <div 
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-[1px] opacity-50"
          style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.07) 0%, rgb(0, 0, 0) 100%)" }}
        />
        <div 
          className="absolute -bottom-20 right-0 w-[500px] aspect-square rotate-[-13deg] opacity-[0.1] pointer-events-none"
          style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(213, 219, 230, 0.7) 0%, rgba(4, 7, 13, 0) 100%)", borderRadius: "10px" }}
        />
      </section>
    </div>
    // <section
    //   className={`bg-white flex flex-col font-normal justify-center px-[9.375rem] pt-[5.625rem] pb-[3.125rem] ${plusjakartasans.className}`}
    // >
    //   <div className="flex justify-between mt-auto">
    //     <aside>
    //       <div className="font-normal mb-[65px]">
    //         {/* Title */}
    //         <div className="flex justify-start items-center">
    //           <span className="text-[44px]">Have</span>
    //           {/* Video */}
    //           <div className="rounded-full h-[4.6875rem] mx-2 overflow-hidden relative w-[4.6875rem]">
    //             <video
    //               src="/ch.mp4"
    //               className="object-cover h-full w-full absolute left-0 top-0 rounded-[100%]"
    //               autoPlay
    //               loop
    //               muted
    //               playsInline
    //               disablePictureInPicture
    //               controlsList="nodownload nofullscreen noremoteplayback"
    //               width={75}
    //               height={75}
    //             />
    //           </div>
    //           <span className="text-[44px]">great idea ?</span>
    //         </div>
    //         <p className="text-[44px]">Tell us about it.</p>
    //       </div>
    //       {/* <div className="mb-[50px]">
    //         <h4 className="text-gray-500 text-2xl mb-[1.25rem]">
    //           Clients trust us
    //         </h4>
    //         <div className="mt-5">
    //           <div className="flex items-center">
    //             <Image
    //               src="https://qclay.design/images/clutch.svg"
    //               alt="Clutch"
    //               width={30}
    //               height={30}
    //               className="w-[34.5px]"
    //             />
    //             <div className="pl-[10px]">
    //               <div className="flex">
    //                 <Image
    //                   src="https://qclay.design/images/star.svg"
    //                   alt="Stars"
    //                   width={14}
    //                   height={14}
    //                 />
    //                 <Image
    //                   src="https://qclay.design/images/star.svg"
    //                   alt="Stars"
    //                   width={14}
    //                   height={14}
    //                 />
    //                 <Image
    //                   src="https://qclay.design/images/star.svg"
    //                   alt="Stars"
    //                   width={14}
    //                   height={14}
    //                 />
    //                 <Image
    //                   src="https://qclay.design/images/star.svg"
    //                   alt="Stars"
    //                   width={14}
    //                   height={14}
    //                 />
    //                 <Image
    //                   src="https://qclay.design/images/star.svg"
    //                   alt="Stars"
    //                   width={14}
    //                   height={14}
    //                 />
    //               </div>
    //               <p className="text-[13.5px]">Rating 5, 24 reviews</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div> */}
    //       <div className="mb-[2.5rem]">
    //         <h4 className="text-gray-500 text-2xl mb-[1.25rem]">Follow us:</h4>
    //         <div className="flex">
    //           <a
    //             href="https://www.linkedin.com/company/enpointe-io/"
    //             target="_blank"
    //             className="flex items-center justify-center rounded-full border border-gray-100 p-[0.875rem] m-[0.3125rem] relative transition-colors duration-400 ease-in-out w-fit"
    //           >
    //             <Image
    //               src="/LinkedIn.svg"
    //               alt="LinkedIn"
    //               width={2}
    //               height={2}
    //               className="h-[1.25rem] w-[1.25rem]"
    //             />
    //           </a>
    //           {/* <a
    //             href="https://www.behance.net/qclay"
    //             target="_blank"
    //             className="flex items-center justify-center rounded-full border border-gray-100 p-[0.875rem] m-[0.3125rem] relative transition-colors duration-400 ease-in-out w-fit"
    //           >
    //             <Image
    //               src="https://qclay.design/static/media/behance.4cedff2169f1289c363fe418c60b7502.svg"
    //               alt="Dribble"
    //               width={2}
    //               height={2}
    //               className="h-[1.25rem] w-[1.25rem]"
    //             />
    //           </a>
    //           <a
    //             href="https://www.tiktok.net/@qclay.design"
    //             target="_blank"
    //             className="flex items-center justify-center rounded-full border border-gray-100 p-[0.875rem] m-[0.3125rem] relative transition-colors duration-400 ease-in-out w-fit"
    //           >
    //             <Image
    //               src="https://qclay.design/static/media/tiktok.5fa5d155c5003ed11d6f04e1725e0a74.svg"
    //               alt="Dribble"
    //               width={2}
    //               height={2}
    //               className="h-[1.25rem] w-[1.25rem]"
    //             />
    //           </a>
    //           <a
    //             href="https://www.instagram.com/qclaydesign"
    //             target="_blank"
    //             className="flex items-center justify-center rounded-full border border-gray-100 p-[0.875rem] m-[0.3125rem] relative transition-colors duration-400 ease-in-out w-fit"
    //           >
    //             <Image
    //               src="https://qclay.design/static/media/instagram.c5a79371a13d507687a37a5230fd1c43.svg"
    //               alt="Dribble"
    //               width={2}
    //               height={2}
    //               className="h-[1.25rem] w-[1.25rem]"
    //             />
    //           </a> */}
    //         </div>
    //       </div>
    //       <div>
    //         <h4 className="text-gray-500 text-2xl mb-[1.25rem]">Contact us</h4>
    //         <a
    //           href="mailto:hr@enpointe.io"
    //           className="relative text-base"
    //           target="_blank"
    //           rel="noreferrer"
    //         >
    //           hr@enpointe.io
    //         </a>
    //       </div>
    //     </aside>
    //     <form className="relative">
    //       <div className="flex mb-[2.5625rem]">
    //         <div className="w-full mr-[1.875rem]">
    //           <label
    //             htmlFor="Name & Company"
    //             className="block text-base font-medium mb-[.75rem]"
    //           >
    //             Name & Company
    //           </label>
    //           <input
    //             type="text"
    //             name="name"
    //             id="Name & Company"
    //             placeholder="John from Apple"
    //             className="w-full border-b border-gray-100 font-[Plus Jakarta Sans] text-sm font-normal py-[1.3125rem] transition-all duration-400 outline-none"
    //           />
    //         </div>
    //         <div className="w-full mr-[1.875rem]">
    //           <label
    //             htmlFor="Your Email"
    //             className="block text-base font-medium mb-[.75rem]"
    //           >
    //             Your Email
    //           </label>
    //           <input
    //             type="text"
    //             name="name"
    //             id="Your Email"
    //             placeholder="john@apple.com"
    //             className="w-full border-b border-[#eaeaea] font-[Plus Jakarta Sans] text-sm font-normal py-[1.3125rem] transition-all duration-400 outline-none"
    //           />
    //         </div>
    //       </div>
    //       <div className="mb-[41px]">
    //         <h5 className="">I'm interested in...</h5>
    //         <div className="flex flex-wrap gap-x-4 gap-y-2 mt-5 max-w-[45rem]">
    //           {[
    //             "Web Development",
    //             "App from scratch",
    //             "UX/UI Design",
    //             "Branding",
    //             "Site from scratch",
    //             "App Development",
    //             "Maintenance",
    //           ].map((interest) => (
    //             <label key={interest} className="cursor-pointer">
    //               <input
    //                 type="checkbox"
    //                 name="interest"
    //                 value={interest}
    //                 className="hidden peer"
    //               />
    //               <span className="bg-white border border-gray-300 text-gray-900 rounded-full inline-block text-sm px-6 py-3 transition-colors duration-300 ease-in-out peer-checked:bg-black peer-checked:text-white">
    //                 {interest}
    //               </span>
    //             </label>
    //           ))}
    //         </div>
    //       </div>
    //       <div className="mb-[1.625rem]">
    //         <label
    //           htmlFor="Tell us more about your project"
    //           className="block text-base font-medium mb-[.75rem]"
    //         >
    //           Tell us more about your project
    //         </label>
    //         <input
    //           type="text"
    //           name="message"
    //           id="Tell us more about your project"
    //           placeholder="Something about your great idea"
    //           className="w-full border-b border-gray-100 font-[Plus Jakarta Sans] text-sm font-normal py-[1.3125rem] transition-all duration-400 outline-none"
    //         />
    //       </div>
    //       <div className="relative w-fit">
    //         <button className="bg-black text-white text-lg font-medium px-6 cursor-pointer py-3 rounded-full relative flex justify-center items-center">
    //           <span className="text-[16px] font-medium">
    //             Submit the request
    //           </span>
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    //   <hr className="w-full mt-12 bg-black"/>
    //   <div className="container mt-16 grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-4 px-10">
    //     {/* Logo Section */}
    //     <div>
    //       <Image
    //         src="/Enpointe Black.png"
    //         alt="Enpointe Logo"
    //         width={150}
    //         height={40}
    //         priority
    //       />
    //     </div>

    //     {/* Navigation Links */}
    //     <div>
    //       <h3 className="text-base font-bold">Quick Links</h3>
    //       <ul className="mt-3 space-y-2">
    //         <li>
    //           <Link href="/work" className="hover:text-gray-400">
    //             <p className="text-base font-bold">Case Studies</p>
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/about" className="hover:text-gray-400">
    //             <p className="text-base font-bold">Team</p>
    //           </Link>
    //         </li>
    //         {/* <li>
    //           <Link href="/contact" className="hover:text-gray-400">
    //             <p className="text-base font-bold">Approach</p>
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/diversity" className="hover:text-gray-400">
    //             <p className="text-base font-bold">Diversity</p>
    //           </Link>
    //         </li> */}
    //         <li>
    //           <Link href="/blog" className="hover:text-gray-400">
    //             <p className="text-base font-bold">Blog</p>
    //           </Link>
    //         </li>
    //         <li className="relative">
    //           <Link
    //             href="/careers"
    //             className="hover:text-gray-400 flex items-center"
    //           >
    //             <span className="absolute w-2 h-2 bg-green-500 rounded-full animate-blink -left-5"></span>
    //             <p className="text-base font-bold">{"We're Hiring"}</p>
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/contact" className="hover:text-gray-400">
    //             <p className="text-base font-bold">Contact Us</p>
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>

    //     {/* Services */}
    //     <div>
    //       <h3 className="text-base font-bold">Services</h3>
    //       <ul className="mt-3 space-y-2">
    //         <li>
    //           <Link href="/ios-development" className="hover:text-gray-400">
    //             <p className="text-base font-bold">IOS App Development</p>
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/careers" className="hover:text-gray-400">
    //             <p className="text-base font-bold">Android App Development</p>
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/careers" className="hover:text-gray-400">
    //             <p className="text-base font-bold">UI/UX Strategy & Design</p>
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/careers" className="hover:text-gray-400">
    //             <p className="text-base font-bold cursor-pointer">
    //               Mobile Game Development
    //             </p>
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/careers" className="hover:text-gray-400">
    //             <p className="text-base font-bold cursor-pointer">
    //               Web Platform Development
    //             </p>
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>

    //     {/* Locations */}
    //     <div>
    //       <h3 className="text-base font-bold">Locations</h3>
    //       <ul className="mt-3 space-y-2">
    //         <li>
    //           <Link href="/contact" className="hover:text-gray-400">
    //             <p className="text-base font-bold cursor-pointer">Dubai, UAE</p>
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/contact" className="hover:text-gray-400">
    //             <p className="text-base font-bold cursor-pointer">
    //               Mumbai, India
    //             </p>
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>

    //     {/* Social Media Links */}
    //     {/* <div>
    //       <div className="flex space-x-4 mt-3">
    //         <a
    //           href="https://www.linkedin.com/company/enpointe-io/"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           <Image
    //             src="/linkedin.png"
    //             alt="LinkedIn"
    //             width={24}
    //             height={24}
    //           />
    //         </a>
    //       </div>
    //     </div> */}
    //   </div>

    //   {/* Footer Bottom */}
    //   <div className="text-center mt-8 text-xs">
    //     © {new Date().getFullYear()} Enpointe IT Services PVT LTD. All Rights
    //     Reserved.
    //     <span className="mx-2">|</span>
    //     <Link
    //       href="/privacy-policy"
    //       className="font-bold text-[12px] text-black"
    //     >
    //       <u>Privacy Policy</u>
    //     </Link>
    //     <span className="mx-2">|</span>
    //     <Link href="/terms-of-use" className="font-bold text-[12px] text-black">
    //       <u>Terms of Use</u>
    //     </Link>
    //   </div>
    // </section>
  );
};

export default Page;
