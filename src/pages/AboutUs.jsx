import React from 'react'
import { useState, useEffect } from 'react';
import aboutHeaderImg from '../assets/Group58.png'
import '../styles/element.css'
import aboutImg from '../assets/Rectangle19(1).png'
import aboutImg2 from '../assets/Rectangle19(2).png'
import { FaCircle } from "react-icons/fa";

import aboutImg3 from '../assets/group3.png'
import aboutImg4 from '../assets/group4.png'
import aboutImg5 from '../assets/group14.png'

function AboutUs() {
    const slideshowImages = [aboutImg3, aboutImg4, aboutImg5];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slideshowImages.length);
        }, 3000); // change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='w-full px-5 sm:px-10 dm-sans pb-10' >
            <div className='w-full h-[180px] md:h-[260px] bg-[#343434] border-[#4C4C4C] border-[12px] rounded-3xl ' >
                <div className='flex items-center gap-3 md:gap-4 pt-[100px] md:pt-[140px] pl-8' >
                    <FaCircle className="text-[#80BD48] md-w-6 md-h-6 w-4 h-4  " />
                    <h1 style={{ fontWeight: "700" }} className="text-[20px] md:text-[30px] text-white ">
                        About Us
                    </h1>
                </div>
            </div>
            <div className='sm:pt-10 pt-7' >
                <div className='flex w-[full] justify-center gap-6' >
                    <div className='w-[25%] float-left' >
                        <img src={aboutImg} alt="" />
                    </div>
                    <div className='flex  flex-col w-[75%] gap-5 max-w-[900px]' >
                        <div>
                            <h1 className='text-black text-[20px] md:text-[32px] lg:text-[32px]' style={{ fontWeight: "700" }}>Dymphna: Pioneering Rural Mental Health Services</h1>
                            <p className='pt-3 text-[#696969] text-[12px] md:text-[16px] lg:text-[16px]' >In the uncharted territories of rural mental health, Dymphna emerged as a beacon of hope, bridging the chasm between accessibility and affordability. Our odyssey began during the COVID-19 pandemic, with a bold online initiative that would eventually blossom into a comprehensive mental health services startup.</p>
                        </div>

                        <div className='hidden md:block' >
                            <h1 className='text-black text-[20px] md:text-[32px] lg:text-[32px]' style={{ fontWeight: "700" }} >A Mission to Transform</h1>
                            <p className='pt-3 text-[#696969] text-[12px] md:text-[16px] lg:text-[16px]'>With an unwavering commitment to rural communities, our team of dedicated mental health professionals embarked on a mission to revolutionize mental healthcare. We established a clinic in the remote Mangalam Dam area, followed by a strategic relocation to Vadakenchery, ensuring that our services were within reach of those who needed them most.</p>
                        </div>
                    </div>

                </div>
                <div className='md:hidden pt-2' >
                    <h1 className='text-black text-[20px] md:text-[32px] lg:text-[32px] ' style={{ fontWeight: "700" }} >A Mission to Transform</h1>
                    <p className='pt-3 text-[#696969] text-[12px] md:text-[16px] lg:text-[16px]'>With an unwavering commitment to rural communities, our team of dedicated mental health professionals embarked on a mission to revolutionize mental healthcare. We established a clinic in the remote Mangalam Dam area, followed by a strategic relocation to Vadakenchery, ensuring that our services were within reach of those who needed them most.</p>
                </div>
            </div>

            <div className='sm:pt-20 pt-10' >
                <h1 className='text-[12px] md:text-[16px] lg:text-[20px]' style={{ fontWeight: "700" }} >Our multifaceted approach included:</h1>

                <div className='flex flex-col gap-5 w-full' >
                    <div className='flex w-full justify-start' ></div>
                    <div className='flex items-center bg-gradient-to-r from-[#AEAEAE] to-[white] rounded-full max-w-[850px] '>
                        <div className='flex sm:gap-5 gap-1 items-center p-2'>
                            {/* Icon with number overlay */}
                            <div className='p-1 relative w-fit '>
                                <FaCircle className="text-[#80BD48] w-[55px] h-[55px] sm:md:w-[55px] sm:md:h-[55px] md:w-[60px] md:h-[60px] lg:w-[81px] lg:h-[81px]" />
                                <span className="absolute inset-0 flex items-center justify-center text-white text-[18px] sm:text-[18px] md:text-[28px] lg:text-[36px] font-semibold">
                                    1
                                </span>
                            </div>
                            {/* Text */}
                            <p className='text-[12px] md:text-[16px] lg:text-[16px]' style={{ fontWeight: "500" }}>
                                Mental Health Camps:Empowering children and adults with knowledge about mental wellness, early warning signs, and preventive measures.
                            </p>

                        </div>
                    </div>

                    <div className='flex w-full justify-center' >
                        <div className='flex items-center bg-gradient-to-r from-[#AEAEAE] to-[white] rounded-full max-w-[850px] '>
                            <div className='flex sm:gap-5 gap-1 items-center p-2'>
                                {/* Icon with number overlay */}
                                <div className='p-1 relative w-fit '>
                                    <FaCircle className="text-[#80BD48] w-[55px] h-[55px] sm:md:w-[55px] sm:md:h-[55px] md:w-[60px] md:h-[60px] lg:w-[81px] lg:h-[81px]" />
                                    <span className="absolute inset-0 flex items-center justify-center text-white text-[18px] sm:text-[18px] md:text-[28px] lg:text-[36px] font-semibold">
                                        2
                                    </span>
                                </div>
                                {/* Text */}
                                <p className='text-[12px] md:text-[16px] lg:text-[16px]' style={{ fontWeight: "500" }}>
                                    Research Initiatives: Conducting surveys and assessments to understand mental health needs, track progress, and inform data-driven interventions.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className='flex w-full justify-end' >
                        <div className='flex items-center bg-gradient-to-r from-[#AEAEAE] to-[white] rounded-full max-w-[850px] '>
                            <div className='flex sm:gap-5 gap-1 items-center p-2'>
                                {/* Icon with number overlay */}
                                <div className='p-1 relative w-fit '>
                                    <FaCircle className="text-[#80BD48] w-[55px] h-[55px] sm:md:w-[55px] sm:md:h-[55px] md:w-[60px] md:h-[60px] lg:w-[81px] lg:h-[81px]" />
                                    <span className="absolute inset-0 flex items-center justify-center text-white text-[18px] sm:text-[18px] md:text-[28px] lg:text-[36px] font-semibold">
                                        3
                                    </span>
                                </div>
                                {/* Text */}
                                <p className='text-[12px] md:text-[16px] lg:text-[16px]' style={{ fontWeight: "500" }}>
                                    Collaborations: Partnering with healthcare professionals to develop comprehensive programs, provide training and education, and advocate for mental health policies.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='sm:pt-20 pt-13 flex justify-center' >
                <div className='about-element'>
                    <div className='cutting-top-right'></div>
                    <div className='flex flex-col items-center py-4' >

                        <div className='hidden md:flex w-full p-8' >
                            <div className='w-[40%]' >
                                <h1 className='text-[12px] md:text-[16px] lg:text-[20px] text-white' style={{ fontWeight: "700" }} >Impact and Expansion</h1>
                                <p className='text-[#696969] text-[12px] md:text-[16px] lg:text-[16px]' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab tempore harum dignissimos officiis autem quos! Temporibus similique illo rem quidem quasi optio eos id, saepe animi eligendi debitis vel placeat!</p>
                            </div>
                            <div className='w-[60%]' ></div>
                        </div>

                        <div className='flex md:hidden w-full p-8' >
                            <div className='w-[70%]' >
                                <h1 className='text-[12px] md:text-[16px] lg:text-[20px] text-white' style={{ fontWeight: "700" }} >Impact and Expansion</h1>
                                <p className='text-[#696969] text-[12px] md:text-[16px] lg:text-[16px]' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab tempore harum dignissimos officiis autem quos! Temporibus similique illo rem quidem quasi optio eos id, saepe animi eligendi debitis vel placeat!</p>
                            </div>
                            <div className='w-[30%]' ></div>
                        </div>


                        <div className='hidden md:flex w-full p-8 items-start' >
                            <div className='w-[40%]' ></div>
                            <div className='w-[60%] flex gap-5' >
                                <div className='flex flex-col gap-4 w-[50%]  ' >
                                    <img src={aboutImg2} className='max-w-[85px]' alt="" />
                                    <hr className="w-full border-t border-[#5B5B5B] " />
                                    <p className='text-left text-[#696969] text-[12px] md:text-[16px] lg:text-[16px]'>
                                        Reduce Mental Illness Cases:Our preventive measures and research initiatives led to a significant decline in mental health issues.
                                    </p>
                                </div>
                                <div className='flex flex-col gap-4 w-[50%] ' >
                                    <img src={aboutImg2} className='max-w-[85px]' alt="" />
                                    <hr className="w-full border-t border-[#5B5B5B] " />
                                    <p className='text-left text-[#696969] text-[12px] md:text-[16px] lg:text-[16px]'>
                                        Foster a Supportive Environment: Community outreach and engagement efforts helped reduce stigma, promoting mental health awareness and a culture of understanding.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* small screen */}
                        <div className='flex md:hidden w-full sm:p-8 p-5 items-center ' >
                            <div className='w-[20%]' ></div>
                            <div className='w-[80%] flex flex-col  gap-5' >
                                <div className='flex flex-col gap-4 w-full  ' >
                                    <img src={aboutImg2} className='max-w-[39px]' alt="" />
                                    <hr className="w-full border-t border-[#5B5B5B] " />
                                    <p className='text-left text-[#696969] text-[12px] md:text-[16px] lg:text-[16px]'>
                                        Reduce Mental Illness Cases:Our preventive measures and research initiatives led to a significant decline in mental health issues.
                                    </p>
                                </div>
                                <div className='flex flex-col gap-4 w-full ' >
                                    <img src={aboutImg2} className='max-w-[39px]' alt="" />
                                    <hr className="w-full border-t border-[#5B5B5B] " />
                                    <p className='text-left text-[#696969] text-[12px] md:text-[16px] lg:text-[16px]'>
                                        Foster a Supportive Environment: Community outreach and engagement efforts helped reduce stigma, promoting mental health awareness and a culture of understanding.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='cutting-bottom-left'></div>


                </div>

            </div>

            <div className='sm:pt-20 pt-15' >
                <div className='flex flex-col sm:flex-row  gap-5 h-auto py-1 items-center'>
                    {/* IMAGE - Top on small screens, Left on large screens */}
                    <div className="w-full sm:w-[30%] relative overflow-hidden h-[470px]">
                        {slideshowImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt=""
                                className={`w-full h-full object-contain absolute top-0 left-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* TEXT BLOCK */}
                    <div className="w-full sm:w-[70%] flex flex-col justify-between gap-3">
                        {/* FIRST TEXT - LEFT ALIGN */}
                        <div className="flex justify-start">
                            <p className="max-w-[700px] text-left text-[#696969] text-[12px] md:text-[16px] lg:text-[16px]">
                                Today, Dymphna stands as a shining example of innovation and commitment in the field of mental health. Our journey is a testament to the transformative power of dedication, compassion, and collaboration. As we look back on our accomplishments, we remain steadfast in our resolve to continue providing quality mental health services to those who need them most.
                            </p>
                        </div>

                        <hr className="w-full border-t border-[#5B5B5B]" />

                        {/* SECOND TEXT - RIGHT ALIGN */}
                        <div className="flex  justify-end">
                            <div className='flex flex-col'>
                                <h1 className='text-[14px] md:text-[16px] lg:text-[24px] ' style={{ fontWeight: "600" }}>Empowering Rural Communities, One Mind at a Time</h1>
                                <p className="max-w-[700px] text-left text-[#696969] text-[12px] md:text-[16px] lg:text-[16px] pt-3">
                                    Dymphna's story is one of hope, resilience, and the unwavering commitment to bridging the mental health gap in rural areas. As we forge ahead, our mission remains clear: to empower rural communities, promote mental wellness, and inspire a brighter future for all.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
