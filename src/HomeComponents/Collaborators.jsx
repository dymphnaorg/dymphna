import React from 'react'

const Collaborators = () => {
    return (
        <>
            <div className='sm:pt-20 pt-13 flex justify-center' >
                <div className='about-element'>
                    <div className='cutting-top-right'></div>
                    <div className='flex flex-col items-center py-4' >

                        {/* Merged Header Section */}
                        <div className='flex w-full p-8' >
                            <div className='w-[70%] md:w-[40%]' >
                                <h1 className='text-[12px] md:text-[16px] lg:text-[20px] text-white' style={{ fontWeight: "700" }} >Collaborators</h1>
                                <p className='text-[#969696] text-[12px] md:text-[16px] lg:text-[16px]' >We work in collaboration with qualified psychologists, therapists, educators, and healthcare professionals to provide comprehensive, client-centered care. Through teamwork and shared expertise, we ensure holistic support tailored to individual needs.</p>
                            </div>
                            <div className='w-[30%] md:w-[60%]' ></div>
                        </div>

                        {/* Merged Content Section */}
                        <div className='flex w-full sm:p-8 p-5 items-center' >
                            <div className='w-[20%] md:w-[40%]' ></div>
                            <div className='w-[80%] md:w-[60%] flex flex-col md:flex-row gap-5' >
                                <div className='flex flex-col gap-4 w-full md:w-[50%] items-center text-center' >
                                    <iframe
                                        src="https://maps.google.com/maps?q=10.7378449,76.6515824&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                        className="w-full max-w-[200px] h-[100px] rounded-lg shadow-sm"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                    <hr className="w-full border-t border-[#5B5B5B] " />
                                    <p className='text-center text-[#969696] text-[12px] md:text-[16px] lg:text-[16px]'>
                                        Ayur Palana Address <br />
                                        Paalana Road, Kannadi-I, Kerala
                                    </p>
                                </div>
                                <div className='flex flex-col gap-4 w-full md:w-[50%] items-center text-center' >
                                    <iframe
                                        src="https://maps.google.com/maps?q=10.9859185,76.4513209&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                        className="w-full max-w-[200px] h-[100px] rounded-lg shadow-sm"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                    <hr className="w-full border-t border-[#5B5B5B] " />
                                    <p className='text-center text-[#969696] text-[12px] md:text-[16px] lg:text-[16px]'>
                                        Sravana Speech and Hearing centre <br />
                                        NKH plaza, Changaleeri Rd, opposite to New Alma Hospital Road, Kodathippadi
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='cutting-bottom-left'></div>


                </div>

            </div>
        </>
    )
}

export default Collaborators