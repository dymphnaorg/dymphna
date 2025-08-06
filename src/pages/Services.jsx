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
import { GoArrowDownRight } from "react-icons/go";



function Services() {
    return (
        <div className=' px-5 sm:px-10 w-full dm-sans pb-20' >
            <div className='w-full h-[180px] md:h-[260px] bg-[#343434] border-[#4C4C4C] border-[12px] rounded-3xl ' >
                <div className='flex items-center gap-3 md:gap-4 pt-[100px] md:pt-[140px] pl-8' >
                    <FaCircle className="text-[#80BD48] md-w-6 md-h-6 w-4 h-4  " />
                    <h1 style={{ fontWeight: "700" }} className="text-[20px] md:text-[30px] text-white ">
                        Our Services
                    </h1>
                </div>
            </div>

            <div className='sm:pt-10 pt-5' >
                <div className='max-w-[1200px]  py-10 sm:py-5'>
                    <h1 className='text-[12px] md:text-[17px] lg:text-[20px]' style={{ fontWeight: "500" }} >tAt Dymphna, we offer a wide range of mental health services designed to support your emotional, cognitive, academic, and personal growth. Whether you're navigating stress, learning challenges, or planning your future, our experienced professionals are here to guide you.</h1>
                </div>

                <div className='flex flex-col gap-7 pt-4 lg:pt-10'  >
                    <div id='PsychotherapyandCounseling' className='flex flex-col lg:flex-row gap-8 sm:gap-5 h-auto w-full items-center md:items-center lg:items-start '>

                        {/* LEFT TEXT SECTION */}
                        <div className='w-full lg:w-[40%] flex flex-col justify-between gap-3 '>
                            <h1 className='text-[18px] md:text-[18px] lg:text-[28px]' style={{ fontWeight: "500" }}>
                                Psychotherapy and Counseling <GoArrowDownRight className="inline ml-1 align-middle text-[18px] md:text-[18px] lg:text-[24px]" />
                            </h1>

                            <p className='text-[10px] md:text-[14px] lg:text-[15px] text-[#5B5B5B]' style={{ fontWeight: "500" }}>
                                Psychotherapy and counseling are two forms of mental health support. Psychotherapy explores deep-rooted emotional issues through various approaches like CBT and psychodynamic therapy. Counseling is more short-term and goal-oriented, helping individuals manage specific life challenges. The key difference lies in the depth and focus of treatment.
                            </p>
                        </div>
                        <div>
                        </div>


                        <div className="relative w-[80%] lg:w-[30%] h-auto group">
                            {/* Default image for small screens (dark) */}
                            <img
                                src={serviceImg}
                                alt="Dark - small default"
                                className="block lg:hidden w-full h-auto object-contain"
                            />

                            {/* Default image for large screens (light) */}
                            <img
                                src={serviceImgWhiten}
                                alt="Light - large default"
                                className="hidden lg:block w-full h-auto object-contain"
                            />

                            {/* Hover image for small screens (light) */}
                            <img
                                src={serviceImgWhiten}
                                alt="Light on hover - small"
                                className="absolute inset-0 w-full h-auto object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300 block lg:hidden pointer-events-none"
                            />

                            {/* Hover image for large screens (dark) */}
                            <img
                                src={serviceImg}
                                alt="Dark on hover - large"
                                className="absolute inset-0 w-full h-auto object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:block pointer-events-none"
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

                    <div id='Psychodiagnostics' className='flex flex-col lg:flex-row gap-8 sm:gap-5 h-auto w-full py-5  items-center md:items-center lg:items-start'>
                        {/* LEFT TEXT SECTION */}
                        <div className='w-full lg:w-[40%] flex flex-col justify-between gap-3'>
                            <h1 className='text-[18px] md:text-[18px] lg:text-[28px]' style={{ fontWeight: "500" }}>
                                Psychodiagnostics <GoArrowDownRight className="inline ml-1 align-middle text-[18px] md:text-[18px] lg:text-[24px]" />
                            </h1>
                            <p className='text-[10px] md:text-[14px] lg:text-[15px] text-[#5B5B5B]' style={{ fontWeight: "500" }}>
                                Psychodiagnostics involves evaluating an individual's psychological state using tests and assessments. It helps professionals understand cognitive, emotional, and behavioral patterns to diagnose issues, plan treatment, and track progress.
                            </p>
                        </div>


                        {/* Image for large screens only */}
                        <div className="relative w-[80%] lg:w-[30%] h-auto group">
                            {/* Default image for small screens (dark) */}
                            <img
                                src={serviceImg2}
                                alt="Dark - small default"
                                className="block lg:hidden w-full h-auto object-contain"
                            />

                            {/* Default image for large screens (light) */}
                            <img
                                src={serviceImg2Whiten}
                                alt="Light - large default"
                                className="hidden lg:block w-full h-auto object-contain"
                            />

                            {/* Hover image for small screens (light) */}
                            <img
                                src={serviceImg2Whiten}
                                alt="Light on hover - small"
                                className="absolute inset-0 w-full h-auto object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300 block lg:hidden pointer-events-none"
                            />

                            {/* Hover image for large screens (dark) */}
                            <img
                                src={serviceImg2}
                                alt="Dark on hover - large"
                                className="absolute inset-0 w-full h-auto object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:block pointer-events-none"
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

                    <div id='Remedialtraining' className='flex flex-col lg:flex-row gap-8 sm:gap-5 h-auto py-5 w-full items-center md:items-center lg:items-start'>
                        {/* LEFT TEXT SECTION */}
                        <div className='w-full lg:w-[40%] flex flex-col justify-between gap-3'>
                            <h1 className='text-[18px] md:text-[18px] lg:text-[28px]' style={{ fontWeight: "500" }}>
                                Remedial training <GoArrowDownRight className="inline ml-1 align-middle text-[18px] md:text-[18px] lg:text-[24px]" />
                            </h1>
                            <p className='text-[10px] md:text-[14px] lg:text-[15px] text-[#5B5B5B]' style={{ fontWeight: "500" }}>
                                Remedial training is a customized learning method designed to address individual learning gaps. It focuses on helping learners overcome specific challenges through targeted support and instruction.
                            </p>
                        </div>




                        <div className="relative w-[80%] lg:w-[30%] h-auto group">
                            {/* Default image for small screens (dark) */}
                            <img
                                src={serviceImg3}
                                alt="Dark - small default"
                                className="block lg:hidden w-full h-auto object-contain"
                            />

                            {/* Default image for large screens (light) */}
                            <img
                                src={serviceImg3Whiten}
                                alt="Light - large default"
                                className="hidden lg:block w-full h-auto object-contain"
                            />

                            {/* Hover image for small screens (light) */}
                            <img
                                src={serviceImg3Whiten}
                                alt="Light on hover - small"
                                className="absolute inset-0 w-full h-auto object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300 block lg:hidden pointer-events-none"
                            />

                            {/* Hover image for large screens (dark) */}
                            <img
                                src={serviceImg3}
                                alt="Dark on hover - large"
                                className="absolute inset-0 w-full h-auto object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:block pointer-events-none"
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

                    <div id='CareerGuidance' className='flex flex-col lg:flex-row gap-8 sm:gap-5 h-auto py-5 w-full items-center md:items-center lg:items-start'>
                        {/* LEFT TEXT SECTION */}
                        <div className='w-full lg:w-[40%] flex flex-col justify-between gap-3'>
                            <h1 className='text-[18px] md:text-[18px] lg:text-[28px]' style={{ fontWeight: "500" }}>
                                Career Guidance <GoArrowDownRight className="inline ml-1 align-middle text-[18px] md:text-[18px] lg:text-[24px]" />
                            </h1>
                            <p className='text-[10px] md:text-[14px] lg:text-[15px] text-[#5B5B5B]' style={{ fontWeight: "500" }}>
                                Career guidance helps individuals explore their interests, skills, and values to make informed career choices. It provides direction through self-assessment, expert advice, and planning, leading to a successful and fulfilling career path.
                            </p>
                        </div>

                        <div className="relative w-[80%] lg:w-[30%] h-auto group">
                            {/* Default image for small screens (dark) */}
                            <img
                                src={serviceImg4}
                                alt="Dark - small default"
                                className="block lg:hidden w-full h-auto object-contain"
                            />

                            {/* Default image for large screens (light) */}
                            <img
                                src={serviceImg4Whiten}
                                alt="Light - large default"
                                className="hidden lg:block w-full h-auto object-contain"
                            />

                            {/* Hover image for small screens (light) */}
                            <img
                                src={serviceImg4Whiten}
                                alt="Light on hover - small"
                                className="absolute inset-0 w-full h-auto object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300 block lg:hidden pointer-events-none"
                            />

                            {/* Hover image for large screens (dark) */}
                            <img
                                src={serviceImg4}
                                alt="Dark on hover - large"
                                className="absolute inset-0 w-full h-auto object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:block pointer-events-none"
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
                    <div id='otherServices' className='flex flex-col gap-6 lg:pt-10'>
                        <h1 className='text-lg lg:text-2xl font-medium' style={{ fontWeight: "500" }}>Other Services</h1>
                        <hr className="w-full border-t border-[#5B5B5B]" />

                        <div className='flex flex-col gap-8'>
                            <div className='rounded-full w-full max-w-[230px] border'>
                                <div className='flex gap-2 p-2 items-center'>
                                    <FaCircle className="text-[#80BD48] w-[11px] md:w-[19px] h-[11px] md:h-[19px]" />
                                    <h1 className='text-sm md:text-lg lg:text-xl font-medium'>Sports psychology</h1>
                                </div>
                            </div>

                            <div className='rounded-full w-full max-w-[160px] border'>
                                <div className='flex gap-2 p-2 items-center'>
                                    <FaCircle className="text-[#80BD48] w-[11px] md:w-[19px] h-[11px] md:h-[19px]" />
                                    <h1 className='text-sm md:text-lg lg:text-xl font-medium'>Internships</h1>
                                </div>
                            </div>
                        </div>

                        <hr className="w-full border-t border-[#5B5B5B]" />

                        <div className='flex flex-col lg:flex-row gap-5 lg:gap-20'>
                            <div className='max-w-[900px]'>
                                <p className='text-xs md:text-sm lg:text-base text-[#5B5B5B]'>
                                    Students can have a unique and enriching experience by interning at a property that houses schools and an elderly home with 300 beds. An internship programme offers the chance to work closely with interns at a 300-bed old age home and school. This gives interns the chance to pick the brains of industry professionals and acquire important knowledge and insights that will help them succeed in their future employment.
                                </p>
                            </div>
                            <div className='flex flex-col gap-5 min-w-[300px]'>
                                <div className='flex gap-2 items-center'>
                                    <FaCircle className="text-[#6D6D6D] w-[11px] md:w-[15px] h-[11px] md:h-[15px]" />
                                    <h1 className='text-sm md:text-lg lg:text-xl font-medium'>Sports psychology</h1>
                                </div>
                                <div className='flex flex-col gap-4 pl-5'>
                                    <h1 className='text-sm md:text-lg lg:text-xl font-medium'>*Research</h1>
                                    <h1 className='text-sm md:text-lg lg:text-xl font-medium'>*Seminars and Workshops</h1>
                                    <h1 className='text-sm md:text-lg lg:text-xl font-medium'>*Camps</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
