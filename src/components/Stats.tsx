"use client";
import React, { useState, useEffect, useRef } from "react";

const PAGE_SIZE = 4;
const FLIP_MS = 280;
const STAGGER_MS = 80;
const DISPLAY_MS = 4500;
const RESET_AFTER = 1200; // Increased to ensure all phases finish comfortably

interface Stat { number: string; label: string; description: string; }
type Phase = "idle" | "top" | "bottom" | "settled";

const ALL_STATS: Stat[] = [
    // Group 1: Cinema & Experience Presence
    { number: "30M+", label: "Tickets sold", description: "Across cinema and experience platforms" },
    { number: "3000+", label: "Active Screens", description: "Powering theaters and venues worldwide" },
    { number: "10M+", label: "Platform interactions", description: "Engaging users through digital touchpoints" },
    { number: "40+", label: "Years of expertise", description: "Leading the media technology landscape" },

    // Group 2: User Scale & Infrastructure (New Unique Dummy Data)
    { number: "20M+", label: "Registered Users", description: "Connecting audiences to their favorite content" },
    { number: "1000+", label: "Enterprise Clients", description: "Trusted by major studios and global chains" },
    { number: "90M+", label: "API Requests", description: "High-concurrency data handled every hour" },
    { number: "70+", label: "Tech Patents", description: "Innovation at the core of our infrastructure" },
];

function chunk<T>(arr: T[], n: number): T[][] {
    const out: T[][] = [];
    for (let i = 0; i < arr.length; i += n) out.push(arr.slice(i, i + n));
    return out;
}

const NumDisplay = ({ stat }: { stat: Stat }) => (
    <div className="text-center px-3" style={{ backfaceVisibility: "hidden" }}>
        <h1 className="m-0 text-[48px] md:text-[64px] lg:text-[72px]" style={{
            fontFamily: '"Gupter","Gupter Placeholder",serif',
            fontWeight: 700, letterSpacing: "-2.5px",
            lineHeight: 1, color: "rgb(23,23,23)",
            WebkitFontSmoothing: "antialiased",
        }}>
            {stat.number}
        </h1>
    </div>
);

const TextDisplay = ({ stat }: { stat: Stat }) => (
    <div className="border-t border-[rgba(23,23,23,0.12)] pt-3 md:pt-4 flex flex-col items-center gap-1 text-center px-3 w-full" style={{ backfaceVisibility: "hidden" }}>
        <p className="m-0 text-[18px] md:text-[22px] lg:text-[26px] text-center w-full" style={{
            fontFamily: '"Inter",sans-serif', fontWeight: 600,
            letterSpacing: "-1.04px", lineHeight: "1.3", color: "rgb(12,12,12)",
            WebkitFontSmoothing: "antialiased",
        }}>
            {stat.label}
        </p>
        <p className="m-0 text-[14px] md:text-[15px] lg:text-[16px] text-center w-full" style={{
            fontFamily: '"Inter",sans-serif', fontWeight: 500,
            letterSpacing: "-0.3px", lineHeight: "1.4", color: "rgba(12,12,12,0.6)",
            WebkitFontSmoothing: "antialiased",
        }}>
            {stat.description}
        </p>
    </div>
);

