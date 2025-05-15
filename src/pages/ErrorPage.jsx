import React from 'react'
import Button from '../components/Button'
import { Link } from 'react-router'


const ErrorPage = () => {
  return (
    <div>
      <div className="container">
        <p className='pt-10'><Link to={"/"}>Home</Link> / <span className='font-semibold'>Error</span></p>
        <div className='h-[95vh] w-full flex items-center justify-center'>
            <div className='flex flex-col items-center justify-center'>
                <h3 className='text-5xl font-bold'>404 Not Found</h3>
                <p className='pt-10 pb-20'>Your visited page not found. You may go home page.</p>
                <Button TagName={Link} to='/'>Back to home page</Button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
