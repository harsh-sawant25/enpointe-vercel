"use client";
import Image from "next/image";
import React from "react";

type CaseStudyCardProps = {
  currentId: number;
  onReadClick: () => void;
  cardData: {
    logoimage: string;
    description: string;
    image: string; 
  };
};


const buttonColors: string[] = [
  "#FF5C00", 
  "#D50000", 
  "#7D8886", 
  "#1F307A", 
  "#5E34C3", 
  "#00193A", 
];

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ currentId, onReadClick, cardData }) => {
  const buttonColor = buttonColors[(currentId - 1) % buttonColors.length]; 

  return (
    <div className="flex items-center justify-center  pb-6  md:pb-32 md:p-6">
      <div className="bg-white shadow-2xs rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-start text-left space-y-6 md:space-y-0 md:space-x-10 max-w-5xl w-full">
        <div className="flex-1">
          <p className="text-gray-500 text-sm">Our Case Study</p>
          <Image 
            src={cardData.logoimage} 
            alt="logo" 
            width={160}  
            height={80}  
            className="py-3 w-full md:w-40" 
          />
          <p className="text-gray-600 mt-3 md:w-10/12">{cardData.description}</p>
          <button
            onClick={onReadClick}
            style={{ backgroundColor: buttonColor, color: "#FFFFFF" }} 
            className="mt-5 px-5 py-2 rounded-full shadow-md transition-transform transform hover:scale-105"
          >
            Give It A Read
          </button>
        </div>
        <div className="flex items-center justify-center space-x-4 md:space-x-6 w-full md:w-auto">
          <Image 
            src={cardData.image} 
            alt="Card Preview" 
            width={500} 
            height={300} 
            className="w-64 md:w-80 lg:w-96 h-auto" 
          />
        </div>
      </div>
    </div>
  );
};



export default CaseStudyCard;
