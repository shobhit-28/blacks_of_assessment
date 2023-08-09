import React from 'react'

export const PlatformAssistSection = () => {
    return (
        <div className='min-h-screen w-full flex justify-center items-start py-12'>
            <div className="w-3/4">

                <p className="text-[2.5rem] leading-[3.5rem] w-2/3 text-center m-auto font-medium mb-8">The platform assists city managers on multiple fronts</p>

                <div className="flex justify-around">
                    <div className="border-b border-r border-black/20 w-1/2 pb-2">
                        <div className="w-12 mb-3">
                            <img src="src\images\img41.svg" alt="" />
                        </div>
                        <p className="w-40">Saves on power consumption & related costs</p>
                    </div>
                    <div className="border-b border-black/20 w-1/2">
                        <div className="ml-[60%] mt-4 ">
                            <div className="w-12 mb-3">
                                <img src="src\images\img41.svg" alt="" />
                            </div>
                            <p className="w-40">Lowers downtimes</p>
                        </div>
                    </div>
                </div>
                
                <div className="flex justify-around">
                    <div className="border-b border-r border-black/20 w-1/6 pb-4 pt-9">
                        <div className="w-12 mb-3">
                            <img src="src\images\img41.svg" alt="" />
                        </div>
                        <p className="w-40">Detects power thefts.</p>
                    </div>
                    <div className="border-b border-black/20 w-5/6 py-4">
                        <div className="ml-[70%]">
                            <div className="w-12 mb-3">
                                <img src="src\images\img41.svg" alt="" />
                            </div>
                            <p className="w-40">Ensures smart monitoring and control of the street light infrastructure.</p>
                        </div>
                    </div>
                </div>
                
                <div className="flex justify-around items-center">
                    <div className="border-b border-black/20 w-4/5 pb-4 pt-9">
                        <div className="w-12 mb-3">
                            <img src="src\images\img41.svg" alt="" />
                        </div>
                        <p className="w-72">Ensures real-time actionable analytics on power failures, lamp malfunctions, voltage failures, etc.</p>
                    </div>
                    <div className="border-l border-black/20 w-1/5 pb-8">
                        <div className="pl-[10%] border-b border-black/20 py-20">
                            <div className="w-12 mb-3">
                                <img src="src\images\img41.svg" alt="" />
                            </div>
                            <p className="w-40">Ensures security in the neighborhood</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
