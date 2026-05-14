import { createContext, useState, useEffect, useContext } from "react"

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(() => {
    const salvo = localStorage.getItem("usuarios")
    return salvo ? JSON.parse(salvo) : null
  })
  
  const logado = usuario !== null

  useEffect(() => {
    localStorage.setItem("usuarios", JSON.stringify(usuario))
  }, [usuario])
  
  function login(nome){
    const logar = { nome, role:'cliente' }
    setUsuario(logar);
  }
  
  function logout(){
    setUsuario(null)
    localStorage.removeItem("usuarios")
  }

  return (
    <AuthContext.Provider value={{usuario, login, logout, logado}}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if(!context) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider')
  }
  return context
}