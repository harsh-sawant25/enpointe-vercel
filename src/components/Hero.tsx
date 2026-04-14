"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/gupter/400.css";
import { interregular } from "@/fonts";

// ─── Particle Canvas ──────────────────────────────────────────────────────────
const ParticleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Sparse subtle particles — matches source (barely visible, sparse)
    const PARTICLE_COUNT = 28;
    type Particle = {
      x: number; y: number;
      vx: number; vy: number;
      size: number; opacity: number;
    };
    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.12,
      vy: (Math.random() - 0.5) * 0.12,
      size: Math.random() * 1.2 + 0.3,
      opacity: Math.random() * 0.18 + 0.06,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 2 }}
    />
  );
};
// ─────────────────────────────────────────────────────────────────────────────

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.log("Hero video autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <>
      <section
        id="hero"
        className="relative w-full h-screen min-h-[900px] flex flex-col items-center justify-center overflow-hidden bg-black"
      >
        {/* ── Background Video (grayscale + very low opacity, exactly like source) ── */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video
            ref={videoRef}
            src="https://videos.pexels.com/video-files/15196747/15196747-uhd_2560_1440_30fps.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover will-change-transform outline-none border-none"
            style={{ opacity: 10, filter: "grayscale(1)" }}
          />
          {/* Dark overlay on top of video — matches framer-nd0kn1 overlay */}
          <div className="absolute inset-0 bg-black/40" style={{ zIndex: 1 }} />
          {/* Rotated bg shape — matches framer-1ka0dxz rotate(-13deg) */}
          <div
            className="absolute pointer-events-none"
            style={{
              inset: "-60%",
              background:
                "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(148,209,255,0.05) 0%, transparent 70%)",
              transform: "rotate(-13deg)",
              zIndex: 1,
            }}
          />
        </div>

        {/* ── Particle Canvas (white dots matching source) ── */}
        <ParticleCanvas />

        {/* ── Main Content ── */}
        <div
          className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 flex flex-col items-center justify-center text-center"
          style={{ zIndex: 10 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 mb-8"
          >
            {/* Tiny dot — matches framer source exactly (small 6px solid dot + pulsing ring) */}
            {/* <div className="relative flex items-center justify-center w-3 h-3">
              <motion.div
                animate={{ scale: [1, 2.2, 1], opacity: [0.6, 0, 0.6] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full bg-[#94D1FF] blur-[2px]"
              />
              <div className="relative w-[6px] h-[6px] bg-[#A6DAFF] rounded-full shadow-[0_0_10px_rgba(168,209,255,0.6)]" />
            </div> */}
            <span className="text-[#ffffff99] text-[14px] font-semibold tracking-[0.15em] uppercase">
              YOUR TRUSTED ENGINEERING PARTNER
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[920px] mx-auto px-2"
          >
            <h1 className="leading-[1.05] tracking-[-0.01em] text-center">
              <span className={`${interregular.className} block not-italic text-[#E4E9F2] text-[52px] sm:text-[60px] font-medium text-center`}>
                Engineering
              </span>
              <span className={`${interregular.className} block italic text-[#E4E9F2] text-[52px] sm:text-[80px] font-medium text-center`}>
                Intelligence At Scale.
              </span>

            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 mb-10 text-[#D5D8E6] font-normal text-[16px] max-w-[520px] mx-auto text-center"
          >
            We build systems that bring intelligence into modern businesses — from AI transformation to enterprise-grade platforms.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            {/*
              framer-BhIrY framer-BDLwN framer-12234y7
              <a> outer: background-color: rgba(255,255,255,0.05); border-radius: 45px
            */}
            <Link
              href="#explore"
              className="relative group inline-flex items-center justify-center focus:outline-none"
              style={{ backgroundColor: "rgba(255,255,255,0.05)", borderRadius: 45 }}
            >
              {/*
                framer-17imexa  "Glow"
                radial-gradient(25% 50% at 50% 100%, white → transparent)
                filter: blur(15px); border-radius: 8px
              */}
              <div
                className="absolute inset-0 z-0"
                style={{
                  background: "radial-gradient(25% 50% at 50% 100%, rgb(255,255,255) 0%, rgba(255,255,255,0) 100%)",
                  filter: "blur(15px)",
                  borderRadius: 8,
                }}
              />
              {/*
                framer-7h3gur  "Stroke"
                radial-gradient(60.1% 50% at 50% 100%, white → transparent)
                border-radius: 8px; will-change: auto
              */}
              <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  background: "radial-gradient(60.1% 50% at 50% 100%, rgb(255,255,255) 0%, rgba(255,255,255,0) 100%)",
                  borderRadius: 8,
                }}
              />
              {/*
                framer-lxo2hv  "Fill"
                background-color: rgb(0,0,0); border-radius: 8px
              */}
              <div
                className="relative z-20"
                style={{ backgroundColor: "rgb(0,0,0)", borderRadius: 8 }}
              >
                {/*
                  framer-1lr1b2a  "text content"
                  Contains: text paragraph + framer-fIGy1 arrow icon
                */}
                <div className="flex items-center gap-[6px] px-6 py-[13px]" style={{ opacity: 1 }}>
                  {/*
                    framer-1w0qshb  "Text"  RichTextContainer
                    framer-styles-preset-r6b8wq
                  */}
                  <p
                    className={`${interregular.className} text-[16px] text-white font-semibold m-0 leading-none whitespace-nowrap`}
                  >
                    Explore Our Work
                  </p>
                  {/*
                    framer-fIGy1 framer-q8wehq
                    --21h8s6: rgb(255,255,255) — white
                    --1m6trwb: 0              — no fill (outline)
                    --pgex8v: 1.5             — stroke-width 1.5
                    ArrowUpRight arrow icon
                  */}
                  <svg
                    viewBox="0 0 24 24"
                    width={22}
                    height={22}
                    fill="none"
                    stroke="rgb(255,255,255)"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ opacity: 1, flexShrink: 0 }}
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Down Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-[60px] md:bottom-[140px] left-1/2 -translate-x-1/2"
          style={{ zIndex: 20 }}
        >
          <Link
            href="#founder-note"
            className="flex items-center justify-center text-[rgba(184,199,217,0.5)] hover:text-white transition-colors duration-300 outline-none"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg width="24" height="24" viewBox="0 0 256 256" fill="currentColor">
                <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z" />
              </svg>
            </motion.div>
          </Link>
        </motion.div>
      </section >
    </>
  );
};

export default Hero;
