import React, { useContext } from "react";
import { Modalcontext } from "../context/ProductContext";

function ProductModal() {
  const { openModal, product, closeModal, isModalopen } =
    useContext(Modalcontext);
  console.log("hello testing", product);
  return (
    <>
      {isModalopen && (
        <div>
          <div className=" fixed inset-0 flex justify-center items-center bg-black bg-opacity-40">
            <div className="bg-white p-5 flex">
              <div>
                <img src={product.img} alt="" />
                <div className="flex gap-5 justify-start items-center p-1">
                  <img src={product.otherimg} alt="" />
                  <img src={product.otherimg} alt="" />
                  <img src={product.otherimg} alt="" />
                  <img src={product.otherimg} alt="" />
                </div>
              </div>
              <div>
                <div className="flex justify-between gap-10">
                  <p className="font-roboto font-[600]">{product.name}</p>
                  <button onClick={closeModal}>close</button>
                </div>

                <div>
                  <p className="font-roboto text-[20px] font-[600] ">
                    MRP: {product.price} /-
                  </p>
                </div>

                <div>
                  <p>Product Description</p>

                  <p>{product.description}</p>
                </div>

                <div>
                  <p>Product Contents :</p>
                  {product.Contents.map((ele) => {
                    return <li>{ele}</li>;
                  })}
                </div>

                <div>
                  <p>shipping</p>
                <p>{product.shiping}</p>
                </div>
                 <div>
                  <button>Choose Now</button>
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
