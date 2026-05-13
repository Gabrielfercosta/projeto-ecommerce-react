import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { getProdutos } from "../services/api";

function Produtos() {
  
  const { adicionarCarrinho } = useContext(CartContext)
  const [produtos, setProdutos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function buscar() {
      const dados = await getProdutos()
      setProdutos(dados)
      setLoading(false)
    }
    buscar()
  }, [])


  if (loading) return <p>Carregando...</p>

  return (
    <div>
      <div className="produtos-grid">
        {produtos.map((produto) => (
          <div key={produto.id} className="produto-card">
            <Link to={`/produto/${produto.id}`} className="produto-link">
              <img src={produto.image} alt={produto.title} className="produto-img" />
              <h3 className="produto-nome">{produto.title}</h3>
            </Link>
            <p className="produto-preco">R$ {produto.price}</p>
            <button className="produto-botao" onClick={() => adicionarCarrinho(produto)}>Adicionar ao Carrinho</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Produtos;