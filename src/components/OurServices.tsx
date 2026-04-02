import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const OurService = () => {
  return (
    <>
      <div className="relative h-fit">
        <Features />
      </div>

      <div className="bg-white" />
    </>
  );
};

const Features = () => {
  return (
    <div className="relative mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
      <Copy />
      <Carousel />
    </div>
  );
};

const Copy = () => {
  return (
    <div className="flex h-fit w-full flex-col justify-center py-12 pt-10 md:sticky md:top-0 md:h-screen">
      <span className="w-fit rounded-full bg-black px-4 py-2 text-sm uppercase text-indigo-100">
        Our Services
      </span>
      <h2 className="mb-4 mt-2 text-5xl font-medium leading-tight">
        Building Digital Experiences That Deliver
      </h2>
      <p className="text-lg text-indigo-950">
        At Enpointe, we design, develop, and fine-tune digital solutions that
        are both beautiful and powerful. Whether a sleek front-end, a
        robust backend, or a flawless mobile app, our team turns ideas into
        scalable, secure, and user-centric products. Every service we offer is
        crafted to elevate your brand and fuel growth.
      </p>
    </div>
  );
};

const Carousel = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <div className="relative w-full">
      <Gradient />

      <div ref={ref} className="relative z-0 flex flex-col gap-6 md:gap-12">
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={1}
          numItems={6}
          label="Aesthetic & Fuctional Design"
        />
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={2}
          numItems={6}
          label="Backend Engineering"
        />
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={3}
          numItems={6}
          label="Front End Engineering"
        />
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={4}
          numItems={6}
          label="Mobile Engineering"
        />
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={5}
          numItems={6}
          label="SEO (Search Engine Optimization)"
        />
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={6}
          numItems={6}
          label="Quality Assurance"
        />
      </div>

      <Buffer />
    </div>
  );
};

const CarouselItem = ({
  scrollYProgress,
  position,
  numItems,
  label,
}: {
  scrollYProgress: MotionValue<number>;
  position: number;
  numItems: number;
  label: string;
}) => {
  const stepSize = 1 / numItems;
  const end = stepSize * position;
  const start = end - stepSize;

  const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.75]);

  const backgroundImages: Record<string, { image: string; href: string }> = {
    "Aesthetic & Fuctional Design": {
      image: "/Aesthetic.jpg",
      href: "/services#aesthetic",
    },
    "Backend Engineering": {
      image: "/Backend Engineering.jpg",
      href: "/services#backend",
    },
    "Front End Engineering": {
      image: "/Front end Engineering.jpg",
      href: "/services#frontend",
    },
    "Mobile Engineering": {
      image: "/Mobile Engineering.jpg",
      href: "/services#mobile",
    },
    "SEO (Search Engine Optimization)": {
      image: "/SEO.jpg",
      href: "/services#seo",
    },
    "Quality Assurance": {
      image: "/Quality assurance.jpg",
      href: "/services#quality",
    },
  };

  const bgData = backgroundImages[label];

  return (
    <motion.div
      style={{
        opacity,
        scale,
      }}
      className="relative grid aspect-video w-full shrink-0 place-content-center overflow-hidden rounded-2xl bg-neutral-900"
    >
      {/* Background image based on label */}
      {bgData && (
        <Link href={bgData.href}>
          <Image
            src={bgData.image}
            alt={label}
            fill
            className="object-cover opacity-20 transition-transform duration-300 hover:scale-110"
            style={{ zIndex: 0 }}
          />
        </Link>
      )}

      <span className="z-10 text-3xl text-white text-center px-4">{label}</span>
    </motion.div>
  );
};

const Gradient = () => (
  <div className="sticky top-0 z-10 hidden h-24 w-full md:block" />
);

const Buffer = () => <div className="h-24 w-full md:h-48" />;

export default OurService;
