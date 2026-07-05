import React from 'react'
import { RefreshCcw,Headphones,CircleChevronDown } from 'lucide-react';
function OurPolicy() {
  return (
    <>
        <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-sm sm:text-sm md:text-base text-gray-700' >
            <div>
            <RefreshCcw className='w-12 h-10 m-auto mb-5 ' />
            <p className='font-semibold' > easy exchange policy</p>
            <p className='text-gray-400' > we are offer hassle free exchange policy</p>
            </div>
            <div>
            <CircleChevronDown className='w-12 h-10 m-auto mb-5' />
            <p className='font-semibold' > 7 day return policy</p>
            <p className='text-gray-400' > we provide 7 day free return policy</p>
            </div>
            <div>
                <Headphones  className='w-12 h-10 m-auto mb-5' />
            <p className='font-semibold' > best customer support</p>
            <p className='text-gray-400' > we provide 24/7 customer support</p>
            </div>
        </div>
    </>
)
}

export default OurPolicy