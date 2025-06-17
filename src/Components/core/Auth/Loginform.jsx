import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../../services/operations/authApi'
const Loginform = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({ email: "", passowrd: "" })

  const [showpassword, setShowPassword] = useState(false)

  const { email, password } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }
  const handleOnSubmit = (e) => {
    e.preventDefault()

    dispatch(login(email,password,navigate))
  }
  return (
    <form onSubmit={handleOnSubmit} className='flex flex-col mt-6 w-full gap-y-4' >
      <label className='w-full text-white'>

        <p className='mb-2 text-[16px] leading-[1.375rem] text-richblack-5'>Email Address <sup className='text-pink-200'>*</sup>
        </p>

        <input
          required
          type="text"
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder="Enter email address"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className='w-full  rounded-[0.5rem] bg-richblack-700 p-[12px] text-richblack-5 outline-0'
        />
      </label>

      <label className='relative w-full text-white'>

        <p className='mb-2 text-[16px] leading-[1.375rem] text-richblack-5'>Password <sup className='text-pink-200'>*</sup>
        </p>

        <input
          required
          type={showpassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={handleOnChange}
          placeholder="Enter password"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className='w-full  rounded-[0.5rem] bg-richblack-700 p-[12px] text-richblack-5 outline-0'
        />

        <span onClick={() => setShowPassword((prev) => !prev)} className='absolute right-3 top-[43px] z-[10] cursor-pointer'>
          {showpassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />) :
            (<AiOutlineEye fontSize={24} fill="#AFB2BF" />)
          }
        </span>

        <Link to="/forgotPassword">
          <p className='mt-1 ml-auto max-w-max text-xs text-blue-100'>
            Forgot Password
          </p>
        </Link>
      </label>

      <button type="submit" className='bg-yellow-200 font-medium text-richblack-900 px-[12px] py-[8px] rounded-[8px] cursor-pointer hover:bg-yellow-100'>
        Sign In
      </button>

    </form>
  )
}

export default Loginform