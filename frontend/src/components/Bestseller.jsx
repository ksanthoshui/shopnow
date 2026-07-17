import React, { useContext, useEffect, useState } from "react";
import { Shopcontext } from "../context/Shopcontext";
import Title from "./Title";
import Productitem from "./Productitem";

function Bestseller() {
  const { Products } = useContext(Shopcontext);
  const [bestseller, setbestseller] = useState([]);

  useEffect(() => {
    const bestproduct = Products.filter((item) => item.bestseller);
    setbestseller(bestproduct.slice(0, 5));
  }, [Products]);
  return (
    <>
      <div className="my-10">
        <div className="text-center text-3xl py-8">
          <Title title1={"best"} title2={"seller"} />
          <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            illo enim inventore quis.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {bestseller.map((item, index) => (
            <Productitem
              key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Bestseller;
