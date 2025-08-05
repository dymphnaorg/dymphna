import React, { useState } from 'react'
import DymphnaLogoImg from '../assets/dymphna.png'
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { LuArrowUpRight } from "react-icons/lu";
import { Link, useNavigate } from 'react-router-dom';



function Navbar() {

    const [showSidebar, setShowSidebar] = useState(false);
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const navigate = useNavigate();

    const contactNavigation = () => {
        navigate('/contactUs');
    };

    return (

        <>
            <nav className="bg-white h-[91px] flex items-center justify-center shadow dm-sans">
                <div className="w-full flex items-center justify-between">
                    <div className='flex items-center gap-15 sm:pl-20 pl-6 dm-sans font-semibold w-[80%]' >
                        {/* Logo */}
                        <img
                            src={DymphnaLogoImg}
                            alt="logo"
                            className="w-[50px] sm:w-[65px] h-auto"
                        />

                        {/* Desktop Nav */}
                        <ul className="hidden lg:flex gap-15  text-black">
                            <Link to="/" ><li className="cursor-pointer">Home</li> </Link>
                            <Link to="/aboutUs" ><li className="cursor-pointer">About us</li></Link>
                            <Link to='/services' ><li className="cursor-pointer">Services</li></Link>
                        </ul>
                    </div>


                    {/* Buttons - Hidden on small screens */}
                    <div className="hidden sm:flex pr-8 w-[14%] justify-end">

                        <button onClick={contactNavigation} className="w-full max-w-[163px]  h-[36px] sm:h-[48px] border-2 border-black bg-[#80BD48] text-black rounded-lg font-medium flex justify-center items-center px-1 hover:bg-white duration-300">
                            Book Now <span className='pl-1' ><LuArrowUpRight /></span>
                        </button>
                    </div>


                    {/* Hamburger icon (mobile) */}
                    <div className="block lg:hidden pr-5" onClick={() => setShowSidebar(!showSidebar)}>
                        {showSidebar ? (
                            <RxCross2 className="text-3xl" />
                        ) : (
                            <HiMiniBars3BottomRight className="text-3xl" />
                        )}
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {showSidebar && (
                <div className="bg-white w-full shadow-lg xl:hidden h-[340px] sm:h-[230px] ">
                    <ul className="flex flex-col items-center gap-4 font-medium text-gray-700">
                        <Link to="/" ><li className="cursor-pointer">Home</li> </Link>
                        <Link to="/aboutUs" ><li className="cursor-pointer">About us</li></Link>
                        <Link to='/services' ><li className="cursor-pointer">Services</li></Link>
                        {/*  <div className="sm:hidden flex flex-col gap-4 items-center mt-6">
                            <button className="w-[150px] h-[39px] bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700">
                                Registration
                            </button>
                            <button className="w-[150px] h-[39px] border border-pink-600 text-pink-600 rounded-full font-medium hover:bg-pink-50">
                                Sign In
                            </button>
                        </div> */}
                    </ul>

                </div>
            )}
        </>


    )
}

export default Navbar
