import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { useUser } from '../context/UserContext'
import userIcon from "../assets/icons/user.png"
import cancelIcon from "../assets/icons/icon-cancel.png"
import mallbagIcon from "../assets/icons/icon-mallbag.png"
import reviewsIcon from "../assets/icons/Icon-reviews.png"
import logoutIcon from "../assets/icons/icon-logout.png"
import { useSelector } from 'react-redux'
const Navbar = () => {
    const navigate = useNavigate()
    const [dropdown, setDropdown] = useState(false)
    const {currentUser} = useUser();

    const {wishList} = useSelector((state)=> state)
    

  return (
    <nav className='pt-10 pb-4 border-b border-b-gray-400 sticky top-0 left-0 w-full z-20 bg-white'>
      <div className="container">
        <div className='grid grid-cols-[auto_1fr_auto] gap-3'>
            <div>
                <img src="/logo.png" alt="logo" />
            </div>
            <ul className='flex items-center justify-center gap-5'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                {!currentUser && (
                    <li>
                    <Link to="/signup">Sign Up</Link>
                </li>
                )}
            </ul>

            <div className='flex items-center gap-4'>
                <form action="" className='w-[243px] grid grid-cols-[1fr_24px] gap-2'>
                    <input className='focus:outline-none' type="search" placeholder='What are you looking for?' />
                    <button><img src="/search.png" alt="search" /></button>
                </form>
                <div className='flex items-center gap-2'>
                    <button onClick={()=> navigate("/wishlist")} className='cursor-pointer'>
                        <img src="/wishlist.png" alt="wishlist" />
                        <span>{wishList.length}</span>
                    </button>
                    <button className='cursor-pointer'>
                        <img src="/cart.png" alt="cart" />
                    </button>
                    <div className='relative'>
                        <button className='cursor-pointer relative' onClick={()=> setDropdown(!dropdown)}>
                            <img src="/user.png" alt="user" />
                        </button>
                         {dropdown && <DorpdownMenu /> }
                    </div>
                </div>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

const bgStyle = {
    background: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(75px)"
}



const DorpdownMenu = ()=> {
    const {logout} = useUser();
    
    return (
        <div className='w-[224px] absolute right-0 top-[50px] p-3 rounded-[4px] z-40' style={bgStyle}>
            <ul className='grid gap-3 grid-cols-1'>
                <li className='flex items-center gap-2 text-white py-1 cursor-pointer'>
                    <span><img src={userIcon} alt="" /></span>
                    <span>Manage My Account</span>
                </li>
                <li className='flex items-center gap-2 text-white py-1 cursor-pointer'>
                    <span><img src={mallbagIcon} alt="" /></span>
                    <span>My Order</span>
                </li>
                <li className='flex items-center gap-2 text-white py-1 cursor-pointer'>
                    <span><img src={cancelIcon} alt="" /></span>
                    <span>My Cancellations</span>
                </li>
                <li className='flex items-center gap-2 text-white py-1 cursor-pointer'>
                    <span><img src={reviewsIcon} alt="" /></span>
                    <span>My Reviews</span>
                </li>
                <li className='flex items-center gap-2 text-white py-1 cursor-pointer' onClick={()=> logout()}>
                    <span><img src={logoutIcon} alt="" /></span>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
    )
}

/* Account Dropdown */

