import React from 'react'

export const EcoSystem = () => {
    return (
        <div className='min-h-screen w-full bg-gradient-to-br from-white to-blue-100 flex justify-center items-start pt-4'>

            <div className="w-3/4">

                <div className="">

                    <div className="bg-gradient-to-l from-transparent  to-indigo-500/50 py-[0.20625rem] pl-10 w-16 mb-[1.1875rem]">
                        <p className="text-[#00386B] text-xl leading-10 tracking-wide font-medium">Ecosystem</p>
                    </div>

                    <p className="text-3xl leading-[2.5rem] tracking-[0.03rem] w-2/3 font-semibold">
                        How does a smart street light ecosystem work?
                    </p>

                </div>

                <div className="mt-6 mx-auto flex w-3/4">

                    <div className="w-[13.125rem]">
                        <div className="flex gap-4 mb-4">
                            <div className="border p-4 rounded-2xl border-dashed border-[#3661FF]">
                                <div className="w-16 px-4 py-4 border border-[#3661FF] rounded-2xl">
                                    <img src="src\images\street_light_controler.png" alt="" />
                                </div>
                            </div>
                            <div className="border p-4 rounded-2xl border-dashed border-[#3661FF]">
                                <div className="w-16 px-4 py-4 border border-[#3661FF] rounded-2xl">
                                    <img src="src\images\street_light_controler.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <p className="text-sm mb-2">Street Light Controller</p>
                            <p className="text-[#626262] text-xs">
                                Activates/deactivates in response to motion/light sensing and controls the brightness of the street lamp
                            </p>
                        </div>
                    </div>

                    <hr className='w-1/4 border-slate-400 border-dashed border-[1.5px] mt-14' />

                    <div className="w-32 text-center">
                        <div className="border w-32 p-4 rounded-2xl border-dashed border-slate-400 mb-4">
                            <div className="w-24 px-4 py-4 border-2 bg-white rounded-2xl">
                                <img src="src\images\gateway_png.png" alt="" />
                            </div>
                        </div>
                        <div className="">
                            <p className="text-sm mb-2">Street Light Controller</p>
                            <p className="text-[#626262] text-xs">
                                Activates/deactivates in response to motion/light sensing and controls the brightness of the street lamp
                            </p>
                        </div>
                        <hr className='w-8 border-slate-400 border-dashed border-[1.5px] m-auto rotate-90 mt-4' />
                        <div className="w-[600%] -m-[220%] border-slate-500 border-dashed border-t-[1.5px] mt-4 flex justify-between">

                            <div className="-ml-16">
                                <hr className='w-4 border-slate-400 border-dashed border-[1.5px] m-auto rotate-90 mt-2' />

                                <div className="w-32 text-center mt-2">
                                    <div className="border w-32 p-4 rounded-2xl border-dashed border-slate-400 mb-4">
                                        <div className="w-24 px-4 py-4 border-2 bg-white rounded-2xl">
                                            <img src="src\images\users_png.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="">
                                        <p className="text-sm mb-2">Users</p>
                                        <p className="text-[#626262] text-xs">
                                            Data from the cloud is used to monitor and control street lights by the System Managers.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="-mr-16">
                                <hr className='w-4 border-slate-400 border-dashed border-[1.5px] m-auto rotate-90 mt-2' />

                                <div className="w-32 text-center mt-2">
                                    <div className="border w-32 p-4 rounded-2xl border-dashed border-slate-400 mb-4">
                                        <div className="w-24 px-4 py-4 border-2 bg-white rounded-2xl">
                                            <img src="src\images\evaluation_png.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="">
                                        <p className="text-sm mb-2">Evaluation</p>
                                        <p className="text-[#626262] text-xs">
                                            Gathered insights are used to evaluate the performance of the lighting systems.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <hr className='w-[34.35%] border-slate-400 border-dashed border-[1.5px] mt-14' />

                    <div className="w-32 text-center">
                        <div className="border w-32 p-4 rounded-2xl border-dashed border-slate-400 mb-4">
                            <div className="w-24 px-4 py-4 border-2 bg-white rounded-2xl">
                                <img src="src\images\cloud_based management.png" alt="" />
                            </div>
                        </div>
                        <div className="">
                            <p className="text-sm mb-2">Cloud-based Management System</p>
                            <p className="text-[#626262] text-xs">
                                Collects information from multiple gateways
                            </p>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    )
}
