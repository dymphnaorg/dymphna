import React from 'react'
import Administrator1 from '../assets/Rectangle7.png'
import Administrator2 from '../assets/Rectangle8.png'
import Administrator3 from '../assets/Rectangle9.png'
import ConsultantExperts1 from '../assets/Rectangle6.png'
import ConsultantExperts2 from '../assets/Rectangle10.png'
import ConsultantExperts3 from '../assets/Rectangle11.png'
import ConsultantExperts4 from '../assets/Rectangle12.png'
import ConsultantExperts5 from '../assets/Rectangle13.png'
import ConsultantExperts6 from '../assets/Rectangle15.png'


function HomeAdministration() {
 

    return (
        <div className='my-20 dm-sans'>

            <div className="w-full px-4">
                <div className='flex justify-center' >
                    <h1 style={{ fontWeight: "700" }} className='text-[32px] ' >Administration</h1>
                </div>
                <div className='flex justify-between items-center max-w-[1000px] mx-auto pt-10 gap-4'>
                    <div className="relative w-full ">
                        <img
                            src={Administrator1}
                            alt="Person"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-3 sm:bottom-5 bg-white w-[90px] sm:w-[180px] md:w-[200px] lg:w-[270px] pt-3 sm:pt-3 pb-0 rounded-tr-2xl">
                            <h2 className="sm:text-[18px] text-[11px] font-bold text-black">JISTO KURIAN</h2>
                        </div>
                        <p className='sm:text-[16px] text-[10px] font-light text-black ' >CEO</p>
                    </div>
                    <div className="relative w-full ">
                        <img
                            src={Administrator2}
                            alt="Person"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-3 sm:bottom-5 bg-white w-[90px] sm:w-[180px] md:w-[200px] lg:w-[270px] pt-3 sm:pt-3 pb-0 rounded-tr-2xl">
                            <h2 className="sm:text-[18px] text-[11px]  font-bold text-black">K J KURIAN</h2>
                        </div>
                        <p className='sm:text-[16px] text-[10px] font-light text-black ' >Marketing executive</p>
                    </div>
                    <div className="relative w-full ">
                        <img
                            src={Administrator3}
                            alt="Person"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-3 sm:bottom-5  bg-white w-[90px] sm:w-[180px] md:w-[200px] lg:w-[270px] pt-3 sm:pt-3 pb-0 rounded-tr-2xl">
                            <h2 className="sm:text-[16px] text-[11px]  font-bold text-black">V J LESSAMMA</h2>
                        </div>
                        <p className='sm:text-[16px] text-[10px] font-light text-black ' >Managing director</p>
                    </div>
                </div>
            </div>
            <div className='pt-20' >
                <div className='flex justify-start px-10'>
                    <h1 style={{ fontWeight: "700" }} className='text-[24px] ' >Consultant Experts</h1>
                </div>

                <div className="overflow-hidden w-full pt-10">
                    <div className="flex animate-scroll whitespace-nowrap">
                        {[ConsultantExperts1, ConsultantExperts2, ConsultantExperts3, ConsultantExperts4, ConsultantExperts5, ConsultantExperts6].map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`slide-${index}`}
                                className="w-auto h-40 sm:h-52 md:h-60 object-contain mx-2"
                            />
                        ))}

                        {[ConsultantExperts1, ConsultantExperts2, ConsultantExperts3, ConsultantExperts4, ConsultantExperts5, ConsultantExperts6].map((img, index) => (
                            <img
                                key={`dup-${index}`}
                                src={img}
                                alt={`dup-slide-${index}`}
                                className="w-auto h-40 sm:h-52 md:h-60 object-contain mx-2"
                            />
                        ))}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default HomeAdministration
