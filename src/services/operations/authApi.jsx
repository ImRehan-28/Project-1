import { toast } from "react-hot-toast"
import { apiConnector } from "../apiconnector"
import { endpoints } from "../apis"
import { setUser } from "../../slices/profileSlice"
import { setToken } from "../../slices/authSlice"
import {resetCart} from "../../slices/cartSlice"

const {
    SENDOTP_API,
    SIGNUP_API,
    LOGIN_API,
    RESETPASSTOKEN_API,
    RESETPASSWORD_API,
} = endpoints

export function sendOtp(email, navigate) {
    return async () => {

        try {
            const response = await apiConnector("POST", SENDOTP_API, {
                email,
                checkUserPresent: true,
            })
            console.log("SENDOTP APT RESPONSE .......", response)
            console.log(response.data.success)

            if (!response.data.success) {
                throw new Error(response.data.message)
            }
            toast.success("OTP sent Successfully")
            navigate("/verify-email")
        }
        catch (error) {
            console.log("SENDOTP API ERROR.......", error)
            toast.error("Could not send OTP")
        }
    }
}

export function signUp(
    accountType,
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    otp,
    navigate
) {
    return async () => {
        try {
            const response = await apiConnector("POST", SIGNUP_API, {
                accountType,
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
                otp,
            })

            console.log("SIGNUP API RESPONSE.......2 ", response)

            if (!response.data.success) {
                throw new Error(response.data.message)
            }
            navigate("/login")
        }
        catch (error) {
            console.log("SIGNUP API ERROR............4", error)
            toast.error(error.response?.data?.message || "Signup Failed");
            navigate("/signup")
        }

    }
}
export function login(email, password, navigate) {
    return async (dispatch) => {
        try {
            const response = await apiConnector("POST", LOGIN_API, {
                email, password,
            })
            console.log("LOGIN API RESPONSE.......", response)

            if (!response.data.success) {
                throw new Error(response.data.message)
            }
            toast.success("Login Successful")

            dispatch(setToken(response.data.token))

            //it check for user image
            const userImage = response.data?.user?.image
                ? response.data.user.image
                : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`

            dispatch(setUser({ ...response.data.user, image: userImage }))

            localStorage.setItem("token", JSON.stringify(response.data.token))
            localStorage.setItem("user", JSON.stringify(response.data.user))
            navigate("/dashboard/my-profile")
        }
        catch (error) {
            console.log("LOGIN API ERROR.......", error)
            toast.error("Login Failed")
        }
    }
}

export function logout(navigate){
    return (dispatch)=>
    {
        dispatch(setToken(null))
        dispatch(setUser(null))
        dispatch(resetCart())
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        toast.success("Logged Out")
        navigate("/")
    }

}

export function getPasswordResetToken(email, setEmailSent) {
    return async () => {
        try {
            const response = await apiConnector("POST", RESETPASSTOKEN_API, { email })

            console.log("Reset Password Token Response", response);

            if (!response.data.success) {
                throw new Error(response.data.message);
            }
            toast.success("Reset Email Sent");
            setEmailSent(true);
        }
        catch (error) {
            console.log("Reset Password Token Error", error);
            toast.error("Failed to send email for resetting password")
        }
    }
}

export function resetPassword(password,confirmPassword,token)
{
    return async() =>{
        try{
            const response = await apiConnector("POST",RESETPASSWORD_API,({password,confirmPassword,token}));

            console.log("Reset Password Response...",response);

            if(!response.data.success){
                throw new Error(response.data.message);
            }
            toast.success("Password Updated successfully");

        }
        catch(error)
        {
            console.log("6 Reset Password Error", error);
            toast.error("7 Unable to reset password");
        }
    }
}