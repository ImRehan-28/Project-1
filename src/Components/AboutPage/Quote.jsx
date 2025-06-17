import React from 'react'
import HighlightText from '../core/Homepage/Highlighttext'

const Quote = () => {
  return (
    <div>
      We are passionate about revolutionizing the way we learn. Our innovative platform
      <HighlightText text={'combines technology'}/>
      <span className='text-pink-100'>
        {""} expertise
      </span>
      , and community to create an
      <span className='text-pink-100'> unparalleled educational experience.</span>
    </div>
  )
}

export default Quote
