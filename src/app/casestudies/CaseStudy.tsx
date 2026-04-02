"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Challenge from "@/components/Challenges";
import Features from "@/components/Features";
import Solution from "@/components/Solutions";
import CaseStudyCard from "@/components/CaseStudyCard";
import Image from "next/image";

type CaseStudyType = {
  id: number;
  projectlogo: string;
  bannerimg: string;
  subtitle: string;
  platform: string;
  services: string;
  landScapeView: boolean;
  width: number;
  height: number;
  // imageHeight: string;
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
    imageHeight: string;
  };
  solution: {
    title: string;
    description: string;
    image: string;
    width: number;
    height: number;
    imageHeight: string;
  };
  features: {
    title: string;
    description: string;
    featuresList: string[];
    image: string;
    width: number;
    height: number;
    imageHeight: string;
  };
  card: { logoimage: string; description: string; image: string };
};

function CaseStudyComponent() {
  const [caseStudies, setCaseStudies] = useState<CaseStudyType[]>([]);
  const searchParams = useSearchParams();
  const urlId = Number(searchParams.get("id")) || 1;
  const [selectedId, setSelectedId] = useState(urlId);

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

  useEffect(() => {
    if (urlId) {
      setSelectedId(urlId);
    }
  }, [urlId]);

  const handleCaseStudyChange = () => {
    const newId = selectedId < 6 ? selectedId + 1 : 1;

    const newTitle =
      caseStudies.find((c) => c.id === newId)?.title || "case-study";
    const formattedTitle = newTitle.toLowerCase().replace(/\s+/g, "-");

    const newUrl = `?id=${newId}&title=${formattedTitle}`;

    window.location.href = newUrl;
  };

  const study = caseStudies.find((c) => c.id === selectedId);
  if (!study) return <p>Loading...</p>;

  return (
    <div className="overflow-x-hidden flex flex-col items-center text-center px-4 bg-[#fffdf5]">
      <div
        key={study.id}
        className="w-full max-w-7xl px-4 flex-col gap-12 md:gap-16 mt-12"
      >
        <div className="items-center justify-center flex flex-col md:flex-row gap-4 md:gap-8">
          <Image
            src={study.projectlogo}
            alt="logo"
            width={study.width}
            height={study.height}
            className="py-14"
          />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
            <h1 className="md:text-[64px] font-light leading-none items-start text-[40px]">
              {study.title}
            </h1>
          </div>
          <div className="flex flex-row md:items-start gap-4">
            <h2 className="text-[28px] md:text-[65px] font-normal md:font-light leading-[110%] text-left">
              {study.subtitle}
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-8 text-base max-[479px]:gap-[40px] max-[479px]:flex max-[479px]:flex-row max-[479px]:justify-start max-[479px]:items-start max-[479px]:w-full">
            <div>
              <p className="font-medium text-[#3F414E] text-[22px] text-left">
                Platforms
              </p>
              <p className="font-medium text-left text-[18px] text-black">
                {study.platform}
              </p>
            </div>
            <div>
              <p className="font-medium text-[#3F414E] text-[22px] text-left">
                Services
              </p>
              <p className="font-medium md:text-right text-left text-[18px] text-black">
                {study.services}
              </p>
            </div>
          </div>
        </div>
        <div className="h-auto md:h-screen w-full flex items-center justify-center relative py-12 md:py-16">
          <motion.div
            className="relative z-10 flex items-center justify-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1.02 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <motion.img
              src={study.bannerimg}
              alt={study.title}
              className={`${study.landScapeView ? "w-3/4" : "w-2/3"} 
    ${study.id === 1 || study.id === 2 || study.id === 3 || study.id === 4 ? "md:w-[300px]" : "md:w-[700px]"}
    max-w-[90vw] sm:max-w-[80vw] md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto object-cover`}
              style={{ filter: "drop-shadow(0 20px 30px rgba(0, 0, 0, 0.2))" }}
            />
          </motion.div>
        </div>

        <div className="flex flex-col items-center justify-center min-h-[10vh] text-lg font-medium max-w-2xl text-center mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 uppercase tracking-wide mb-2">
            {study.title}
          </h1>
          <p className="mt-2 text-gray-700 px-4 md:px-0">{study.description}</p>

          {(selectedId === 1 || selectedId === 3) && (
            <div className="flex gap-4 mt-4">
              <a
                href={study.googleplay}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/google-play.png"
                  alt="Download on the App Store"
                  width={150}
                  height={50}
                  className="h-12 w-auto"
                />
              </a>
              <a
                href={study.appstore}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/apple-store.png"
                  alt="Get it on Google Play"
                  width={150}
                  height={50}
                  className="h-12 w-auto"
                />
              </a>
            </div>
          )}
        </div>

        <Challenge challengeData={study.challenges} />
        <Solution solutionData={study.solution} />
        <Features featuresData={study.features} />

        <CaseStudyCard
          currentId={selectedId}
          onReadClick={handleCaseStudyChange}
          cardData={study.card}
        />
      </div>
    </div>
  );
}

export default CaseStudyComponent;
