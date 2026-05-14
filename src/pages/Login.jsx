import { useState } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

function Login() {
    const [nome, setNome] = useState("")
    const { login, logado } = useAuth()
    const location = useLocation()

    const destino = location.state?.from?.pathname || "/"

    if (logado) return <Navigate to={destino} replace />
    
    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="login-titulo">Entrar na Loja</h2>
                <input value={nome} onChange={e => setNome(e.target.value)} className="login-input" />
                <button onClick={() => login(nome)} className="login-botao">Entrar</button>
            </div>
        </div>
  )
}

export default Login


