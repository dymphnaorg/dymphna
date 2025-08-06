import React from 'react'
import footerBg from '../assets/Rectangle23.png'
import footerImg from '../assets/Group34.png'
import { LuArrowUpRight } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { GoArrowUp } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import '../styles/element.css'
import { Link, useNavigate } from 'react-router-dom';



function Footer() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigate = useNavigate();
  const contactNavigation = () => {
    navigate('/contactUs');
  };

  return (

    <div className='flex sm:p-10 p-5 w-full dm-sans'  >
      <div className='footer-elemnent' >

        <div className='hidden md:flex w-full h-full sm:pt-10 pt-5 sm:pl-10 pl-5 sm:pb-10 pb-5' >
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
                      <ul>
                        <li><a className='hover:text-[#80BD48] transition-all' href="/services#PsychotherapyandCounseling">Psychotherapy and Counseling</a></li>
                        <li><a className='hover:text-[#80BD48] transition-all' href="/services#Psychodiagnostics">Psychodiagnostics</a></li>
                        <li><a className='hover:text-[#80BD48] transition-all' href="/services#Remedialtraining">Remedial training</a></li>
                        <li><a className='hover:text-[#80BD48] transition-all' href="/services#CareerGuidance">Career Guidance</a></li>
                      </ul>

                    </div>

                  </div>
                  <div  className='pt-5'>
                    <h1 style={{ fontWeight: "700" }} className='text-[20px] text-[#696969]'>
                      OTHER SERVICE
                    </h1>
                    <div className='pt-3 flex flex-col gap-2 text-white' >
                     <a className='hover:text-[#80BD48] transition-all' href="/services#otherServices"><p >Sports psychology</p></a> 
                     <a className='hover:text-[#80BD48] transition-all' href="/services#otherServices"><p>Internships</p></a> 
                    </div>

                  </div>
                </div>
                <div  >
                  <h1 style={{ fontWeight: "700" }} className='text-[20px] text-[#696969]' >
                    COMPANY
                  </h1>
                  <div className='pt-3 text-white' >
                    <Link to="/aboutUs" className='hover:text-[#80BD48] transition-all' > <p>About Us</p></Link>
                    <Link to="/services" className='hover:text-[#80BD48] transition-all' > <p>Careers</p></Link>
                    <Link to="/contactUs" className='hover:text-[#80BD48] transition-all' ><p>Contact Us</p></Link>
                  </div>

                </div>
              </div>
            </div>

            <div className='w-[50%] flex flex-col justify-between items-end text-right gap-4'>
              <button onClick={contactNavigation} className="w-full max-w-[160px] h-[36px] sm:h-[45px] border-2 border-black bg-[#80BD48] text-black rounded-lg text-[13px] lg:text-base lg:font-medium
 flex justify-center items-center px-1 hover:bg-white duration-300">
                Book Now <span className='pl-1'><LuArrowUpRight /></span>
              </button>

              <div className='text-[48px] text-white font-bold'>
                Because Every Mind Matters.
              </div>

              <div className='flex gap-3'>
                <div className="w-10 h-10 border border-[#6D6D6D] text-black flex items-center justify-center rounded-lg hover:text-[#6D6D6D] transition-all">
                  <a href="https://www.instagram.com/dymphnapsy/?hl=en"><FaInstagram /></a>
                </div>
                <div className="w-10 h-10 border border-[#6D6D6D] text-black flex items-center justify-center rounded-lg hover:text-[#6D6D6D] transition-all">
                  <a href="https://www.facebook.com/share/1ChzWMYXsU/"><FiFacebook /></a>
                </div>
                <div className="w-10 h-10 border border-[#6D6D6D] text-black flex items-center justify-center rounded-lg hover:text-[#6D6D6D] transition-all">
                  <a href="https://wa.me/8943340620"><FaWhatsapp /></a>
                </div>
                <div className="w-10 h-10 border border-[#6D6D6D] text-black flex items-center justify-center rounded-lg hover:text-[#6D6D6D] transition-all">
                  <a href="https://www.google.com/maps/place/10%C2%B035'24.1%22N+76%C2%B028'35.3%22E/@10.5900192,76.4738884,17z/data=!3m1!4b1!4m4!3m3!8m2!3d10.5900192!4d76.4764633?hl=en&entry=ttu&g_ep=EgoyMDI1MDgwMy4wIKXMDSoASAFQAw%3D%3D"><SiGooglemaps /></a>
                </div>

              </div>
            </div>

          </div>
          <div className='w-[140px]' ></div>
        </div>
        <div onClick={scrollToTop} className='footer-cutting flex items-center justify-center text-[50px] stroke-[1] hover:text-[#80BD48] transition-all' >
          <GoArrowUp />
        </div>


        {/* Small screen Footer */}

        <div className='block md:hidden p-10' >
          <div className="flex justify-between items-center ">
            <img src={footerImg} alt="Logo" className="w-[90px]" />
            <button onClick={contactNavigation} className="border-2 border-black bg-[#80BD48] text-black rounded-lg font-medium flex items-center justify-center px-4 py-2 hover:bg-white duration-300 text-sm">
              Book now <span className="pl-1"><LuArrowUpRight /></span>
            </button>
          </div>

          {/* Links Section */}
          <div className="flex gap-10 text-white text-sm pt-6">
            {/* Services */}
            <div>
              <h1 className="text-[#696969] font-semibold text-[14px] mb-2">SERVICE</h1>
              <ul className="flex flex-col gap-1">
                <a className='hover:text-[#80BD48] transition-all' href="/services#PsychotherapyandCounseling"><li >Psychotherapy and Counseling</li></a>
                <a className='hover:text-[#80BD48] transition-all' href="/services#Psychodiagnostics"><li>Psychodiagnostics</li></a>
                <a className='hover:text-[#80BD48] transition-all' href="/services#Remedialtraining"><li>Remedial training</li></a>
                <a className='hover:text-[#80BD48] transition-all' href="/services#CareerGuidance"><li>Career Guidance</li></a>
              </ul>

              <h1 className="text-[#696969] font-semibold text-[14px] mt-4 mb-2">OTHER SERVICE</h1>
              <ul className="flex flex-col gap-1">
                <a className='hover:text-[#80BD48] transition-all' href="/services#otherServices"><li>Sports psychology</li></a>
                <a className='hover:text-[#80BD48] transition-all' href="/services#otherServices"><li>Internships</li></a>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h1 className="text-[#696969] font-semibold text-[14px] mb-2">COMPANY</h1>
              <ul className="flex flex-col gap-1">
                <Link to="/aboutUs" className='hover:text-[#80BD48] transition-all' > <p>About Us</p></Link>
                <Link to="/services" className='hover:text-[#80BD48] transition-all' > <p>Careers</p></Link>
                <Link to="/contactUs" className='hover:text-[#80BD48] transition-all' ><p>Contact Us</p></Link>
              </ul>
            </div>
          </div>

          {/* Quote */}
          <div className="text-white font-semibold text-[20px] mt-8 leading-tight">
            Because Every Mind Matters.
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 mt-6">
            <div className="w-10 h-10 border border-[#6D6D6D] text-black flex items-center justify-center rounded-lg hover:text-[#6D6D6D] transition-all">
              <a href="https://www.instagram.com/dymphnapsy/?hl=en"><FaInstagram /></a>
            </div>
            <div className="w-10 h-10 border border-[#6D6D6D] text-black flex items-center justify-center rounded-lg hover:text-[#6D6D6D] transition-all">
              <a href="https://www.facebook.com/share/1ChzWMYXsU/"><FiFacebook /></a>
            </div>
            <div className="w-10 h-10 border border-[#6D6D6D] text-black flex items-center justify-center rounded-lg hover:text-[#6D6D6D] transition-all">
              <a href="https://wa.me/8943340620"><FaWhatsapp /></a>
            </div>
            <div className="w-10 h-10 border border-[#6D6D6D] text-black flex items-center justify-center rounded-lg hover:text-[#6D6D6D] transition-all">
              <a href="https://www.google.com/maps/place/10%C2%B035'24.1%22N+76%C2%B028'35.3%22E/@10.5900192,76.4738884,17z/data=!3m1!4b1!4m4!3m3!8m2!3d10.5900192!4d76.4764633?hl=en&entry=ttu&g_ep=EgoyMDI1MDgwMy4wIKXMDSoASAFQAw%3D%3D"><SiGooglemaps /></a>
            </div>
          </div>

          {/* Up Arrow */}
          <div onClick={scrollToTop} className='footer-cutting flex items-center justify-center text-[50px] stroke-[1] hover:text-[#80BD48] transition-all' >
            <GoArrowUp />
          </div>

        </div>


      </div>

    </div>

  )
}

export default Footer
