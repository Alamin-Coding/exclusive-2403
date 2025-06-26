import React from 'react'
import Button from '../components/Button'
import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { increment, incrementByValue, decrement } from '../features/count/countSlice'


const ErrorPage = () => {
  const {count} =  useSelector((state)=> {return state.count})
  const dispatch = useDispatch()

  
  return (
    <div>
      <div className="container">
        <p className='pt-10'><Link to={"/"}>Home</Link> / <span className='font-semibold'>Error</span></p>
        <div className='h-[95vh] w-full flex items-center justify-center'>
            <div className='flex flex-col items-center justify-center'>
                <h3 className='text-5xl font-bold'>404 Not Found</h3>
                <p className='pt-10 pb-20'>Your visited page not found. You may go home page.</p>
                <Button TagName={Link} to='/'>Back to home page</Button>

<hr />
                <p>Counter </p>
                <p>Count: {count}</p>
                <button onClick={() => dispatch(increment())} className='p-6 cursor-pointer my-2 bg-blue-400 text-white'>Increment</button>
                <button onClick={() => dispatch(incrementByValue(3))} className='p-6 cursor-pointer my-2 bg-blue-400 text-white'>IncrementByValue</button>
                <button   className='p-6 cursor-pointer my-2 bg-blue-400 text-white'>Decrement</button>

            </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
