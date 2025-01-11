import React from "react";
import FutureTechnology from "./icons/futuretechnology";

const FutureTechFeatures = () => {
  const card = [
    {
      title: "Quantity",
      description:
        "Over 1,000 articles on emerging tech trends and breakthroughs.",
    },
    {
      title: "Quantity",
      description:
        "Over 1,000 articles on emerging tech trends and breakthroughs.",
    },
    {
      title: "Quantity",
      description:
        "Over 1,000 articles on emerging tech trends and breakthroughs.",
    },
    {
      title: "Quantity",
      description:
        "Over 1,000 articles on emerging tech trends and breakthroughs.",
    },
  ];
  return (
    <div className="bg-[#141414] flex font-inter border-b border-gray-800">
      <div className=" py-20 border-r  pl-12 border-gray-800 pr-6">
        <FutureTechnology />
        <p className="font-semibold text-[28px] mt-6">Future Technology Blog</p>
        <p className="text-gray-500 text-base">
          Stay informed with our blog section dedicated to future technology.
        </p>
      </div>
      <div className="px-10 py-20 grid grid-cols-2 gap-4">
        {card.map((item, index) => (
          <div key={index} className="bg-[#191919] rounded-[4px] p-6 h-[134px]">
            <p className="font-medium text-lg text-white">{item.title}</p>
            <p className="text-sm text-gray-500 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FutureTechFeatures;
