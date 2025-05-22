import React, { useContext, useEffect } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import OutlateButton from '../components/OutlineButton'
import { Link, useNavigate } from 'react-router'
import { useUser } from '../context/UserContext'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify';

const SignUp = () => {
  const {addUser} = useUser()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: ""
  })

  function handleChange(e) {
    setNewUser({...newUser, [e.target.name]: e.target.value})
  }
  function handleAddUser(e) {
    e.preventDefault();
    addUser(newUser.email, newUser.password)
    setLoading(true)
    
      setTimeout(()=> {
          navigate("/login")
          setLoading(false)
        }, 4000)
      }



  return (
    <>
    
    <section>
      <ToastContainer/> 
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[4fr_3fr] gap-6 xl:gap-10 items-center'>
        <div>
          <img className='w-full max-h-[780px] object-cover' src="/login-image.png" alt="image" />
        </div>
        <div className='p-10 md:p-14 xl:px-[130px] xl:py-20'>
          <form action="">
            <h2 className='text-[30px]'>Create an account</h2>
            <p>Enter your details below</p>

            <div className='grid grid-cols-1 gap-10'>
              <Input onChange={(e)=>handleChange(e)} value={newUser.name} name="name" placeholder={"Name"} />
              <Input onChange={(e)=>handleChange(e)} placeholder={"Email or Phone Number"} name="email" />
              <Input onChange={(e)=>handleChange(e)} placeholder={"Password"} name="password" />
              <Button onClick={(e)=>handleAddUser(e) } TagName={"button"} type='submit'>
                {loading? "Creating...": "Create Account"}
              </Button>
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
    </>
  )
}

export default SignUp
