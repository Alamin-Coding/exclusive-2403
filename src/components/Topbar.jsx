import React from 'react'
import { Link } from 'react-router'

const Topbar = () => {
  return (
    <div className='bg-black py-3'>
        <div className='container'>
            <div className='grid grid-cols-[1fr_200px] gap-3 items-center'>
                <p className='text-white text-center'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <Link to='/shop'>ShopNow</Link></p>
                <select className='text-white'>
                    <option value="garman">Garnman</option>
                    <option value="english">English</option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default Topbar
