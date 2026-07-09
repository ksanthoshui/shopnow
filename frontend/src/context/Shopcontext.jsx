import { createContext, useEffect, useState } from "react";
import Products from "../assets/Products.json";
import { toast } from "react-toastify";

export const Shopcontext = createContext();

const ShopcontextProvider = ({ children }) => {
  const [search, setsearch] = useState("");
  const [showsearch, setshowsearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const addtocard = async (itemId, size) => {
    if (!size) {
      toast.error("select product size");
      return;
    }
    let cartdata = structuredClone(cartItems);
    if (cartdata[itemId]) {
      if (cartdata[itemId][size]) {
        cartdata[itemId][size] += 1;
      } else {
        cartdata[itemId][size] = 1;
      }
    } else {
      cartdata[itemId] = {};
      cartdata[itemId][size] = 1;
    }
    setCartItems(cartdata);
  };
  const getcartcount = (()=>{
        let totalcount = 0
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item]>0){
                        totalcount += cartItems[items][item]
                    }
                } catch (error) {
                    
                }
            }

        } 
        return totalcount;

  });

  const updatequantity = async(itemId,size,quantity)=>{
    let cartdata = structuredClone(cartItems)
    cartdata[itemId][size] = quantity;
    setCartItems(cartdata)
  }

  const currency = "$";
  const delivary_fee = 10;

  const value = {
    currency,
    delivary_fee,
    Products,
    search,
    setsearch,
    showsearch,
    setshowsearch,
    cartItems,
    addtocard,
    getcartcount,
    updatequantity
  };
  
  return <Shopcontext.Provider value={value}>{children}</Shopcontext.Provider>;
};

export default ShopcontextProvider;
