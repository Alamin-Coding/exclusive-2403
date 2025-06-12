import { Outlet } from "react-router"
import Topbar from "../components/Topbar"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { ToastContainer } from "react-toastify"
import { useUser } from "../context/UserContext"

const MainLayout = () => {
  const {currentUser} = useUser()
  return (
    <main>
        <ToastContainer/> 
        {
        currentUser && <>
          <Topbar/>
          <Navbar />
        </>
        }
        

        <Outlet />

        {/* {currentUser && <Footer />} */}
        
    </main>
  )
}

export default MainLayout
