"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap');
        
        .framer-text {
          font-family: "Manrope", "Manrope Placeholder", sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .framer-acdzln {
          background-color: var(--token-eb09dbbf-ef85-4b7f-81a5-44e9b062efb7, rgb(4, 7, 13));
          display: flex;
          flex-direction: column;
          width: 100%;
          position: relative;
        }

        .framer-1gvf99s {
          z-index: 1;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          height: 750px;
          padding: 10px 19px;
          position: relative;
          overflow: hidden;
        }

        .framer-1tjngxh {
          position: absolute;
          top: -203px;
          bottom: -203px;
          left: -3.1%;
          width: 106.2%;
          border-radius: 620px;
          background-color: rgba(255, 255, 255, 0.4);
          border: 1px solid white;
          z-index: 1;
        }

        .framer-15ryv6w {
          position: absolute;
          top: -115px;
          bottom: -115px;
          left: 7.4%;
          width: 85.2%;
          border-radius: 520px;
          background-color: #ffffff;
          border: 1px solid white;
          z-index: 1;
        }

        .framer-1nwlup1 {
          position: absolute;
          top: 47px;
          bottom: 48px;
          left: 20.1%;
          width: 59.8%;
          border-radius: 420px;
          background-color: #ffffff;
          border: 1px solid rgba(0,0,0,0.1);
          z-index: 1;
        }

        .framer-254tl8 {
          position: absolute;
          inset: 0px;
          z-index: 1;
          background: linear-gradient(rgba(0, 3, 0, 0.2) 0%, rgb(20, 20, 21) 100%);
        }

        .framer-1ba5tus {
          z-index: 2;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 1200px;
        }

        .framer-1eizdep {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
        }

        .framer-15qwz {
          width: 100%;
          position: relative;
          padding-top: 80px;
          padding-bottom: 60px;
          z-index: 2;
        }

        .framer-ir6kz {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .framer-telv80 {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 80px;
        }

        .framer-k3zjny {
          display: flex;
          gap: 120px;
        }

        @media (max-width: 1024px) {
          .framer-telv80 {
            flex-direction: column;
            gap: 60px;
          }
          .framer-k3zjny {
            flex-direction: column;
            gap: 60px;
          }
        }
      `}</style>

      {/* Frame 1618873274 */}
      <div className="framer-acdzln" data-framer-name="Frame 1618873274">

        {/* cta */}
        <div className="framer-1gvf99s" data-framer-name="cta">
          <div className="framer-1tjngxh" data-border="true" data-framer-name="div.graphics_blurred-sphere"></div>
          <div className="framer-15ryv6w" data-border="true" data-framer-name="div.graphics_blurred-sphere"></div>
          <div className="framer-1nwlup1" data-border="true" data-framer-name="div.graphics_blurred-sphere"></div>
          <div className="framer-254tl8" data-framer-name="div.overlay_image"></div>

          <div className="framer-1ba5tus" data-framer-name="div.center">
            <div className="framer-1eizdep" data-framer-name="Frame 1618873275">

              {/* Heading 1 */}
              <div className="framer-1n61q4w" data-framer-name="Heading 1">
                <div className="ssr-variant">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="framer-vrua1e flex flex-col items-center justify-center"
                    data-framer-name="Let's make something great together."
                    data-framer-component-type="RichTextContainer"
                    style={{ transform: "none", justifyContent: "center" }}
                  >
                    <p dir="auto" className="framer-text m-0" style={{ "--font-selector": "R0Y7TWFucm9wZS02MDA=", "--framer-font-family": '"Manrope", "Manrope Placeholder", sans-serif', "--framer-font-size": "48px", "--framer-font-weight": "600", "--framer-letter-spacing": "-2.02px", "--framer-line-height": "69.12px", "--framer-text-alignment": "center", "--framer-text-color": "rgb(255, 255, 255)", fontSize: "48px", fontWeight: 600, letterSpacing: "-2.02px", lineHeight: "69.12px", textAlign: "center", color: "rgb(255, 255, 255)" } as any}>
                      Let&apos;s make something
                    </p>
                    <p dir="auto" className="framer-text m-0" style={{ "--font-selector": "R0Y7TWFucm9wZS02MDA=", "--framer-font-family": '"Manrope", "Manrope Placeholder", sans-serif', "--framer-font-size": "48px", "--framer-font-weight": "600", "--framer-letter-spacing": "-2.02px", "--framer-line-height": "69.12px", "--framer-text-alignment": "center", "--framer-text-color": "rgb(255, 255, 255)", fontSize: "48px", fontWeight: 600, letterSpacing: "-2.02px", lineHeight: "69.12px", textAlign: "center", color: "rgb(255, 255, 255)" } as any}>
                      great together.
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* p.paragraph-dark */}
              <div className="framer-md6ud9" data-framer-name="p.paragraph-dark">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="framer-z07x7q flex flex-col items-center justify-center"
                  data-framer-name="Let us know what challenges you are trying to solve so we can help."
                  data-framer-component-type="RichTextContainer"
                  style={{ transform: "none", justifyContent: "center" }}
                >
                  <p dir="auto" className="framer-text m-0" style={{ "--font-selector": "R0Y7TWFucm9wZS1yZWd1bGFy", "--framer-font-family": '"Manrope", "Manrope Placeholder", sans-serif', "--framer-font-size": "15px", "--framer-letter-spacing": "0.2px", "--framer-line-height": "32px", "--framer-text-alignment": "center", "--framer-text-color": "rgba(255, 255, 255, 0.6)", fontSize: "15px", letterSpacing: "0.2px", lineHeight: "32px", textAlign: "center", color: "rgba(255, 255, 255, 0.6)" } as any}>
                    Let us know what challenges you are
                  </p>
                  <p dir="auto" className="framer-text m-0" style={{ "--font-selector": "R0Y7TWFucm9wZS1yZWd1bGFy", "--framer-font-family": '"Manrope", "Manrope Placeholder", sans-serif', "--framer-font-size": "15px", "--framer-letter-spacing": "0.2px", "--framer-line-height": "32px", "--framer-text-alignment": "center", "--framer-text-color": "rgba(255, 255, 255, 0.6)", fontSize: "15px", letterSpacing: "0.2px", lineHeight: "32px", textAlign: "center", color: "rgba(255, 255, 255, 0.6)" } as any}>
                    trying to solve so we can help.
                  </p>
                </motion.div>
              </div>

              {/* Link CTA Button */}
              <div data-framer-component-type="SVG" data-framer-name="Link" className="framer-1j4r3ix" aria-hidden="true" style={{ imageRendering: "pixelated", flexShrink: 0, color: "rgba(0,0,0,1)" }}>
                <Link href="/contact" className="group w-16 h-16 md:w-[100px] md:h-[100px] flex items-center justify-center rounded-full border border-white/30 bg-white/5 hover:bg-white/10 transition-all duration-300">
                  <ArrowRight className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:translate-x-1 transition-transform" strokeWidth={1} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="framer-15qwz" data-framer-name="Footer">
          <div className="framer-ir6kz" data-framer-name="div.container-medium">
            <div className="framer-12z95xc w-full h-[1px] bg-white/10 mb-20" data-framer-name="div.footer_line-wrapper" />

            <div className="framer-telv80" data-framer-name="div.footer_wrapper">
              {/* Logo Frame */}
              <div className="framer-8brpxv">
                <div data-framer-component-type="SVG" data-framer-name="Group 23" className="framer-p5n66h flex items-center" style={{ imageRendering: "pixelated", flexShrink: 0 }}>
                  <Link href="/">
                    <Image
                      src="/Enpointe-White.svg"
                      height={36}
                      width={152}
                      alt="Enpointe"
                      className="opacity-90 brightness-200 contrast-200"
                    />
                  </Link>
                </div>
              </div>

              {/* Links & Info */}
              <div className="framer-k3zjny" data-framer-name="Frame 1000005050">

                {/* Frame 1000005049 - Navigation */}
                <div className="framer-x88n33 flex flex-col gap-4" data-framer-name="Frame 1000005049">
                  {["Home", "About us", "Services", "Products", "Contact Us"].map((item) => (
                    <div key={item} className={`framer-${item.toLowerCase().replace(" ", "")}`} data-framer-name={item} data-framer-component-type="RichTextContainer" style={{ justifyContent: "center", transform: "none" }}>
                      <Link href={`/${item === "Home" ? "" : item.toLowerCase().replace(" ", "")}`} className="framer-text" style={{ "--font-selector": "R0Y7TWFucm9wZS1yZWd1bGFy", "--framer-font-family": '"Manrope", "Manrope Placeholder", sans-serif', "--framer-font-size": "15px", "--framer-line-height": "160%", "--framer-text-color": "rgb(224, 224, 224)", fontSize: "15px", lineHeight: "160%", color: "rgb(224, 224, 224)" } as any}>
                        {item}
                      </Link>
                    </div>
                  ))}
                </div>

                {/* Frame 1000005048 - Social */}
                <div className="framer-1yyvjsf flex flex-col gap-4" data-framer-name="Frame 1000005048">
                  {["Linkedin", "Twitter"].map((item) => (
                    <div key={item} className={`framer-${item.toLowerCase()}`} data-framer-name={item} data-framer-component-type="RichTextContainer" style={{ justifyContent: "center", transform: "none" }}>
                      <a href={`https://${item.toLowerCase()}.com`} target="_blank" rel="noopener noreferrer" className="framer-text" style={{ "--font-selector": "R0Y7TWFucm9wZS1yZWd1bGFy", "--framer-font-family": '"Manrope", "Manrope Placeholder", sans-serif', "--framer-font-size": "15px", "--framer-line-height": "160%", "--framer-text-color": "rgb(224, 224, 224)", fontSize: "15px", lineHeight: "160%", color: "rgb(224, 224, 224)" } as any}>
                        {item}
                      </a>
                    </div>
                  ))}
                </div>

                {/* Frame 1000005047 - Locations */}
                <div className="framer-1n1x8tl" data-framer-name="Frame 1000005047">
                  <div className="framer-nwgmy3 flex flex-col gap-10" data-framer-name="Frame 1000005047">

                    {/* UAE */}
                    <div className="framer-e4kmw9" data-framer-name="UAE" data-framer-component-type="RichTextContainer" style={{ justifyContent: "center", transform: "none" }}>
                      <p dir="auto" className="framer-text m-0" style={{ "--font-selector": "R0Y7TWFucm9wZS03MDA=", "--framer-font-family": '"Manrope", "Manrope Placeholder", sans-serif', "--framer-font-size": "15px", "--framer-font-weight": "700", "--framer-line-height": "160%", "--framer-text-alignment": "center", "--framer-text-color": "rgb(224, 224, 224)", fontSize: "15px", fontWeight: 700, lineHeight: "160%", color: "rgb(224, 224, 224)" } as any}>UAE</p>
                      <p dir="auto" className="framer-text m-0" style={{ "--font-selector": "R0Y7TWFucm9wZS1yZWd1bGFy", "--framer-font-family": '"Manrope", "Manrope Placeholder", sans-serif', "--framer-font-size": "15px", "--framer-line-height": "160%", "--framer-text-alignment": "center", "--framer-text-color": "rgb(224, 224, 224)", fontSize: "15px", lineHeight: "160%", color: "rgb(224, 224, 224)" } as any}>3rd Floor, Office 307, Block A, Al Hamsa Building, Al Karama, Dubai, UAE</p>
                    </div>

                    {/* INDIA */}
                    <div className="framer-1kpxxla" data-framer-name="INDIA" data-framer-component-type="RichTextContainer" style={{ justifyContent: "center", transform: "none" }}>
                      <p dir="auto" className="framer-text m-0" style={{ "--font-selector": "R0Y7TWFucm9wZS03MDA=", "--framer-font-family": '"Manrope", "Manrope Placeholder", sans-serif', "--framer-font-size": "15px", "--framer-font-weight": "700", "--framer-line-height": "160%", "--framer-text-alignment": "center", "--framer-text-color": "rgb(224, 224, 224)", fontSize: "15px", fontWeight: 700, lineHeight: "160%", color: "rgb(224, 224, 224)" } as any}>INDIA</p>
                      <p dir="auto" className="framer-text m-0" style={{ "--font-selector": "R0Y7TWFucm9wZS1yZWd1bGFy", "--framer-font-family": '"Manrope", "Manrope Placeholder", sans-serif', "--framer-font-size": "15px", "--framer-line-height": "160%", "--framer-text-alignment": "center", "--framer-text-color": "rgb(224, 224, 224)", fontSize: "15px", lineHeight: "160%", color: "rgb(224, 224, 224)" } as any}>109, Vicino mall, New Link Rd Oshiwara, Andheri West Mumbai, Maharashtra 400102</p>
                    </div>

                    {/* USA */}
                    <div className="framer-1j3jpnm" data-framer-name="USA" data-framer-component-type="RichTextContainer" style={{ justifyContent: "center", transform: "none" }}>
                      <p dir="auto" className="framer-text m-0" style={{ "--font-selector": "R0Y7TWFucm9wZS03MDA=", "--framer-font-family": '"Manrope", "Manrope Placeholder", sans-serif', "--framer-font-size": "15px", "--framer-font-weight": "700", "--framer-line-height": "160%", "--framer-text-alignment": "center", "--framer-text-color": "rgb(224, 224, 224)", fontSize: "15px", fontWeight: 700, lineHeight: "160%", color: "rgb(224, 224, 224)" } as any}>USA</p>
                      <p dir="auto" className="framer-text m-0" style={{ "--font-selector": "R0Y7TWFucm9wZS1yZWd1bGFy", "--framer-font-family": '"Manrope", "Manrope Placeholder", sans-serif', "--framer-font-size": "15px", "--framer-line-height": "160%", "--framer-text-alignment": "center", "--framer-text-color": "rgb(224, 224, 224)", fontSize: "15px", lineHeight: "160%", color: "rgb(224, 224, 224)" } as any}>Sunset Gower Studios 1438 N. Gower Street | Box #26 | Los Angeles, CA 90028</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Meta Line */}
            <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-white/40">
              <p>© {new Date().getFullYear()} Enpointe IT Services PVT LTD. All Rights Reserved.</p>
              <div className="flex gap-6">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/tnc" className="hover:text-white transition-colors">Terms of Use</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/* 
