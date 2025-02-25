import React from "react";
import { FaStar } from "react-icons/fa";
import { CgArrowTopRight } from "react-icons/cg";

type Props = {
  icon:React.JSX.Element;
  title:string;
  rating:number
  host:string;
  hostName:string;
  videoUrl:string;
  videoTitle:string;
  videoDescription:string;
};

type PodCasts = {
  data:Props[]
  handleListenPodcast:(index:number)=> void;
}

export default function AIRevolution({ data,handleListenPodcast }:PodCasts) {
  return (
    <div className="mt-12">
    {data?.map((item,index) => (
    <div key={index} className="sm:px-20 px-10 font-inter flex lg:flex-row flex-col border-t border-gray-800">
      <div className="lg:border-r border-gray-800 lg:pr-12 lg:w-[40%] w-full pt-16">
       {item.icon}
        <div className="flex justify-between mt-8">
          <p className="sm:text-2xl text-xl font-semibold">{item.title}</p>
          <div className="flex gap-1 border border-gray-800 rounded-full px-3 py-2">
            {[...Array(Math.max(0,Math.min(item.rating,5)))].map((_, index) => (
              <FaStar key={index} className="text-yellow-500 w-5 h-5" />
            ))}
          </div>
        </div>
        <div className="bg-[#191919]  rounded-[5px] flex items-center justify-between px-6 py-6 border border-gray-800 mt-4">
          <div>
            <p className="font-normal text-gray-500 text-base">{item.host}</p>
            <p className="font-medium text-base mt-1">{item.hostName}</p>
          </div>
          <button onClick={()=>handleListenPodcast(index)} className="sm:w-[157px] w-[167px] h-[49px] bg-[#141414] flex gap-1 hover:bg-gray-800 hover:text-white justify-center items-center rounded-[10px] text-sm text-gray-500 border border-gray-700">
            Listen Podcast{" "}
            <CgArrowTopRight className="text-yellow-300 sm:w-6 sm:h-6 w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="lg:w-[60%] w-full lg:pl-12 lg:mt-0 mt-8 py-12">
        <iframe
          className="w-full h-[260px] rounded-[10px]"
          width="590"
          height="331"
          src={item.videoUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <p className="text-xl font-semibold mt-4">
          {item.videoTitle}
        </p>
        <p className="text-base font-normal text-gray-500">
          {item.videoDescription}
        </p>
      </div>
    </div>
    ))}
    </div>
  );
}
