import React, { useContext } from "react";
import { Modalcontext } from "../context/ProductContext";
import Vector from "/assets/Vector.png"
import cross from "/assets/cross.png"
import star from "/assets/star.png"

function ProductModal() {
  const { openModal, product, closeModal, isModalopen } =
    useContext(Modalcontext);
  console.log("hello testing", product);
  return (
    <>
      {isModalopen && (
        <div>
          <div className=" fixed inset-0 flex justify-center items-center bg-black bg-opacity-40">
            <div className="bg-white p-4 flex">
              <div className="flex flex-col items-center">
                <img src={product.img} alt="" />
                <div className="flex gap-5 justify-between items-center p-3">
                  <img src={product.otherimg} alt="" />
                  <img src={product.otherimg} alt="" />
                  <img src={product.otherimg} alt="" />
                  <img src={product.otherimg} alt="" />
                </div>
              </div>
              <div className=" flex flex-col gap-8">
                <div className="flex justify-between gap-10">
                  <p className="font-roboto font-[600] text-[22px]">{product.name}</p>
                 <img className="h-7" onClick={closeModal} src={cross} alt="" />
                </div>

                <div>
                  <p className="font-roboto text-[20px] font-[600] ">
                    MRP: {product.price} /-
                  </p>
                </div>
            <img src={Vector} alt="" />
                <div>
                  <p className="font-roboto font-[600]">Product Description :</p>

                  <p>{product.description}</p>
                </div>
                <img src={Vector} alt="" />
                <div>
                  <p className="font-roboto  font-[600]">Product Contents :</p>
                  {product.Contents.map((ele) => {
                    return <div className=" flex gap-1">
                      <img className="w-6" src={star} alt="" />{ele}<p></p></div>
                  })}
                </div>
                <img src={Vector} alt="" />
                <div>
                  <p className="font-roboto font-[600]">shipping</p>
                <p>{product.shiping}</p>
                </div>
                 <div className=" flex justify-center">
                  <button onClick={closeModal} className="bg-customRed p-2 w-96 text-white font-roboto font-[600] text-[20px]">Choose Now</button>
                 </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductModal;
