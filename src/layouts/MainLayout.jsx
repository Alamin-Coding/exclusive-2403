import { Outlet } from "react-router"
import Topbar from "../components/Topbar"
import Navbar from "../components/Navbar"

const MainLayout = () => {
  return (
    <main>
        <Topbar/>
        <Navbar />
        <Outlet />
        
    </main>
  )
}

export default MainLayout
