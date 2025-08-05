import React from 'react'
import { LuPhone } from "react-icons/lu";
import { FaRegEnvelope } from "react-icons/fa";
import contactimg from "../assets/Rectangle19(3).png"



function ContactUs() {
  return (
    <div className='dm-sans' >
      <section className="bg-[#343434] text-white ">
        <div className='p-10' >
          <div className='p-5 flex w-full gap-10'>
            <div className='w-[30%] flex flex-col justify-between'  >
              <h1 className='flex flex-start' >Contact</h1>
              <div className='flex flex-col gap-4 flex-center text-[12px] md:text-[16px] lg:text-[16px] ' style={{ fontWeight: "500" }} >
                <div className='flex flex-col gap-2 flex-center' >
                  <h1>Address:</h1>
                  <p>Dymphna – Counselling and PsychotherapyVadakkenchery, Palakkad</p>
                </div>

                <div className='flex flex-col gap-2' >
                  <div className='flex gap-2 items-center' >
                    <LuPhone />
                    <p>8943340620</p>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <FaRegEnvelope />
                    <p>dymphnapsy@gmail.com</p>
                </div>
              </div>


              </div>
            </div>

            <div className='w-[70%]' >
              <h1 className='max-w-[500px] text-[60px]' style={{ fontWeight: "500" }} >We’d love to hear from you.
              </h1>
              <p className='text-[12px] md:text-[17px] lg:text-[20px]' >Your thoughts, questions, or feedback help us grow. Whether it’s a suggestion, concern, or just a hello
                we’re here to listen.</p>


            </div>
          </div>
        </div>

        <img src={contactimg} className='pb-15'  alt="" />
      </section>

    </div>
  )
}

export default ContactUs
