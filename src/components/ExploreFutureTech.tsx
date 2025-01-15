import React, { useState } from "react";
import BlogList from "./BlogList";

const ExploreFutureTech = () => {
  const [selected, setSelected] = useState<string | number>("All");
  const [isHovered, setIsHovered] = useState<string | null>("");
  const buttons = [
    "All",
    "Quantum Computing",
    "AI Ethics",
    "Space Exploration",
    "Biotechnology",
    "Renewable Energy",
  ];
  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <div className="bg-[#141414] min-w-[1200px] py-10 px-10 flex gap-4 justify-center border-t border-b border-gray-800">
          {buttons.map((buttonTitle, index) => (
            <button
              key={index}
              className={`border border-gray-800 ${
                selected === buttonTitle
                  ? "bg-[#333333] text-white"
                  : isHovered === buttonTitle
                  ? "bg-gray-700 text-white"
                  : ""
              } text-gray-500 transition  duration-400  py-4 px-8 rounded-md`}
              onClick={() => setSelected(buttonTitle)}
              onMouseEnter={() => setIsHovered(buttonTitle)}
              onMouseLeave={() => setIsHovered(null)}
            >
              {buttonTitle}
            </button>
          ))}
        </div>
      </div>
      <BlogList/>
    </div>
  );
};

export default ExploreFutureTech;
