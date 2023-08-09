import React from 'react'

export const Footer = () => {
    return (
        <div className="bg-[url('src/images/Footer.png')] bg-no-repeat bg-center h-[41.0625rem] w-full">

            <div className="flex justify-between py-48 px-40">
                <div className="w-[13.4rem] cursor-pointer">
                    <img src={`src/images/smart lights_logo.svg`} alt="" />
                </div>
                <div className="flex gap-20 items-center">
                    <button className='text-lg font-normal text-white'>Product</button>
                    <button className='text-lg font-normal text-white'>Software Services</button>
                    <button className='text-lg font-normal text-white'>Follow Us</button>
                </div>
            </div>

            <hr className='mx-40 w-2/4 my-4' />

            <div className="flex gap-8 items-center ml-40">
                <button className='text-lg font-normal text-white'>Privacy Policy</button>
                <p className='text-lg font-normal text-white'>|</p>
                <button className='text-lg font-normal text-white'>Terms & Conditions</button>
                <p className='text-lg font-normal text-white'>|</p>
                <button className='text-lg font-normal text-white'>Cookie Policy</button>
            </div>

        </div>
    )
}
