import React, { useEffect, useState,useContext } from "react";
import { Shopcontext } from "../context/Shopcontext";
import Title from "./Title";
import Productitem from "./Productitem";
function LatestCollection() {

  const { Products } = useContext(Shopcontext);
  const [latestproduct,setlatestproduct]=useState([])

  useEffect(()=>{
    setlatestproduct(Products.slice(0,10))
  },[])
  return (
    <>
      <div className="my-10">
        <div className="py-8 text-center text-3xl ">
          <Title title1={"LATEST"} title2={"COLLECTIONs"} />
          <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            illo enim inventore quis.
          </p>
        </div>
          {/* products rendering */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6" >
            {
              latestproduct.map((item,index)=>(
                <Productitem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
              ))
            } 
          </div>
      </div>
    </>
  );
}

export default LatestCollection;
