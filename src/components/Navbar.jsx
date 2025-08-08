import React, { useState } from 'react'
import DymphnaLogoImg from '../assets/dymphna.png'
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { LuArrowUpRight } from "react-icons/lu";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/element.css'
import navbar from '../assets/navbar.png'
import navbarsmall from '../assets/navbarsmall.png'



function Navbar() {

    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const navigate = useNavigate();

    const contactNavigation = () => {
        navigate('/contactUs');
    };

    return (

        <>
            {/* Mobile Navbar */}
            <div className="fixed top-0 left-0 w-full z-40 block md:hidden">
                {/* Background Image */}
                <img
                    src={navbarsmall}
                    alt="Navbar Small"
                    className="absolute inset-0 w-full h-[91px] object-cover drop-shadow-sm z-0"
                />

                {/* Top Bar */}
                <div className="relative z-10 flex items-center justify-between h-[91px] px-4 text-black">
                    <div className="flex gap-4 items-center">
                        <img src={DymphnaLogoImg} alt="Logo" className="w-[40px] h-auto" />
                        <HiMiniBars3BottomRight
                            className="text-3xl cursor-pointer"
                            onClick={() => setMenuOpen(!menuOpen)}
                        />
                    </div>

                    <div>
                        <button
                            onClick={contactNavigation}
                            className="border-2 border-black bg-[#80BD48] text-black rounded-lg font-medium flex items-center justify-center px-3 py-2 hover:bg-white duration-300 text-sm"
                        >
                            Book Now <span className="pl-1"><LuArrowUpRight /></span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown (fixed and hidden on md+) */}
            <div
                className={`fixed top-0 left-0 w-full z-30 bg-[#343434] text-white transition-all duration-300 ease-in-out overflow-hidden block md:hidden ${menuOpen ? "max-h-[300px] pt-[91px] pb-10 px-6" : "max-h-0 px-6"
                    }`}
            >
                <ul className="flex flex-col items-center gap-4 font-semibold">
                    <Link
                        to="/"
                        onClick={() => setMenuOpen(false)}
                        className="hover:underline hover:underline-offset-4 hover:decoration-white transition-all"
                    >
                        <li>Home</li>
                    </Link>
                    <Link
                        to="/aboutUs"
                        onClick={() => setMenuOpen(false)}
                        className="hover:underline hover:underline-offset-4 hover:decoration-white transition-all"
                    >
                        <li>About us</li>
                    </Link>
                    <Link
                        to="/services"
                        onClick={() => setMenuOpen(false)}
                        className="hover:underline hover:underline-offset-4 hover:decoration-white transition-all"
                    >
                        <li>Services</li>
                    </Link>
                </ul>
            </div>





            {/* Desktop Navbar */}
            <div className="hidden md:block">
                {/* shows only ABOVE 928px */}
                <div className="below-928-hide fixed z-40 w-full">
                    <img
                        src={navbar}
                        className="absolute w-full h-[91px] drop-shadow-sm"
                        alt=""
                    />
                    <div className="relative z-60 flex items-center justify-between h-[91px] px-6 text-black">
                        <div className="flex items-center gap-8 pl-2 dm-sans font-semibold w-[80%]">
                            <img
                                src={DymphnaLogoImg}
                                alt="logo"
                                className="w-[50px] sm:w-[65px] h-auto"
                            />
                            <ul className="flex gap-15 text-black">
                                <Link
                                    to="/"
                                    className={`transition-all ${location.pathname === "/" ? "underline underline-offset-4 decoration-black" : ""
                                        }`}
                                >
                                    <li className="cursor-pointer">Home</li>
                                </Link>
                                <Link
                                    to="/aboutUs"
                                    className={`transition-all ${location.pathname === "/aboutUs" ? "underline underline-offset-4 decoration-black" : ""
                                        }`}
                                >
                                    <li className="cursor-pointer">About Us</li>
                                </Link>
                                <Link
                                    to="/services"
                                    className={`transition-all ${location.pathname === "/services" ? "underline underline-offset-4 decoration-black" : ""
                                        }`}
                                >
                                    <li className="cursor-pointer">Services</li>
                                </Link>
                                
                            </ul>
                        </div>
                        <div className="hidden sm:flex pr-2 w-[13%] justify-end">
                            <button
                                onClick={contactNavigation}
                                className="w-full max-w-[173px] h-[36px] sm:h-[48px] border-2 border-black bg-[#80BD48] text-black rounded-lg text-[13px] lg:text-base lg:font-medium flex justify-center items-center px-1 hover:bg-white duration-300"
                            >
                                Book Now <span className="pl-1"><LuArrowUpRight /></span>
                            </button>
                        </div>
                    </div>
                </div>

                {/*shows only BELOW 928px */}
                <div className="below-928-show fixed z-40 w-full bg-[#Ffff] h-[91px] px-6 flex items-center sh justify-between drop-shadow-sm">
                    {/* Your small screen navbar content */}

                    <div className="relative z-60 flex items-center justify-between h-[91px] px-6 text-black">
                        <div className="flex items-center gap-8 pl-2 dm-sans font-semibold ">
                            <img
                                src={DymphnaLogoImg}
                                alt="logo"
                                className="w-[50px] sm:w-[65px] h-auto"
                            />
                            <ul className="flex gap-15 text-black">
                                <Link className="hover:underline hover:underline-offset-4 hover:decoration-black transition-all" to="/"><li className="cursor-pointer">Home</li></Link>
                                <Link className="hover:underline hover:underline-offset-4 hover:decoration-black transition-all" to="/aboutUs"><li className="cursor-pointer">About us</li></Link>
                                <Link className="hover:underline hover:underline-offset-4 hover:decoration-black transition-all" to="/services"><li className="cursor-pointer">Services</li></Link>
                            </ul>
                        </div>
                        <div className="hidden sm:flex  justify-end">
                            <button
                                onClick={contactNavigation}
                                className="w-[150px] h-[36px] sm:h-[48px] border-2 border-black bg-[#80BD48] text-black rounded-lg text-[13px] lg:text-base lg:font-medium flex justify-center items-center px-1 hover:bg-white duration-300"
                            >
                                Book Now <span className="pl-1"><LuArrowUpRight /></span>
                            </button>
                        </div>
                    </div>

                </div>



            </div>
        </>


    )
}

export default Navbar
