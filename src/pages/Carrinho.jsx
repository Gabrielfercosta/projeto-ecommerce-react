import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"

function Carrinho() {
  const {itens, removerCarrinhoId, limparCarrinho, qntProdutos} = useContext(CartContext);
  
  return(
    <div>        
        {itens.length > 0 ? (
        <div className="carrinho-container">
            <button className="botao-limpar" onClick={limparCarrinho}>Limpar Carrinho</button>
            <div className="carrinho-lista">
            {itens.map((item) => (
                <div className="carrinho-item" key={item.id}>
                <img src={item.image} alt={item.name} className="carrinho-item-img" />
                <div className="carrinho-item-info">
                    <h3>{item.name}</h3>
                    <p>R$ {item.price} | Quantidade: {item.quantidade}</p>
                </div>
                <div className="carrinho-item-acoes">
                    <p className="carrinho-item-subtotal">Subtotal: R$ {item.price * item.quantidade}</p>
                    <button className="botao-remover"onClick={() => removerCarrinhoId(item.id)}>Remover</button>
                </div>
                </div>
            ))}
            </div>
            <h2 className="carrinho-total">
            Total: R$ {itens.reduce((soma, item) => soma + item.price * item.quantidade, 0)}
            </h2>
        </div>
        ) : (
            <div className="carrinho-vazio">
                <h2>Ainda não há itens no carrinho :(</h2>
            </div>
        )}
    </div>
  )
}

export default Carrinho