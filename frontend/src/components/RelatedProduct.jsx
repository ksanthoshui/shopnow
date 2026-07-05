import React, { useContext, useEffect, useState } from "react";
import { Shopcontext } from "../context/Shopcontext";
import Productitem from '../components/Productitem'
import Title from "../components/Title";
function RelatedProduct({ category, subcategory }) {
  const { Products } = useContext(Shopcontext);
  const [related, setrelated] = useState([]);

  useEffect(() => {
    if (Products.length  > 0) {
      let productscopy = Products.slice();
      productscopy.filter((item) => {
        category === item.category;
      });
      productscopy.filter((item) => {
        subcategory === item.category;
      });
      setrelated(productscopy.slice(0, 5));
      
    }
  }, [Products]);

  return (
    <>
      <div className="my-24">
        <div className="text-center text-3xl py-2">
          <Title title1={"related"} title2={"products"} />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {related.map((item, index) => (
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

export default RelatedProduct;
