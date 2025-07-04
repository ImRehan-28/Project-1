import React from 'react'
import { useSelector } from 'react-redux'
import Loginform from './Loginform'
import frameImg from "../../../assets/Images/frame.png"
import Signupform from "./SignupForm"


const Template = ({ title, description1, description2, image, formType }) => {

  // const {loading} =useSelector((state)=>state.auth)

  return (

    <div className='grid min-h-[calc(100vh-3.5rem)] place-items-center'>

      <div className='flex w-11/12 max-w-maxContent gap-x-40 mt-20'>

        <div className='w-[450px]'>
          <p className='text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5  '>{title}</p>
          <p className='text-richblack-100 mt-4 text-[1.125rem] leading-[1.625rem] '>{description1}</p>
          <p className='font-edu-sa font-bold italic text-blue-100'>{description2}</p>
          {
            formType === "signup" ? <Signupform /> : <Loginform />
          }
        </div>

        <div className='relative mx-auto w-[450px] '>
          <img src={frameImg} alt="Pattern"
            width={500}
            height={450}
            loading="lazy" />
          <img src={image} alt="Students"
            width={500}
            height={450}
            loading="lazy"
            className="absolute -top-4 right-4 z-10" />
        </div>
      </div>

    </div>
  )
}

export default Template