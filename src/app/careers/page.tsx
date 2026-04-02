"use client";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
  const jobSections = [
    {
      title: "Project Management",
      jobs: [
        {
          title: "Sr. Product Manager",
          location: "New York",
          link: "/career-form",
        },
        {
          title: "Product Manager",
          location: "Los Angeles",
          link: "/career-form",
        },
        {
          title: "Mobile Product Strategist",
          location: "New York",
          link: "/career-form",
        },
      ],
    },
    {
      title: "Design",
      jobs: [
        {
          title: "Sr. Product Designer",
          location: "New York",
          link: "/career-form",
        },
        {
          title: "Product Designer",
          location: "Los Angeles",
          link: "/career-form",
        },
        {
          title: "Brand Designer",
          location: "Los Angeles",
          link: "/career-form",
        },
      ],
    },
    {
      title: "Engineering",
      jobs: [
        {
          title: "Senior Backend Lead",
          location: "New York",
          link: "/career-form",
        },
        {
          title: "Senior Mobile Lead",
          location: "New York",
          link: "/career-form",
        },
        {
          title: "iOS Engineer",
          location: "Los Angeles",
          link: "/career-form",
        },
        {
          title: "Android Engineer",
          location: "New York",
          link: "/career-form",
        },
        {
          title: "Backend Engineer",
          location: "New York",
          link: "/career-form",
        },
      ],
    },
  ];

  return (
    <div>
      <div className="flex flex-col  p-8 md:p-8 ">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full max-w-5xl mx-auto text-left md:p-8"
        >
          <h2 className="text-[40px] sm:text-4xl font-bold text-black mt-8">
            Work with Enpointe.
          </h2>
          <p className="text-[24px] sm:text-2xl font-medium text-gray-400 mt-4">
            We&apos;re always looking for new additions to our team who share our
            core values, and want to make cool stuff for some sweet clients and
            partners.
          </p>

          {/* Button Added Inside Same Container to Align Properly */}
          {/* <div className="mt-6">
            <button
              type="submit"
              className="bg-black text-white p-3 rounded cursor-pointer w-full md:w-auto px-6 hover:ring-4 hover:ring-gray-600"
            >
              View Job Positions
            </button>
          </div> */}
        </motion.div>
      </div>
      <div className="p-8 max-w-5xl mx-auto">
        <div className="text-left mb-12">
          <h2 className="text-[40px] font-normal">{"Now it's your turn."}</h2>
          <p className="text-xl text-gray-600 font-light mt-5">
            {
              "We love making new friends. See a position you can fill? Tell us about yourself, we’ll take it from there if we have an opening."
            }
          </p>
        </div>

        {jobSections.map((section, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">{section.title}</h2>
            <div className="space-y-3">
              {section.jobs.map((job, idx) => (
                <a
                  key={idx}
                  href={job.link}
                  className="flex flex-col md:justify-between md:flex-row items-start p-5 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition"
                >
                  <div className="flex-1">
                    <p className="text-lg text-gray-700">{job.title}</p>
                  </div>
                  <div className="flex-1">
                    {/* <p className="text-base font-bold text-gray-900">
                      {job.location}
                    </p> */}
                  </div>
                  <div className="ml-4 bg-black text-white px-4 py-2 rounded-md hidden md:block">
                    Apply Now
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
