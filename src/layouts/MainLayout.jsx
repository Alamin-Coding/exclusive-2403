import { Outlet } from "react-router"
import Topbar from "../components/Topbar"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const MainLayout = () => {
  return (
    <main>
        <Topbar/>
        <Navbar />
        <Outlet />
        <Footer />
        
    </main>
  )
}

export default MainLayout
