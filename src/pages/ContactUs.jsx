import React from 'react'
import ContactUsForm from '../Components/ContactPage/ContactUsForm'
import ContactDetails from '../Components/ContactPage/ContactDetails'
import Footer from '../Components/common/Footer'

const ContactUs = () => {
  return (
    <div className='text-white mt-20'>
        <div className='w-11/12 mx-auto flex gap-10'>
        <div className='w-[40%]'>
            <ContactDetails/>
        </div>

        <div className='w-[60%] border border-richblack-600 rounded-lg p-7 lg:p-14 flex gap-3 flex-col mb-10'>
            <h1 className='text-4xl leading-10 font-semibold text-richblack-5'>Got a Idea? We've got the skills. Let's team up</h1>
            <p className='text-richblack-200'>Tell us more about yourself and what you're got in mind.</p>
            <ContactUsForm/>
        </div>
        </div>
        
        {/* reviews  left*/}
        <Footer/>
    </div>
  )
}

export default ContactUs
