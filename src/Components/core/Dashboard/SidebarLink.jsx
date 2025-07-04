import React from 'react'
import * as Icons from "react-icons/vsc"
import { useDispatch } from 'react-redux';
import { matchPath, NavLink, useLocation } from 'react-router-dom';
import { RiShoppingBag3Fill } from "react-icons/ri";
const SidebarLink = ({ link, iconName }) => {

    const Icon = Icons[iconName];
    const location = useLocation();

    const dispatch = useDispatch();

    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname);

    }

    return (
        <div className='text-white'>
            <NavLink to={link.path} className={`relative px-4 text-sm font-medium flex py-2 ${matchRoute(link.path) ? "bg-yellow-800" : "bg-opacity-0"}`}>
                <span className={`absolute left-0 top-0 h-full w-[0.2rem] bg-yellow-50 ${matchRoute(link.path) ? "opacity-100" : " opacity-0"}`}>
                </span>
                <div className='flex items-center gap-x-2'>
                    <Icon className="text-lg"/>
                    <span>{link.name}</span>
                </div>
            </NavLink>
        </div>
    )
}

export default SidebarLink