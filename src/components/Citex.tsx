import React from "react";
import Image from "next/image";

const Citex = () => {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/dubai-2.png"
          fill
          alt="Dubai skyline"
          className="object-cover object-center"
          priority
        />
      </div>
      
      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* "We're showcasing at" text */}
        <header className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[36px] font-normal text-center leading-tight">
            We&apos;re showcasing at
          </h1>
        </header>
        
        {/* GITEX x enpointe logos section */}
        <div className="flex flex-col sm:flex-row items-center justify-center mb-8 sm:mb-12 md:mb-14 lg:mb-16 w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* GITEX GLOBAL logo */}
          <div className="flex items-center order-1">
            <Image
              src="/Gitex.png"
              width={200}
              height={60}
              alt="GITEX Global"
              className="w-32 h-auto sm:w-40 md:w-52 lg:w-64 xl:w-80 2xl:w-[400px] safari-svg-fix"
              style={{
                imageRendering: '-webkit-optimize-contrast',
                WebkitBackfaceVisibility: 'hidden',
                WebkitTransform: 'translateZ(0)',
              }}
            />
          </div>
          
          {/* Cross icon - positioned at center */}
          <div className="flex justify-center items-center order-2 mx-2 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-12">
            <Image
              src="/cross-icon.svg"
              width={40}
              height={40}
              alt="x"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-[60px] xl:h-[60px]"
            />
          </div>
          
          {/* enpointe logo */}
          <div className="flex flex-col items-center sm:items-end order-3">
            <Image
              src="/enpointe-hero.svg"
              width={200}
              height={60}
              alt="enpointe"
              className="w-32 h-auto sm:w-40 md:w-52 lg:w-64 xl:w-80 2xl:w-[400px]"
            />
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] font-light mt-1 sm:mt-2 text-center sm:text-right">
              engineering experiences.
            </p>
          </div>
        </div>
        
        {/* Main heading */}
        <div className="mb-4 sm:mb-6 md:mb-8 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] font-bold text-center leading-relaxed">
            The Only Global Tech Company Powering the Filmed Entertainment Ecosystem
          </h2>
        </div>
        
        {/* Description paragraph */}
        <div className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[15px] font-light text-center leading-relaxed">
            We&apos;re the exclusive global tech force fueling every frame of the entertainment industry from movies to 
            streaming and beyond. With our cutting-edge products and services, we&apos;re redefining how the world 
            experiences cinema, creating seamless, world-class solutions for every facet of film and media.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Citex;
