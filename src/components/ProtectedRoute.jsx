import { Navigate } from "react-router";

const ProtectedRoute = ({children, user}) => {
  return user ? children : <Navigate to="/login" />;
}

export default ProtectedRoute