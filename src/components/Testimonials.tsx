import React from "react";
import { CgArrowTopRight } from "react-icons/cg";

interface data {
    title:string;
    description:string;
}

interface TestimonialsProps {
    testimonialsArr:data[]
}

const Testimonials:React.FC<TestimonialsProps> = ({ testimonialsArr }) => {
  return (
    <div className="bg-black py-2 w-full font-inter  overflow-hidden mt-10">
        <div className="animate-scroll w-max flex gap-2">
        {testimonialsArr.map((testimonial,index)=>(
      <div key={index} className="w-[485px] h-[166px] bg-[#191919] rounded-[10px] px-6 pt-8">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg text-white">{testimonial.title}</p>
          <div className="w-[44px] h-[44px] bg-yellow-400 rounded-full  grid place-items-center">
            <CgArrowTopRight className="text-black sm:w-6 sm:h-6 w-5 h-5" />
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          {testimonial.description}
        </p>
      </div>
        ))}
        </div>
    </div>
  );
};

export default Testimonials;
