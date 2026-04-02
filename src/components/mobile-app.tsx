"use client";
import { useRef } from "react";
// import { motion } from "framer-motion";
import Image from "next/image";

const screens = [
  {
    images: [
      { src: "/work/work-1.png" },
      { src: "/work/work-2.png" },
      { src: "" },
      { src: "/work/work-3.png" },
      { src: "/work/work-4.png" },
    ],
  },
  {
    images: [
      { src: "/work/work-5.png" },
      { src: "/work/work-6.png" },
      { src: "" },
      { src: "/work/work-7.png" },
      { src: "/work/work-8.png" },
    ],
  },
  {
    images: [
      { src: "/work/work-9.png" },
      { src: "/work/work-10.png" },
      { src: "" },
      { src: "/work/work-11.png" },
      { src: "/work/work-12.png" },
    ],
  },
];

const OurWork2 = () => {
  const handImageRef = useRef(null);
  const videoRef = useRef(null);

  return (
    <div className=" relative md:pt-8 bg-black">

        <section id="development" className=" py-10 relative">
        {/* Grid of Screens */}
        <div className=" max-w-full overflow-hidden flex justify-center">
            <div className="flex flex-col gap-3">
            {screens.map((screen, index) => (
                <ul key={index} className=" flex gap-5 ">
                {screen.images.map((image, imgIndex) => (
                    <li key={imgIndex} className=" p-1 dev-media_media__eQq_h  md:rounded-[20px] lg:rounded-[30px] sm:w-[150px] md:max-w-[770px]  h-auto ">
                    {image.src ? (
                        <div className="relative w-full aspect-[365/770]">
                        <Image
                            src={image.src}
                            alt="media"
                            fill
                            className="object-cover object-center rounded-[24px]"
                        />
                        </div>
                    ) : (
                        <div className="w-full aspect-[365/770] rounded-[24px]" />
                    )}
                    </li>
                ))}
                </ul>
            ))}
            </div>
        </div>

        {/* Sticky Hand Image with Video */}
        <div className=" pt-8 development_dev_hand_wrapper__yXHKJ  ">
            <div className="development_dev_hand__1L3Gd  ">
            <Image
                ref={handImageRef}
                src="/hand2.png"
                alt="hand"
                fill
                className="development_dev_hand_image__s8v9J"
            />
            <div className="dev-video_video__tvEzd">
                <video
                ref={videoRef}
                src="/work/output.mp4"
                playsInline
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
                />
            </div>
            </div>
        </div>
        </section>
    </div>
  );
};

export default OurWork2;
