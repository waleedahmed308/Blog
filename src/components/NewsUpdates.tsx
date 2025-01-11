import React from "react";
import { CgArrowTopRight } from "react-icons/cg";

type NewsType = {
    icon:React.JSX.Element;
    title:string;
    slogen:string;
    description:string
}

type Props = {
    updateNews:NewsType[];
}

export default function NewsUpdates({updateNews}:Props) {
  return (
    <div className="grid md:grid-cols-3  grid-cols-1 font-inter">
       {updateNews?.map((item,index)=>(
      <div key={index} className={` border-t  border-b border-gray-800 px-10  py-10 ${index === updateNews.length - 1 ? "" : "border-r"}`}>
        {item.icon}
        <div className="flex justify-between mt-6">
          <div>
            <p className="text-lg font-medium text-white">
              {item.title}
            </p>
            <p className="text-sm text-gray-500">{item.slogen}</p>
          </div>
          <div className="w-[44px] h-[44px] rounded-full bg-yellow-300 grid place-content-center">
            <CgArrowTopRight className=" text-black sm:w-6 sm:h-6 w-5 h-5" />
          </div>
        </div>
        <p className="text-sm mt-4 font-normal text-gray-500">{item.description}</p>
      </div>
       ))} 
    </div>
  );
}
