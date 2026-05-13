import { useState } from "react"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { Navigate } from "react-router-dom"

function Login() {
    const [nome, setNome] = useState("")
    const { login } = useContext(AuthContext) 
    const { logado } = useContext(AuthContext)

    if (logado) return <Navigate to="/" />
    
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


