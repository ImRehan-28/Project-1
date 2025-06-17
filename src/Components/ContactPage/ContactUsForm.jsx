import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { apiConnector } from "../../services/apiconnector"
import CountryCode from "../../data/countrycode.json"
const ContactUsForm = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful }
  } = useForm();

  const submitContactForm = async (data) => {
    console.log("logging data", data)
    try {
      // const response = wait apiConnector("POST",CONTACT_US_API,data)
      const response = { status: "OK" };
      console.log("Logging response", response)

    }
    catch (error) {
      console.log("Error : ", error.message)
    }

  }

  useEffect(() => {
    reset({
      email: "",
      firstname: "",
      lastname: "",
      message: "",
      phoneNo: "",
    })
  }, [reset, isSubmitSuccessful])

  return (
    <form onSubmit={handleSubmit(submitContactForm)}>
      <div className='flex flex-col gap-5 mt-12'>
        <div className='flex gap-5 '>
          {/* FirstName */}
          <div className='flex flex-col gap-y-2'>
            <label htmlFor="firstname">
              First Name
            </label>
            <input
              type='text'
              name="firstname"
              id="firstname"
              placeholder='Enter first Name'
              {...register("firstname", { required: true })}
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)"
              }}
              className='"w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5 outline-0'/>
            {
              errors.firstname && (
                <span>
                  Please enter Your name
                </span>
              )
            }
          </div>

          {/* LastName */}
          <div className='flex flex-col gap-y-2'>
            <label htmlFor="lastname">
              Last Name
            </label>
            <input
              type='text'
              name="lastname"
              id="lastname"
              placeholder='Enter Last Name'
              {...register("lastname", { required: true })}
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)"
              }}
              className='"w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5 outline-0'/>
            {
              errors.lastname && (
                <span>
                  Please enter Your name
                </span>
              )
            }
          </div>
        </div>

        {/* email */}
        <div className='flex flex-col gap-y-2'>
          <label htmlFor='email'>Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder='Enter email Address'
            {...register("email", { required: true })}
            style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)"
              }}
              className='"w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5 outline-0'/>
          {
            errors.email && (
              <span>
                Please enter your email address
              </span>
            )
          }
        </div>

        {/* phone no */}

        <div className='flex flex-col gap-y-2'>
          <label htmlFor='phonenumber'>Phone Number</label>
          <div className='flex flex-row gap-2'>
            {/* dropdown */}
            <select
              name="countrycode"
              id="countrycode"
              {...register("countrycode", { required: true })}
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)"
              }}
              className='w-[80px] rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5 outline-0'>
              {
                CountryCode.map((element, index) => {
                  return (
                    <option key={index} value={element.code} className='bg-richblack-600'>
                      {element.code} - {element.country}
                    </option>
                  )
                })
              }
            </select>

            <input
              type='tel'
              name='phonenumber'
              id='phonenumber'
              placeholder='12345 67890'
              {...register("phoneNo",
                {
                  required: { value: true, message: "Please enter Phone Number" },
                  maxLength: { value: 10, message: "Invlaid Phone Number" },
                  minLength: { value: 8, message: "Invalid Phone Number" }
                })}
                style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)"
              }}
              className="w-[calc(100%-80px)]  rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5 outline-0"/>
          </div>
          {
            errors.phoneNo && (
              <span>
                {errors.phoneNo.message}
              </span>
            )
          }
        </div>

        {/* message */}
        <div className='flex flex-col gap-y-2'>
          <label htmlFor='message'>Message</label>
          <textarea
            name='message'
            id='message'
            cols="30"
            rows="7"
            placeholder='Enter Your Message here'
            {...register("message", { required: true })}
            style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)"
              }}
              className="rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5 outline-0"/>
          {
            errors.message && (
              <span>
                Please enter your message.
              </span>
            )
          }
        </div>

        <button type='submit' className='rounded-md bg-yellow-50 text-center px-6 text-[16px] font-bold text-richblack-600 py-3 hover:text-richblack-900'>
          Send Message
        </button>
      </div>
    </form>
  )
}

export default ContactUsForm
