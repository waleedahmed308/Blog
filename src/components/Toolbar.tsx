import React from "react";
import { CgArrowTopRight } from "react-icons/cg";

const Toolbar = () => {
return(
    <div className="bg-black text-gray-400 flex gap-2 py-5 sm:text-sm text-[10px] justify-center">
        Subscribe to our Newsletter For New & latest Blogs and Resources
        <CgArrowTopRight className="text-yellow-300 sm:w-6 sm:h-6 w-5 h-5" />
    </div>
)
};
export default Toolbar;