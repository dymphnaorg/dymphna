import React, { useState } from 'react'
import img1 from '../assets/galleryImage0.jpeg'
import img2 from '../assets/galleryImage1.jpeg'
import img3 from '../assets/galleryImage2.jpeg'
import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from "react-icons/io";

const Gallery = () => {
    const images = [img1, img2, img3];
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeIndex, setActiveIndex] = useState(1);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className='w-full py-10 sm:py-20 px-5 overflow-hidden bg-white'>
            <div className='flex justify-center mb-10'>
                <h1 className="text-[20px] sm:text-[32px] font-bold quicksand">Our Gallery</h1>
            </div>

            <div className="relative w-full max-w-[1000px] mx-auto h-[300px] sm:h-[400px] flex items-center justify-center">

                {/* Previous Button */}
                <button
                    onClick={prevSlide}
                    className="absolute left-2 sm:left-10 z-30 bg-white/80 p-3 rounded-full shadow-md hover:bg-white transition-all cursor-pointer"
                >
                    <IoIosArrowBack size={24} />
                </button>

                {/* Images */}
                {images.map((img, index) => {
                    // Determine position
                    let positionStyle = {};
                    let isCenter = index === activeIndex;
                    let isLeft = index === (activeIndex - 1 + images.length) % images.length;
                    let isRight = index === (activeIndex + 1) % images.length;

                    if (isCenter) {
                        positionStyle = {
                            zIndex: 20,
                            opacity: 1,
                            transform: 'translateX(0) scale(1.1)',
                            cursor: 'pointer'
                        };
                    } else if (isLeft) {
                        positionStyle = {
                            zIndex: 10,
                            opacity: 0.6,
                            transform: 'translateX(-60%) scale(0.85)',
                            cursor: 'pointer'
                        };
                    } else if (isRight) {
                        positionStyle = {
                            zIndex: 10,
                            opacity: 0.6,
                            transform: 'translateX(60%) scale(0.85)',
                            cursor: 'pointer'
                        };
                    } else {
                        // Fallback for hidden if we had more images
                        positionStyle = {
                            zIndex: 0,
                            opacity: 0,
                            transform: 'scale(0)',
                        };
                    }

                    return (
                        <img
                            key={index}
                            src={img}
                            alt={`Gallery ${index}`}
                            className="absolute w-[80%] sm:w-[45%] h-full object-cover rounded-[30px] shadow-xl transition-all duration-500 ease-in-out left-0 right-0 mx-auto"
                            style={positionStyle}
                            onClick={() => {
                                if (isCenter) {
                                    setSelectedImage(img);
                                } else {
                                    setActiveIndex(index);
                                }
                            }}
                        />
                    );
                })}

                {/* Next Button */}
                <button
                    onClick={nextSlide}
                    className="absolute right-2 sm:right-10 z-30 bg-white/80 p-3 rounded-full shadow-md hover:bg-white transition-all cursor-pointer"
                >
                    <IoIosArrowForward size={24} />
                </button>
            </div>

            {/* Dots */}
            <div className='flex justify-center gap-2 mt-12'>
                {images.map((_, idx) => (
                    <div
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`w-2 h-2 rounded-full cursor-pointer transition-all ${idx === activeIndex ? 'bg-[#80BD48] w-6' : 'bg-gray-300'}`}
                    ></div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-5" onClick={() => setSelectedImage(null)}>
                    <div className="relative max-w-5xl w-full max-h-screen flex justify-center">
                        {/* Close Button - positioned absolute relative to the modal container or fixed top-right */}
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                        >
                            <IoMdClose size={40} />
                        </button>

                        <img
                            src={selectedImage}
                            alt="Full Screen View"
                            className="max-w-full max-h-[90vh] object-contain rounded-lg"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
                        />
                    </div>
                </div>
            )}

        </div>
    )
}

export default Gallery