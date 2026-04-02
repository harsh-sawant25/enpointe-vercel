"use client";

import React from "react";

// ─── Icon sets extracted from HTML ────────────────────────────────────────────
const row1Icons = [
    "https://framerusercontent.com/images/s0y3MVU8sVH5T3U9YkAKGMcojA.svg",
    "https://framerusercontent.com/images/0RZnXbwNppZdlXRcrzO7zA11no.svg",
    "https://framerusercontent.com/images/ImQhpsHT08kEvJFvIzJ4BJD80.svg",
    "https://framerusercontent.com/images/j4N7YWndqKLCgBaszgIN0mBioXE.svg",
];

const row2Icons = [
    "https://framerusercontent.com/images/2ohFmwyv7XGEQqFh6vmdOY03k.svg",
    "https://framerusercontent.com/images/30GL9dEZRkvjJtoQ9oTCmNkpC5s.svg",
    "https://framerusercontent.com/images/h2WIPf8FFJUFtQf8DWt4FCRI7uE.svg",
    "https://framerusercontent.com/images/89U5EcfobwNYKp4vrpprxgQrXE4.svg",
];

const row3Icons = [
    "https://framerusercontent.com/images/Ilea0sLVTZYYq6M0qybKpLRtJa8.svg",
    "https://framerusercontent.com/images/5t2EdMMvpd3hIViRY2r3bTnmy9Q.svg",
    "https://framerusercontent.com/images/oU9wA8LpIT6vwDPWpEmCUYLaYcE.svg",
    "https://framerusercontent.com/images/6fSY2Pi54uA2j95VSY50MdLmrAw.svg",
];

// ─── Single Icon Card ─────────────────────────────────────────────────────────
const IconCard = ({ src }: { src: string }) => (
    <li
        aria-hidden="false"
        style={{ width: "54px", height: "54px", flexShrink: 0 }}
    >
        <div
            style={{
                backgroundColor: "#171717",
                height: "100%",
                width: "100%",
                borderRadius: "8px",
                boxShadow: "rgba(207, 231, 255, 0.2) 0px 1px 1px 0px inset",
                opacity: 1,
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <div
                style={{
                    position: "absolute",
                    inset: "10px",
                    opacity: 1
                }}
            >
                <img
                    decoding="auto"
                    src={src}
                    alt=""
                    style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        objectPosition: "center",
                        objectFit: "contain",
                    }}
                />
            </div>
        </div>
    </li>
);

// ─── Marquee Row ──────────────────────────────────────────────────────────────
const MarqueeRow = ({
    icons,
    reverse = false,
    duration = 30,
    offset = 0
}: {
    icons: string[];
    reverse?: boolean;
    duration?: number;
    offset?: number;
}) => {
    // Duplicate for seamless loop
    const repeated = [...icons, ...icons, ...icons, ...icons, ...icons];

    return (
        <section
            style={{
                display: "flex",
                width: "100%",
                placeItems: "center",
                margin: 0,
                padding: "8px 0",
                listStyleType: "none",
                opacity: 1,
                maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 15%, rgb(0, 0, 0) 85%, rgba(0, 0, 0, 0) 100%)",
                WebkitMaskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 15%, rgb(0, 0, 0) 85%, rgba(0, 0, 0, 0) 100%)",
                overflow: "hidden",
            }}
        >
            <ul
                style={{
                    display: "flex",
                    width: "max-content",
                    placeItems: "center",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    gap: "60px",
                    position: "relative",
                    flexDirection: "row",
                    willChange: "transform",
                    left: `${offset}px`,
                    animation: `${reverse ? "marquee-reverse" : "marquee"} ${duration}s linear infinite`,
                }}
            >
                {repeated.map((src, idx) => (
                    <IconCard key={idx} src={src} />
                ))}
            </ul>
        </section>
    );
};

// ─── Main Component ───────────────────────────────────────────────────────────
const Integration = () => {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Gupter:wght@400;500;700&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

                @keyframes marquee {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                @keyframes marquee-reverse {
                    from { transform: translateX(-50%); }
                    to { transform: translateX(0); }
                }
            `}</style>

            <section
                className="relative w-full overflow-hidden bg-[#171717]"
                id="integrations"
            >
                <div
                    className="relative z-10 w-full max-w-[1240px] mx-auto px-6 py-24 flex flex-col md:flex-row items-start justify-between gap-12"
                >
                    {/* Left Column: Heading Section */}
                    <div className="w-full md:w-1/2 flex flex-col items-start gap-4">
                        <div style={{ willChange: "transform", opacity: 1 }}>
                            <h2
                                dir="auto"
                                style={{
                                    fontFamily: '"Gupter", serif',
                                    fontSize: "56px",
                                    fontWeight: 500,
                                    textAlign: "left",
                                    color: "rgb(228, 233, 242)",
                                    margin: 0,
                                    lineHeight: 1.1,
                                }}
                            >
                                <span
                                    style={{
                                        backgroundImage: "linear-gradient(161deg, rgb(213, 219, 230) 51.657657657657666%, rgb(4, 7, 13) 166%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
                                        display: "inline-block",
                                    }}
                                >
                                    <span style={{ color: "white", WebkitTextFillColor: "white" }}>
                                        Our{" "}
                                    </span>
                                    Techstack
                                </span>
                            </h2>
                        </div>
                        <div style={{ willChange: "transform", opacity: 1 }}>
                            <p
                                className="text-left"
                                style={{
                                    color: "white",
                                    fontSize: "14px",
                                    fontFamily: '"Inter", sans-serif',
                                    maxWidth: "460px",
                                    lineHeight: 1.6,
                                    margin: 0,
                                }}
                            >
                                Our AI automation plugs into your stack to create a unified, intelligent workflow
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Integrations Marquee Card */}
                    <div className="w-full md:w-1/2 flex justify-end">
                        <div
                            className="relative w-full max-w-[580px] overflow-hidden bg-[#171717] border border-white/5 rounded-[32px] py-18 flex flex-col gap-8"
                            style={{
                                boxShadow: "0 20px 40px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.05)",
                                willChange: "transform",
                                opacity: 1
                            }}
                        >
                            <MarqueeRow icons={row1Icons} reverse={false} duration={35} offset={0} />
                            <MarqueeRow icons={row2Icons} reverse={true} duration={45} offset={0} />
                            <MarqueeRow icons={row3Icons} reverse={false} duration={40} offset={0} />

                            {/* Light Overlay Effect */}
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    background: "radial-gradient(60% 60% at 50% 50%, rgba(99, 150, 255, 0.05) 0%, rgba(4, 7, 13, 0) 100%)",
                                    zIndex: 1,
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Decorative Background Elements from Source */}
                {/* Concentric rings / large circles at the bottom */}
                {/* <div
                    className="absolute left-1/2 bottom-[-20%] -translate-x-1/2 w-[180%] aspect-square pointer-events-none"
                    style={{
                        background: "radial-gradient(circle, transparent 40%, rgba(255, 255, 255, 0.05) 40.1%, transparent 40.4%, rgba(255, 255, 255, 0.03) 50%, transparent 50.1%, rgba(255, 255, 255, 0.02) 60%, transparent 60.1%)",
                    }}
                /> */}

                {/* Subtle bottom border */}
                <div
                    className="absolute bottom-0 left-0 w-full h-[1px]"
                    style={{ background: "#171717" }}
                />
            </section>
        </>
    );
};

export default Integration;