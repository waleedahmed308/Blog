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
   const famousBlogs = [
      {
        image: "/image.png",
        name: "John Techson",
        topic: "Quantum Computing",
        date: "October 15, 2023",
        title: "The Quantum Leap in Computing",
        description:
          "Explore the revolution in quantum computing, its applications, and its potential impact on various industries.",
      },
      {
        image: "/ethic ai.png",
        name: "Sarah Ethicist",
        topic: "AI Ethics",
        date: "November 5, 2023",
        title: "The Ethical Dilemmas of AI",
        description:
          "A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency.",
      },
      {
        image: "/ethic ai.png",
        name: "Astronomer X",
        topic: "Space Exploration",
        date: "December 10, 2023",
        title: "The Mars Colonization Challenge",
        description:
          "Exploring the technical and logistical challenges of human colonization on Mars.",
      },
    ];

    const filteredData = famousBlogs.filter((item)=>{
      return item.topic === selected || selected === "All";
    })
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
      <BlogList famousBlogs={filteredData}/>
    </div>
  );
};

export default ExploreFutureTech;
