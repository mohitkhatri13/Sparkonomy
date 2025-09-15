import React from "react";
import image from "../assets/image.png";

const Footer = () => {
  return (
    <footer className="mt-10 text-center mb-10">
      {/* Divider line */}
      <hr className="border-t border-gray-200 mb-6" />

      {/* Logo */}
      <div className=" flex   items-baseline justify-center text-lg font-semibold text-gray-700">
        <div className="font-bold text-[13px] text-[#999999]">Spark</div>
        <img src={image} className="h-[8px]" alt="" />
        <div className= "text-[#999999] text-[8px]">nomy</div>
      </div>

      {/* Tagline */}
      <p className="text-[8px] text-[#999999] mt-1">
        sparking the creator economy
      </p>
    </footer>
  );
};

export default Footer;
