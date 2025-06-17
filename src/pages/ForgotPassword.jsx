import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getPasswordResetToken } from '../services/operations/authApi';

const ForgotPassword = () => {

  const [email, setemail] = useState("");
  const [emailsent, setEmailSent] = useState(false);
  const dispatch = useDispatch()

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(getPasswordResetToken(email, setEmailSent))
  }

  return (
    <div className='text-white'>
      <div>
        <h1>
          {
            !emailsent ? "Reset your Passowrd" : "Check email"
          }
        </h1>
        <p>
          {
            !emailsent ? "Have no fear. We'll email you instructions to reset your password. If you dont have access to your email we can try account recovery" : `We have sent the reset email to ${email}`
          }
        </p>
        <form onSubmit={handleOnSubmit}>
          {!emailsent && (
            <label>
              <p>Email Address <sup>*</sup></p>
              <input
                required
                type="email"
                name="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder='Enter Email address' />
            </label>
          )}
          <button type="submit" className='pointer-cursor'>
            {!emailsent ? "Submit" : "Resend Email"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword