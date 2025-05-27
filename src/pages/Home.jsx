
import { useUser } from '../context/UserContext'
import { useNavigate } from 'react-router'

const Home = () => {
  const navigate = useNavigate()
  const {logout} = useUser()
  const handleLogout = () => {
      logout()
      navigate("/login")
  }
  return (
    <div>
      <section>
        <div className="container">
      <h1>Home Page</h1>
      <button onClick={handleLogout} className='p-2 bg-red-500 text-white cursor-pointer'>Logout</button>
        </div>
      </section>
    </div>
  )
}

export default Home
