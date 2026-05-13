import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { Navigate } from "react-router-dom"


function PrivateRoute({ children }) {
    const { logado } = useContext(AuthContext)
    
    if (!logado){return <Navigate to="/login" />}
    
    return children
}

export default PrivateRoute