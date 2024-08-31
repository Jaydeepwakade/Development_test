import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/actions";
import { Modalcontext } from "../context/ProductContext";

function ProductsPage() {


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const data = useSelector((state) => state.data.data);

  const {Modalopen}= useContext(Modalcontext)

  console.log(data);
  return (
    <div className=" flex justify-center items-centerh-screen w-screen">
      <div className="grid grid-cols-2 gap-20">
        {data.map((element) => {
          return (
            <div
              className=" flex flex-col border border-gray-300 p-2 h-[434px] w-[584px] gap-2"
              key={element.id}
            >
              <img className="h-96" src={element.img} alt={element.name} />

              <div className="flex justify-between items-center">
                <p className="font-roboto font-[600] text-[20px]">
                  {element.name}
                </p>
                <button onClick={()=>Modalopen(element)} className="bg-customRed p-2 w-40 text-white font-roboto font-[600]">
                  QUICK VIEW
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductsPage;
