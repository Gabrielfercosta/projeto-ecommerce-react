import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-titulo">Bem-vindo a Loja!</h1>
      <p className="home-subtitulo">Os melhores produtos com os melhores preços</p>
      <Link to="/produtos" className="home-botao">Ver Produtos</Link>
    </div>
  )
}

export default Home