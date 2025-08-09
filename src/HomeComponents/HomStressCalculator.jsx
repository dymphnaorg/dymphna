import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { IoIosWarning } from "react-icons/io";

function HomStressCalculator() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const questions = [
        {
            name: "sleep",
            question: "How is your Sleep Quality?",
            options: [
                { label: "Good", sub: "7–8 hours/night", points: 0 },
                { label: "Fair", sub: "5–6 hours/night", points: 2 },
                { label: "Poor", sub: "Less than 5 hours/night", points: 4 },
            ],
        },
        {
            name: "pressure",
            question: "Work/School Pressure?",
            options: [
                { label: "Low", points: 0 },
                { label: "Moderate", points: 2 },
                { label: "High", points: 4 },
            ],
        },
        {
            name: "socialSupport",
            question: "Do you have Social Support?",
            options: [
                { label: "Strong support system", points: 0 },
                { label: "Some support", points: 2 },
                { label: "Limited support", points: 4 },
            ],
        },
        {
            name: "exercise",
            question: "How often do you exercise?",
            options: [
                { label: "Regularly", sub: "3+ times/week", points: 0 },
                { label: "Occasionally", sub: "1–2 times/week", points: 2 },
                { label: "Rarely", sub: "Less than once/week", points: 4 },
            ],
        },
        {
            name: "leisureTime",
            question: "Do you have Leisure Time?",
            options: [
                { label: "Regular relaxation time", points: 0 },
                { label: "Some relaxation time", points: 2 },
                { label: "Little to no relaxation", points: 4 },
            ],
        },
    ];

    const currentQ = questions[currentIndex];
    const handleSelect = (option) => {
        setAnswers((prev) => ({
            ...prev,
            [currentQ.name]: option,
        }));
    };

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handleBack = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const progress = ((currentIndex + 1) / questions.length) * 100;
    const calculateScore = () => {
        return Object.values(answers).reduce((total, item) => total + item.points, 0);
    };

    const interpretScore = (score) => {
        if (score <= 4) return "Low stress levels";
        if (score <= 8) return "Moderate stress levels";
        if (score <= 12) return "High stress levels";
        return "Very high stress levels";
    };

    // JS Logic to calculate score, left position and label
    const score = calculateScore(); // You must define this function
    let leftPosition = 0;
    let stressLevel = "";

    // Decide position and label
    if (score >= 0 && score <= 4) {
        leftPosition = 16;
        stressLevel = "Low Stress";
    } else if (score <= 8) {
        leftPosition = 50;
        stressLevel = "Moderate Stress";
    } else if (score <= 12) {
        leftPosition = 75;
        stressLevel = "High Stress";
    } else {
        leftPosition = 90;
        stressLevel = "Very High Stress";
    }

    const navigate = useNavigate();
    const serviceNavigation = () => {
        navigate('/services');
    };

    return (


        <div className="bg-white rounded-3xl flex flex-col items-center h-auto w-[95%] max-w-[750px] shadow-md mx-auto  ">
            {/* Header */}
            <div className="h-[80px] sm:h-[100px] w-[90%] bg-[#80BD48] rounded-b-3xl">
                <div className="sm:pt-[27px] pt-[17px]  pl-6">
                    <div className="flex items-center sm:gap-1 gap-3 md:gap-2">
                        <FaCircle className="text-[#343434] w-3 h-3 md:w-5 md:h-5" />
                        <h1
                            style={{ fontWeight: "600" }}
                            className=" sm:text-[24px] text-[15px] "
                        >
                            Stress Calculator
                        </h1>
                    </div>
                    <p className="text-[11px] sm:text-[14px]">A rough estimate of your current stress</p>
                </div>
            </div>
            <div className='sm:pb-7 pb-2 w-full flex justify-center' >
                {
                    submitted ?
                        (
                            <div className="w-full py-5 sm:py-10 flex flex-col items-center justify-center">
                                {/* Stress level text */}
                                <p className="text-center text-lg font-semibold mb-4">
                                    {stressLevel}
                                </p>

                                {/* Meter */}
                                {/* Stress Meter Container */}
                                <div className="relative w-full sm:max-w-[500px] max-w-[260px]">

                                    {/* Arrow pointing to current stress level */}
                                    <div
                                        className="absolute -top-4 z-20"
                                        style={{
                                            left: `${leftPosition}%`,
                                            transform: "translateX(-50%)",
                                        }}
                                    >
                                        <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-yellow-500"></div>
                                    </div>

                                    {/* Colored Bar */}
                                    <div className="relative w-full sm:h-12 h-8 bg-gradient-to-r from-green-300 via-yellow-200 to-red-300 rounded-full overflow-hidden">
                                        {/* Divider Lines */}
                                        <div className="absolute left-1/3 top-0 bottom-0 w-[1px] bg-gray-400"></div>
                                        <div className="absolute left-2/3 top-0 bottom-0 w-[1px] bg-gray-400"></div>
                                    </div>
                                </div>

                                {/* Labels */}
                                <div className="flex justify-between w-full sm:max-w-[500px] max-w-[260px] mt-2 text-sm text-gray-700 px-1">
                                    <span>Low</span>
                                    <span>Moderate</span>
                                    <span>High</span>
                                    <span>Very High</span>
                                </div>


                                {/* Recommendations */}
                                <div className=" mt-5 sm:mt-10 w-full space-y-0  sm:space-y-5 px-10">
                                    <div className='flex flex-col items-start gap-1 sm:gap-2' >
                                        <p className=" text-sm sm:text-md font-semibold text-center">Recommended for You!</p>
                                        <p className=" text-left sm:text-center text-[12px] sm:text-sm text-[#343434]">
                                            Based on your result, we suggest exploring the following stress-relief options
                                        </p>
                                    </div>


                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 sm:mt-4">
                                        <div className="border-[1px] border-[#BBD74F] bg-[#BBD74F5C] p-4 rounded-xl shadow-sm">
                                            <p className="font-semibold text-sm sm:text-md">Psychotherapy & Counseling</p>
                                            <p className="text-[12px] sm:text-sm text-gray-700 mt-1">
                                                Work with a licensed therapist to uncover stress triggers, build coping skills,
                                                and boost emotional resilience.
                                            </p>
                                        </div>
                                        <div className="border-[1px] border-[#BBD74F] bg-[#BBD74F5C] p-4 rounded-xl shadow-sm">
                                            <p className="font-semibold text-sm sm:text-md">Psychodiagnostics</p>
                                            <p className="text-[12px] sm:text-sm text-gray-700 mt-1">
                                                Gain clarity on your emotional and cognitive patterns through personalized psychological assessments.
                                            </p>
                                        </div>
                                    </div>

                                    <div onClick={serviceNavigation} className="text-center flex justify-center mt-6">
                                        <button className="text-black text-sm sm:text-md flex items-center justify-center gap-1">
                                            View All Services <span className='pl-2' ><FaArrowRight /></span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        )
                        :
                        (

                            <div className='w-[90%]' >
                                <div className="px-4 py-2 flex flex-col gap-1">
                                    <div>
                                        {/* Warning */}
                                        <div className="flex flex-col items-center sm:items-end sm:py-0 py-3  ">
                                            <div className='flex gap-2 items-center pt-0 sm:pt-5' >
                                                <IoIosWarning className='text-[#FE8401]' />
                                                <span className="text-[#343434] text-[10px] sm:text-[15px]">
                                                    This tool is not scientifically validated
                                                </span>
                                            </div>

                                        </div>

                                        <div>
                                            {/* Progress Step Counter */}
                                            <p className="text-sm text-gray-600 self-start mb-1">
                                                Step {currentIndex + 1} of {questions.length}
                                            </p>

                                            {/* Progress Bar */}
                                            <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden mb-3 sm:mb-6">
                                                <div
                                                    className="h-full bg-gradient-to-b from-[#FFB00A] to-[#FE8401] transition-all duration-500"
                                                    style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                                                ></div>
                                            </div>
                                        </div>

                                    </div>

                                    {/* Question */}
                                    <div className='flex flex-col items-center w-full' >

                                        <div className="w-full max-w-[500px] mx-auto flex flex-col items-center px-4">

                                            {/* Question Text */}
                                            <h2 className="text-center text-[17px] sm:text-[24px] font-semibold mb-3 sm:mb-6">
                                                {currentQ.question}
                                            </h2>

                                            {/* Options */}
                                            <div className=" space-y-2 sm:space-y-3 w-full sm:w-[70%]">
                                                {currentQ.options.map((opt, i) => (
                                                    <label
                                                        key={i}
                                                        className="flex justify-between items-center border-[1px] border-[#BBD74F] bg-[#BBD74F5C] rounded-md px-4 py-2 sm:py-3  hover:bg-[#E3EDC9] cursor-pointer w-full text-sm sm:text-base transition"
                                                    >
                                                        <div className="flex gap-4 items-center">
                                                            <input
                                                                type="radio"
                                                                name={currentQ.name}
                                                                checked={answers[currentQ.name]?.label === opt.label}
                                                                onChange={() => handleSelect(opt)}
                                                                className="accent-black w-4 h-4"
                                                            />
                                                            <div className='flex flex-col justify-start' >
                                                                <span className="font-medium">{opt.label}</span>
                                                                {opt.sub && <span className="text-gray-600 text-sm">{opt.sub}</span>}
                                                            </div>

                                                        </div>

                                                    </label>
                                                ))}
                                            </div>

                                            {/* Buttons */}
                                            <div className="flex justify-between items-center mt-5 flex-row gap-4 w-full">
                                                <button
                                                    disabled={currentIndex === 0}
                                                    onClick={() => setCurrentIndex((prev) => prev - 1)}
                                                    className="border border-black px-5 py-1 rounded-[6px] flex items-center gap-2 hover:bg-gray-100 transition  sm:w-auto justify-center disabled:opacity-50 text-black"
                                                >
                                                    <FaArrowLeft />
                                                    Back
                                                </button>

                                                {currentIndex < questions.length - 1 ? (
                                                    <button
                                                        onClick={handleNext}
                                                        disabled={!answers[currentQ.name]}
                                                        className="bg-[#80BD48] text-black px-5 py-1 rounded-[6px] flex items-center gap-2 hover:bg-white border border-black transition  sm:w-auto justify-center"
                                                    >
                                                        Next
                                                        <FaArrowRight />
                                                    </button>
                                                ) : (
                                                    <button
                                                        onClick={() => setSubmitted(true)}
                                                        className="bg-[#80BD48] text-black px-5 py-1 rounded-[6px] flex items-center gap-2 hover:bg-white border border-black transition sm:w-auto justify-center"
                                                    >
                                                        Submit
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        )
                }
            </div>
        </div>

    )
}

export default HomStressCalculator
