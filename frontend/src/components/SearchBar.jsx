import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { Search,X } from 'lucide-react';
import { Shopcontext } from '../context/Shopcontext'
import { useLocation } from 'react-router-dom';

function SearchBar() {
     const {search,setsearch,showsearch , setshowsearch} = useContext(Shopcontext)
     const [visible,setvisible]=useState(false)
     const location = useLocation()

     useEffect(()=>{
        if(location.pathname.includes('collection')){
            setvisible(true)
        }
        else{
            setvisible(false)
        }
     },[location])
  return showsearch && visible ? (
    <>
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2' >
            <input value={search} onChange={(e)=>{setsearch(e.target.value)}} type="text" placeholder='search' className='flex-1 outline-none bg-inherit text-sm'/>
             <Search  className='w-7 cursor-pointer'/>
        </div> 
            <X  onClick={()=>{setshowsearch(false)}} className='w-7 inline cursor-pointer' />
    </div>
    </>
):null
}

export default SearchBar