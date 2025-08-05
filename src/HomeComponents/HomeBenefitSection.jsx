import React from 'react'
import HomeBenefitSectionImg from '../assets/Rectangle35.png'
import { FaCircle } from "react-icons/fa";

function HomeBenefitSection() {
    return (
        <div className='flex w-full items-center  px-5 sm:px-10 dm-sans' >

            <div className="w-full flex flex-col md:flex-row justify-between  py-10 gap-10">
                {/* LEFT BLOCK (TEXT) */}
                <div className="flex flex-col justify-between w-full md:w-2/3">

                    {/* Who Can Benefit - TOP RIGHT */}
                    <div className="self-end text-left mb-8 md:mb-16">
                        <h1 className="text-[12px] sm:text-[24px] font-semibold mb-3">Who Can Benefit?</h1>
                        <div className="flex items-center gap-2 mb-2">
                            <FaCircle className="text-[#80BD48] w-2 h-2 sm:md:w-3 sm:md:h-3 md:w-4 md:h-4 lg:w-4 lg:h-4" />
                            <p className='text-[10px] sm:text-[20px]' >Psychology Undergraduate Students</p>
                        </div>
                        <div className="flex items-center gap-2 ">
                            <FaCircle className="text-[#80BD48] w-2 h-2 sm:md:w-3 sm:md:h-3 md:w-4 md:h-4 lg:w-4 lg:h-4" />
                            <p className='text-[10px] sm:text-[20px]'>Psychology Postgraduate Students</p>
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="border-t border-gray-400 mb-6 w-full" />

                    <div className='hidden md:flex' >
                        {/* What You'll Gain - BOTTOM LEFT */}
                        <div className="text-left">
                            <h1 className="text-[12px] sm:text-[24px] font-semibold mb-4">What You’ll Gain</h1>
                            <ul className="space-y-2 text-gray-800">
                                <li className="flex items-start gap-2">
                                    <span className="text-black text-[10px] sm:text-lg">✔</span>
                                    <p className='text-[10px] sm:text-[20px]'>Understanding of geriatric mental health care</p>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-black text-[10px] sm:text-lg">✔</span>
                                    <p className='text-[10px] sm:text-[20px]'>Practical counseling skills</p>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-black text-[10px] sm:text-lg">✔</span>
                                    <p className='text-[10px] sm:text-[20px]'>Confidence to handle real-life elderly cases</p>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-black text-[10px] sm:text-lg">✔</span>
                                    <p className='text-[10px] sm:text-[20px]'>Certification upon successful completion</p>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className='flex gap-2 md:hidden' >
                        <div className="md:hidden w-[60%] text-left">
                            <h1 className="text-[12px] sm:text-[24px] font-semibold mb-4">What You’ll Gain</h1>
                            <ul className="space-y-2 text-gray-800">
                                <li className="flex items-start gap-2">
                                    <span className="text-black text-[10px] sm:text-lg">✔</span>
                                    <p className='text-[10px] sm:text-[20px]'>Understanding of geriatric mental health care</p>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-black text-[10px] sm:text-lg">✔</span>
                                    <p className='text-[10px] sm:text-[20px]'>Practical counseling skills</p>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-black text-[10px] sm:text-lg">✔</span>
                                    <p className='text-[10px] sm:text-[20px]'>Confidence to handle real-life elderly cases</p>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-black text-[10px] sm:text-lg">✔</span>
                                    <p className='text-[10px] sm:text-[20px]'>Certification upon successful completion</p>
                                </li>
                            </ul>
                        </div>
                        <div className=" w-[50%] flex justify-end items-start">
                            <img
                                src={HomeBenefitSectionImg}
                                alt="Supportive"
                                className="rounded-[20px] object-cover w-full h-full max-w-sm"
                            />
                        </div>
                    </div>
                </div>

                {/* IMAGE - RIGHT SIDE */}
                <div className="hidden md:flex w-full md:w-1/3 justify-end items-start">
                    <img
                        src={HomeBenefitSectionImg}
                        alt="Supportive"
                        className="rounded-[20px] object-cover w-full max-w-sm"
                    />
                </div>
            </div>

        </div>
    )
}

export default HomeBenefitSection
