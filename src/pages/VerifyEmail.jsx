import React, { useEffect, useState } from 'react'
import OTPInput from 'react-otp-input'
import { sendOtp, signUp } from '../services/operations/authApi'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const VerifyEmail = () => {
    const [otp, setOtp] = useState("")
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { signupData } = useSelector((state) => state.auth)

    useEffect(() => {
        if (!signupData) {
            navigate("/signup");
        }
    }, [])
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const {
            accountType,
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        } = signupData;
        dispatch(signUp(accountType, firstName, lastName, email, password, confirmPassword,otp,navigate))
    }
    return (
        <div className='text-white'>
            <div>
                <h1>Verify Email</h1>
                <p>A verification code has been sent to you. Enter the code</p>
                <form onSubmit={handleOnSubmit}>
                    <OTPInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        renderInput={(prop) => (<input {...prop} />)}
                    />
                    <button type="submit">
                        Verify Email
                    </button>
                </form>
                <div>
                    <div>
                        <Link to="/login">
                            <p>Back to Login</p>
                        </Link>
                    </div>
                    <button onClick={() => dispatch(sendOtp(signupData.email,navigate))}>
                        Resend it
                    </button>

                </div>
            </div>
        </div>
    )
}

export default VerifyEmail
