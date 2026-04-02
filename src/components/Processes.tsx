import React from "react";
import Image from "next/image";

const Community = () => {
  return (
    <>
      <section
        className={`flex flex-col items-center justify-center text-center px-4 py-16`}
      >
        {/* Badge */}
        <div className="inline-block bg-gray-100 px-4 py-1 rounded-full">
          <span
            className="text-xl font-semibold uppercase bg-gradient-to-tr from-[#FF33CC] via-[#FF33CC] to-[#0055FF] bg-clip-text text-transparent"
            style={{
              backgroundSize: "200% 200%",
              backgroundImage:
                "linear-gradient(135deg, #FF33CC 0%, #FF33CC 40%, #0055FF 100%)",
              animation: "gradient-marquee 5s ease-in-out infinite",
              display: "inline-block",
            }}
          >
            OUR PROCESS: ENGINEERED FOR IMPACT, DESIGNED TO SCALE
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="mt-4 text-lg font-extralight text-gray-900 sm:text-2xl max-w-3xl">
          Our end-to-end development process ensures your vision transforms into
          a scalable, high-performing digital product
        </h1>
      </section>
      <div className="hidden lg:flex w-[70%] gap-4 transition-all duration-700 ease-in-out container mx-auto mt-8 overflow-hidden">
        {[
          {
            id: 1,
            title: "Discovery",
            idcolor: "text-red-500",
            text: "We decode your vision, analyze the market, and architect a roadmap powered by data and insights.",
            color: "text-red-500",
            image: "/process/Discovery-Community.png",
          },
          {
            id: 2,
            title: "Design",
            idcolor: "text-pink-500",
            text: "Pixel-perfect UI/UX design that fuses creative flow with conversion-driven interfaces.",
            color: "text-pink-500",
            image: "/process/Design-Community.jpg",
          },
          {
            id: 3,
            idcolor: "text-purple-500",
            title: "Development",
            text: "Slick, scalable front-end engineering using modern frameworks to bring your product to life—fast.",
            color: "text-purple-500",
            image: "/process/Development-Community.jpg",
          },
          {
            id: 4,
            idcolor: "text-blue-500",
            title: "Architecture",
            text: "Clean, API-first architecture with bulletproof logic—designed to scale, secure, and sync like magic.",
            color: "text-blue-500",
            image: "/process/BackEnd-Community.jpg",
          },
          {
            id: 5,
            idcolor: "text-green-500",
            title: "Testing & QA",
            text: "Automated + manual testing pipelines that catch bugs before they breathe—ensuring zero-compromise delivery.",
            color: "text-green-500",
            image: "/process/Testing-Community.jpg",
          },
        ].map((card) => (
          <div
            key={card.id}
            className={`flex-1 flex flex-col w-full max-h-[550px] bg-black rounded-xl border p-5 cursor-pointer transition-all duration-700 ease-in-out overflow-hidden group hover:flex-[10]`}
          >
            <Image
              src={card.image}
              alt={card.title}
              className="w-full min-h-[22rem] h-[25rem] object-cover rounded-lg mb-3 transition-all duration-700 ease-in-out blur-[4px] group-hover:blur-none grayscale group-hover:grayscale-0"
              width={1000}
              height={4000}
            />
            <span
              className={`inline-flex items-center justify-center w-8 h-8 text-base font-bold opacity-70 mt-8 bg-pink-100 ${card.idcolor} rounded-full`}
            >{`0${card.id}`}</span>
            <h3 className={`text-xl font-bold px-2 py-1 ${card.color}`}>{card.title}</h3>
            <p
              className={`text-base text-white px-2 py-1 hidden group-hover:block`}
            >
              {card.text}
            </p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-[90%] gap-6 transition-all duration-700 ease-in-out container mx-auto mt-8">
        {[
          {
            id: 1,
            title: "Discovery",
            idcolor: "text-red-500",
            text: "We decode your vision, analyze the market, and architect a roadmap powered by data and insights.",
            color: "text-red-500",
            image: "/process/Discovery-Community.png",
          },
          {
            id: 2,
            title: "Design",
            idcolor: "text-pink-500",
            text: "Pixel-perfect UI/UX design that fuses creative flow with conversion-driven interfaces.",
            color: "text-pink-500",
            image: "/process/Design-Community.jpg",
          },
          {
            id: 3,
            idcolor: "text-purple-500",
            title: "Development",
            text: "Slick, scalable front-end engineering using modern frameworks to bring your product to life—fast.",
            color: "text-purple-500",
            image: "/process/Development-Community.jpg",
          },
          {
            id: 4,
            idcolor: "text-blue-500",
            title: "Architecture",
            text: "Clean, API-first architecture with bulletproof logic—designed to scale, secure, and sync like magic.",
            color: "text-blue-500",
            image: "/process/BackEnd-Community.jpg",
          },
          {
            id: 5,
            idcolor: "text-green-500",
            title: "Testing & QA",
            text: "Automated + manual testing pipelines that catch bugs before they breathe—ensuring zero-compromise delivery.",
            color: "text-green-500",
            image: "/process/Testing-Community.jpg",
          },
        ].map((card) => (
          <div
            key={card.id}
            className={`flex flex-col lg:hidden items-start bg-black text-left rounded-2xl shadow-lg overflow-hidden p-5`}
          >
            <Image
              src={card.image}
              alt={card.title}
              className="w-full h-60 object-cover rounded-lg mb-4"
              width={1000}
              height={4000}
            />
            <span
              className={`inline-flex items-center justify-center w-8 h-8 text-base font-bold ${card.idcolor} bg-white rounded-full shadow-md`}
            >
              {`0${card.id}`}
            </span>
            <h3 className={`text-2xl font-bold mt-2 ${card.idcolor}`}>
              {card.title}
            </h3>
            <p className="text-base text-white mt-2">{card.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Community;
