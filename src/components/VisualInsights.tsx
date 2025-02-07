import React from "react";

type Props = {
  videoUrl:string;
  title:string;
  description:string;
}

type videos = {
  data:Props[]
}

export default function VisualInsights({ data }:videos) {
  return (
    <div className="bg-[#141414] border-t border-gray-800 grid  sm:grid-cols-2 grid-cols-1 ">
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
      </div>
      ))}
    </div>
  );
}
