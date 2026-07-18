import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
export const Shopcontext = createContext();

const ShopcontextProvider = ({ children }) => {
  const [search, setsearch] = useState("");
  const [showsearch, setshowsearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [Products, setProducts] = useState([]);
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const [token, setToken] = useState("");

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
    try {
      if (token) {
        await axios.post(
          backend_url + "/api/cart/add",
          { itemId, size },
          { headers: { token } },
        );
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  const getcartcount = () => {
    let totalcount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalcount += cartItems[items][item];
          }
        } catch (error) {
          console.log(error);
          toast.error(error.message);
        }
      }
    }
    return totalcount;
  };

  const updatequantity = async (itemId, size, quantity) => {
    let cartdata = structuredClone(cartItems);
    cartdata[itemId][size] = quantity;
    setCartItems(cartdata);
    if(token){
      try {
        await axios.post(backend_url + '/api/cart/update',{itemId, size, quantity},{headers:{token}})

      } catch (error) {
        console.log(error);
          toast.error(error.message);
      }
    }
  };

  const getcarttotal = () => {
  let totalamount = 0;

  for (const items in cartItems) {
    const iteminfo = Products.find(
      (product) => product._id === items
    );

    // Skip if the product doesn't exist
    if (!iteminfo) continue;

    for (const size in cartItems[items]) {
      const quantity = cartItems[items][size];

      if (quantity > 0) {
        totalamount += iteminfo.price * quantity;
      }
    }
  }

  return totalamount;
};

  const getProducts = async () => {
    try {
      const response = await axios.get(backend_url + "/api/product/list");

      if (response.data.success) {
        setProducts(response.data.product);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
          toast.error(error.message);
    }
  };

  const getCartdata = async (token) => {
  try {
    const response = await axios.post(
      backend_url + "/api/cart/get",
      {},
      { headers: { token } }
    );


    if (response.data.success) {
      setCartItems(response.data.cartData)
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
};

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      getCartdata(localStorage.getItem("token"))
    }
  }, []);

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
    updatequantity,
    getcarttotal,
    backend_url,
    token,
    setToken,
  };

  return <Shopcontext.Provider value={value}>{children}</Shopcontext.Provider>;
};

export default ShopcontextProvider;
