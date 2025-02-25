import React from "react";
import { CgArrowTopRight } from "react-icons/cg";

type Props = {
  videoUrl:string;
  title:string;
  description:string;
  buttonTitle?:string;
}

type videos = {
  data:Props[];
  className?:string;
}

export default function VisualInsights({ data,className }:videos) {
  return (
    <div className={`bg-[#141414] border-t border-gray-800 grid ${className}  sm:grid-cols-2 grid-cols-1 `}>
      {data.map((item,index)=>(
      <div key={index} className={`w-full py-12 border-r border-b border-gray-800 px-10`}>
        <iframe
          className="w-full h-[260px] rounded-t-[10px]"
          width="590"
          height="331"
          src={item.videoUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <p className="font-semibold text-base mt-2">
         {item.title}
        </p>
        <p className="text-gray-500 text-sm ">
          {item.description}
        </p>
        {item.buttonTitle && (
          <button className="flex gap-2 border border-gray-800 px-4 py-2 rounded-[5px] mt-8 text-gray-500 hover:bg-gray-800 hover:text-white">{item.buttonTitle}<CgArrowTopRight className="text-yellow-300 sm:w-6 sm:h-6 w-5 h-5" /></button>
        )}
      </div>
      ))}
    </div>
  );
}