const FlipCard = ({
    current, next, isFlipping, staggerDelay,
}: {
    current: Stat; next: Stat; isFlipping: boolean; staggerDelay: number;
}) => {
    const [phase, setPhase] = useState<Phase>("idle");
    const snapNext = useRef<Stat>(next);

    useEffect(() => {
        if (!isFlipping) {
            // After data update, reset to idle
            const t = setTimeout(() => setPhase("idle"), 50);
            return () => clearTimeout(t);
        }

        snapNext.current = next;

        const t1 = setTimeout(() => setPhase("top"), staggerDelay);
        const t2 = setTimeout(() => setPhase("bottom"), staggerDelay + FLIP_MS);
        const t3 = setTimeout(() => setPhase("settled"), staggerDelay + FLIP_MS * 2);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
        };
    }, [isFlipping, staggerDelay, next]);

    const displayNext = snapNext.current;

    // Visibility Logic to prevent overlap
    const showTopFlap = phase === "idle" || phase === "top";
    const showTopStaticNext = phase !== "idle"; // Number section static back

    const showBottomStaticCurr = phase !== "settled"; // Text section static back
    const showBottomFlap = phase === "bottom" || phase === "settled";

    return (
        <div className="flex flex-col w-full max-w-[280px] mx-auto" style={{ transformStyle: "preserve-3d" }}>

            {/* ── NUMBER section ── */}
            <div style={{ position: "relative", overflow: "hidden", perspective: "1000px", transformStyle: "preserve-3d" }}>
                {/* Height driver */}
                <div style={{ visibility: "hidden", pointerEvents: "none" }}>
                    <NumDisplay stat={current} />
                </div>

                {/* Static: NEXT number (revealed as old folds away) */}
                <div style={{
                    position: "absolute", inset: 0, zIndex: 1,
                    visibility: showTopStaticNext ? "visible" : "hidden",
                    transform: "translateZ(0)",
                }}>
                    <NumDisplay stat={displayNext} />
                </div>

                {/* Flap: CURRENT number (folds down) */}
                <div style={{
                    position: "absolute", inset: 0, zIndex: 2,
                    transformOrigin: "center bottom",
                    transform: (phase !== "idle") ? "rotateX(-90deg)" : "rotateX(0deg)",
                    transition: phase === "top" ? `transform ${FLIP_MS}ms ease-in` : "none",
                    backfaceVisibility: "hidden",
                    visibility: showTopFlap ? "visible" : "hidden",
                    willChange: "transform",
                }}>
                    <NumDisplay stat={current} />
                </div>
            </div>

            {/* ── TEXT section ── */}
            <div style={{ position: "relative", overflow: "hidden", perspective: "1000px", transformStyle: "preserve-3d" }}>
                {/* Height driver */}
                <div style={{ visibility: "hidden", pointerEvents: "none" }}>
                    <TextDisplay stat={current} />
                </div>

                {/* Static: CURRENT text (covers as flap folds up) */}
                <div style={{
                    position: "absolute", inset: 0, zIndex: 1,
                    visibility: showBottomStaticCurr ? "visible" : "hidden",
                    transform: "translateZ(0)",
                }}>
                    <TextDisplay stat={current} />
                </div>

                {/* Flap: NEXT text (folds up to replace) */}
                <div style={{
                    position: "absolute", inset: 0, zIndex: 3, // Higher than static curr
                    transformOrigin: "center top",
                    transform: (phase === "settled" || phase === "bottom") ? "rotateX(0deg)" : "rotateX(90deg)",
                    transition: phase === "bottom" ? `transform ${FLIP_MS}ms ease-out` : "none",
                    backfaceVisibility: "hidden",
                    visibility: showBottomFlap ? "visible" : "hidden",
                    willChange: "transform",
                }}>
                    <TextDisplay stat={displayNext} />
                </div>
            </div>
        </div>
    );
};

const Stats = () => {
    const groups = chunk(ALL_STATS, PAGE_SIZE);
    const [currentIdx, setCurrentIdx] = useState(0);
    const [isFlipping, setIsFlipping] = useState(false);
    const nextIdx = (currentIdx + 1) % groups.length;

    useEffect(() => {
        const timer = setInterval(() => {
            setIsFlipping(true);
            setTimeout(() => {
                setIsFlipping(false);
                setCurrentIdx(prev => (prev + 1) % groups.length);
            }, RESET_AFTER);
        }, DISPLAY_MS);
        return () => clearInterval(timer);
    }, [groups.length]);

    const current = groups[currentIdx];
    const next = groups[nextIdx];

    return (
        <section className="relative w-full bg-white overflow-hidden" id="our-impact">
            <div className="w-full max-w-[1240px] mx-auto px-6 py-12 md:py-20 lg:py-26 flex flex-col items-center gap-10 md:gap-16">

                {/* Heading Area - Matching Source Image 1 */}
                <div className="w-full flex flex-col md:flex-row items-start justify-between gap-8 mb-4">
                    
                    {/* Badge: "Our Impact" with Arrow icon */}
                    <div className="flex items-center gap-3 py-1">
                        <div className="opacity-60">
                            <svg 
                                width="14" 
                                height="14" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="rgb(23, 23, 23)" 
                                strokeWidth="2.5" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            >
                                <polyline points="15 10 20 15 15 20" />
                                <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                            </svg>
                        </div>
                        <p 
                            className="m-0 text-[14px] md:text-[15px]" 
                            style={{
                                color: "rgb(23, 23, 23)", 
                                fontFamily: '"Inter", sans-serif',
                                fontWeight: 500, 
                                letterSpacing: "-0.2px",
                            }}
                        >
                            Our Impact
                        </p>
                    </div>

                    {/* Heading: Right Aligned */}
                    <div className="max-w-[700px] text-right">
                        <h3 
                            dir="auto" 
                            className="m-0 text-[36px] md:text-[48px] tracking-[-1.8px]" 
                            style={{
                                fontFamily: '"Gupter", serif', 
                                fontWeight: 400,
                                color: "var(--token-eb09dbbf-ef85-4b7f-81a5-44e9b062efb7, rgb(23, 23, 23))",
                                textAlign: "right",
                                lineHeight: "60.8px",
                            }}
                        >
                            A snapshot of the work we&apos;ve delivered so far.
                        </h3>
                    </div>
                </div>

                {/* Flip cards row/grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row gap-8 md:gap-12 lg:gap-8 w-full items-start justify-center" style={{ minHeight: "240px" }}>
                    {Array.from({ length: PAGE_SIZE }).map((_, i) => (
                        <FlipCard
                            key={i}
                            current={current[i] ?? current[0]}
                            next={next[i] ?? next[0]}
                            isFlipping={isFlipping}
                            staggerDelay={i * STAGGER_MS}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Stats;