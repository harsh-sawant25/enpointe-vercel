import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const serviceSectionsData = [
  {
    id: "aesthetic",
    number: "1",
    headerlabel: "Design",
    label: "Aesthetic & Functional Design",
    description:
      "We blend creative vision with usability to craft visually stunning and highly intuitive designs. Our UI/UX experts focus on delivering a seamless user journey that not only looks great but also performs effortlessly. Every layout, interaction, and animation is created with user experience at its core.",
    services: [
      { image: "/services/Market.png", text: "Market & Competitor Research" },
      { image: "/services/User.png", text: "User Persona & Journey Mapping" },
      {
        image: "/services/Prototype.png",
        text: "UI Wireframing & Prototyping",
      },
      {
        image: "/services/Audit.png",
        text: " UX Audit & Heuristic Evaluation",
      },
    ],
    image: "/Aesthetic.jpg",
  },
  {
    id: "frontend",
    number: "2",
    headerlabel: "FrontEnd",
    label: "Front End Engineering",
    description:
      "We bring your vision to life through responsive, dynamic, and pixel-perfect front-end development. Using modern frameworks and best practices, our developers ensure fast-loading, interactive, and accessible interfaces across all devices. It's not just about looks—it's about function that flows.",
    services: [
      {
        image: "/services/Web Responsive.png",
        text: "Responsive Web Development",
      },
      { image: "/services/Performance.png", text: "Performance Optimization" },
      { image: "/services/CBA.png", text: "Component-Based Architecture" },
      {
        image: "/services/Seo Friendly.png",
        text: "Accessibility & SEO-Friendly Code",
      },
    ],
    image: "/Front end Engineering.jpg",
  },
  {
    id: "backend",
    number: "3",
    headerlabel: "BackEnd",
    label: "Backend Engineering",
    description:
      "Our backend engineers build the backbone of your digital product using robust, scalable, and secure technologies. From databases to server logic, APIs, and cloud integration, we ensure your systems run smoothly under the hood. Performance, security, and flexibility are our top priorities.",
    services: [
      { image: "/services/API Dev.png", text: "API Development & Integration" },
      { image: "/services/Security.png", text: "Security & Authentication" },
      { image: "/services/Infra.png", text: "Cloud Infrastructure Setup" },
      {
        image: "/services/Architecture.png",
        text: "Database Architecture & Management",
      },
    ],
    image: "/Backend Engineering.jpg",
  },
  {
    id: "mobile",
    number: "4",
    label: "Mobile Engineering",
    headerlabel: "Mobile",
    description:
      "Whether iOS, Android, or cross-platform, our mobile engineering team creates sleek, high-performance apps tailored to your audience. We focus on smooth navigation, optimized performance, and deep integration with device capabilities. Your app idea—elevated and delivered to the palm of your user’s hand.",
    services: [
      {
        image: "/services/Native.png",
        text: "Native & Cross-Platform App Development",
      },
      {
        image: "/services/Connectivity.png",
        text: "API Integration & Backend Connectivity",
      },
      { image: "/services/Test Deploy.png", text: "App Testing & Deployment" },
      {
        image: "/services/UX Focused.png",
        text: "UX-Focused Mobile Interface Design",
      },
    ],
    image: "/Mobile Engineering.jpg",
  },
  {
    id: "seo",
    number: "5",
    label: "SEO (Search Engine Optimization)",
    headerlabel: "SEO",
    description:
      "We don’t just build websites—we make them discoverable. Our SEO strategies include technical optimization, keyword research, and content structuring to boost visibility and organic traffic. From meta tags to performance tweaks, we ensure your digital presence ranks where it should—at the top.",
    services: [
      {
        image: "/services/SEO Optimatization.png",
        text: "On-Page SEO Optimization",
      },
      { image: "/services/Technical SEO.png", text: "Technical SEO Setup" },
      { image: "/services/Keyword.png", text: "Analytics & Keyword Tracking" },
      { image: "/services/Strategy.png", text: "Content Strategy Support" },
    ],
    image: "/SEO.jpg",
  },
  {
    id: "quality",
    number: "6",
    label: "Quality Assurance",
    headerlabel: "Quality",
    description:
      "Every product we build goes through rigorous testing to ensure it meets the highest standards of performance, usability, and reliability. Our QA team handles everything from automated testing to manual walkthroughs, ensuring bug-free, smooth, and consistent experiences across platforms.",
    services: [
      {
        image: "/services/Automation Test.png",
        text: "Manual & Automated Testing",
      },
      {
        image: "/services/Regression.png",
        text: "Regression & Performance Testing",
      },
      {
        image: "/services/Cross Device.png",
        text: "Cross-Browser & Device Testing",
      },
      { image: "/services/Bug.png", text: "Bug Reporting & Issue Resolution" },
    ],
    image: "/Quality assurance.jpg",
  },
];