================================================================================
PREVIOUS FOOTER CODE COMMENTED OUT BELOW FOR REFERENCE:
================================================================================
const OldFooter = () => {
  return (
    <section className="bg-white flex flex-col font-normal justify-center font-sf-pro mt-10">
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 xl:gap-16 pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
          <div className="w-full lg:w-2/5 xl:w-1/2 space-y-8 md:space-y-10 lg:space-y-12">
            <div className="space-y-4 md:space-y-6">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight">
                  Have
                </span>

                <div className="rounded-full h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 overflow-hidden flex-shrink-0">
                  <video
                    src="/Footer.mp4"
                    className="object-cover h-full w-full rounded-full"
                    autoPlay
                    loop
                    muted
                    playsInline
                    disablePictureInPicture
                    controlsList="nodownload nofullscreen noremoteplayback"
                  />
                </div>

                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight">
                  great idea?
                </span>
              </div>

              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight">
                Tell us about it.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-gray-500 text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-normal">
                Follow us:
              </h4>
              <div className="flex gap-2 sm:gap-3">
                <a
                  href="https://www.linkedin.com/company/enpointe-io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-full border border-gray-200 p-3 md:p-4 lg:p-5 hover:bg-gray-50 transition-colors duration-300"
                >
                  <Image
                    src="/LinkedIn.svg"
                    alt="LinkedIn"
                    width={20}
                    height={20}
                    className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  />
                </a>
                <a
                  href="https://www.instagram.com/enpointe.io?igsh=MXFna2NqamxnZG85Nw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-full border border-gray-200 p-3 md:p-4 lg:p-5 hover:bg-gray-50 transition-colors duration-300"
                >
                  <Image
                    src="/Instagram.svg"
                    alt="Instagram"
                    width={20}
                    height={20}
                    className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
                  />
                </a>
              </div>
            </div>

            <div className="space-y-3 md:space-y-4">
              <h4 className="text-gray-500 text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-normal">
                Contact us
              </h4>
              <a
                href="mailto:info@enpointe.io"
                className="text-sm sm:text-base md:text-lg lg:text-xl text-black hover:text-gray-600 transition-colors duration-300 inline-block"
                target="_blank"
                rel="noreferrer"
              >
                info@enpointe.io
              </a>
            </div>
          </div>

          <div className="w-full lg:w-3/5 xl:w-1/2">
            <form
              action="https://formsubmit.co/ss@enpointe.io"
              method="POST"
              className="space-y-6 md:space-y-8"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="_honey" className="hidden" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2 md:space-y-3">
                  <label
                    htmlFor="name"
                    className="block text-sm md:text-base lg:text-lg font-medium text-gray-900"
                  >
                    Name & Company
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name & Company"
                    className="w-full border-0 border-b border-gray-200 bg-transparent px-0 py-3 md:py-4 text-sm md:text-base placeholder-gray-400 focus:border-black focus:ring-0 transition-colors duration-300"
                  />
                </div>

                <div className="space-y-2 md:space-y-3">
                  <label
                    htmlFor="email"
                    className="block text-sm md:text-base lg:text-lg font-medium text-gray-900"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    className="w-full border-0 border-b border-gray-200 bg-transparent px-0 py-3 md:py-4 text-sm md:text-base placeholder-gray-400 focus:border-black focus:ring-0 transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="space-y-4 md:space-y-5">
                <h5 className="text-sm md:text-base lg:text-lg font-medium text-gray-900">
                  I'm interested in...
                </h5>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {[
                    "Web Development",
                    "App from scratch",
                    "UI/UX Design",
                    "Branding",
                    "Site from scratch",
                    "App Development",
                    "Maintenance",
                    "Others",
                  ].map((interest) => (
                    <label key={interest} className="cursor-pointer">
                      <input
                        type="checkbox"
                        name="interest"
                        value={interest}
                        className="hidden peer"
                      />
                      <span className="inline-block bg-white border border-gray-300 rounded-full px-4 py-2 md:px-6 md:py-3 text-xs md:text-sm transition-all duration-300 peer-checked:bg-black peer-checked:text-white peer-checked:border-black hover:border-gray-400">
                        {interest}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2 md:space-y-3">
                <label
                  htmlFor="project"
                  className="block text-sm md:text-base lg:text-lg font-medium text-gray-900"
                >
                  Tell us more about your project
                </label>
                <textarea
                  rows={4}
                  name="Project Description"
                  id="project"
                  placeholder="Something about your great idea"
                  className="w-full border-0 border-b border-gray-200 bg-transparent px-0 py-3 md:py-4 text-sm md:text-base placeholder-gray-400 focus:border-black focus:ring-0 resize-none transition-colors duration-300"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base lg:text-lg font-medium hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                >
                  Submit the request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-8 md:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div className="sm:col-span-2 lg:col-span-1">
              <Image
                src="/Enpointe-New.svg"
                height={60}
                width={250}
                alt="Enpointe Logo"
                className="w-[180px] h-[45px] md:w-[180px] md:h-[60px]"
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-base md:text-lg font-semibold text-gray-900">
                Quick Links
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {[
                  { href: "/casestudies", label: "Case Studies" },
                  { href: "/about", label: "Team" },
                  { href: "/careers", label: "We're Hiring" },
                  { href: "/contact", label: "Contact Us" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm md:text-base text-gray-600 hover:text-gray-900 transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-base md:text-lg font-semibold text-gray-900">
                Services
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {[
                  "Aesthetic & Functional Design",
                  "Backend Engineering",
                  "Front End Engineering",
                  "Mobile Engineering",
                  "SEO Optimization",
                  "Quality Assurance",
                ].map((service) => (
                  <li key={service}>
                    <Link
                      href="/services"
                      className="text-sm md:text-base text-gray-600 hover:text-gray-900 transition-colors duration-300"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-base md:text-lg font-semibold text-gray-900">
                Locations
              </h3>
              <div className="space-y-4 md:space-y-6">
                {[
                  {
                    flag: "/UAE.png",
                    country: "UAE",
                    address:
                      "3rd Floor, Office 307, Block A, Al Hamsa Building, Al Karama, Dubai, UAE",
                  },
                  {
                    flag: "/India.jpg",
                    country: "INDIA",
                    address:
                      "109, Vicino mall, New Link Rd Oshiwara, Andheri West Mumbai, Maharashtra 400102",
                  },
                  {
                    flag: "/USA.png",
                    country: "USA",
                    address:
                      "Sunset Gower Studios 1438 N. Gower Street | Box #26 | Los Angeles, CA 90028",
                  },
                ].map((location) => (
                  <div key={location.country} className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Image
                        src={location.flag}
                        alt={`${location.country} Flag`}
                        width={16}
                        height={16}
                        className="h-4 w-4 object-cover rounded-sm"
                      />
                      <h4 className="text-sm md:text-base font-semibold text-gray-900">
                        {location.country}
                      </h4>
                    </div>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed pl-6">
                      {location.address}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200">
            <div className="text-center text-xs md:text-sm text-gray-600 space-y-2 sm:space-y-0">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-4">
                <span>
                  © {new Date().getFullYear()} Enpointe IT Services PVT LTD. All
                  Rights Reserved.
                </span>
                <div className="flex items-center gap-4">
                  <Link
                    href="/privacy"
                    className="text-black font-semibold hover:text-gray-700 transition-colors duration-300 underline"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/tnc"
                    className="text-black font-semibold hover:text-gray-700 transition-colors duration-300 underline"
                  >
                    Terms of Use
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
*/

export default Footer;
