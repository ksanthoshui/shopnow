import React, { useContext, useEffect, useState } from "react";
import { ChevronRight, Rotate3D } from "lucide-react";
import Title from "../components/Title";
import { Shopcontext } from "../context/Shopcontext";
import Productitem from "../components/Productitem";
function Collections() {
  const { Products ,search,showsearch } = useContext(Shopcontext);
  const [showfilter, setshowfilter] = useState(false);
  const [filterproducts, setfilterproducts] = useState([]);
  const [categroy,setcategory] = useState([]);
  const [subcategory,setsubcategory]= useState([])
  const [sortType,setsortType] = useState('Relavent')
  const togglecategory = (e)=>{

    if(categroy.includes(e.target.value)){
      setcategory(prev=>prev.filter(item=>item !== e.target.value))
    }
    else{
      setcategory(prev=>[ ...prev,e.target.value])
    }
  }

   const togglesubcategory = (e)=>{

    if(subcategory.includes(e.target.value)){
      setsubcategory(prev=>prev.filter(item=>item !== e.target.value))
    }
    else{
      setsubcategory(prev=>[ ...prev,e.target.value])
    }
  }

  const applyfilter = ()=>{
    let productscopy = Products.slice()

    if(showsearch && search){
      productscopy = productscopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase())) 
    }

    if(categroy.length > 0){
      productscopy = productscopy.filter(item=>categroy.includes(item.category))
    }
    if(subcategory.length > 0){
      productscopy = productscopy.filter(item=>subcategory.includes(item.subcategory))
    }
    setfilterproducts(productscopy)
  }

  const sortproduct = ()=>{
        const pfcopy = filterproducts.slice()
        switch (sortType) {
          case'low-high':
            setfilterproducts(pfcopy.sort((a,b)=>(a.price-b.price)))
            break;
          case'high-low':
            setfilterproducts(pfcopy.sort((a,b)=>(b.price-a.price)))
            break;
          default:
            applyfilter()
            break;
        }
  }
  
  useEffect(() => {
    setfilterproducts(Products);
  }, [Products]);

  useEffect(()=>{
    applyfilter()
  },[categroy,subcategory,search,Products] )

  useEffect(()=>{
    sortproduct();
  },[sortType])
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
        {/* filter options  */}
        <div className="min-w-60">
          <p
            onClick={() => setshowfilter(!showfilter)}
            className="my-2 text-xl flex item-center cursor-pointer gap-2 uppercase"
          >
            filters
            <ChevronRight
              className={`h-7 sm:hidden ${showfilter ? "rotate-90" : ""}`}
            />
          </p>
          {/* category filter */}
          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 ${showfilter ? "" : "hidden"} sm:block `}
          >
            <p className="mb-3 text-sm font-medium">category</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" onChange={togglecategory} value={"Men"} />
                Men
              </p>
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" onChange={togglecategory} value={"Women"} />
                Women
              </p>
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" onChange={togglecategory} value={"Kids"} />
                Kids
              </p>
            </div>
          </div>
          {/* subcategory */}
          <div
            className={`border border-gray-300 pl-5 py-3 my-5 ${showfilter ? "" : "hidden"} sm:block `}
          >
            <p className="mb-3 text-sm font-medium">Type</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" onChange={togglesubcategory} value={"Topwear"} />
                Topwear
              </p>
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" onChange={togglesubcategory} value={"Bottomwear"} />
                Bottemwear
              </p>
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" onChange={togglesubcategory} value={"Winterwear"} />
                Winterwear
              </p>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl mb-4">
            <Title title1={"all"} title2={"collections"} />
            {/* product sort */}
            <select onChange={(e)=>{setsortType(e.target.value)}} className="border-2 border-gray-300 text-sm px-2">
              <option value="relavent">Sort by : Relavent</option>
              <option value="low-high">Sort by : Low to High</option>
              <option value="high-low">Sort by : High to Low</option>
            </select>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {filterproducts.map((item, index) => (
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
      </div>
    </>
  );
}

export default Collections;
