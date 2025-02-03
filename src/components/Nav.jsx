import React from 'react'

const Nav = () => {
  return (
        <div className='flex justify-center items-center'>
        <nav className='container flex justify-evenly items-center w-[90%] sm:flex sm:justify-evenly sm:items-center mt-10 gap-[100px] '>
            <div className='font-bold text-2xl text-blue-600'>Edushi </div>
            <div className='w-[50%] sm:w-[50%] h-15 flex justify-evenly items-center border-2 px-5 sm:px-3 py-3 sm:p-2 rounded-full cursor-pointer ml-10'>
                <h3  className='hover:text-blue-600  sm:text-[15px]'>Courses</h3>
                <h3 className='hover:text-blue-600  sm:text-[15px]'>About Us</h3>
                <h3 className='hover:text-blue-600  sm:text-[15px]'>FAQs</h3>
            </div>
            <div className='border-2 px-6 py-3 rounded-full bg-gray-50 hover:bg-blue-400 hover:text-black hover:border-0 cursor-pointer flex justify-center items-center'>Login</div>
        </nav>
        </div>
  )
}

export default Nav