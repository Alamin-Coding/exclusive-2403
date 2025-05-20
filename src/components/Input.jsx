import React from 'react'

const Input = ({type="text", placeholder, ...props}) => {
  return <input {...props} className='border-b border-b-[#7D8184] placeholder:text-[#7D8184] text-[#000] leading-[32px] focus:outline-0 focus:border-b-[#222]' type="text" placeholder={placeholder} />
}

export default Input
