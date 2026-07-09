import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Search,House,User,ShoppingBag,Menu,MoveRight   } from 'lucide-react';
import { Shopcontext } from "../context/Shopcontext";
function Navbar() {

  const [visible,setvisible ]= useState(false)
     const {setshowsearch,getcartcount} = useContext(Shopcontext)
  return (
    <>
      <div className="flex items-center justify-between py-5  font-medium">
        <Link to={'/'} >
        <House/>
        </Link>

        <ul className="hidden sm:flex gap-5 text-sm text-gray-700 uppercase">
          <NavLink to="/" className="flex flex-col items-center gap-1  "> 
            <p>Home</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>

          <NavLink to="collection" className="flex flex-col items-center gap-1">
            <p>collection</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>

          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>about</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>

          <NavLink to="contact" className="flex flex-col items-center gap-1">
            <p>contact</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>
        <div className="flex items-center gap-6" >
            <Search  className=" w-5 cursor-pointer" onClick={()=>{setshowsearch(true)}} />

            <div className="group relative">
                <User className=" w-5 cursor-pointer" />
                <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4" >
                    <div className="flex flex-col gap-2 w-32 py-3 px-5 bg-slate-100 text-gray-500 rounded" >
                      <p className="cursor-pointer hover:text-black" > My Profils </p>
                      <p className="cursor-pointer hover:text-black" >Orders</p>
                      <p className="cursor-pointer hover:text-black" >Logout</p>

                    </div>
                </div>
            </div>
              <Link to='/cart' className="relative" >
                  <ShoppingBag  className=" w-5 cursor-pointer"/>
                  <p className="absolute -right-1.25 -bottom-1.25 w-4 leading-4 text-center bg-black text-white aspect-square rounded-full text-[8px] " >{getcartcount()}</p>
              </Link>
              <Menu onClick={()=>{setvisible(true)}} className=" w-5 cursor-pointer sm:hidden"/>
        </div>
            {/* side menu for small screen */}
            <div className={` absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible?'w-full':'w-0'} `} >
                  <div className="flex flex-col text-gray-600" >
                      <div onClick={()=>{setvisible(false)}}  className="flex items-center gap-4 p-3 cursor-pointer " >
                        <MoveRight className="h-4 rotate-180" />
                        <p>Back</p>
                      </div>
                      <NavLink onClick={()=>{setvisible(false)}} className='py-2 pl-6 border uppercase' to='/'>home</NavLink>
                      <NavLink onClick={()=>{setvisible(false)}} className='py-2 pl-6 border uppercase' to='/collection'>collection</NavLink>
                      <NavLink onClick={()=>{setvisible(false)}} className='py-2 pl-6 border uppercase' to='/about'>about</NavLink>
                      <NavLink onClick={()=>{setvisible(false)}} className='py-2 pl-6 border uppercase' to='/contact'>contact</NavLink>
                  </div>
            </div>

      </div>
    </>
  );
}

export default Navbar;
