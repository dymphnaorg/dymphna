import React, { useState } from 'react'
import { LuPhone } from "react-icons/lu";
import { FaRegEnvelope, FaCircle } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";
import contactimg from "../assets/Rectangle19(3).png"
import contactimg2 from "../assets/Rectangle19(2).png"
import { sendContactMessageApi } from '../services/allApi';

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if ((name === "firstName" || name === "lastName") && !/^[A-Za-z\s]*$/.test(value)) {
      return;
    }

    if (name === "phone" && !/^[0-9]*$/.test(value)) {
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);


    const payload = {
      fullName: formData.firstName + " " + formData.lastName,
      email: formData.email,
      phoneNumber: formData.phone,
      message: "Contact form submission"
    };

    try {
      const result = await sendContactMessageApi(payload);

      if (result.status === 200) {
        alert("Thanks for reaching out! We'll get back to you soon.");
        setFormData({ firstName: "", lastName: "", email: "", phone: "" });
        setErrors({});
      } else {
        alert("Message sending failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='dm-sans' >
      <section className="bg-[#343434] text-white ">
        {/* large and medium screen design */}
        <div className='p-10 hidden md:block pt-30' >
          <div className='p-5 pb-20 flex w-full gap-10'>
            <div className='w-[30%] flex flex-col '  >
              <div className='flex items-center gap-2 md:gap-2 l:gap-4' >
                <FaCircle className="text-[#80BD48] w-2 h-2 sm:md:w-3 sm:md:h-3 md:w-4 md:h-4 lg:w-4 lg:h-4" />
                <h1 style={{ fontWeight: "700" }} className="text-sm md:text-[30px] lg:text-[40px]">
                  Contact Us
                </h1>
              </div>
              <div className='flex-1 flex  justify-center flex-col gap-4  text-[12px] md:text-[16px] lg:text-[16px] ' style={{ fontWeight: "500" }} >
                <div className='flex flex-col gap-2 flex-center ' >
                  <h1>Address :</h1>
                  <p>Dymphna – Counselling and Psychotherapy Vadakkenchery, Palakkad</p>
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

                <div className='w-[35%] flex flex-col relative'>
                  {/* Top-left green shape */}
                  <img
                    src={contactimg}
                    alt=""
                    className="absolute top-6 -left-16 ] z-0"
                  />
                </div>
              </div>

            </div>

            <div className='w-[70%]' >
              <h1 className='max-w-[500px] text-[60px]' style={{ fontWeight: "500" }} >We’d love to hear from you.
              </h1>
              <p className='text-[12px] md:text-[17px] lg:text-[20px]' >Your thoughts, questions, or feedback help us grow. Whether it’s a suggestion, concern, or just a hello
                we’re here to listen.</p>
              <form
                className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-5"
                onSubmit={handleSubmit}


              >
                {/* First Name */}
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="   First name*"
                    className="w-full bg-transparent border-0 border-b border-white focus:border-green-500 outline-none py-3 rounded-b-xl placeholder-white"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm">{errors.firstName}</p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="   Last name*"
                    className="w-full bg-transparent border-0 border-b border-white focus:border-green-500 outline-none py-3 rounded-b-xl placeholder-white"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm">{errors.lastName}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="   Email ID*"
                    className="w-full bg-transparent border-0 border-b border-white focus:border-green-500 outline-none py-3 rounded-b-xl placeholder-white"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="   Phone*"
                    className="w-full bg-transparent border-0 border-b border-white focus:border-green-500 outline-none py-3 rounded-b-xl placeholder-white"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone}</p>
                  )}
                </div>

                {/* Submit */}
                <div className="md:col-span-2">
                  <button

                    disabled={isSubmitting}
                    type="submit"
                    className="w-full max-w-[140px] h-[36px] sm:h-[45px] border-2 border-black bg-[#80BD48] text-black rounded-lg font-medium flex justify-center items-center px-1 hover:bg-white duration-300"
                  >
                    Submit <span className="pl-1"><LuArrowUpRight /></span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>




        <div className="p-10 pt-30 pb-20 block md:hidden relative">

          <img
            src={contactimg2}
            alt=""
            className="absolute top-[590px] left-[-30px] w-[100px]  z-0"
          />

          {/* Top Header */}
          <div className="flex items-center gap-2">
            <FaCircle className="text-[#80BD48] w-4 h-4" />
            <h1 className="text-[24px] font-semibold">Contact Us</h1>
          </div>

          {/* Text Content */}
          <div className="pt-5 flex flex-col gap-5 z-10 relative">
            <div className="max-w-[300px]">
              <h1 className="text-[32px] font-medium">We’d love to hear from you.</h1>
            </div>

            <div className="max-w-[450px]">
              <p>
                Your thoughts, questions, or feedback help us grow. Whether it’s a
                suggestion, concern, or just a hello we’re here to listen.
              </p>
            </div>

            {/* Inputs */}
            <div className="w-full flex flex-col gap-4">
              <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                {/* First Name */}
                <div className="w-full max-w-[300px] mx-auto">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="   First name*"
                    className="w-full bg-transparent border-0 border-b border-white focus:border-green-500 outline-none py-3 rounded-b-xl placeholder-white"
                  />
                  {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                </div>

                {/* Last Name */}
                <div className="w-full max-w-[300px] mx-auto">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="   Last name*"
                    className="w-full bg-transparent border-0 border-b border-white focus:border-green-500 outline-none py-3 rounded-b-xl placeholder-white"
                  />
                  {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                </div>

                {/* Email */}
                <div className="w-full max-w-[300px] mx-auto">
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="   Email ID*"
                    className="w-full bg-transparent border-0 border-b border-white focus:border-green-500 outline-none py-3 rounded-b-xl placeholder-white"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div className="w-full max-w-[300px] mx-auto">
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="   Phone*"
                    className="w-full bg-transparent border-0 border-b border-white focus:border-green-500 outline-none py-3 rounded-b-xl placeholder-white"
                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </div>

                {/* Submit */}
                <div className="w-full max-w-[300px] mx-auto">
                  <button

                    disabled={isSubmitting}
                    type="submit"
                    className="w-full border-black border-2 bg-[#80BD48] text-black  py-2 rounded-lg hover:bg-white duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Address Section */}
          <div className="flex justify-center pt-8 z-10 relative">
            <div className="max-w-[240px] w-full font-medium text-left">
              <div className="flex flex-col gap-2">
                <h1>Address :</h1>
                <p>Dymphna – Counselling and Psychotherapy Vadakkenchery, Palakkad</p>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <div className="flex gap-2 items-center">
                  <LuPhone />
                  <p>8943340620</p>
                </div>
                <div className="flex gap-2 items-center">
                  <FaRegEnvelope />
                  <p>dymphnapsy@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

    </div>
  )
}

export default ContactUs
