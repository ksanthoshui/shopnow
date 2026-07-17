import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";

function Login() {
  const [currentState,sentCurrentState] = useState('login')
  const {token ,setToken ,backend_url} = useContext(Shopcontext)
  const navigate = useNavigate();
  const [name,setName] = useState('')
  const [password,setpassword] = useState('')
  const [email,setemail] = useState('')

  const onSubmithandler = async(e)=>{
      e.preventDefault()
      try {
        if(currentState === 'sign up'){
          const response = await axios.post(backend_url + '/api/user/register',{name,email,password})
          if(response.data.success){
            setToken(response.data.token)
            localStorage.setItem('token',response.data.token)
          }else{
            toast.error(response.data.message)
          }
        }
        else{
          const response = await axios.post(backend_url + '/api/user/login',{email,password})
          console.log(response.data);
          
          if(response.data.success){
            setToken(response.data.token)
            console.log(token);
            localStorage.setItem('token',response.data.token)
          }else{
            toast.error(response.data.message)
          }
        }
        
      } catch (error) {
          console.log(error);
          toast.error(error.message)
          
      }
  }

  useEffect(()=>{
    if(token){
      navigate('/')
    }
  },[token])
  return (
    <>
      <form onSubmit={onSubmithandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 ' >
        <div className='inline-flex items-center gap-6 mb-2 mt-10' >
          <p className='prata-regular text-3xl' >{currentState}</p>
          <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
        </div>
       {currentState== 'login'?'': <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  className='w-full px-3 py-2 border border-gray-800' placeholder='Name'required />}
        <input type="email" onChange={(e)=>setemail(e.target.value)} value={email} className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required />
        <input type="password" onChange={(e)=>setpassword(e.target.value)} value={password}  className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required />
        <div className='w-full flex justify-between text-sm mt-[-8px]'  >
          <p className='cursor-pointer' >forget you password</p>
          {
            currentState === 'login' 
            ? <p className='cursor-pointer' onClick={()=>{sentCurrentState('sign up')}} >Create Accound</p>
            : <p className='cursor-pointer' onClick={()=>{sentCurrentState('login')}} >Log in Here</p>
          }
        </div>
        <button className='text-white bg-black font-light px-8 py-2 mt-4 cursor-pointer  ' >{currentState=='login'?'Login':'Sign Up'}</button>
      </form>
    </>
  )
}

export default Login