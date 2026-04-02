"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { FaLinkedin } from "react-icons/fa6";

const About = () => {
  // const [hoveredLeader, setHoveredLeader] = useState<string | null>(null);
  const sectionRef = useRef(null); // Ref for the section to track scroll

  const DevImages = ["/team-1.png", "/team-2.png", "/team-3.png"];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % DevImages.length);
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, [DevImages.length]);

  const leadershipData = [
    {
      name: "Arshad Kazi",
      title: "CEO",
      imgSrc: "/ArshadKaziCEO.png",
      description:
        "With over 25 years of solid business technology experience in the media and entertainment sector, Arshad has held leadership positions across broadcasting, cinema retail, media private equity, and publishing until 2015. A serial entrepreneur and technology consultant, he has played a key role in early-stage product and technology services companies, collaborating with multiple clients and co-founders globally.",
      linkedin:
        "https://www.linkedin.com/in/arshadkazi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Sanath Shetty",
      title: "CTO",
      imgSrc: "/SanathShettyCTO.png",
      description:
        "Sanath holds a B.Tech degree and is an alumnus of BITS Pilani, one of India's most prestigious engineering institutes. With over eight years of experience in building innovative products across various sectors, he co-leads a successful product engineering company alongside his co-founders. A strong advocate of open-source and AI, Sanath is always on the lookout for new tech challenges, helping companies adopt technology to drive automation and digital transformation.",
      linkedin:
        "https://www.linkedin.com/in/shettysanath?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },

    // {
    //   name: "Prabjyot Singh Sudan",
    //   title: "Head of Technology",
    //   imgSrc:
    //     "https://res.cloudinary.com/ddajktlpc/image/upload/v1743502361/q3kygskzn79yurcovfcu.png",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore necessitatibus quam quod nemo facere voluptatem quis, minima harum! Placeat porro nobis molestiae rem impedit quae aliquid sequi mollitia omnis possimus!",
    // },
  ];

  // Scroll-based animation setup
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect for the team image
  const teamImageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  // Title scale based on scroll
  const titleScale = useTransform(scrollYProgress, [0, 0.2], [0.9, 1]);
  // Opacity for quote section

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.0, 0.0, 0.2, 1] as const },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardHover = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,

      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pb-10 sm:py-10 md:py-24 2xl:py-30"
    >
      <motion.h1
        className="text-2xl sm:text-4xl md:text-6xl font-bold mb-10 md:mt-12 mt-10 text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        style={{ scale: titleScale }}
      >
        ABOUT US
      </motion.h1>

      {/* Intro Section */}
      <motion.div
        className="relative grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {/* Background Image */}
        {/* <div className="absolute inset-0 bg-[url('/About-us-bg.png')] bg-no-repeat opacity-30 bg-contain bg-center pointer-events-none z-0" /> */}

        {/* Content */}
        <div className="relative z-10 text-sm sm:text-[20px] md:text-normal leading-relaxed text-gray-700 space-y-12 md:col-span-2">
          <motion.p variants={fadeInUp}>
            At{" "}
            <b className="text-lg sm:text-xl md:text-2xl">
              ENPOINTE
            </b>
            , we specialize in delivering high-quality IT solutions tailored to
            businesses across industries. Our expertise lies in custom software
            development, web applications, and server management, with a strong
            foothold in the cinema industry.
          </motion.p>
          <motion.p variants={fadeInUp}>
            We help businesses scale with secure, reliable, and innovative
            technology solutions. Whether you&apos;re looking for enterprise
            software, cloud solutions, or custom web development we have the
            expertise to bring your ideas to life.
          </motion.p>
          <motion.b
            variants={fadeInUp}
            className="font-bold text-xl sm:text-2xl md:text-3xl text-black"
          >
            Why Enpointe?
          </motion.b>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-0 py-4"
            variants={staggerContainer}
          >
            {[
              "Industry-leading expertise in software and IT services",
              "Proven success in the cinema and entertainment sector",
              "Secure, scalable, and future-ready technology solutions",
              "A client-first approach ensuring seamless digital transformation",
            ].map((text, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-3 sm:p-4 md:p-6 text-center text-sm sm:text-base md:text-lg font-medium shadow-md rounded-2xl"
              >
                {text}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Overlay if you want to darken background slightly */}

      {/* Team Image with Parallax */}
      <motion.div
        className="w-full mb-8 sm:mb-12 md:mb-16"
        style={{ y: teamImageY }}
      >
        <Image
          src="/Team.png"
          alt="Team Image"
          width={800}
          height={800}
          className="w-full h-auto object-cover rounded-2xl"
        />
      </motion.div>

      {/* Quote and Developer Image with Scroll Opacity */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <motion.div className="flex flex-col" variants={fadeInUp}>
          <div className="text-3xl sm:text-4xl md:text-5xl">&quot;</div>
          <p className="text-xl sm:text-2xl md:text-3xl font-light mb-2 sm:mb-3 md:mb-4">
            Product Engineering is at our core, innovation is on what we
            thrive we are constantly thinking what’s next.. couldn’t have been
            possible without a world class delivery team…
          </p>
          <p className="text-xs sm:text-sm">Arshad Kazi CEO</p>
          <div className="text-3xl sm:text-4xl md:text-5xl self-end">&quot;</div>
        </motion.div>

        <motion.div
          className="flex justify-center items-center w-full mb-6 sm:mb-8 md:mb-16"
          variants={fadeInUp}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{
                rotateY: 0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  ease: "easeInOut",
                },
              }}
              exit={{
                rotateY: -90,
                opacity: 0,
                transition: {
                  duration: 0.5,
                  ease: "easeInOut",
                },
              }}
              style={{ perspective: 1000 }}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md 2xl:max-w-lg h-40 sm:h-56 md:h-72 2xl:h-80 overflow-hidden rounded-lg"
            >
              <Image
                src={DevImages[currentIndex]}
                alt="Developer"
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Leadership Section */}
      <motion.div
        className="max-w-7xl text-center px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-10  relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-3xl sm:text-4xl md:text-6xl font-semi-bold mb-6 sm:mb-8 md:mb-16"
          variants={fadeInUp}
          style={{ scale: titleScale }}
        >
          MEET THE LEADERS
        </motion.h2>
        <div className=" py-4 sm:py-6 md:py-10 px-3 sm:px-4 md:px-8">
          <motion.div
            className="  max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16 md:gap-28 lg:gap-40 mx-auto "
            variants={staggerContainer}
          >
            {leadershipData.map((leader, index) => (
              <motion.div
                key={leader.name}
                className=" p-2 flex justif-center wf  rounded-lg "
                variants={fadeInUp}
                initial="rest"
                whileHover="hover"
                animate="rest"
              // onMouseEnter={() => setHoveredLeader(leader.name)}
              // onMouseLeave={() => setHoveredLeader(null)}
              >
                <div className=" w-full ">
                  <div className="  ">
                    <div className=" flex justify-center items-center relative">
                      <motion.div
                        variants={cardHover}
                        className=" flex justify-center  absolute top-10 w-full z-10 p-8"
                      >
                        <motion.div
                          variants={cardHover}
                          className={`${index === 1 ? " scale-110" : "scale-105"
                            } absolute  bottom-12 bg-gradient-to-b from-transparent from-30% via-30% via-[#626262] to-black  h-[70%] w-[60%] -z-10`}
                        ></motion.div>
                        <motion.div
                          variants={cardHover}
                          className={`${index === 1 ? " " : ""
                            } absolute h-4/5 w-4/5  bottom-2 border-[#efc000] border-[1px]`}
                        ></motion.div>
                        <Image
                          src={leader.imgSrc}
                          alt={leader.name}
                          width={400}
                          height={400}
                          className={`${index === 1 ? " scale-110 " : " scale-100"
                            } bg-none object-cover p-4 `} // ${index ===1 ? " scale-110" : ""}
                        />
                      </motion.div>
                    </div>
                  </div>

                  <div className=" bg-gray-50 rounded-lg p-8 mt-[70%]">
                    <div className=" mt-16 sm:mt-16 md:mt-28 text-center  ">
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                        {leader.name}
                      </h3>
                      <p className="text-gray-500 text-sm sm:text-base font-semibold pb-4">
                        {leader.title}
                      </p>
                      <p className="text-gray-500 text-sm sm:text-base">
                        {leader.description}
                      </p>

                      <p className=" flex justify-center w-full py-4">
                        <a href={leader.linkedin} target="_blank">
                          <FaLinkedin className=" h-8 w-8 text-[#0a66c2]" />
                        </a>
                      </p>
                      <div className="w-6 sm:w-8 md:w-10 h-[2px] bg-black mx-auto mt-2"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
