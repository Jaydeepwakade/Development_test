import React, { useEffect } from "react";
import Group from "/assets/Group.png";
import backgroundimage1 from "/assets/backgroundimage1.png";
import line from "/assets/line.png";
import sparkle from "/assets/sparkle.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/actions";
import ProductsPage from "./ProductsPage";
import bigline from "/assets/bigline.png"
import Footer from "./Footer";
import Frame64 from "/assets/Frame64.png"
import ProductModal from "./ProductModal";

function Homepage() {




  return (
    <div className="relative h-screen w-screen">
      {/* header section......................................... */}
      <div
        className=" inset-0 w-full  bg-no-repeat h-[527px] "
        style={{
          backgroundImage: `url(${backgroundimage1})`,
          backgroundSize: "cover",
        }}
      >
        <div className="inset-0 p-4  bg-black bg-opacity-30">
          <img className="pl-40" src={Group} alt="" />
        </div>

        <div className="flex flex-col gap-10 ml-[120px] ">
          <div className="w-[574px] h-[112px] mt-[220px]">
            <h2 className="text-white font-[600] text-[44px] leading-[56px] font-roboto text-4xl">
              The choice is yours . <br />
              Because they don't have one
            </h2>
          </div>

          <button className="bg-white p-3 w-40 font-bold text-red-600">
            QUICK VIEW
          </button>
        </div>
      </div>
      {/* About section
      ............................................................................................ */}
      <div className=" flex flex-col items-center justify-center ">
        <div className=" flex items-center h-full p-10 gap-20">
          <img src={line} alt="" />
          <h1 className="text-customOrange font-roboto font-[600] text-[32px]">
            About
          </h1>

          <img src={line} alt="" />
        </div>

        <div className=" flex  gap-4 overflow-x-auto justify-center items-center ">
          <img src={sparkle} alt="" />
          <div className=" flex flex-col gap-4 overflow-x-auto justify-center items-center w-[908px]">
            <p className="break-words text-center font-roboto font-[400] text-[16px] leading-[32px]">
              Our products are crafted exclusively from the dreams and screams
              of young kids who wanted to show their mastery in their chosen
              fields, but were directed towards a factory for daily wages. Each
              cracker bursts brighter than their lost smiles, and can be heard
              louder than their cries for miles. Buy them, burst them, brag
              about them
            </p>
            <h2 className=" font-roboto font-[600] text-[20px]">
              The choice is yours. Because they don’t have one
            </h2>
          </div>
          <img src={sparkle} alt="" />
        </div>

        <div className=" flex items-center h-full p-10 gap-20">
          <img src={line} alt="" />
          <h1 className="text-customOrange font-roboto font-[600] text-[32px]">
            Our products
          </h1>

          <img src={line} alt="" />
        </div>
      </div>

      {/* Our products section ................................................................... */}
<ProductsPage/>


 <div className="w-full flex justify-center mt-10">
 <img className="items-center justify-center" src={bigline} alt="" />
 </div>
 

 <div className="flex mt-10">       <img className="h-2" src={Frame64} alt="" /></div>
  <Footer/>
  <div className="flex ">       <img className="h-2" src={Frame64} alt="" /></div>
<ProductModal/>
    </div>
  );
}

export default Homepage;
