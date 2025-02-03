import React from 'react'
import logo from '../assets/7123025_logo_google_g_icon.png'
const LoginPage = () => {
  return (
    <div className='flex justify-center items-center h-screen w-screen '>
    <form className='m-auto shadow-lg shadow-gray-300 w-[350px] h-[450px] bg-white rounded-md flex justify-center items-center flex-col'>
    <h1 className='mb-3 text-xl font-semibold'>Sign up</h1>
      <div>
      <label htmlFor="/" className='text-[14px]'>Name</label>
      <br />
      <input className= "border border-gray-300 p-2 rounded focus:border-blue-500 focus:outline-none mb-2 text-[13px] w-[225px]" type="text" placeholder='Full Name' />
      </div>
      <div>
      <label htmlFor="/" className='text-[14px]'>Email</label>
      <br />
      <input className= "border border-gray-300 p-2 rounded focus:border-blue-500 focus:outline-none mb-2 text-[13px] w-[225px]" type="text" placeholder='Email' />
      </div>
      <div>
      <label htmlFor="/" className='text-[14px]'>Password</label>
      <br />
      <input className= "border border-gray-300 p-2 rounded focus:border-blue-500 focus:outline-none mb-2 text-[13px] w-[225px]" type="text" placeholder='Password' />
      </div>

      <button className='m-3 bg-sky-500 p-2 w-[225px] rounded-md text-white'>Sign Up</button>
      <p className='text-[13px] text-gray-500'>Already have an accound? <span className='text-sky-600'><a href="/">Log In</a></span></p>
      <p className='text-[14px] m-4 text-gray-500'>or</p>
      <div className='flex gap-3 border-black border p-2 px-7 rounded-md text-[13px] mb-15 items-center'>
        <img src = {logo}
        width={28}
        alt="logo" />
        <p><a href="/">Sign up With Google</a></p>
      </div>
    </form>
   </div>
  )
}

export default LoginPage