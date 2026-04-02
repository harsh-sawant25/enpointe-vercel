"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

type SolutionProps = {
  solutionData: {
    title: string;
    description: string;
    image: string;
    width: number;
    height: number;
    imageHeight: string;
  };
};

const Solution: React.FC<SolutionProps> = ({ solutionData }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, delay: 0.3 },
    },
  };

  return (
    <div
      ref={ref}
      className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 md:gap-12 lg:gap-16 py-16"
    >
      <motion.div
        className="w-full md:w-1/2 flex justify-center md:justify-center lg:justify-end"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <Image
          src={solutionData.image}
          alt="Solution"
          width={solutionData.width}
          height={solutionData.height}
        // className="h-auto object-contain mx-auto"
        // className={`${solutionData.imageHeight} w-auto`}
        />
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 text-center lg:text-left"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-brown leading-snug">
          {solutionData.title}
        </h1>
        <p className="text-md md:text-lg text-gray-600 mt-4">
          {solutionData.description}
        </p>
      </motion.div>
    </div>
  );
};

export default Solution;
