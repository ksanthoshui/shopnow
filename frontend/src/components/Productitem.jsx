import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import { Shopcontext } from '../context/Shopcontext'
function Productitem({id,name,image,price}) {

    const {currency} =useContext(Shopcontext)
  
    return (
    <>
        <Link className='text-gray-600 cursor-pointer' to={`/product/${id}`}>
            <div className='overflow-hidden' >
                <img className='hover:scale-110 transition ease-in-out'  src={image[0]} alt="img not found" />
            </div>
            <p className='pt-3 pb-1 text-sm' >{name}</p>
            <p className='text-sm font-medium'>{currency}{price}</p>
        </Link>
    </>
  )
}

export default Productitem