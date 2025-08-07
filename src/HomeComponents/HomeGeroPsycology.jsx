import React from 'react'
import HomeGeroPsycologyImg from '../assets/Rectangle34.png'
import { FaCircle } from "react-icons/fa";

function HomeGeroPsycology() {
    return (
        <div className='flex flex-col justify-center dm-sans' >
            <div className="hidden md:flex flex-col md:flex-row gap-20 px-10 py-8">
                {/* Image Section */}
                <div className="w-full md:w-[35%]">
                    <img src={HomeGeroPsycologyImg} alt="Gero Psychology" className="w-full h-auto object-cover" />
                </div>

                {/* Text Section */}
                <div className="w-full md:w-[65%]">

                    <div className='the first text section' >
                        <div className='flex items-center gap-3 mb-4' >
                            <FaCircle className="text-[#80BD48] w-2 h-2 sm:md:w-3 sm:md:h-3 md:w-4 md:h-4 lg:w-4 lg:h-4" />

                            <h1 className="text-[20px] md:text-[27px] font-bold ">
                                Gero Psychology – 30-Hour Online Course
                            </h1>
                        </div>

                        <p className="text-[14px] md:text-[18px] text-[#5B5B5B]">
                            This online certification course is designed to empower psychologists and psychology students to understand and support older individuals and their families. It helps participants promote well-being, overcome challenges in later life, and foster maximum potential during the aging process.
                        </p>

                    </div>


                    <div className='the second text section' >
                        <div className='flex justify-between max-w-[800px] gap-5 pt-6' >
                            <div className='flex flex-col gap-4' >
                                <h1 className='text-[16px] sm:text-[18px] md:text-[18px] lg:text-[16px]' style={{ fontWeight: "500" }} >
                                    Gero Psychology Modules :
                                </h1>
                                <div className='flex flex-col gap-3 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-light'>
                                    <h1>1. Introduction to Gero Psychology</h1>
                                    <h1>2. Aging and Life Cycle</h1>
                                    <h1>3. Examination in the Elderly</h1>
                                    <h1>4. Mental Health Concerns</h1>
                                    <h1>5. Physical Health Conditions</h1>
                                    <h1>6. Psychopharmacological Treatment</h1>
                                </div>

                            </div>
                            <div className="hidden md:flex justify-center">
                                <div className="w-px h-full relative">
                                    <div className="absolute top-0 left-0 w-px h-1/2 bg-black" />
                                    <div className="absolute bottom-0 left-0 w-px h-1/2 bg-[#8383834c]" />
                                </div>
                            </div>


                            <div className='flex flex-col gap-4' >
                                <div className='flex items-center gap-3'>
                                    <FaCircle className="text-[#80BD48] w-2 h-2 sm:md:w-3 sm:md:h-3 md:w-2 md:h-2 lg:w-3 lg:h-3" />

                                    <h1 style={{ fontWeight: "600" }} className='text-[16px] sm:text-[18px] md:text-[18px] lg:text-[16px]' >Counseling Essentials – Add-on Module</h1>
                                </div>

                                <div className='flex flex-col gap-3 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-light'>
                                    <h1>1. Personal Awareness</h1>
                                    <h1>2. Soft Skills for Psychologists</h1>
                                    <h1>3. Counseling Structure and Formation</h1>
                                    <h1>4. Ethics and Report Writing</h1>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>

            <div className='md:hidden px-5'>
                <div className='flex gap-3 w-full'>
                    <div className='w-[40%]'>
                        <img src={HomeGeroPsycologyImg} alt="Gero Psychology" className="w-full h-auto object-cover" />
                    </div>
                    <div className='w-[60%]'>
                        <div className='flex items-center gap-1 mb-1'>
                            <FaCircle className="text-[#80BD48] w-[6px] h-[6px]" />
                            <h1 className="text-[12px] sm:text-[20px] font-bold">
                                Gero Psychology – 30-Hour Online Course
                            </h1>
                        </div>

                        <p className="text-[11px] sm:text-[19px] pt-3 text-[#5B5B5B]">
                            This online certification course is designed to empower psychologists and psychology students to understand and support older individuals and their families. It helps participants promote well-being, overcome challenges in later life, and foster maximum potential during the aging process.
                        </p>
                    </div>
                </div>

                <div className='flex justify-between gap-3 pt-6'>
                    <div className='flex flex-col gap-4 w-[50%]'>
                        <h1 className='text-[12px] sm:text-[20px] font-medium'>
                            Gero Psychology Modules:
                        </h1>
                        <div className='flex flex-col gap-2 text-[11px] sm:text-[19px] font-light'>
                            <h1>1. Introduction to Gero Psychology</h1>
                            <h1>2. Aging and Life Cycle</h1>
                            <h1>3. Examination in the Elderly</h1>
                            <h1>4. Mental Health Concerns</h1>
                            <h1>5. Physical Health Conditions</h1>
                            <h1>6. Psychopharmacological Treatment</h1>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4 w-[50%]'>
                        <div className='flex items-center gap-2'>
                            <FaCircle className="text-[#80BD48] w-2 h-2 sm:md:w-3 sm:md:h-3 md:w-4 md:h-4 lg:w-4 lg:h-4" />
                            <h1 className='text-[12px] sm:text-[20px] font-semibold'>
                                Counseling Essentials – Add-on Module
                            </h1>
                        </div>
                        <div className='flex flex-col gap-2 text-[11px] sm:text-[19px] font-light'>
                            <h1>1. Personal Awareness</h1>
                            <h1>2. Soft Skills for Psychologists</h1>
                            <h1>3. Counseling Structure and Formation</h1>
                            <h1>4. Ethics and Report Writing</h1>
                        </div>
                    </div>
                </div>
            </div>
            


        </div>
    )
}

export default HomeGeroPsycology
