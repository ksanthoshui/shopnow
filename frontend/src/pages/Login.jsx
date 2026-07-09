import React, { useState } from 'react'

function Login() {
  const [currentState,sentCurrentState] = useState('sign up')
  const onSubmithandler = async(e)=>{
      e.preventDefault()
  }
  return (
    <>
      <form onSubmit={onSubmithandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 ' >
        <div className='inline-flex items-center gap-6 mb-2 mt-10' >
          <p className='prata-regular text-3xl' >{currentState}</p>
          <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
        </div>
       {currentState== 'login'?'': <input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name'required />}
        <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required />
        <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required />
        <div className='w-full flex justify-between text-sm mt-[-8px]'  >
          <p className='cursor-pointer' >forget you password</p>
          {
            currentState === 'login' 
            ? <p className='cursor-pointer' onClick={()=>{sentCurrentState('sign up')}} >Create Accound</p>
            : <p className='cursor-pointer' onClick={()=>{sentCurrentState('login')}} >Log in Here</p>
          }
        </div>
        <button className='text-white bg-black font-light px-8 py-2 mt-4 ' >{currentState=='login'?'Login':'Sign Up'}</button>
      </form>
    </>
  )
}

export default Login