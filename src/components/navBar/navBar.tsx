import React from 'react'

export const NavBar = () => {
  return (
    <div className='px-[17.625rem] pt-[1.625rem] pb-[1.6875rem] flex items-center justify-between border-b border-black/10 absolute w-full'>

        {/* img container */}
        <div className="w-[13.4rem] cursor-pointer">
            <img src={`src/images/smart lights_logo.svg`} alt="" />
        </div>
        
        <div className="flex gap-[3.675rem] items-center">
            <div className="flex gap-6">
                <button className='text-lg font-normal text-white'>Home</button>
                <button className='text-lg font-normal text-white'>Products</button>
                <button className='text-lg font-normal text-white'>Software Services</button>
            </div>
            <button className='bg-gradient-to-l from-[#3661FF] to-[#0085FF] py-[0.45175rem] px-[1.62281rem] rounded-sm text-lg font-medium text-white hover:from-[#0085FF] hover:to-[#3661FF]'>Login</button>
        </div>


    </div>
  )
}
