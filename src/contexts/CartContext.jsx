import { createContext, useState, useEffect } from "react"

const CartContext = createContext()

export function CartProvider({ children }) {
  const [itens, setItens] = useState(() => {
    const salvo = localStorage.getItem("carrinho")
    return salvo ? JSON.parse(salvo) : []
  })

  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(itens))
  }, [itens])

  function adicionarCarrinho(produto){
    setItens(itensAtuais => {
        const existe = itensAtuais.find((item) => item.id === produto.id)

        if (existe) {
            return itensAtuais.map(item => item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item)
        }else{
            return [...itensAtuais, { ...produto, quantidade: 1 }]
        }
    })
  }

  function removerCarrinhoId(id){
    setItens(itens => itens.filter((produto) => produto.id !== id))
  }

  function limparCarrinho(){
    setItens([])
  }

  return (
    <CartContext.Provider value={{itens, adicionarCarrinho, removerCarrinhoId, limparCarrinho, qntProdutos: itens.reduce((soma, item) => soma + item.quantidade, 0)}}>
        {children}
    </CartContext.Provider>
  )
}

export { CartContext }