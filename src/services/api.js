export async function getProdutos() {
  const resposta = await fetch("https://fakestoreapi.com/products")
  const dados = await resposta.json()
  return dados
}

export async function getProdutoById(id) {
    const resposta = await fetch(`https://fakestoreapi.com/products/${id}`)
    const dados = await resposta.json()
    return dados
}