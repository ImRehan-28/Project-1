import React from 'react'
import Template from '../Components/core/Auth/Template'
import signupImg from "../assets/Images/signup.webp"
const Login = () => {
    return (
        <Template
            title="Join the millions learning to code with StudyNotion for free"
            description1="Build skills for today, tomorrow, and beyond."
            description2="Education to future-proof your career."
            image={signupImg}
            formType="signup"
        />
    )
}
export default Login