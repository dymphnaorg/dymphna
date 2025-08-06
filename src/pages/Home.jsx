import React from 'react'
import homeIntroImg from '../assets/Group37.png'
import { LuArrowUpRight } from "react-icons/lu";
import homeImg2 from '../assets/Rectangle5.png'
import HomeServiceSection from '../HomeComponents/HomeServiceSection';
import HomeAdministration from '../HomeComponents/HomeAdministration';
import HomeGeroPsycology from '../HomeComponents/HomeGeroPsycology';
import HomeBenefitSection from '../HomeComponents/HomeBenefitSection';
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();

    const serviceNavigation = () => {
        navigate('/services');
    };

  return (
    <div className='' >

      <div className="flex flex-col items-center justify-start px-10 pt-30 md:hidden">
        {/* Heading */}
        <h1 className="text-[28px] sm:text-[32px] quicksand font-bold leading-tight text-left">
          Because Every Mind Matters <br /> Bringing Mental Health to Every Corner.
        </h1>

        {/* Image */}
        <div className="w-full mt-6 flex justify-center">
          <img className="w-full max-w-[90%]" src={homeIntroImg} alt="Intro" />
        </div>

        {/* Buttons */}
        <div className="flex flex-col items-center gap-5 pt-8">
          <button onClick={serviceNavigation} className="w-full max-w-[250px] h-[40px] sm:h-[45px] border-2 border-black bg-[#80BD48] text-black rounded-lg font-medium flex justify-center items-center px-3 hover:bg-white duration-300">
            Explore our services <span className="pl-1"><LuArrowUpRight /></span>
          </button>
          <button className="w-full max-w-[250px] h-[40px] sm:h-[45px] text-black rounded-lg font-medium flex justify-center items-center px-3">
            Try Stress Calculator <span className="pl-1"><LuArrowUpRight /></span>
          </button>
        </div>
        <div className='flex w-full text-left  pt-8 text-[12px] text-[#4C4C4C]' >
          <p>At Dymphna, we’re transforming rural mental health care through compassion, innovation, and accessibility. From stress management to psychotherapy, we’re here to support your journey toward emotional well-being—wherever you are.</p>
        </div>

      </div>


      <div className="hidden md:flex md:pt-10 lg:pt-0 flex-col md:flex-row items-center justify-between px-10">
        {/* left text section */}
        <div className="flex flex-col md:w-[45%] justify-between min-h-[80vh]">
          <div></div>
          <h1 className="text-[50px] quicksand font-bold md:text-[40px] ">Because Every Mind Matters  Bringing Mental Health to Every Corner.</h1>
          <div className='flex items-center gap-3' >
            <button onClick={serviceNavigation} className="w-full max-w-[200px]  h-[36px] sm:h-[45px] border-2 border-black bg-[#80BD48]  text-black rounded-lg text-[13px] lg:text-base lg:font-medium

 flex justify-center items-center px-1 hover:bg-white duration-300">
              Explore our services <span className='pl-1' ><LuArrowUpRight /></span>
            </button>
            <button className="w-full max-w-[200px]  h-[36px] sm:h-[45px] text-black rounded-lg text-[13px] lg:text-base lg:font-medium

 flex justify-center items-center">
              Try Stress Calculator <span className='pl-1' ><LuArrowUpRight /></span>
            </button>
          </div>
        </div>
        {/* right image section */}
        <div className="md:w-[50%] flex justify-center">
          <img className="w-[100%]" src={homeIntroImg} alt="Intro" />
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
                <button className="w-full max-w-[200px]  h-[36px] sm:h-[45px] border-2 border-black bg-[#80BD48] text-black rounded-lg text-[13px] lg:text-base lg:font-medium
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
      <HomeGeroPsycology />

      <HomeBenefitSection />

    </div>
  )
}

export default Home