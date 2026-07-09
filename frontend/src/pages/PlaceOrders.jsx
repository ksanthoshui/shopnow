import React, { useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { useNavigate } from 'react-router-dom'

function PlaceOrders() {
  const [method,setmethod] = useState('cod')
  const navigate = useNavigate()
  return (
    <>
      <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t' >
          {/*--------------------left side-------------- */}
        <div className='flex flex-col gap-4 w-full sm:max-w-[480px]' >
            <div className='text-xl sm:text-2xl my-3' >
              <Title title1={'delivary'} title2={'information'} />
            </div>
            <div className='flex gap-3' >
                  <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='First name' type="text" />
                  <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='second name' type="text" />
            </div>
                  <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='email address' type="email" />
                  <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='street' type="text" />

                   <div className='flex gap-3' >
                  <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='city' type="text" />
                  <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='state' type="text" />
            </div>
             <div className='flex gap-3' >
                  <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='zipcode' type="number" />
                  <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='country' type="text" />
            </div>
                  <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='phone' type="number" />
        </div>
        {/* -------------------right side----------------------- */}
        <div className='mt-8' >
          <div className='mt-8 min-w-80' >
            <CartTotal/>
          </div>
          <div className='mt-12' >
            <Title title1={'payment'} title2={'method'} />
            <div className='flex gap-3 flex-col lg:flex-row' >

              <div onClick={()=>{setmethod('stripe')}} className='flex items-center gap-3 border p-2 px-3 cursor-pointer' >
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400':'' } `} ></p>
                <p className='text-gray-500 text-sm font-medium mx-4' >stripe</p>
              </div>
              <div onClick={()=>{setmethod('razorpay')}} className='flex items-center gap-3 border p-2 px-3 cursor-pointer' >
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400':'' } `} ></p>
                <p className='text-gray-500 text-sm font-medium mx-4' >razorpay</p>

              </div>
              <div onClick={()=>{setmethod('cod')}} className='flex items-center gap-3 border p-2 px-3 cursor-pointer' >
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400':'' } `} ></p>
                <p className='text-gray-500 text-sm font-medium mx-4 uppercase' >cash on delivary</p>
                  
              </div>
            </div>
          </div>
              <div className='w-full text-end mt-8' >
                <button onClick={()=>navigate('/orders')} className='bg-black text-white text-sm px-13 py-3 cursor-pointer' > place order </button>
              </div>
        </div>

      </div>
    </>
  )
}

export default PlaceOrders