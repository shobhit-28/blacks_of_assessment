import React from 'react'

export const HeroSection = () => {
  return (
    <div className="bg-[url('src/images/Hero_section.png')] bg-no-repeat bg-center h-screen w-full text-white flex justify-center items-center">
        <div className="text-center">
            <p className="text-2xl tracking-wider mb-4">Smart Lighting Solutions</p>
            <p className="capitalize text-5xl leading-[4.5rem] w-[63.6875rem] text-slate-400">Bringing a new perspective to street lights and the cities of tomorrow.</p>
            <button className='w-[10.6875rem] h-[3.375rem] mt-10 text-xl bg-[#3661FF] rounded-sm'>Login</button>
        </div>
    </div>
  )
}
