import React, { useState } from 'react'
import { sidebarLinks } from '../../../data/dashboard-links'
import { logout } from '../../../services/operations/authApi'
import SidebarLink from './SidebarLink'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { VscSignOut } from 'react-icons/vsc'
import { RiShoppingBag3Fill } from "react-icons/ri";
import ConfirmationModal from '../../common/ConfirmationModal'
const Sidebar = () => {

    const { loading: authloading } = useSelector((state) => state.auth)
    const { user, loading: profileloading } = useSelector((state) => state.profile)

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [confirmationModal, setConfirmationModal] = useState(null);

    if (profileloading || authloading) {
        return (
            <div className='loader flex justify-center items-center'></div>
        )
    }

    return (
        <div className='text-white'>

            <div className='flex min-w-[200px] h-full flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800 py-6'>
                <div className='flex flex-col'>
                    {
                        sidebarLinks.map((link) => {
                            if (link.type && user?.accountType !== link.type) return null;
                            return (<SidebarLink key={link.id} link={link} iconName={link.icon} />)
                        })
                    }
                </div>

                <div className='mx-auto mt-6 mb-6 h-[1px] w-11/12 bg-richblack-600'>
                </div>

                <div className='flex flex-col items-start'>
                    <SidebarLink link={{ name: "Settings", path: "dashboard/settings" }}
                        iconName="VscSettingsGear"/>
                    
                    <button onClick={() => setConfirmationModal({
                        text1: "Are You Sure ? ",
                        text2: "You Will be logged Out of your Account",
                        btn1Text: "Logout",
                        btn2Text: "Cancel",
                        btn1Handler: () => dispatch(logout(navigate)),
                        btn2Handler: () => setConfirmationModal(null),
                    })} className='text-sm font-medium text-richblack-300'>
                        <div className='flex px-4 gap-2 mt-1'>
                            <VscSignOut className='text-[20px]' />
                            <span>Logout</span>
                        </div>
                    </button>
                </div>

            </div>
            {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
        </div>
    )
}

export default Sidebar