// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// // Dummy logo URLs (your existing array)
// const dummyLogos = [
//   "/clientlogo/_miraj-cinemas-logo.png",
//   "/clientlogo/Aashni+co.jpeg",
//   "/clientlogo/aliff.svg",
//   "/clientlogo/awaydark.png",
//   "/clientlogo/Care24x7.webp",
//   "/clientlogo/cinepolisdark.png",
//   "/clientlogo/cinepolis_gulf.svg",
//   "/clientlogo/Color Mylabiib.png",
//   "/clientlogo/damac-logo.svg",
//   "/clientlogo/Dharma_Production_logo.png",
//   "/clientlogo/gogodark.png",
//   "/clientlogo/lil_yogis.svg",
//   "/clientlogo/logo_kidiaree.jpg",
//   "/clientlogo/mads.png",
//   "/clientlogo/miss_malani.png",
//   "/clientlogo/new horizon.jpg",
//   "/clientlogo/Novo_Transparent_logo_460894.webp",
//   "/clientlogo/people matters.png",
//   "/clientlogo/pridel-logo.png",
//   "/clientlogo/REVIVIFY-LOGO-GREEN-New.webp",
//   "/clientlogo/Scrabble-Logo-Transparent.png",
//   "/clientlogo/Swiss-Arabian-Brown-logo-file-450x250_420x.avif",
//   "/clientlogo/swiss-arabian-logo-png_seeklogo-257200.png",
//   "/clientlogo/tabbib.png",
//   "/clientlogo/tatvadark.png",
//   "/clientlogo/tyaani.webp",
//   "/clientlogo/Unpuzzel.webp",
//   "/clientlogo/vr films.png",
//   "/clientlogo/vrott.webp",
//   "/clientlogo/yrf-logo_600x420-1.png",
// ];

// const OurClient = () => {
//   const [currentPage, setCurrentPage] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const getItemsPerPage = () => {
//     if (typeof window !== "undefined") {
//       if (window.innerWidth < 640) return 4;
//       if (window.innerWidth < 1024) return 6;
//       return 10;
//     }
//     return 10;
//   };

//   const [itemsPerPage, setItemsPerPage] = useState(10);
//   const [totalPages, setTotalPages] = useState(
//     Math.ceil(dummyLogos.length / itemsPerPage)
//   );

//   // Resize handler
//   useEffect(() => {
//     const handleResize = () => {
//       const newItemsPerPage = getItemsPerPage();
//       if (newItemsPerPage !== itemsPerPage) {
//         setItemsPerPage(newItemsPerPage);
//         setTotalPages(Math.ceil(dummyLogos.length / newItemsPerPage));
//         setCurrentPage(0);
//       }
//     };

//     handleResize();

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [itemsPerPage]);

//   // Auto-rotate carousel
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!isAnimating) {
//         setIsAnimating(true);
//         setTimeout(() => {
//           setCurrentPage((prev) => (prev + 1) % totalPages);
//           setIsAnimating(false);
//         }, 500);
//       }
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [totalPages, isAnimating]);

//   // Animation variants
//   const pageTransition = {
//     initial: { opacity: 0 },
//     animate: { opacity: 1, transition: { duration: 0.5 } },
//     exit: { opacity: 0, transition: { duration: 0.5 } }
//   };

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
//   };

//   // Get current logos to display
//   const getCurrentLogos = () => {
//     const start = currentPage * itemsPerPage;
//     const end = Math.min(start + itemsPerPage, dummyLogos.length);
//     return dummyLogos.slice(start, end);
//   };

//   return (
//     <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-20 py-8 md:py-12">
//       <motion.h2
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false, amount: 0.2 }}
//         variants={fadeInUp}
//         className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-800 text-center mb-6 md:mb-8"
//       >
//         <span className="font-bold tracking-wide mr-1 md:mr-2">Trusted by</span>
//         <span className="tracking-wide">our beloved clients</span>
//       </motion.h2>