const Services = () => {
  const [activeSection, setActiveSection] = useState(serviceSectionsData[0].id);
  const [hasScrolled, setHasScrolled] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 0) {
        setHasScrolled(true);
      }

      const sections = serviceSectionsData.map((section) => section.id);
      let currentSection = sections[0];

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative bg-white py-6 lg:pb-20">
      <div className="sticky top-0 bg-white z-40 transition-all duration-300 px-4 lg:px-0">
        {/* Desktop Navigation */}
        <div className="hidden lg:grid grid-cols-6 items-center mb-8 lg:mb-12 border-b px-4 lg:px-20 overflow-x-auto overflow-hidden">
          {serviceSectionsData.map((section, index) => (
            <span
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`text-gray-700 font-large mr-6 border-l pl-6 pb-12 transition-all duration-300 cursor-pointer
                ${activeSection === section.id
                  ? "text-gray-900 opacity-100 translate-y-0 font-bold border-gray-800"
                  : "text-gray-400 opacity-50 translate-y-8 hover:translate-y-0"
                }`}
            >
              <sup className="mr-1">{`0${index + 1}`}</sup>{" "}
              {section.headerlabel}
            </span>
          ))}
        </div>

        {/* Tablet Navigation */}
        <div className="hidden md:grid lg:hidden grid-cols-3 gap-4 items-center mb-6 md:mb-8 border-b px-4 md:px-8 overflow-x-auto overflow-hidden">
          {serviceSectionsData.map((section, index) => (
            <span
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`text-gray-700 font-medium text-center border-l pl-4 pb-8 transition-all duration-300 cursor-pointer whitespace-nowrap
                ${activeSection === section.id
                  ? "text-gray-900 opacity-100 translate-y-0 font-bold border-gray-800"
                  : "text-gray-400 opacity-50 translate-y-4 hover:translate-y-0"
                }`}
            >
              <sup className="mr-1">{`0${index + 1}`}</sup>{" "}
              {section.headerlabel}
            </span>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex overflow-x-auto overflow-y-hidden pb-2 border-b px-4 scrollbar-hide">
          {serviceSectionsData.map((section, index) => (
            <span
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`text-sm font-medium mr-6 border-l pl-4 pb-8 transition-all duration-300 cursor-pointer whitespace-nowrap flex-shrink-0
        ${activeSection === section.id
                  ? "text-gray-900 opacity-100 translate-y-0 font-bold border-gray-800"
                  : "text-gray-400 opacity-50 translate-y-8 hover:translate-y-0"
                }`}
            >
              <sup className="mr-1">{`0${index + 1}`}</sup>{" "}
              {section.headerlabel}
            </span>
          ))}
        </div>
      </div>

      {serviceSectionsData.map((section, index) => (
        <div
          key={section.id}
          id={section.id}
          className={`min-h-screen flex items-start px-4 md:px-8 lg:px-20 py-8 md:py-10 lg:py-10 flex-col ${index < serviceSectionsData.length - 1
            }`}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInUp}
            className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 md:mb-10 w-full"
          >
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6 lg:mb-0">
              <span className="text-gray-400">{section.number}</span>
              <br />
              {section.label.split(" ").map((word, index) => (
                <React.Fragment key={index}>
                  {word}
                  <br />
                </React.Fragment>
              ))}
            </h1>
            <div className="md:w-full lg:w-1/2 pr-0 lg:pr-20">
              <p className="text-base md:text-lg lg:text-lg text-gray-700 leading-relaxed">
                {section.description}
              </p>
            </div>
          </motion.div>

          <div className="w-full flex flex-col lg:flex-row items-start gap-6 md:gap-8 lg:gap-12 my-8 md:my-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeInUp}
              className="w-full lg:w-1/2 mb-6 md:mb-8 lg:mb-0"
            >
              <Image
                src={section.image}
                alt={section.label}
                className="shadow-md"
                width={520}
                height={300}
                style={{
                  borderRadius:
                    index % 2 === 0 ? "5px 5px 80px 5px" : "5px 5px 5px 80px",
                  objectFit: "cover",
                  width: "100%",
                  maxWidth: "520px",
                  height: "auto",
                  aspectRatio: "520/300",
                }}
                unoptimized
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeInUp}
              className="w-full lg:w-1/2 space-y-3 md:space-y-4"
            >
              <h2 className="text-lg md:text-xl lg:text-xl font-semibold text-gray-800 mb-3 md:mb-4">
                Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4">
                {section.services.map((service, index) => (
                  <div key={index} className="flex items-center pt-2">
                    <Image
                      src={service.image}
                      alt={service.text}
                      width={35}
                      height={35}
                      className="w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[35px] lg:h-[35px] flex-shrink-0"
                    />
                    <p className="ml-3 md:ml-4 lg:ml-5 text-sm md:text-base lg:text-xl leading-relaxed">
                      {service.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
