import React, { useState } from 'react'
import DymphnaLogoImg from '../assets/dymphna.png'
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { LuArrowUpRight } from "react-icons/lu";
import { Link, useNavigate } from 'react-router-dom';
import '../styles/element.css'
import navbar from '../assets/navbar.png'
import navbarsmall from '../assets/navbarsmall.png'



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
            {/* Small Screen Navbar (below 768px) */}
            <div className="fixed top-0 left-0 w-full h-[91px] z-40 block md:hidden">
                {/* Small screen image */}
                <img
                    src={navbarsmall}
                    alt="Navbar Small"
                    className="absolute inset-0 w-full h-full object-cover drop-shadow-sm z-0"
                />

                {/* Small screen content */}
                <div className="relative z-10 flex items-center justify-between h-full px-4 text-black">
                    <div className='flex gap-5 items-center' >
                        <img
                            src={DymphnaLogoImg}
                            alt="Logo"
                            className="w-[45px] h-auto"
                        />
                        <HiMiniBars3BottomRight className="text-3xl" />
                    </div>

                    <div >
                        <button
                            onClick={contactNavigation}
                            className="w-full max-w-[173px] h-[48px] border-2 border-black bg-[#80BD48] text-black rounded-lg font-medium flex justify-center items-center px-1 hover:bg-white duration-300"
                        >
                            Book Now <span className="pl-1"><LuArrowUpRight /></span>
                        </button>
                    </div>
                </div>
            </div>



            <div className='hidden md:block z-40 fixed w-[100%] ' >
                <img src={navbar} className='absolute navbar w-full h-[91px] drop-shadow-sm' alt="" />
                <div className='relative z-60 flex items-center justify-between  h-[91px] px-6 text-black' >
                    <div className="flex items-center gap-8  pl-2 dm-sans font-semibold w-[80%]">
                        <img
                            src={DymphnaLogoImg}
                            alt="logo"
                            className="w-[50px] sm:w-[65px] h-auto"
                        />
                        <ul className="flex gap-15  text-black">
                            <Link to="/" ><li className="cursor-pointer">Home</li> </Link>
                            <Link to="/aboutUs" ><li className="cursor-pointer">About us</li></Link>
                            <Link to='/services' ><li className="cursor-pointer">Services</li></Link>
                        </ul>
                    </div>
                    <div className="hidden sm:flex pr-2 w-[13%] justify-end">
                        <button onClick={contactNavigation} className="w-full max-w-[173px]  h-[36px] sm:h-[48px] border-2 border-black bg-[#80BD48] text-black rounded-lg text-[13px] lg:text-base lg:font-medium

 flex justify-center items-center px-1 hover:bg-white duration-300">
                            Book Now <span className='pl-1' ><LuArrowUpRight /></span>
                        </button>
                    </div>
                </div>
            </div>

        </>


    )
}

export default Navbar