//       <div className="relative overflow-hidden">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentPage}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//             variants={pageTransition}
//             className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0"
//           >
//             {getCurrentLogos().map((logoUrl, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5, delay: index * 0.05 }}
//                 className="flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-10 border border-gray-200 aspect-square"
//               >
//                 <div className="relative w-full h-full flex items-center justify-center">
//                   <Image
//                     src={logoUrl}
//                     alt={`Client logo ${index + 1}`}
//                     width={150}
//                     height={75}
//                     unoptimized
//                     className="max-w-full max-h-full object-contain transition-all duration-300 filter  hover:grayscale-0"
//                   />
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </AnimatePresence>

//         <div className="flex justify-center gap-2 mt-6">
//           {[...Array(totalPages)].map((_, i) => (
//             <button
//               key={i}
//               onClick={() => {
//                 if (!isAnimating) {
//                   setIsAnimating(true);
//                   setTimeout(() => {
//                     setCurrentPage(i);
//                     setIsAnimating(false);
//                   }, 300);
//                 }
//               }}
//               className={`rounded-full transition-all duration-300 ${
//                 currentPage === i
//                   ? "bg-black w-6 h-2"
//                   : "bg-gray-300 w-3 h-2 hover:bg-gray-400"
//               }`}
//               aria-label={`Go to page ${i + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurClient;



"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Slider from "react-infinite-logo-slider";

const dummyLogos: string[] = [
  "/clientlogo/_miraj-cinemas-logo.png",
  "/clientlogo/Aashni+co.jpeg",
  "/clientlogo/aliff.svg",
  "/clientlogo/awaydark.png",
  "/clientlogo/Care24x7.webp",
  "/clientlogo/cinepolisdark.png",
  "/clientlogo/cinepolis_gulf.svg",
  "/clientlogo/Color Mylabiib.png",
  "/clientlogo/damac-logo.svg",
  "/clientlogo/Dharma_Production_logo.png",
  "/clientlogo/gogodark.png",
  "/clientlogo/lil_yogis.svg",
  "/clientlogo/logo_kidiaree.jpg",
  "/clientlogo/mads.png",
  "/clientlogo/miss_malani.png",
  "/clientlogo/new horizon.jpg",
  "/clientlogo/Novo_Transparent_logo_460894.webp",
  "/clientlogo/people matters.png",
  "/clientlogo/pridel-logo.png",
  "/clientlogo/REVIVIFY-LOGO-GREEN-New.webp",
  "/clientlogo/Scrabble-Logo-Transparent.png",
  "/clientlogo/Swiss-Arabian-Brown-logo-file-450x250_420x.avif",
  "/clientlogo/swiss-arabian-logo-png_seeklogo-257200.png",
  "/clientlogo/tabbib.png",
  "/clientlogo/tatva-dark.png",
  "/clientlogo/tyaani.webp",
  "/clientlogo/Unpuzzel.webp",
  "/clientlogo/vr films.png",
  "/clientlogo/vrott.webp",
  "/clientlogo/yrf-logo_600x420-1.png",
];

const OurClient: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="container mx-auto py-8 md:py-12">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center mb-6 md:mb-8"
      >
        <span className="font-bold tracking-wide mr-1 md:mr-2">Trusted by</span>
        <span className="tracking-wide">our beloved clients</span>
      </motion.h2>

      <div className="py-6 overflow-hidden">
        <Slider
          //  width="300px"
          duration={80}
          toRight={false}
          pauseOnHover={true}
          blurBorders={false}
          blurBorderColor={'#fff'}
        >
          {dummyLogos.map((logoUrl, index) => (
            <div key={index} className=" flex items-center justify-center p-8">
              <div className="relative w-full flex items-center justify-center">
                <Image
                  src={logoUrl}
                  alt={`Client logo ${index + 1}`}
                  width={120}
                  height={120}
                  // loading="eager"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurClient;