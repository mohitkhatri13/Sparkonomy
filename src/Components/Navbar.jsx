import React from "react";
import { ChevronLeft } from "lucide-react"; // lightweight icon lib
import navbarImage from "../assets/navbarImage.png";


const Navbar = () => {
  return (
    <div className="  flex items-center  w-[370px] justify-around px-6 py-3 ">
      {/* Left Section */}
      <div className="flex items-center gap-2">
        <ChevronLeft className="w-5 h-5 weight-[590] text-[17px] text-gray-700" />
        <span className="text-gray-700 font-medium cursor-pointer">Back</span>
      </div>

      {/* Center Section */}
      <h1 className="text-[20px] font-semibold text-black">Dashboard</h1>

      {/* Right Section */}
      <div className="w-[40px]  h-[40px] flex items-center justify-center overflow-hidden rounded-full bg-purple-100
      ">
        <img src={navbarImage} className="object-cover w-full h-full"></img>
      </div>
    </div>
  );
};

export default Navbar;
