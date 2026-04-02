// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import ContactForm from "@/components/ContactForm";

// const page = () => {
//   const leadershipData = [
//     { name: "David Cohen", title: "CEO & Co-Founder", imgSrc: "/Leader1.avif" },
//     { name: "Chris Cuddy", title: "Co-Founder", imgSrc: "/Leader2.avif" },
//     {
//       name: "Anthony Fowler",
//       title: "Head of People",
//       imgSrc: "/Leader3.avif",
//     },
//     { name: "Kevin Friedman", title: "CTO", imgSrc: "/Leader4.avif" },
//   ];
//   return (
//     <div className="bg-gray-50">
//       {/* Header */}
//       <div className="py-12 px-4 sm:px-6 md:px-8 lg:px-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="text-center"
//         >
//           <h1 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-bold text-gray-800 leading-relaxed md:leading-snug mt-10 md:mt-16">
//             {"We're a growing team of 100 mobile and digital"}{" "}
//             <br className="hidden md:block" /> experts, fanatical about helping
//             you succeed
//           </h1>
//         </motion.div>
//       </div>

//       {/* Section 1 */}
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12 lg:py-16 flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-10">
//         <div className="md:w-1/2">
//           <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-800 text-center md:text-left">
//             We surround our client partners
//           </h2>
//           <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed text-center md:text-left">
//             {
//               "We're made up of top product experts, designers, engineers, and product managers who treat client projects as if they were our own."
//             }
//           </p>
//         </div>
//         <div className="md:w-1/2">
//           <Image
//             src="/About1.png"
//             alt="Team brainstorming at a whiteboard"
//             width={440}
//             height={500}
//             className="w-full h-auto rounded-lg shadow-md"
//           />
//         </div>
//       </div>

//       {/* Section 2 */}
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12 lg:py-16 flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-10">
//         <div className="md:w-1/2 order-2 md:order-1">
//           <Image
//             src="/About2.png"
//             alt="Team having fun while brainstorming"
//             width={440}
//             height={500}
//             className="w-full h-auto rounded-lg shadow-md"
//           />
//         </div>
//         <div className="md:w-1/2 order-1 md:order-2">
//           <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-800 text-center md:text-left">
//             We have a bit of fun doing it, too
//           </h2>
//           <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed text-center md:text-left">
//             Technology can be daunting, but we brighten the process by shaking
//             things up and sticking to a positive, healthy approach that helps
//             educate our clients and keeps things on track.
//           </p>
//         </div>
//       </div>

//       {/* <Manifesto/> */}

//       {/* <div className="flex flex-col items-center justify-center bg-black text-white px-4 sm:px-6 md:px-10 py-20">
//         <div>
//           <h2 className="text-[32px] font-normal mt-10 mr-60">OUR <br /> MANIFESTO</h2>
//           <hr className="w-[48px] mt-10"/>
//         </div>
//         <div className="flex w-full mt-12">
//           <div className="self-start sticky top-[108px]">
//             <p className="text-7xl font-bold">01</p>
//             <p className="text-7xl font-bold">02</p>
//             <p className="text-7xl font-bold">03</p>
//             <p className="text-7xl font-bold">04</p>
//             <p className="text-7xl font-bold">05</p>
//           </div>
//         <div className="flex-1 -mt-[48px] pl-12 pr-12">
//           <div>
//             <h3 className="text-[24px] font-normal">Trust & Transparency</h3>
//             <p className="text-xl font-light text-white">
//             We foster an environment that allows our team to be honest and open <br /> 
//             with our client partners, creating a family-like environment that breeds <br /> 
//             positive results through collaborative decision-making.
//             </p>
//           </div>
//           <div>
//             <h3 className="text-[24px] font-normal mt-12">Partnership</h3>
//             <p className="text-xl font-light text-white">
//             We go to extra lengths in order to solve problems our clients are facing, <br /> 
//             beyond just the digital technology execution. We often have a seat at the <br /> 
//             table to help advise, guide or otherwise be useful to make sure the <br /> 
//             projects and products are successful. We treat our clients like true <br /> 
//             partners, and we root for them all the way through. Your success is our <br /> 
//             success.
//             </p>
//           </div>
//           <div>
//             <h3 className="text-[24px] font-normal mt-12">Quality</h3>
//             <p className="text-xl font-light text-white">
//             We understand our client partners have a reputation to protect. We don't <br /> 
//             “farm out” projects, and we don't cut corners. We do value speed, and <br /> 
//             efficiency, and we approach projects with a “lean” methodology, but we <br /> 
//             thoroughly detail every step and we're stringent about our product testing. <br /> 
//             We have tight controls over the products we create, and we don't launch <br /> 
//             until all boxes are checked.
//             </p>
//           </div>
//           <div>
//             <h3 className="text-[24px] font-normal mt-12">No Drama</h3>
//             <p className="text-xl font-light text-white">
//             Utility aims to provide white-glove service to our client partners, without <br /> 
//             the hassles of typical agency-client headaches. We over-communicate <br /> 
//             throughout our projects, and we never disappear. We like to settle <br /> 
//             situations in a practical matter, and with the close collaboration of our <br /> 
//             clients, we come to smart resolutions in a way that feels natural.
//             </p>
//           </div>
//           <div>
//             <h3 className="text-[24px] font-normal mt-12">Positivity</h3>
//             <p className="text-xl font-light text-white">
//             We're a team of positive-minded folks, but we're not grandiose or <br /> 
//             unrealistic. We believe in redirecting possible issues into productive <br /> 
//             solutions. There's never just one answer, but there is always at least some <br /> 
//             answer, and by committing to steering a calm presence, we always end up <br /> 
//             on the right side with our client partners.
//             </p>
//           </div>
//         </div>
//         </div>
//       </div> */}

//       {/* Leadership Team Section */}
//       <div className="bg-white py-20 px-6">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
//           <div className="md:w-1/3">
//             <h2 className="text-[32px] font-normal">
//               Leadership <br /> Team
//             </h2>
//             <div className="w-15 h-[1px] bg-black my-4"></div>
//           </div>
//           <div className="md:w-2/3">
//             <p className="text-gray-600 text-xl font-light">
//               Enpointe is led by industry veterans who come from various areas of
//               discipline to oversee internal teams and serve our client partners
//               with a well-rounded, expert-level approach to modern product and
//               technology solutions.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Leadership Cards */}
//       <div className="bg-white py-10 px-6">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {leadershipData.map((leader) => (
//             <div key={leader.name} className="p-2 rounded-lg">
//               <Image
//                 src={leader.imgSrc}
//                 alt={leader.name}
//                 width={300}
//                 height={300}
//                 className="rounded-lg object-cover w-[300px] h-[300px]"
//               />
//               <div className="mt-4 text-center">
//                 <h3 className="text-xl font-semibold">{leader.name}</h3>
//                 <p className="text-gray-500">{leader.title}</p>
//                 <div className="w-10 h-[2px] bg-black mx-auto mt-2"></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <ContactForm />
//     </div>
//   );
// };

// export default page;


import React from 'react'
import About from './About'

const page = () => {
  return (
    <div>
      <About/>
    </div>
  )
}

export default page
