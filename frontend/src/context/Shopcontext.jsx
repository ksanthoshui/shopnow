import {createContext, useState} from "react";
import Products from "../assets/Products.json"

export const Shopcontext = createContext();

const ShopcontextProvider = ({children}) => {
    const [search,setsearch] = useState('')
    const [showsearch , setshowsearch] = useState(false)
        const currency = "$";
        const delivary_fee = 10;

        const value = {
            currency,
            delivary_fee,
            Products,
            search,setsearch,showsearch , setshowsearch

        }

    return (
        <Shopcontext.Provider value={value}>
            {children}
        </Shopcontext.Provider>
    );
};


export default ShopcontextProvider;