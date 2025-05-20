import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import OutlateButton from '../components/OutlineButton'
import { Link } from 'react-router'

const Login = () => {
  return (
    <section>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[4fr_3fr] gap-6 xl:gap-10 items-center'>
            <div>
                <img className='w-full max-h-[780px] object-cover' src="/login-image.png" alt="image" />
            </div>
            <div className='p-10 md:p-14 xl:px-[130px] xl:py-20'>
                <form action="">
                  <h2 className='text-[30px]'>Log in to Exclusive</h2>
                  <p>Enter your details below</p>

                  <div className='grid grid-cols-1 gap-10'>
                    <Input placeholder={"Name"}/>
                    <Input placeholder={"Email or Phone Number"} />
                    <Input placeholder={"Password"} />
                    <div className='grid grid-cols-2 gap-6'>
                      <Button TagName={"button"} type='submit'>Login</Button>
                      <button type='button' className='text-[#DB4444] cursor-pointer'>Forget Password?</button>
                    </div>
                  </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Login
