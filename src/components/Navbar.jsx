import React from 'react'
import { Link } from 'react-router'
import { useUser } from '../context/UserContext'

const Navbar = () => {
    const {currentUser} = useUser()
  return (
    <nav className='pt-10 pb-4 border-b border-b-gray-400'>
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
                    <button className='cursor-pointer'>
                        <img src="/wishlist.png" alt="wishlist" />
                    </button>
                    <button className='cursor-pointer'>
                        <img src="/cart.png" alt="cart" />
                    </button>
                    <button className='cursor-pointer'>
                        <img src="/user.png" alt="user" />
                    </button>
                </div>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
