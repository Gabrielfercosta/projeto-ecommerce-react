import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { Link } from "react-router-dom"
import { CartContext } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";

function Navbar() {

  const { interruptor, alternarInterruptor } = useContext(ThemeContext);
  const { qntProdutos } = useContext(CartContext);
  const { usuario, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link className="navbar-link" to="/">Inicio</Link>
        <Link className="navbar-link" to="/produtos">Produtos</Link>
        <Link className="navbar-link" to="/carrinho">Carrinho ({qntProdutos})</Link>
        {usuario ? (
          <p className="navbar-usuario">Usuario: {usuario.nome} 
          <button onClick={logout} className="navbar-sair">Sair</button></p>
        ) : (
          <Link to="/login" className="navbar-login">Login</Link>
        )}
      </div>
      {interruptor ? (
        <button onClick={alternarInterruptor} className="botao-interruptor">Tema Escuro</button>
      ) : (
        <button onClick={alternarInterruptor} className="botao-interruptor">Tema Claro</button>
      )}
    </nav>
  )
}

export default Navbar