import React from 'react'
import Logo from '../components/Logo'
import SteperTitle from '../components/SteperTitle'
import{Link} from 'react-router-dom'
import { BsGoogle } from "react-icons/bs";
const Login = () => {
    const inputDesign='border w-full h-14 rounded-md  focus:border-blue-400 outline-none placeholder:italic bg-gray-100 ';
const paradesign='mt-3 mb-3 font-semibold text-xl hover:text-gray-400'
  return (
    <div className=' md:w-1/2 mx-auto'>
       <div className='my-8'>
       <Logo/>
        </div> 
        <SteperTitle h2={'Find Your Dream School Here'} p={'Sign up now create your account and begin the application process! '}/>
        <div>
            <label htmlFor="Email" className={paradesign}>Email</label>
            <input type="text" id='Email' className={inputDesign} placeholder='Enter Email Address'/>
        </div>
        <div className='mt-4'>
            <label htmlFor="password" className={paradesign}>Password</label>
            <input type="password" id='password' className={inputDesign} placeholder='Password'/>
        </div>

        <div>
        <Link to={'/steps'}><button className='bg-blue-950 w-full  h-14 rounded-xl text-white text-xl my-3'>Get started</button></Link>
        <p className='text-center text-2xl text-gray-300'>OR</p>
        </div>

        <div className='flex shadow-2xl rounded-xl h-16 items-center gap-4 ml-2 text-gray-300 nx-auto mt-5 hover:text-gray-600 cursor-pointer '>
           <div className='flex md:gap-28 gap-10'>
            <div>
            <BsGoogle size={30} className='ml-16'/>
            </div>
            <p className=' text-xl md:text-2xl'>Sign Up with Google</p>
            </div>
        </div>
    </div>
  )
}

export default Login