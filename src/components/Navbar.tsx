"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import Link from "next/link";

// ─── Nav items (framer-wu1i26, framer-ok5qnp, framer-1d5v33d, framer-5p8stt) ─
const navItems = [
  {
    label: "Industries",
    href: "/industries",
    subItems: [
      "Media & Entertainment",
      "Experience & Attractions",
      "Retail & Logistics",
      "Publishing",
      "Ecommerce"
    ]
  },
  { label: "AI Transformation", href: "/ai", subItems: ["AI Solution", "AI Products"] },
  { label: "Products", href: "/products", subItems: ["Retail Media & Entertainment", "AI Products"] },
  { label: "About Us", href: "/about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hideMenu, setHideMenu] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => {
    setHideMenu(true);
    setTimeout(() => { setIsOpen(false); setHideMenu(false); }, 400);
  };
  const toggleMenu = () => (isOpen ? closeMenu() : setIsOpen(true));

  useEffect(() => {
    const handleOut = (e: MouseEvent) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target as Node))
        closeMenu();
    };
    document.addEventListener("mousedown", handleOut);
    return () => document.removeEventListener("mousedown", handleOut);
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ willChange: "transform" }}
        className={[
          "fixed top-0 left-0 w-full z-[999]",
          "bg-[rgba(8,9,10,0.75)] backdrop-blur-[12px]",
          "border-b-[2px] border-[rgba(255,255,255,0.07)]",
        ].join(" ")}
      >
        <div className="w-full flex items-center justify-between px-6 lg:px-10 h-[64px]">

          <div className="flex-shrink-0 opacity-100">
            <Link
              href="/#hero"
              className="relative block"
              style={{ width: 100, height: 25 }}
            >
              <img
                decoding="auto"
                width={88}
                height={21}
                src="/Enpointe-White.svg"
                alt="En-pointe Logo"
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-4 opacity-100 relative">
            {navItems.map((item, idx) => (
              <div
                key={idx}
                className="opacity-100 relative"
                onMouseEnter={() => {
                  setHoveredIdx(idx);
                  if (item.subItems) setIsDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  setHoveredIdx(null);
                  if (item.subItems) setIsDropdownOpen(false);
                }}
              >
                <Link
                  href={item.href}
                  className="relative block px-4 py-2 group"
                  style={{ opacity: 1 }}
                >
                  <div
                    className="relative z-10 flex items-center gap-1"
                    style={{ opacity: hoveredIdx === idx ? 1 : 0.75 }}
                  >
                    <p className="text-white text-[14px] font-medium leading-none m-0 whitespace-nowrap">
                      {item.label}
                    </p>
                    <AnimatePresence>
                      {hoveredIdx === idx && (
                        <motion.div
                          layoutId="nav-underline"
                          className="absolute -bottom-2 left-0 right-0 h-[1.5px] bg-white rounded-full z-10"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30
                          }}
                        />
                      )}
                    </AnimatePresence>
                  </div>
                </Link>

                {/* Desktop Dropdown */}
                <AnimatePresence>
                  {item.subItems && hoveredIdx === idx && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 pointer-events-auto"
                    >
                      <div className="bg-[#171717] border border-white/10 rounded-2xl p-2 min-w-[240px] shadow-2xl backdrop-blur-xl">
                        {item.subItems.map((sub, sIdx) => (
                          <Link
                            key={sIdx}
                            href={`/industries/${sub.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                            className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/5 transition-colors group/sub"
                          >
                            <span className="text-[14px] text-white/70 group-hover/sub:text-white transition-colors">
                              {sub}
                            </span>
                            <ArrowUpRight className="w-4 h-4 text-white/20 group-hover/sub:text-white/80 opacity-0 group-hover/sub:opacity-100 transition-all transform group-hover/sub:translate-x-0 -translate-x-2" />
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right side: Contact button (desktop) + hamburger (mobile) */}
          <div className="flex items-center gap-4">

            {/*
              ── framer-111myvd-container → <a>
              framer-cbJ7G framer-Ot2bP framer-26mb0f framer-1xyivzk
              "desktop icon right"
              border: 1px solid rgba(216,231,242,0.07)
              backdrop-filter: blur(5px)
              background: linear-gradient(180deg, rgb(20,20,20) 0%, rgba(255,255,255,0.07) 100%)
              border-radius: 8px
              box-shadow: inset 0 -0.48px 0.48px -1.25px rgba(0,0,0,0.68),
                          inset 0 -1.83px 1.83px -2.5px rgba(0,0,0,0.6),
                          inset 0 -8px 8px -3.75px rgba(0,0,0,0.24)
            */}
            <Link
              href="/contact"
              className="hidden lg:flex items-center gap-[6px] px-[14px] py-[9px] rounded-[8px] transition-all duration-200 hover:brightness-110"
              style={{
                border: "1px solid rgba(216,231,242,0.07)",
                backdropFilter: "blur(5px)",
                background:
                  "linear-gradient(180deg, rgb(20,20,20) 0%, rgba(255,255,255,0.07) 100%)",
                borderRadius: 8,
                boxShadow:
                  "rgba(0,0,0,0.68) 0px -0.48175px 0.48175px -1.25px inset, rgba(0,0,0,0.6) 0px -1.83083px 1.83083px -2.5px inset, rgba(0,0,0,0.24) 0px -8px 8px -3.75px inset",
                opacity: 1,
              }}
            >
              {/*
                framer-oPPWI / framer-11dda3b  SVG icon  (opacity: 0.8)
                Source uses <use href="#3214076557"> (Framer sprite = external-link icon)
                Replaced with equivalent ExternalLink from lucide
              */}

              {/*
                framer-1bph33e  "Label"  RichTextContainer
                --extracted-r6o4lv: rgb(255,255,255)
                opacity: 0.8
              */}
              <div style={{ opacity: 0.8 }}>
                <p
                  className="text-white text-[14px] font-medium leading-none m-0 whitespace-nowrap"
                  style={{ color: "rgb(255,255,255)" }}
                >
                  Contact Us
                </p>
              </div>
              <ExternalLink
                className="w-[16px] h-[16px] flex-shrink-0"
                style={{ opacity: 0.8, color: "rgb(255,255,255)" }}
              />
            </Link>

            {/* Mobile hamburger — not in HTML (desktop only HTML), kept for mobile UX */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-white z-[1000] rounded-full p-2 flex items-center justify-center border border-white/10 bg-black/50"
              style={{ minWidth: 44, minHeight: 44 }}
            >
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile slide-in menu (our addition — not in desktop HTML) ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-0 right-0 w-full md:w-1/2 h-screen bg-[#08090a]/95 backdrop-blur-xl text-white py-24 px-10 z-[998] border-l border-white/[0.07] overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: hideMenu ? 0 : 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-6"
            >
              {navItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="flex flex-col gap-4"
                >
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="text-2xl font-semibold text-white/80 hover:text-white transition-colors block"
                      onClick={item.subItems ? (e) => { e.preventDefault(); setHoveredIdx(hoveredIdx === idx ? null : idx); } : closeMenu}
                    >
                      {item.label}
                    </Link>
                    {item.subItems && (
                      <button
                        onClick={() => setHoveredIdx(hoveredIdx === idx ? null : idx)}
                        className="p-2 bg-white/5 rounded-full"
                      >
                        <motion.svg
                          width="12"
                          height="12"
                          viewBox="0 0 8 8"
                          fill="none"
                          animate={{ rotate: hoveredIdx === idx ? 180 : 0 }}
                        >
                          <path d="M1 2.5L4 5.5L7 2.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </motion.svg>
                      </button>
                    )}
                  </div>

                  {/* Mobile Sub-items */}
                  <AnimatePresence>
                    {item.subItems && hoveredIdx === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="flex flex-col gap-4 pl-4 overflow-hidden"
                      >
                        {item.subItems.map((sub, sIdx) => (
                          <Link
                            key={sIdx}
                            href={`/industries/${sub.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                            className="text-lg text-white/50 hover:text-white transition-colors"
                            onClick={closeMenu}
                          >
                            {sub}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
              <motion.div
                className="mt-8 pt-8 border-t border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[rgba(216,231,242,0.07)] bg-white/5"
                  onClick={closeMenu}
                >
                  <ArrowUpRight className="w-5 h-5" />
                  <span className="text-sm font-medium">Contact Us</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
