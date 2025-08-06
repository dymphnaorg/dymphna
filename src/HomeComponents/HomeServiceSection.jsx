import React from 'react'
import HomeServiceSectionBg from '../assets/Rectangle18.png'
import HomeServicesIcon1 from '../assets/Group27.png'
import HomeServicesIcon2 from '../assets/Group28.png'
import HomeServicesIcon3 from '../assets/Group29.png'
import '../styles/element.css';
import { LuArrowUpRight } from "react-icons/lu";
import { FaCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

function HomeServiceSection() {

    const navigate = useNavigate();
    const serviceNavigation = () => {
        navigate('/services');
    };

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

                    <div className="w-full  flex flex-col gap-7 pt-20 sm:pt-20 md:pt-25 lg:pt:30 px-6 text-white">
                        <div className='flex justify-end w-full pb-8 px-6' >
                            <h1 className='max-w-[986px] sm:text-[24px] text-[12px]' style={{ fontWeight: "500" }} >Receive personalized support, expert guidance, and practical tools to manage stress,
                                improve well-being, and grow emotionally. From therapy to career support and mental
                                health camps, we’re here to help you thrive.</h1>
                        </div>
                        <hr className="w-full border-t border-[#5B5B5B] " />

                        <div className='flex flex-col md:flex-row justify-between gap-8'>
                            {/* LEFT SECTION */}
                            <div className='w-full md:w-[40%]'>
                                {/* Text on Top */}
                                <div>
                                    <h1 className='text-[12px] sm:text-[20px]' style={{ fontWeight: "500" }}>
                                        Psychotherapy & Counseling
                                    </h1>
                                    <p className='text-[10px] sm:text-[14px] text-[#AEAEAE]' style={{ fontWeight: "400" }}>
                                        Personalized emotional support and treatment
                                    </p>
                                </div>
                                {/* Image Below Text */}
                                <img className='w-[55px] md:w-auto pt-4 md:pt-9' src={HomeServicesIcon1} alt="" />
                            </div>

                            {/* RIGHT SECTION – Paragraph aligned left, below image in small screens */}
                            <div className='w-full md:w-[60%] text-left text-[10px] sm:text-[20px] max-w-[670px]'>
                                <h1>
                                    Through guided sessions with trained professionals, psychotherapy helps individuals understand their emotions, modify negative behavior patterns, and develop coping strategies
                                </h1>
                            </div>
                        </div>

                        <hr className="w-full border-t border-[#5B5B5B] " />
                        <div className='flex flex-col md:flex-row justify-between gap-8'>
                            {/* LEFT Block (Text + Image on small screens) */}
                            <div className='w-full md:w-[40%]'>
                                <div>
                                    <h1 className='text-[12px] sm:text-[20px]' style={{ fontWeight: "500" }}>
                                        Psychodiagnostics
                                    </h1>
                                    <p className='text-[10px] sm:text-[14px] text-[#AEAEAE]' style={{ fontWeight: "400" }}>
                                        Psychological assessments for clarity and care
                                    </p>
                                </div>
                                <img
                                    className='w-[55px] md:w-auto pt-6 md:pt-9'
                                    src={HomeServicesIcon2}
                                    alt=""
                                />
                            </div>

                            {/* RIGHT Block (Paragraph) */}
                            <div className='w-full md:w-[60%] max-w-[670px]'>
                                <h1 className='text-[10px] sm:text-[20px] text-left'>
                                    We use validated assessments to understand cognitive, emotional, and behavioral health helping diagnose conditions, guide treatment, and monitor progress.
                                </h1>
                            </div>
                        </div>

                        <hr className="w-full border-t border-[#5B5B5B] " />
                        <div className='flex flex-col md:flex-row justify-between gap-8 w-full'>
                            {/* LEFT SECTION: Text + Image */}
                            <div className='w-full md:w-[40%]'>
                                <div>
                                    <h1 className='text-[12px] sm:text-[20px]' style={{ fontWeight: "500" }}>
                                        Remedial Training
                                    </h1>
                                    <p className='text-[10px] sm:text-[14px] text-[#AEAEAE]' style={{ fontWeight: "400" }}>
                                        Tailored learning for academic success
                                    </p>
                                </div>
                                <img className='pt-6 md:pt-9 w-[55px] md:w-auto' src={HomeServicesIcon3} alt="" />
                            </div>

                            {/* RIGHT SECTION: Description Text */}
                            <div className='w-full md:w-[60%] max-w-[670px]'>
                                <h1 className='text-[10px] sm:text-[20px] text-left'>
                                    Remedial training supports students with learning difficulties by identifying gaps and providing personalized instruction to overcome challenges and build confidence.
                                </h1>
                            </div>
                        </div>

                        <div className='flex justify-end w-full' >
                            <button onClick={serviceNavigation} className="w-full max-w-[130px]  sm:max-w-[200px] h-[36px] sm:h-[45px] border-2 border-white text-white rounded-lg flex justify-between items-center px-3 text-[12px] sm:text-base  lg:text-base lg:font-medium hover:bg-white hover:text-black duration-300">
                                Discover More <span className='pl-1' ><LuArrowUpRight /></span>
                            </button>
                        </div>

                    </div>

                </div>

            </div>


        </>
    )
}

export default HomeServiceSection
