import React from 'react'

const Button = ({children, type='button', TagName, ...props}) => {
  return (
    <TagName {...props} className='inline-block px-12 text-white bg-[#DB4444] rounded-[4px] leading-[56px] text-center' type={type}>
        {children}
    </TagName>
  )
}

export default Button
