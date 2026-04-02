"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

type ChallengeProps = {
  challengeData: {
    title: string;
    description: string;
    image: string;
    width: number;
    height: number;
    imageHeight: string;
  };
};

const Challenge: React.FC<ChallengeProps> = ({ challengeData }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };

  return (
    <div
      ref={ref}
      className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 min-h-screen py-8 md:py-12"
    >
      <motion.div
        className=" w-full md:w-1/2 flex flex-col justify-center text-left md:text-center lg:text-left "
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-brown leading-snug">
          {challengeData.title}
        </h1>
        <p className="text-md text-gray-600 mt-4 md:text-lg">
          {challengeData.description}
        </p>
      </motion.div>

      <motion.div
        className=" w-full md:w-1/2 flex justify-center md:justify-center lg:justify-end"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <Image
          src={challengeData.image}
          alt="Challenge"
          width={challengeData.width}
          height={challengeData.height}
          className={`${challengeData.imageHeight} w-auto`}
        />
      </motion.div>
    </div>
  );
};

export default Challenge;
