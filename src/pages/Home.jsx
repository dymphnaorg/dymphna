import React, { useState } from 'react'
import homeIntroImg from '../assets/Group37.png'
import { LuArrowUpRight } from "react-icons/lu";
import homeImg2 from '../assets/Rectangle5.png'
import HomeServiceSection from '../HomeComponents/HomeServiceSection';
import HomeAdministration from '../HomeComponents/HomeAdministration';
import HomeGeroPsycology from '../HomeComponents/HomeGeroPsycology';
import HomeBenefitSection from '../HomeComponents/HomeBenefitSection';
import { useNavigate } from 'react-router-dom';
import HomStressCalculator from '../HomeComponents/HomStressCalculator';
import '../styles/element.css'
import Gallery from '../HomeComponents/Gallery';


function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const handleClose = () => setShowPopup(false);
  const navigate = useNavigate();
  const serviceNavigation = () => {
    navigate('/services');
  };

  const aboutNavigation = () => {
    navigate('/aboutUs');
    window.scrollTo({ top: 0, behavior: "smooth" });
  }


  return (
    <div className='' >
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-20 backdrop-blur-sm p-10">
          <HomStressCalculator />
        </div>
      )}

      <div className="flex flex-col items-center justify-start px-10 pt-30 md:hidden">
        {/* Heading */}
        <h1 className="text-[28px] sm:text-[32px] quicksand font-bold leading-tight text-left">
          Because Every Mind Matters <br /> Bringing Mental Health to Every Corner.
        </h1>

        <div className="w-full mt-6 flex justify-center">
          <div className="relative w-full max-w-[90%]">
            {/* Image */}
            <img
              className="w-full"
              src={homeIntroImg}
              alt="Intro"
            />

            {/* Overlay text container */}
            <div className="absolute bottom-6 left-1/2 w-full transform -translate-x-1/2 flex gap-2 px-3">
              <div className='flex-col' >
                <span className="fluid-fill   px-7 py-2 border-1 border-white text-white rounded-full text-[11px] font-medium">Resilience</span>
                <div className='flex gap-1' >
                  <span className=" fluid-fill  px-7 py-2 border-1 border-white text-white rounded-full text-[11px] md:text-[11px] font-medium">Trust</span>
                  <span className="fluid-fill   px-7 py-2 border-1 border-white text-white rounded-full text-[11px] font-medium">Understanding</span>
                </div>
              </div>




            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col items-center gap-5 pt-8">
          <button onClick={serviceNavigation} className="w-full max-w-[250px] h-[40px] sm:h-[45px] border-2 border-black bg-[#80BD48] text-black rounded-lg font-medium flex justify-center items-center px-3 hover:bg-white duration-300">
            Explore our services <span className="pl-1"><LuArrowUpRight /></span>
          </button>
          <button onClick={() => setShowPopup(true)} className="w-full max-w-[250px] h-[40px] sm:h-[45px] text-black rounded-lg font-medium flex justify-center items-center px-3">
            Try Stress Calculator <span className="pl-1"><LuArrowUpRight /></span>
          </button>
        </div>
        <div className='flex w-full text-left  pt-8 text-[10px] sm:text-[20px] text-[#4C4C4C]' >
          <p>At Dymphna, we’re transforming rural mental health care through compassion, innovation, and accessibility. From stress management to psychotherapy, we’re here to support your journey toward emotional well-being—wherever you are.</p>
        </div>

      </div>
      <div className="hidden md:flex md:pt-10 lg:pt-0 md:flex-row items-stretch justify-between px-10">

        {/* left text section */}
        <div className="flex flex-col md:w-[45%] justify-between">
          <div></div>
          <div className='max-w-[450px]' >
            <h1 className="text-[54px] quicksand font-bold md:text-[40px] ">Because Every Mind Matters  Bringing Mental Health to Every Corner.</h1>
          </div>

          <div className='flex items-center gap-3' >
            <button onClick={serviceNavigation} className="w-full max-w-[200px]  h-[36px] sm:h-[45px] border-2 border-black bg-[#80BD48]  text-black rounded-lg text-[13px] lg:text-base lg:font-medium

 flex justify-center items-center px-1 hover:bg-white duration-300">
              Explore our services <span className='pl-1' ><LuArrowUpRight /></span>
            </button>
            <button onClick={() => setShowPopup(true)} className="w-full max-w-[200px]  h-[36px] sm:h-[45px] text-black rounded-lg text-[13px] lg:text-base lg:font-medium

 flex justify-center items-center">
              Try Stress Calculator <span className='pl-1' ><LuArrowUpRight /></span>
            </button>
          </div>
        </div>


        {/* right image section */}
        <div className="md:w-[50%] w-full flex justify-center relative">
          <div className='"relative w-full max-w-[90%]"' >
            <img className="w-[100%]" src={homeIntroImg} alt="Intro" />
          </div>
          <div className="absolute bottom-[5%] left-1/2 w-full transform -translate-x-1/2 flex gap-1  flex-wrap pl-5 justify-start">
            <span className=" fluid-fill   px-[2vw] py-[0.5vw] border-1 border-white text-white rounded-full md:text-[15px] text-lg font-medium">Resilience</span>
            <span className="fluid-fill   px-[2vw] py-[0.5vw] border-1 border-white text-white rounded-full md:text-[15px] text-lg font-medium">Trust</span>
            <span className="fluid-fill   px-[2vw] py-[0.5vw] border-1 border-white text-white rounded-full md:text-[15px] text-lg  font-medium">Understanding</span>
          </div>
        </div>
      </div>
      <div className='hidden md:flex  pt-35 px-10 pb-20 gap-4' >
        <div className='w-[50%]' >
          <img src={homeImg2} alt="" />
        </div>
        <div className='w-[50%] dm-sans flex flex-col gap-7'>
          <div className='flex items-start max-w-[565px]' >
            <div>
              <div className='flex items-center gap-4' >
                <div className='w-5 h-5 rounded-full bg-[#BBD74F]' ></div>
                <h1 className='text-[29px]' style={{ fontWeight: "700" }} >Dymphna</h1>
              </div>
              <p className='text-[21px] font-medium pt-4' >Dymphna is a mental health initiative focused on bridging the accessibility gap in rural mental health care.</p>
            </div>
          </div>
          <div className="w-full h-[.9px] flex">
            <div className="w-[60%] bg-black"></div>
            <div className="w-[40%] bg-[#8383834c]"></div>
          </div>
          <div className="flex justify-end w-full">
            <div className="max-w-[565px]">
              <p className="text-[21px] font-medium pt-4 text-[#4C4C4C]">
                Started as an online support initiative during the COVID-19 pandemic, it has now grown into a full-fledged mental health services organization.
              </p>
              <div className='pt-5' >
                <button onClick={aboutNavigation} className="w-full max-w-[200px]  h-[36px] sm:h-[45px] border-2 border-black bg-[#80BD48] text-black rounded-lg text-[13px] lg:text-base lg:font-medium
flex justify-center items-center px-1 hover:bg-white duration-300">
                  View More details <span className='pl-1' ><LuArrowUpRight /></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeServiceSection />
      <HomeAdministration />
      <Gallery />
      <HomeGeroPsycology />
      <HomeBenefitSection />

    </div>
  )
}

export default Home