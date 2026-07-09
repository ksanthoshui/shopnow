import React, { useContext } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import Title from './Title'

function CartTotal() {
  const {getcarttotal,currency,delivary_fee,} = useContext(Shopcontext)
  return (
    <>
      <div className='w-full' >
        <div className='text-2xl' >
          <Title title1={'cart'} title2={'totals'} />
        </div>
        <div className='flex flex-col gap-2 mt-2 text-sm' >
          <div className='flex justify-between' >
              <p> SubTotal</p>
              <p>{currency}{getcarttotal()}.00</p>
          </div>
          <hr />
          <div className='flex justify-between' >
            <p>Shippng Fees</p>
            <p>{currency}{delivary_fee}.00</p>
          </div>
          <hr />
          <div className='flex justify-between' >
            <p>Total</p>
            <p>{currency}{getcarttotal() == 0 ? 0 : getcarttotal() + delivary_fee}</p>
          </div>
        </div>
      </div>
    </>
)
}

export default CartTotal