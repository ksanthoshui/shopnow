import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Shopcontext } from "../context/Shopcontext";
import { Star } from "lucide-react";
import RelatedProduct from "../components/RelatedProduct";
function Products() {
  const { productId } = useParams();
  const { Products, currency,  cartItems,addtocard } = useContext(Shopcontext);
  const [productdata, setproductdata] = useState(false);
  const [image, setimage] = useState("");
  const [size, setsize] = useState("");

  const fetchdata = async () => {
    Products.map((item) => {
      if (item._id == productId) {
        setproductdata(item);
        setimage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchdata();
  }, [productId]);
  return productdata ? (
    <>
      <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
        {/*product data  */}
        <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
          {/* product image */}
          <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
            <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
              {productdata.image.map((item, index) => (
                <img
                  onClick={() => {
                    setimage(item);
                  }}
                  src={item}
                  key={index}
                  className=" w-[24%] sm:w-full sm:mb-3 shrink-0 cursor-pointer"
                  alt="not found"
                />
              ))}
            </div>
            <div className="w-full sm:w-[80%]">
              <img src={image} className="w-full h-auto" alt="not found" />
            </div>
          </div>
          {/* product info */}
          <div className="flex-1">
            <h1 className="font-medium text-2xl mt-2">{productdata.name}</h1>
            <div className="flex items-center gap-1 mt-2">
              <Star className="w-5 " />
              <Star className="w-5 " />
              <Star className="w-5 " />
              <Star className="w-5 " />
              <Star className="w-5 " />
              <p className="pl-2">(122)</p>
            </div>
            <p className="mt-5 text-3xl font-medium">
              {currency}
              {productdata.price}
            </p>
            <p className="mt-5 md:w-4/5 text-gray-500">
              {productdata.description}
            </p>
            <div className="flex flex-col gap-4 my-8">
              <p>select size</p>
              <div className="flex gap-2">
                {productdata.sizes.map((item, index) => (
                  <button
                    onClick={() => setsize(item)}
                    key={index}
                    className={` border cursor-pointer py-2 px-4 bg-gray-100 ${item === size ? "border-amber-400" : ""} `}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <button onClick={()=>{addtocard(productdata._id,size)}} className="bg-black text-white px-7 py-3 text-sm active:bg-gray-700 uppercase cursor-pointer ">
              add to card
            </button>
            <hr className="mt-8 sm:w-4/5 text-gray-300 " />
            <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1 capitalize">
              <p>100% original products. </p>
              <p>cash on delivery is available on this product.</p>
              <p>easy return and exchange policy with in 7 days.</p>
            </div>
          </div>
        </div>
        {/* description and review section */}
        <div className="mt-10" >
          <div className="flex" >
            <b className="border px-5 py-3 text-sm" >Description</b>
            <p className="border px-5 py-3 text-sm" >Review (122) </p>
          </div>
          <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500" >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis autem officia dignissimos quidem neque provident aperiam consectetur consequatur facere praesentium, animi vel voluptates debitis id iure dolores! Cumque, velit quis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error facilis aliquid incidunt porro repudiandae ipsam architecto voluptatum quibusdam temporibus exercitationem et, sequi maiores laborum, voluptate labore magnam. Laborum, ratione at.</p>
          </div>
        </div>
        {/* related products */}
        <RelatedProduct category={productdata.category} subcategory={productdata.subcategory} />
      </div>
    </>
  ) : (
    <div className="opacity-0"></div>
  );
}

export default Products;
