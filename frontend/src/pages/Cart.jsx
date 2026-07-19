import React, { useContext, useEffect, useState } from "react";
import { Shopcontext } from "../context/Shopcontext";
import Title from "../components/Title";
import { Trash2 } from "lucide-react";
import CartTotal from "../components/CartTotal";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { Products, currency, cartItems, updatequantity } =
    useContext(Shopcontext);

  const [cartdata, setcartdata] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (Products.length > 0) {
      let tempData = [] ;

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setcartdata(tempData);
    }
  }, [cartItems, Products]);

  return (
    <>
      <div className="border-t pt-14">
        <div className="text-2xl mb-3">
          <Title title1={"Your"} title2={"cart"} />
        </div>
        {cartdata.map((item, index) => {
          const productData = Products.find(
            (products) => products._id === item._id,
          );
          if (!productData) return null;
          return (
            <div
              key={index}
              className=" py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0fr] items-center gap-4 "
            >
              <div className="flex items-start gap-6">
                <img
                  src={productData.image[0]}
                  alt="not found"
                  className="w-16 sm:w-20"
                />
                <div>
                  <p className="text-xs sm:text-lg font-medium ">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updatequantity(
                        item._id,
                        item.size,
                        Number(e.target.value),
                      )
                }
                type="number"
                className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                min={1}
                defaultValue={item.quantity}
              />
              <Trash2
                onClick={() => {
                  updatequantity(item._id, item.size, 0);
                }}
                className="w-4 mr-4 sm:w-5 cursor-pointer"
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-112.5">
          <CartTotal />
          <div className="w-full text-end">
            <button
              className="bg-black text-white text-sm my-8 py-3 px-2 cursor-poi "
              onClick={() => navigate("/place-Order")}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
