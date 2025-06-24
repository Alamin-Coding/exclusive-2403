
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { useUser } from "./context/UserContext";
import ProductPage from "./pages/ProductPage";
const App = () => {
  const {currentUser} = useUser()
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route index={true} element={<ProtectedRoute user={currentUser}>
            <Home />
          </ProtectedRoute>} />
          <Route path="/product" element={<ProductPage />} />
        </Route>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
  </BrowserRouter>
  )
}

export default App
