import './productsSection.css'
import React from 'react'
import classNames from "classnames"

import { IoChevronForwardSharp } from 'react-icons/io5'

export const ProductsSection = () => {

    type obj = {
        id?: number;
        name?: string;
        isSelected?: boolean
    };

    const productsArr: obj[] = [
        { id: 1, name: 'Centralized Control & Monitoring System', isSelected: true },
        { id: 2, name: 'NEMA-Mounted VOLC 1160', isSelected: false },
        { id: 3, name: 'Retrofit Street Light Controller VOLC 2160', isSelected: false },
        { id: 4, name: 'Retrofit Street Light Controller VOLC 2180', isSelected: false },
        { id: 5, name: 'Retrofit Street Light Controller VOLC 4180', isSelected: false },
    ];

    const [products, setProducts] = React.useState(productsArr);

    const modifyProducts = (productId: number | undefined) => {
        setProducts(products.map((product) => product.id === productId ? { ...product, isSelected: !product.isSelected } : product))
    }


    return (
        <div className='min-h-screen w-full bg-gradient-to-br from-blue-200 via-blue-100 to-blue-50 flex justify-center items-start py-12'>

            <div className="w-3/4">

                <div className="">

                    <div className="bg-gradient-to-l from-blue-200 via-blue-100 to-blue-100 py-[0.20625rem] pl-10 w-20 mb-[1.1875rem]">
                        <p className="text-[#00386B] text-xl leading-10 tracking-wide font-medium">Products</p>
                    </div>

                    <p className="text-3xl leading-[2.5rem] tracking-[0.03rem] w-2/4">
                        <span className="font-semibold">Cutting-edge hardware,</span> offerings helping cities optimize resources and achieve smart development goals
                    </p>

                </div>

                <div className="flex flex-wrap gap-4 mt-12 mb-6">
                    {products?.map(({ id, name, isSelected }) => (
                        <button key={id} onClick={() => modifyProducts(id)}
                            className={classNames('p-[.625rem] border rounded-sm', {
                                'border-[#859ffb] from-custom-color-1 via-custom-color-2 to-custom-color-3 font-medium text-[#00386B]': isSelected,
                                'border-[#797979]': !isSelected,
                            })}
                        >
                            {name}
                        </button>
                    ))}
                </div>

                <div className="flex">
                    <div className="w-1/2 scale-x-[-1] relative">
                        <img src="\images\smart_lights.png" alt="" />
                        <div className="absolute bottom-0 p-3 left-0 bg-slate-400 "><IoChevronForwardSharp /></div>
                    </div>
                    <div className="flex justify-center pt-16 w-1/2 flex-wrap bg-gradient-to-b from-white via-blue-50 to-blue-100 relative">
                        <div className="w-2/3">
                            <p className="text-[#818181] text-sm">Products 1/5</p>
                            <p className="text-[2rem] leading-[2.875rem] font-medium my-2">Centralized Control & Monitoring System</p>
                            <p className="leading-6 tracking-[.01rem]">
                                Designed indigenously for street lighting projects, the CCMS offers a complete feeder panel for a group of 30-50 street lights.
                            </p>
                            <div className="mt-4 flex items-center gap-2">
                                <p className="text-[#3661FF] text-xl leading-6">Know More</p>
                                <div className="w-8">
                                    <img src="\images\icon_png.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-0 p-3 left-0 bg-white text-[#2655FF]"><IoChevronForwardSharp /></div>
                    </div>
                </div>

            </div>


        </div>
    )
}
