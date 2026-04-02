import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

const CaseStudy = () => {
  return (
    <div>
      <FoldingLogos />
    </div>
  );
};

const testimonials = [
  {
    name: "Miraj Cinemas",
    text: "Our investment in their technology has been worth every penny, and we look forward to continuing this successful partnership. The infrastructure made it possible for seamless integration with our core cinema management system VISTA to bring dynamic content to our digital screens.",
    client: "Dhawal Mehta",
    designation: "AVP Systems and Information Technology",
    company: "Miraj Cinemas (India)",
  },
  {
    name: "Cinepolis",
    text: "Arzen has been instrumental in helping us to switch to a smoother functioning software. What truly sets them apart is their exceptional customer support. From the initial setup to ongoing assistance, their team has been responsive, knowledgeable, and dedicated to our success.",
    client: "Pramod Kumar",
    designation: "Regional IT & Projections",
    company: "Cinepolis (India)",
  },
  {
    name: "Empire Cinemas",
    text: "The Cinema Software has streamlined our operations since its adoption in late 2022. It simplifies daily workflows and boosts online traction, delivering greater efficiency across both in-house processes and customer-facing channels—making it a key asset to our business.",
    client: "Somnath Ghosh",
    designation: "Head of Technology",
    company: "Empire Cinemas (Saudi Arabia, Iraq & Lebonan)",
  },
  {
    name: "Star Cinemas",
    text: "Since adopting their software in late 2022, we’ve seen significant improvements in operational efficiency and digital engagement. The platform seamlessly supports both internal workflows and online channels, making it an indispensable part of our daily operations.",
    client: "Jinu John",
    designation: "Head of IT",
    company: "Star Cinemas (UAE)",
  },
  {
    name: "Epix Cinemas",
    text: "Their software has enhanced our operational efficiency by simplifying daily workflows and driving record-high digital bookings. Its intuitive design and reliable performance have helped us deliver a more seamless and elevated experience for our customers.",
    client: "Taushiff Mohammed",
    designation: "Head of Technology",
    company: "Epix Cinemas (Bahrain)",
  },
  {
    name: "QFX Cinemas",
    text: "The platform has significantly improved our operational efficiency, allowing our team to prioritize customer experience while it manages backend processes. With peak online engagement and streamlined workflows, it has become an invaluable part of our business.",
    client: "Bhasker Dhungana",
    designation: "CEO",
    company: "QFX Cinemas (Nepal)",
  },
  {
    name: "Corsymo",
    text: "The Rights Management System has streamlined our workflows by automating royalties and contract milestones. It ensures timely alerts and accurate tracking, while offering clear insights into rights by language and territory—bringing greater efficiency and control to our media operations.",
    client: "Corinne Rossi",
    designation: "CEO",
    company: "Corsymo (Switzerland)",
  },
];

const FoldingLogos = () => {
  const [index, setIndex] = useState(0);

  return (
    <section className="flex flex-col items-center justify-center gap-12 bg-neutral-950 px-4 py-24 md:flex-row">
      <Copy testimonial={testimonials[index % testimonials.length]} />
      <LogoRolodex
        index={index}
        setIndex={setIndex}
        items={[
          <LogoItem key={1} className="bg-orange-500">
            <Image
              src="/miraj black.png"
              alt="Miraj Cinemas"
              width={80}
              height={80}
              className="object-contain"
            />
          </LogoItem>,
          <LogoItem key={2} className="bg-white">
            <Image
              src="/CIPL CSC.png"
              alt="Cinepollis"
              width={160}
              height={160}
              className="object-contain"
            />
          </LogoItem>,
          <LogoItem key={3} className="bg-blue-500">
            <Image
              src="/Empire logo.png"
              alt="Empire Cinemas"
              width={160}
              height={160}
              className="object-contain"
            />
          </LogoItem>,
          <LogoItem key={4} className="bg-white">
            <Image
              src="/Star Logo.png"
              alt="Star Cinemas"
              width={160}
              height={160}
              className="object-contain"
            />
          </LogoItem>,
          <LogoItem key={5} className="bg-green-500">
            <Image
              src="/epix logo.png"
              alt="Epix Cinemas"
              width={160}
              height={160}
              className="object-contain"
            />
          </LogoItem>,
          <LogoItem key={6} className="bg-blue-500">
            <Image
              src="/QFX logo.png"
              alt="QFX Cinemas"
              width={160}
              height={160}
              className="object-contain"
            />
          </LogoItem>,
          <LogoItem key={7} className="bg-black">
            <Image
              src="/Corosymo.png"
              alt="Corsymo"
              width={160}
              height={160}
              className="object-contain"
            />
          </LogoItem>,
        ]}
      />
    </section>
  );
};

const Copy = ({
  testimonial,
}: {
  testimonial: {
    name: string;
    text: string;
    client: string;
    designation: string;
    company: string;
  };
}) => (
  <div className="max-w-lg text-center md:text-start min-h-[220px] transition-all duration-500 ease-in-out">
    <h2 className="mb-3 text-4xl text-white font-bold">{testimonial.name}</h2>
    <p className="mb-6 text-[16px] leading-relaxed text-neutral-400">
      {testimonial.text}
    </p>
    <p className="text-[18px] leading-relaxed text-white font-bold">
      {testimonial.client}
    </p>
    <p className="text-[18px] leading-relaxed text-white font-bold">
      {testimonial.designation}
    </p>
    <p className="text-[18px] leading-relaxed text-white font-bold">
      {testimonial.company}
    </p>
  </div>
);

const DELAY_IN_MS = 2500;
const TRANSITION_DURATION_IN_SECS = 1.5;

const LogoRolodex = ({
  items,
  index,
  setIndex,
}: {
  items: React.ReactNode[];
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, DELAY_IN_MS);

    return () => {
      clearInterval(intervalRef.current || undefined);
    };
  }, [setIndex]);

  return (
    <div
      style={{
        transform: "rotateY(-20deg)",
        transformStyle: "preserve-3d",
      }}
      className="relative z-0 h-44 w-60 shrink-0 rounded-xl border border-neutral-700 bg-neutral-800"
    >
      <AnimatePresence mode="sync">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
            zIndex: -index,
            backfaceVisibility: "hidden",
          }}
          key={index}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          initial={{ rotateX: "0deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "-180deg" }}
        >
          {items[index % items.length]}
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
            zIndex: index,
            backfaceVisibility: "hidden",
          }}
          key={(index + 1) * 2}
          initial={{ rotateX: "180deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "0deg" }}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
        >
          {items[index % items.length]}
        </motion.div>
      </AnimatePresence>

      <hr
        style={{
          transform: "translateZ(1px)",
        }}
        className="absolute left-0 right-0 top-1/2 z-[999999999] -translate-y-1/2 border-t-2 border-neutral-800"
      />
    </div>
  );
};

const LogoItem = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "grid h-36 w-52 place-content-center rounded-lg bg-neutral-700 text-6xl text-neutral-50 overflow-hidden will-change-transform",
        className
      )}
    >
      {children}
    </div>
  );
};

export default CaseStudy;
