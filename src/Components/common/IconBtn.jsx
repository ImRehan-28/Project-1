import React from 'react'

const IconBtn = ({text,onClick,children,disabled,outline=false,customClasses,type}) => {
  return (
    <button
        disabled={disabled}
        onClick={onClick}
        type={type} className='flex items-center gap-2 w-fit'>
        {
            children?(
            <>
            <span>
                {text}
            </span>
            {children}</>
            ):(text)
        }
    </button>
  )
}

export default IconBtn
