import React from "react";
import footerD from "/assets/footerD.png";
import instagram from "/assets/instagram.png";
import youtube from "/assets/youtube.png";
import twitter from "/assets/twitter.png";
import linkedin from "/assets/linkedin.png";
import facebook from "/assets/linkedin.png";
import Frame64 from "/assets/Frame64.png";

function Footer() {
  return (
    <div className=" h-[112px] flex justify-between bg-customGreen  w-full">
    
      <div className="flex justify-between items-center w-full">
        
        <img className="ml-5" src={footerD} alt="" />
        <div className=" flex flex-col justify-center items-center gap-5">
          <p className="h-[24px] font-neue-metan text-[#ECE14C] font-[700] text-[20px] leading-[24.32px]">
            Follow us on
          </p>
          <div className=" flex gap-2">
            <img src={instagram} alt="" />
            <img src={youtube} alt="" />
            <img src={twitter} alt="" />
            <img src={facebook} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </div>
        <img className="mr-5" src={footerD} alt="" />
      </div>
    </div>
  );
}

export default Footer;
