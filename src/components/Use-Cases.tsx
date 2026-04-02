"use client";

import React, { useEffect, useState } from "react";
import { PinContainer } from "./ui/3dpin";
import Image from "next/image";

type CaseStudyType = {
  id: number;
  projectlogo: string;
  bannerimg: string;
  testimonialBanner: string;
  testinomialDescription: string;
  landScapeView: boolean;
  width: number;
  height: number;
  title: string;
  googleplay: string;
  appstore: string;
  description: string;
  challenges: {
    title: string;
    description: string;
    image: string;
    width: number;
    height: number;
  };
  solution: {
    title: string;
    description: string;
    image: string;
    width: number;
    height: number;
  };
  features: {
    title: string;
    description: string;
    featuresList: string[];
    image: string;
    width: number;
    height: number;
  };
  card: { logoimage: string; description: string; image: string };
};

const Testimonial = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudyType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/casestudies.json");
        const data = await response.json();
        setCaseStudies(data);
      } catch (error) {
        console.error("Error fetching case studies:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="case-studies" className="lg:max-w-7xl lg:mx-auto p-4 md:p-8  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  mb-12 items-center justify-center">
      {caseStudies.map((study) => (
        <div
          key={study.id}
          className=" flex justify-center items-center h-[400px] w-full "
        >
          <PinContainer
            key={study.id}
            title="Read More"
            href={`casestudies?id=${study.id}&title=${study.title
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
            className=""
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50">
              <h3 className=" pb-2 m-0 font-bold text-[24px] text-slate-100">
                {study.title}
              </h3>
              <div className="text-[16px] m-0 p-0 font-medium">
                <span className="text-slate-500 line-clamp-2">
                  {study.testinomialDescription}
                </span>
              </div>
              <div className="py-4 w-full h-full">
                <Image
                  src={study.testimonialBanner}
                  alt={study.title}
                  width={800} 
                  height={400} 
                  quality={100}
                  className="w-full h-56 object-cover rounded-lg"
                />
              </div>
            </div>
          </PinContainer>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
