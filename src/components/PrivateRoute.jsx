import { useAuth } from "../contexts/AuthContext"
import { Navigate, useLocation } from "react-router-dom"


function PrivateRoute({ children }) {
    const { logado } = useAuth()
    const location = useLocation()

    if (!logado){return <Navigate to="/login" state={{ from:location }} replace />}
    
    return children
}

export default PrivateRoute