import React from 'react'
import serviceImg from '../assets/Rectangle25.png'
import serviceImgWhiten from '../assets/Property=Frame82.png'
import { FaCircle } from "react-icons/fa";
import serviceImg2 from '../assets/PropertyComponent9.png'
import serviceImg2Whiten from '../assets/Property=Component10.png'
import serviceImg3 from '../assets/Property=Component12.png'
import serviceImg3Whiten from '../assets/Property=Component14.png'
import serviceImg4 from '../assets/Property=Component13.png'
import serviceImg4Whiten from '../assets/Property=Component15.png'



function Services() {
    return (
        <div className=' px-5 sm:px-10 dm-sans pb-20' >
            <div className='max-w-[1200px] pt-10'>
                <h1 className='text-[12px] md:text-[17px] lg:text-[20px]' >tAt Dymphna, we offer a wide range of mental health services designed to support your emotional, cognitive, academic, and personal growth. Whether you're navigating stress, learning challenges, or planning your future, our experienced professionals are here to guide you.</h1>
            </div>

            <div className='flex flex-col gap-7' >
                <div className='flex flex-col lg:flex-row gap-8 h-auto w-full pt-8 items-center md:items-center lg:items-start '>

                    {/* LEFT TEXT SECTION */}
                    <div className='w-full lg:w-[40%] flex flex-col justify-between gap-3'>
                        <h1 className='text-[18px] md:text-[18px] lg:text-[28px]' style={{ fontWeight: "500" }}>
                            Psychotherapy and Counseling
                        </h1>
                        <p className='text-[10px] md:text-[14px] lg:text-[15px] text-[#5B5B5B]' style={{ fontWeight: "500" }}>
                            Psychotherapy and counseling are two forms of mental health support. Psychotherapy explores deep-rooted emotional issues through various approaches like CBT and psychodynamic therapy. Counseling is more short-term and goal-oriented, helping individuals manage specific life challenges. The key difference lies in the depth and focus of treatment.
                        </p>
                    </div>

                    <div>

                    </div>
                    {/* Image for small and medium screens only */}
                    <img
                        src={serviceImg}
                        alt="Responsive"
                        className="block lg:hidden w-[80%] h-auto"
                    />

                    {/* Image for large screens only */}
                    <div className='w-full lg:w-[30%]'>
                        <img

                            src={serviceImgWhiten}
                            alt="Responsive"
                            className="hidden lg:block w-full h-auto object-contain"
                        />
                    </div>


                    {/* RIGHT BULLET SECTION */}
                    <div className='w-full lg:w-[30%]'>
                        <h1 className='text-[12px] md:text-[17px] lg:text-[20px]' style={{ fontWeight: "500" }}>Includes various approaches:</h1>

                        <div className="pt-5 text-[#5B5B5B] flex flex-col gap-4" style={{ fontWeight: "500" }}>
                            <div className="flex items-start gap-2">
                                <span className="w-[11px] h-[11px] mt-1 rounded-full bg-[#AEAEAE] shrink-0"></span>
                                <p className="text-[10px] md:text-[14px] lg:text-[15px]">
                                    Cognitive-Behavioral Therapy (CBT): Focuses on changing negative thoughts and behaviors.
                                </p>
                            </div>

                            <div className="flex items-start gap-2">
                                <span className="w-[11px] h-[11px] mt-1 rounded-full bg-[#AEAEAE] shrink-0"></span>
                                <p className="text-[10px] md:text-[14px] lg:text-[15px]">
                                    Psychodynamic Therapy: Explores unconscious feelings and past experiences.
                                </p>
                            </div>

                            <div className="flex items-start gap-2">
                                <span className="w-[11px] h-[11px] mt-1 rounded-full bg-[#AEAEAE] shrink-0"></span>
                                <p className="text-[10px] md:text-[14px] lg:text-[15px]">
                                    Other types: Interpersonal therapy, dialectical behavior therapy, mindfulness-based therapy.
                                </p>
                            </div>

                            <div className='pt-3 flex flex-col gap-4'>
                                <div className="flex items-start gap-2">
                                    <span className="w-[11px] h-[11px] mt-1 rounded-full bg-[#80BD48] shrink-0"></span>
                                    <p className="text-[10px] md:text-[14px] lg:text-[15px]">
                                        Counseling: Focused on current problems and practical solutions.
                                    </p>
                                </div>

                                <div className="flex items-start gap-2">
                                    <span className="w-[11px] h-[11px] mt-1 rounded-full bg-[#80BD48] shrink-0"></span>
                                    <p className="text-[10px] md:text-[14px] lg:text-[15px]">
                                        Counseling: Focused on current problems and practical solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="w-full border-t border-[#5B5B5B]" />

                <div className='flex flex-col lg:flex-row gap-8 h-auto w-full pt-8'>
                    {/* LEFT TEXT SECTION */}
                    <div className='w-full lg:w-[40%] flex flex-col justify-between gap-3'>
                        <h1 className='text-[18px] md:text-[18px] lg:text-[28px]' style={{ fontWeight: "500" }}>
                            Psychodiagnostics
                        </h1>
                        <p className='text-[10px] md:text-[14px] lg:text-[15px] text-[#5B5B5B]' style={{ fontWeight: "500" }}>
                            Psychodiagnostics involves evaluating an individual's psychological state using tests and assessments. It helps professionals understand cognitive, emotional, and behavioral patterns to diagnose issues, plan treatment, and track progress.
                        </p>
                    </div>

                    {/* Image for small and medium screens only */}
                    <img
                        src={serviceImg2}
                        alt="Responsive"
                        className="block lg:hidden w-[80%] h-auto"
                    />

                    {/* Image for large screens only */}
                    <div className='w-full lg:w-[30%]'>
                        <img

                            src={serviceImg2Whiten}
                            alt="Responsive"
                            className="hidden lg:block w-full h-auto object-contain"
                        />
                    </div>

                    {/* RIGHT BULLET SECTION */}
                    <div className='w-full lg:w-[30%]'>
                        <h1 className='text-[12px] md:text-[17px] lg:text-[20px]' style={{ fontWeight: "500" }}>Evaluates:</h1>

                        <div className="pt-5 flex flex-col gap-4 text-[#5B5B5B]" style={{ fontWeight: "500" }}>
                            <div className="flex items-start gap-2">
                                <span className="w-[11px] h-[11px] mt-1 rounded-full bg-[#AEAEAE] shrink-0"></span>
                                <p className="text-[10px] md:text-[14px] lg:text-[15px]">
                                    Cognitive abilities
                                </p>
                            </div>

                            <div className="flex items-start gap-2">
                                <span className="w-[11px] h-[11px] mt-1 rounded-full bg-[#AEAEAE] shrink-0"></span>
                                <p className="text-[10px] md:text-[14px] lg:text-[15px]">
                                    Emotional well-being
                                </p>
                            </div>

                            <div className="flex items-start gap-2">
                                <span className="w-[11px] h-[11px] mt-1 rounded-full bg-[#AEAEAE] shrink-0"></span>
                                <p className="text-[10px] md:text-[14px] lg:text-[15px]">
                                    Behavioral patterns
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                <hr className="w-full border-t border-[#5B5B5B]" />

                <div className='flex flex-col lg:flex-row gap-8 h-auto w-full pt-8'>
                    {/* LEFT TEXT SECTION */}
                    <div className='w-full lg:w-[40%] flex flex-col justify-between gap-3'>
                        <h1 className='text-[18px] md:text-[18px] lg:text-[28px]' style={{ fontWeight: "500" }}>
                            Remedial training
                        </h1>
                        <p className='text-[10px] md:text-[14px] lg:text-[15px] text-[#5B5B5B]' style={{ fontWeight: "500" }}>
                            Remedial training is a customized learning method designed to address individual learning gaps. It focuses on helping learners overcome specific challenges through targeted support and instruction.
                        </p>
                    </div>

                    {/* Image for small and medium screens only */}
                    <img
                        src={serviceImg3}
                        alt="Responsive"
                        className="block lg:hidden w-[80%] h-auto"
                    />

                    {/* Image for large screens only */}
                    <div className='w-full lg:w-[30%]'>
                        <img

                            src={serviceImg3Whiten}
                            alt="Responsive"
                            className="hidden lg:block w-full h-auto object-contain"
                        />
                    </div>

                    {/* RIGHT BULLET SECTION */}
                    <div className='w-full lg:w-[30%]'>
                        <h1 className='text-[12px] md:text-[17px] lg:text-[20px]' style={{ fontWeight: "500" }}>Key Points:</h1>

                        <div className="pt-5 flex flex-col gap-4 text-[#5B5B5B]" style={{ fontWeight: "500" }}>
                            <div className="flex items-start gap-2">
                                <span className="w-[11px] h-[11px] mt-1 rounded-full bg-[#AEAEAE] shrink-0"></span>
                                <p className="text-[10px] md:text-[14px] lg:text-[15px]">
                                    Aims to close learning gaps through personalized teaching.
                                </p>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="w-[11px] h-[11px] mt-1 rounded-full bg-[#AEAEAE] shrink-0"></span>
                                <p className="text-[10px] md:text-[14px] lg:text-[15px]">
                                    Identifies and addresses areas of weakness.
                                </p>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="w-[11px] h-[11px] mt-1 rounded-full bg-[#AEAEAE] shrink-0"></span>
                                <p className="text-[10px] md:text-[14px] lg:text-[15px]">
                                    Provides targeted support to overcome academic challenges.
                                </p>
                            </div>

                            <div className="flex items-start gap-2">
                                <span className="w-[11px] h-[11px] mt-1 rounded-full bg-[#AEAEAE] shrink-0"></span>
                                <p className="text-[10px] md:text-[14px] lg:text-[15px]">
                                    Tailored to meet each student's unique learning needs.
                                </p>
                            </div>

                            <div className="flex items-start gap-2">
                                <span className="w-[11px] h-[11px] mt-1 rounded-full bg-[#AEAEAE] shrink-0"></span>
                                <p className="text-[10px] md:text-[14px] lg:text-[15px]">
                                    Helps learners succeed by building confidence and understanding.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                <hr className="w-full border-t border-[#5B5B5B]" />

                <div className='flex flex-col lg:flex-row gap-8 h-auto w-full pt-8'>
                    {/* LEFT TEXT SECTION */}
                    <div className='w-full lg:w-[40%] flex flex-col justify-between gap-3'>
                        <h1 className='text-[18px] md:text-[18px] lg:text-[28px]' style={{ fontWeight: "500" }}>
                            Career Guidance
                        </h1>
                        <p className='text-[10px] md:text-[14px] lg:text-[15px] text-[#5B5B5B]' style={{ fontWeight: "500" }}>
                            Career guidance helps individuals explore their interests, skills, and values to make informed career choices. It provides direction through self-assessment, expert advice, and planning, leading to a successful and fulfilling career path.
                        </p>
                    </div>

                    {/* Image for small and medium screens only */}
                    <img
                        src={serviceImg4}
                        alt="Responsive"
                        className="block lg:hidden w-[80%] h-auto"
                    />

                    {/* Image for large screens only */}
                    <div className='w-full lg:w-[30%]'>
                        <img

                            src={serviceImg4Whiten}
                            alt="Responsive"
                            className="hidden lg:block w-full h-auto object-contain"
                        />
                    </div>

                    {/* RIGHT BULLET SECTION */}
                    <div className='w-full lg:w-[30%]'>
                        <h1 className='text-[12px] md:text-[17px] lg:text-[20px]' style={{ fontWeight: "500" }}>Involves a systematic approach:</h1>

                        <div className="pt-5 flex flex-col gap-4 text-[#5B5B5B]" style={{ fontWeight: "500" }}>
                            <div className="flex items-start gap-2">
                                <span className="w-[11px] h-[11px] mt-1 rounded-full bg-[#AEAEAE] shrink-0"></span>
                                <p className="text-[10px] md:text-[14px] lg:text-[15px]">
                                    Self-assessment
                                </p>
                            </div>

                            <div className="flex items-start gap-2">
                                <span className="w-[11px] h-[11px] mt-1 rounded-full bg-[#AEAEAE] shrink-0"></span>
                                <p className="text-[10px] md:text-[14px] lg:text-[15px]">
                                    Research
                                </p>
                            </div>

                            <div className="flex items-start gap-2">
                                <span className="w-[11px] h-[11px] mt-1 rounded-full bg-[#AEAEAE] shrink-0"></span>
                                <p className="text-[10px] md:text-[14px] lg:text-[15px]">
                                    Goal-setting
                                </p>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="w-[11px] h-[11px] mt-1 rounded-full bg-[#AEAEAE] shrink-0"></span>
                                <p className="text-[10px] md:text-[14px] lg:text-[15px]">
                                    Seeking expert guidance
                                </p>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="w-[11px] h-[11px] mt-1 rounded-full bg-[#AEAEAE] shrink-0"></span>
                                <p className="text-[10px] md:text-[14px] lg:text-[15px]">
                                    Gaining experience
                                </p>
                            </div>

                        </div>
                    </div>
                </div>



            </div>



        </div>
    )
}

export default Services
