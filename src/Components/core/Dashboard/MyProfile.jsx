import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import IconBtn from '../../common/IconBtn'
import { VscSignOut } from "react-icons/vsc";

const MyProfile = () => {

    const { user } = useSelector((state) => state.profile)
    const navigate = useNavigate();

    return (
        <div className='text-white px-16'>
            <h1 className='mb-8 text-2xl font-medium'>My Profile</h1>

            {/* section 1 */}
            <div className='flex items-center bg-richblack-800 px-6 py-4 rounded-md mb-6'>
                <div className='flex items-center gap-4 w-full'>
                    <img src={user?.image}
                        alt={`profile-${user?.firstName}`}
                        className='aspect-square w-[70px] rounded-full object-cover'
                    />
                    <div>
                        <p>{user?.firstName + " " + user?.lastName}</p>
                        <p>{user?.email}</p>
                    </div>
                </div>

                <div className='bg-yellow-200 px-2.5 py-1 rounded-md text-black font-medium'>
                    <IconBtn text="Edit" onClick={() => { navigate("/dashboard/settings") }}>
                        <VscSignOut />
                    </IconBtn>
                </div>
            </div>

            {/* section 2 */}
            <div className='flex items-center bg-richblack-800 px-6 py-4 rounded-md mb-6 gap-2'>
                <div className='flex flex-col gap-y-4 w-full '>
                    <p className='font-medium text-[18px]'>About</p>
                    <p className='rounded-sm py-1'>{user?.additionalDetails?.about ?? "Write something about yourself"}</p>
                </div>

                <div className='bg-yellow-200 px-2.5 py-1 rounded-md text-black'>
                    <IconBtn text="Edit" onClick={() => { navigate("/dashboard/settings") }}>
                        <VscSignOut />
                    </IconBtn>
                </div>
            </div>

            {/* section 3 */}
            <div className="flex bg-richblack-800 px-6 py-4 rounded-md mb-6">
                <div className='w-full'>
                    <div className='mb-4 font-medium text-[18px]'>
                        <p>Personal Details</p>
                    </div>
                    <div className='grid grid-cols-2 gap-y-4 row-span-2'>
                        <div>
                            <p className='text-richblack-300'>First Name</p>
                            <p>{user?.firstName}</p>
                        </div>
                        <div>
                            <p className='text-richblack-300'>Last Name</p>
                            <p>{user?.lastName}</p>
                        </div>
                        <div>
                            <p className='text-richblack-300'>Email</p>
                            <p>{user?.email}</p>
                        </div>
                        <div>
                            <p className='text-richblack-300'>Phone Number</p>
                            <p>{user?.additionalDetails?.contactNumber ?? "Add Contact Number"}</p>
                        </div>
                        <div>
                            <p className='text-richblack-300'>Gender</p>
                            <p>{user?.additionalDetails?.gender ?? "Add Gender"}</p>
                        </div>

                        <div>
                            <p className='text-richblack-300'>Date of Birth</p>
                            <p>{user?.additionalDetails?.dateOfBirth ?? "Add Dateof Birth"}</p>
                        </div>
                    </div>
                </div>
                <div className='bg-yellow-200 px-2.5 py-1 rounded-md h-fit text-black'>
                    <IconBtn text="Edit" onClick={() => { navigate("/dashboard/settings") }}>
                        <VscSignOut />
                    </IconBtn>
                </div>
            </div>
        </div>
    )
}

export default MyProfile