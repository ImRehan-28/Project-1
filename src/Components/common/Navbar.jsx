import React, { useEffect, useState } from 'react'
import logo from "../../assets/Logo/Logo-Full-Light.png"
import { Link, matchPath } from 'react-router-dom'
import { NavbarLinks } from "../../data/navbar-links"
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { apiConnector } from '../../services/apiconnector'
import { categories } from '../../services/apis'
import { IoIosArrowDropdown, IoMdArrowDropdown } from 'react-icons/io'
import ProfileDropDown from "../core/Auth/ProfileDropDown"
import { ACCOUNT_TYPE } from '../../utils/constants'
// const subLinks = [
//   {
//     title: "Python",
//     link: "/catalog/python",
//   },
//   {
//     title: "Web dev",
//     link: "/catalog/web-devlopment",
//   }
// ]

const Navbar = () => {

  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();

  const [subLinks, setSubLinks] = useState([]);

  const fetchSublinks = async () => {
    try {
      const result = await apiConnector("GET", categories.CATEGORIES_API)
      console.log("printing sublinks ", result);
      setSubLinks(result.data.data)
    }
    catch (error) {
      console.log("can not fetch the category", error)
    }
  }
  useEffect(() => {
    fetchSublinks();
  }, [])

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  }

  console.log("Calling API:", categories.CATEGORIES_API)

  return (
    <div className='flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700'>
      <div className='flex w-11/12 max-w-maxContent items-center justify-between'>

        <Link to="/">
          <img src={logo} width={160} height={42} loading={'lazy'} />
        </Link>
        {/* Nav Links */}
        <nav>
          <ul className='flex gap-x-6 text-richblack-25'>
            {
              NavbarLinks.map((link, index) => {
                return <li key={index}>
                  {
                    link.title === "Catalog" ? (
                      <div className='relative flex items-center group' >
                        <p>{link.title}</p>
                        <IoMdArrowDropdown />
                        <div className='invisible absolute top-[80%] translate-y-[15%] translate-x-[-48px] z-20 flex flex-col rounded-md bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 lg:w-[180px]'>
                          <div className='absolute left-[55%] top-0 h-6 w-8 rotate-45 translate-y-[1%] rounded bg-richblack-5'>
                          </div>
                          {
                            subLinks?.length > 0 ? (
                              subLinks?.map((subLink, index) => (
                                <Link to={`${subLink.name}`} key={index}>
                                  <p className='py-2 border-b-1'>{subLink.name}</p>
                                </Link>
                              ))
                            ) : (<div>Oops nothing here...</div>)
                          }
                        </div>
                      </div>
                    ) : (
                      <Link to={link?.path}>
                        <p className={`${matchRoute(link?.path) ? "text-yellow-25" : "text-richblue-25"}`}>
                          {link.title}
                        </p>
                      </Link>)
                  }
                </li>
              })}
          </ul>
        </nav>
        {/* Login signup dashoard */}
        <div className='flex gap-x-4 items-center'>
          {
            user && user?.accountType != ACCOUNT_TYPE.INSTRUCTOR && (
              <Link to="/dashboard/cart" className='relative'>
                <AiOutlineShoppingCart />
                {totalItems > 0 && (
                  <span>
                    {totalItems}
                  </span>
                )}
              </Link>
            )
          }
          {
            token === null && (
              <Link to="/login">
                <button className='border border-richblack-700 bg-richblack-800 px-[13px] py-[9px] text-richblack-100 rounded-md cursor-pointer hover:text-richblack-25'>
                  Log in
                </button>
              </Link>
            )
          }
          {
            token === null && (
              <Link to="/signup">
                <button className='border border-richblack-700 bg-richblack-800 px-[13px] py-[9px] text-richblack-100 rounded-md cursor-pointer hover:text-richblack-25'>
                  Sign Up
                </button>
              </Link>
            )
          }
          {
            token !== null && <ProfileDropDown />
          }
        </div>

      </div>
    </div>
  )
}

export default Navbar
