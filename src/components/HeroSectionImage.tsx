import React from "react";
import Image from "next/image";
import { CgArrowTopRight } from "react-icons/cg";

const HeroSectionImage = () => {
  const image = ["/image.png", "/image.png", "/image.png", "/image.png"];
  return (
    <div className="relative border-l border-gray-800 font-inter pb-10">
      <Image
        src={"/Abstract Design.png"}
        alt="Image"
        className="w-[500px] h-[335px] object-fill"
        width={500}
        height={400}
      />
      <div className="flex rounded-full absolute xl:top-1/2 lg:top-[40%] top-[55%] left-16 transform -translate-x-1/2 -translate-y-1/2 bg-white">
        {image.map((image, index) => (
          <div
            key={index}
            className={`absolute overflow-hidden w-full h-full`}
            style={{
              width: "50px",
              height: "50px",
              top: `${index * 0}px`,
              left: `${index * 35}px`,
            }}
          >
            <Image
              src={image}
              alt={`Profile Image ${index + 1}`}
              className="w-full h-full"
              width={50}
              height={50}
            />
          </div>
        ))}
      </div>
      <div className="pl-12 mt-8">
        <p className="text-lg text-medium">Explore 1000+ resources</p>
        <p className="text-sm text-gray-400 mt-1">
          Over 1,000 articles on emerging tech trends and breakthroughs.
        </p>
        <button className="flex gap-2 text-sm border border-gray-800 px-4 py-4 rounded-[10px] mt-8">
          Explore Resources{" "}
          <CgArrowTopRight className="text-yellow-300 sm:w-6 sm:h-6 w-5 h-5" />{" "}
        </button>
      </div>
    </div>
  );
};
export default HeroSectionImage;
