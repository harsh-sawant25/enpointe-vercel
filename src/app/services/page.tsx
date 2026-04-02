"use client";
import React from "react";
// import { motion } from "framer-motion";
// import ContactForm from "@/components/ContactForm";
// import CareerTimeLine from "@/components/CareersTimeLine";
import Services from "./Services";

const page = () => {
  return (
    <div>
      {/* <div className="flex flex-col items-center justify-center p-6 sm:p-8 md:p-12 mt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-[700px] mb-8"
      >
        <h2 className="text-[40px] sm:text-4xl font-bold text-black mt-8">
          Elegant solutions built on proven <br /> methodologies
        </h2>
        <p className="text-[24px] sm:text-2xl font-medium text-gray-400 mt-4 mb-12">
          Enpointe partners with clients to design and develop custom <br />
          mobile apps, platforms and experiences.
        </p>
      </motion.div> 
      </div>
      <CareerTimeLine/>
      <ContactForm /> */}
      <Services/>
    </div>
  );
};

export default page;
