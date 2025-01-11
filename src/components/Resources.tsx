import React from "react";

type ResourcesType = {
  rating: string;
  title: string;
};

type Resorces = {
  resourcesArr: ResourcesType[];
};

const Resources = ({ resourcesArr }: Resorces) => {
  return (
    <div className="flex sm:flex-row flex-col w-full mt-24">
      {resourcesArr.map((item, index) => (
        <div
          key={index}
          className={`w-full border-t flex flex-col items-center border-gray-800 px-14 py-10 font-inter ${
            index === resourcesArr.length - 1 ? "" : "border-r"
          }`}
        >
          <p className="font-semibold text-3xl">
            {item.rating} <span className="text-yellow-300">+</span>
          </p>
          <p className="text-normal text-sm text-gray-500 mt-1">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Resources;
