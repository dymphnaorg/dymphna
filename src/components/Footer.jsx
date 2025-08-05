import React from 'react'
import footerBg from '../assets/Rectangle23.png'
import footerImg from '../assets/Group34.png'
import { LuArrowUpRight } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { GoArrowUp } from "react-icons/go";
import '../styles/element.css'






function Footer() {
  return (

    <div className='flex sm:px-10 px-5 w-full dm-sans'  >
      <div className='footer-elemnent' >
        <div className='flex w-full h-full sm:pt-10 pt-5 sm:pl-10 pl-5 sm:pb-10 pb-5' >
          <div className='w-[20%] flex' >
            <div>
              <img src={footerImg} alt="" className='items-start w-[70px] sm:w-[70px] md:w-[100px] lg:w-[130px] ' />
            </div>

          </div>
          <div className='w-[80%] flex' >
            <div className='w-[50%] flex items-center justify-center '>
              <div className='flex gap-7' >
                <div>
                  <div>
                    <h1 style={{ fontWeight: "700" }} className='text-[20px] text-[#696969] ' >SERVICE</h1>
                    <div className='pt-3 flex flex-col gap-2 text-white' >
                      <p>Psychotherapy and Counseling</p>
                      <p>Psychodiagnostics</p>
                      <p>Remedial training</p>
                      <p>Career Guidance</p>
                    </div>

                  </div>
                  <div className='pt-5'>
                    <h1 style={{ fontWeight: "700" }} className='text-[20px] text-[#696969]'>
                      OTHER SERVICE
                    </h1>
                    <div className='pt-3 flex flex-col gap-2 text-white' >
                      <p>Sports psychology</p>
                      <p>Internships</p>
                    </div>

                  </div>
                </div>
                <div  >
                  <h1 style={{ fontWeight: "700" }} className='text-[20px] text-[#696969]' >
                    COMPANY
                  </h1>
                  <div className='pt-3 text-white' >
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Contact Us</p>
                  </div>

                </div>
              </div>
            </div>

            <div className='w-[50%] flex flex-col justify-between items-end text-right gap-4'>
              <button className="w-full max-w-[160px] h-[36px] sm:h-[45px] border-2 border-black bg-[#80BD48] text-black rounded-lg font-medium flex justify-center items-center px-1 hover:bg-white duration-300">
                Book Now <span className='pl-1'><LuArrowUpRight /></span>
              </button>

              <div className='text-[48px] text-white font-bold'>
                Because Every Mind Matters.
              </div>

              <div className='flex gap-3'>
                <div className="w-10 h-10 border border-[#6D6D6D] text-black flex items-center justify-center rounded-lg">
                  <FaInstagram />
                </div>
                <div className="w-10 h-10 border border-[#6D6D6D] text-black flex items-center justify-center rounded-lg">
                  <FiFacebook />
                </div>
                <div className="w-10 h-10 border border-[#6D6D6D] text-black flex items-center justify-center rounded-lg">
                  <FaXTwitter />
                </div>
              </div>


            </div>

          </div>
          <div className='w-[140px]' ></div>
        </div>
        <div className='footer-cutting flex items-center justify-center text-[50px] stroke-[1]' >
          <GoArrowUp/>
        </div>
      </div>

    </div>

  )
}

export default Footer
