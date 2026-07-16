import React from 'react'
import { House } from 'lucide-react';

function Navbar({setToken}) {
  return (
    <>
        <div className='flex items-center py-2 px-[4%] justify-between' >
            <House className='w-[max-(10%,80px)]' />
            <button onClick={()=>setToken('')} className= 'cursor-pointer bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm ' >Logout</button>
        </div>
    </>
)
}

export default Navbar