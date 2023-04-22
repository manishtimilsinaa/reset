

import React from 'react'

function Navbar() {
  return (
  <div className='grid grid-cols-1 sm:grid-cols-20 justify-center'>
    <div>
  
  </div>

<div className='bg-light  bg-white flex flex-col justify-center '>
<form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-100 p-10 px-8'>
                <h2 className='text-4xl dark:text-white font-bold text-center p-10 px-8'>konnected</h2>
                <div className='flex flex-col text-black-400 py-50'>
                    <label>G-Mail</label>
                   
                   <input className='rounded-lg bg-white mt-2 p-2 focus:border-black-400 focus:outline-none' type="text"  placeholder='enter your gmail'/>
                   <input className='rounded-lg bg-white mt-2 p-2 focus:border-black-400 focus:outline-none' type="text"  placeholder='enter your code'/>
                 <input className='rounded-lg bg-white mt-2 p-2 focus:border-black-400 focus:outline-none' type="text"  placeholder='enter new password*'/>
                </div>
                
                <div className='flex justify-between text-black-400 py-8'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    <button className='  hover:shadow-teal-500/40'>Forgot Password ?</button>
                </div>
                <button className='w-full my-1 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>send code</button>
                
            </form>

</div>



  </div>
  
  )
}

export default Navbar
