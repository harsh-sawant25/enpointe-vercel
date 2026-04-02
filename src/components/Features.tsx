"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

type FeaturesProps = {
  featuresData: {
    title: string;
    description: string;
    featuresList: string[];
    image: string;
    width: number;
    height: number;
    imageHeight: string;
  };
};

const Features = ({ featuresData }: FeaturesProps) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const fadeInRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9 },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.1, delay: 0.3 },
    },
  };

  const staggeredItems = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.2 + index * 0.1 },
    }),
  };

  return (
    <div>
      <div
        ref={ref}
        className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 md:gap-12 lg:gap-16 py-14"
      >
        <motion.div
          className="w-full md:w-3/4 lg:w-1/2 text-center md:text-left"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-brown leading-snug">
            {featuresData.title}
          </h1>
          <p className="text-md md:text-lg text-gray-600 mt-4">
            {featuresData.description}
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6">
            {featuresData.featuresList.map((feature, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 text-sm font-medium text-gray-500 bg-white shadow-md rounded-lg"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={staggeredItems}
                custom={index}
              >
                {feature}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="w-full md:w-3/4 lg:w-1/2 flex justify-center lg:justify-end"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInRight}
        >
          <Image
            src={featuresData.image}
            alt="Features Preview"
            priority
            quality={100}
            width={featuresData.width}
            height={featuresData.height}
            className={`${featuresData.imageHeight} w-auto`}
          // Optional: add `max-w-full` if needed
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
