import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { resetPassword } from '../services/operations/authApi';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

const UpdatePassword = () => {

  const dispatch = useDispatch()
  const location = useLocation()

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassowrd, setshowConfirmPassword] = useState(false)

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  })
  const { password, confirmPassword } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => (
      {
        ...prevData,
        [e.target.name]: e.target.value
      }
    ))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const token = location.pathname.split('/').at(-1);
    dispatch(resetPassword(password, confirmPassword, token))
  }
  return (
    <div>
      <div className='text-white'>
        <h1>Choose New Password</h1>
        <p>Enter Your New Password</p>
        <form onSubmit={handleOnSubmit}>
          
          <label>
            <p>New Password</p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder='Enter Password'
            />
            <span onClick={() => { setShowPassword((prev) => !prev) }}>
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>



          <label>
            <p>Confirm New Password</p>
            <input
              required
              type={showConfirmPassowrd ? "text" : "password"}
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleOnChange}
              placeholder='Confirm Password'
            />
            <span onClick={() => setshowConfirmPassword((prev) => (!prev))}>
              {showConfirmPassowrd ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
          <button type="submit">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdatePassword