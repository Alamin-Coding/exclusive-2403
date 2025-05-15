import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import OutlateButton from '../components/OutlineButton'
import { Link } from 'react-router'

const SignUp = () => {
  return (
    <section>
        <div className='grid grid-cols-[4fr_3fr] gap-10 items-center'>
            <div>
                <img className='w-full' src="/login-image.png" alt="image" />
            </div>
            <div className='px-[130px] py-20'>
                <form action="">
                  <h2 className='text-[30px]'>Create an account</h2>
                  <p>Enter your details below</p>

                  <div className='grid grid-cols-1 gap-10'>
                    <Input placeholder={"Name"}/>
                    <Input placeholder={"Email or Phone Number"} />
                    <Input placeholder={"Password"} />
                    <Button TagName={"button"} type='submit'>Create Account</Button>
                    <OutlateButton TagName={"button"}>
                      <img src="/google-icon.png" alt="icon" />
                    Sign up with Google
                    </OutlateButton>
                  </div>
                  <p className='text-gray-700 mt-5'>Already have account? <Link to="/login" className='text-black font-bold'>Log in</Link></p>
                </form>
            </div>
        </div>
    </section>
  )
}

export default SignUp
