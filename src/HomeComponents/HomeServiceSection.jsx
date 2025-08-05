import React from 'react'
import HomeServiceSectionBg from '../assets/Rectangle18.png'
import HomeServicesIcon1 from '../assets/Group27.png'
import HomeServicesIcon2 from '../assets/Group28.png'
import HomeServicesIcon3 from '../assets/Group29.png'
import '../styles/element.css';
import { LuArrowUpRight } from "react-icons/lu";
import { FaCircle } from "react-icons/fa";

function HomeServiceSection() {
    return (
        <>
            <div className="w-full px-5 md:px-10 pt-20 dm-sans">
                <div className='HomeService-elemnent pb-20 px-3' >
                    <div className='HomeService-cutting flex items-center justify-center' >
                        <div className='flex items-center gap-2 md:gap-2 lg:gap-4 md:pl-0 lg:pl-5' >
                            <FaCircle className="text-[#80BD48] w-2 h-2 sm:md:w-3 sm:md:h-3 md:w-4 md:h-4 lg:w-4 lg:h-4" />
                            <h1 style={{ fontWeight: "700" }} className="text-sm md:text-[18px] lg:text-[29px]">
                                Our Services
                            </h1>
                        </div>

                    </div>

                    <div className="w-full  flex flex-col gap-7 pt-20 sm:pt-20 md:pt-25 lg:pt:30 px-6">
                        <div className='flex justify-end w-full pb-8 px-6' >
                            <h1 className='max-w-[986px] text-[23px]' style={{ fontWeight: "500" }} >Receive personalized support, expert guidance, and practical tools to manage stress,
                                improve well-being, and grow emotionally. From therapy to career support and mental
                                health camps, we’re here to help you thrive.</h1>
                        </div>
                        <hr className="w-full border-t border-[#5B5B5B] " />
                        <div className='flex justify-between gap-8' >
                            <div className='w-full md:w-[40%]' >
                                <div>
                                    <h1 className='text-[20px]' style={{ fontWeight: "500" }} >Psychotherapy & Counseling</h1>
                                    <p className='text-[14px] text-[#AEAEAE]' style={{ fontWeight: "400" }} >Personalized emotional support and treatment</p>
                                </div>
                                <img className='pt-9' src={HomeServicesIcon1} alt="" />
                            </div>
                            <div className='max-w-[670px] text-[20px] w-full md:w-[60%]' >
                                <h1>Through guided sessions with trained professionals, psychotherapy helps individuals understand their emotions, modify negative behavior patterns, and develop coping strategies</h1>
                            </div>
                        </div>
                        <hr className="w-full border-t border-[#5B5B5B] " />
                        <div className='flex justify-between gap-8' >
                            <div className='w-full md:w-[40%]' >
                                <div>
                                    <h1 className='text-[20px]' style={{ fontWeight: "500" }} >Psychodiagnostics</h1>
                                    <p className='text-[14px] text-[#AEAEAE]' style={{ fontWeight: "400" }} >Psychological assessments for clarity and care</p>
                                </div>
                                <img className='pt-9' src={HomeServicesIcon2} alt="" />
                            </div>
                            <div className='max-w-[670px] text-[20px] w-full md:w-[60%]' >
                                <h1>We use validated assessments to understand cognitive, emotional, and behavioral health helping diagnose conditions, guide treatment, and monitor progress.</h1>
                            </div>
                        </div>
                        <hr className="w-full border-t border-[#5B5B5B] " />
                        <div className='flex justify-between gap-8 md:flex-row w-full' >
                            <div className='w-full md:w-[40%]' >
                                <div>
                                    <h1 className='text-[20px]' style={{ fontWeight: "500" }} >Remedial Training</h1>
                                    <p className='text-[14px] text-[#AEAEAE]' style={{ fontWeight: "400" }} >Tailored learning for academic success</p>
                                </div>
                                <img className='pt-9' src={HomeServicesIcon3} alt="" />
                            </div>
                            <div className='max-w-[670px] text-[20px] w-full md:w-[60%]' >
                                <h1>Remedial training supports students with learning difficulties by identifying gaps and providing personalized instruction to overcome challenges and build confidence.</h1>
                            </div>
                        </div>
                        <div className='flex justify-end w-full' >
                            <button className="w-full max-w-[200px] h-[36px] sm:h-[45px] border-2 border-white text-white rounded-lg font-medium flex justify-between items-center px-3">
                                Discover More <span className='pl-1' ><LuArrowUpRight /></span>
                            </button>
                        </div>


                    </div>


                </div>
                {/* <div className="flex items-center md:gap-2 lg:gap-4 md:pl-0 lg:pl-5 ">
                    <div className="w-2 h-2 sm:md:w-3 sm:md:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 rounded-full bg-[#BBD74F]"></div>
                    <h1 style={{ fontWeight: "700" }} className="text-sm md:text-[18px] lg:text-[28px] dm-sans">
                        Our Services
                    </h1>
                </div>

                <div className='relative md:mt-[-40px] lg:mt-[-70px] text-white' >
                    <img
                        src={HomeServiceSectionBg}
                        alt=""
                        className="w-full h-auto "
                    />
                    <div className="absolute inset-0  py-18">
                        <div className="w-full h-full flex flex-col gap-7  ">
                            <div className='flex justify-end w-full pb-8 px-6' >
                                <h1 className='max-w-[986px] text-[23px]' style={{ fontWeight: "500" }} >Receive personalized support, expert guidance, and practical tools to manage stress,
                                    improve well-being, and grow emotionally. From therapy to career support and mental
                                    health camps, we’re here to help you thrive.</h1>
                            </div>
                            <hr className="w-full border-t border-[#5B5B5B] " />


                            <div className='bg-[#343434] px-6 flex flex-col gap-7 pb-10 rounded-3xl mb-32' >
                                <div className='flex justify-between gap-8' >
                                    <div className='w-full md:w-[40%]' >
                                        <div>
                                            <h1 className='text-[20px]' style={{ fontWeight: "500" }} >Psychotherapy & Counseling</h1>
                                            <p className='text-[14px] text-[#AEAEAE]' style={{ fontWeight: "400" }} >Personalized emotional support and treatment</p>
                                        </div>
                                        <img className='pt-9' src={HomeServicesIcon1} alt="" />
                                    </div>
                                    <div className='max-w-[670px] text-[20px] w-full md:w-[60%]' >
                                        <h1>Through guided sessions with trained professionals, psychotherapy helps individuals understand their emotions, modify negative behavior patterns, and develop coping strategies</h1>
                                    </div>
                                </div>
                                <hr className="w-full border-t border-[#5B5B5B] " />
                                <div className='flex justify-between gap-8' >
                                    <div className='w-full md:w-[40%]' >
                                        <div>
                                            <h1 className='text-[20px]' style={{ fontWeight: "500" }} >Psychodiagnostics</h1>
                                            <p className='text-[14px] text-[#AEAEAE]' style={{ fontWeight: "400" }} >Psychological assessments for clarity and care</p>
                                        </div>
                                        <img className='pt-9' src={HomeServicesIcon2} alt="" />
                                    </div>
                                    <div className='max-w-[670px] text-[20px] w-full md:w-[60%]' >
                                        <h1>We use validated assessments to understand cognitive, emotional, and behavioral health helping diagnose conditions, guide treatment, and monitor progress.</h1>
                                    </div>
                                </div>
                                <hr className="w-full border-t border-[#5B5B5B] " />
                                <div className='flex justify-between gap-8 md:flex-row w-full' >
                                    <div className='w-full md:w-[40%]' >
                                        <div>
                                            <h1 className='text-[20px]' style={{ fontWeight: "500" }} >Remedial Training</h1>
                                            <p className='text-[14px] text-[#AEAEAE]' style={{ fontWeight: "400" }} >Tailored learning for academic success</p>
                                        </div>
                                        <img className='pt-9' src={HomeServicesIcon3} alt="" />
                                    </div>
                                    <div className='max-w-[670px] text-[20px] w-full md:w-[60%]' >
                                        <h1>Remedial training supports students with learning difficulties by identifying gaps and providing personalized instruction to overcome challenges and build confidence.</h1>
                                    </div>
                                </div>
                                <div className='flex justify-end w-full' >
                                    <button className="w-full max-w-[200px] h-[36px] sm:h-[45px] border-2 border-white text-white rounded-lg font-medium flex justify-between items-center px-3">
                                        Discover More <span className='pl-1' ><LuArrowUpRight /></span>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div> */}





            </div>


        </>
    )
}

export default HomeServiceSection
