import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { getProdutoById } from '../services/api';

function ProdutoDetalhes() {
    const { id } = useParams()
    const { adicionarCarrinho } = useContext(CartContext)
    const [ produtoId, setProdutoId ] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
       async function buscar() {
            const dados = await getProdutoById(id)
            setProdutoId(dados)
            setLoading(false)
        }
        buscar()
    }, [id])

    if (loading) return <p>Carregando...</p>
    
    if(!produtoId) return <p>Produto não encontrado</p>
    return (
        <div className='detalhe-container'>
            <img src={produtoId.image} className='detalhe-img'/>
            <div className='detalhe-info'>
                <h1 className='detalhe-preco'>{produtoId.title}</h1>
                <p className='detalhe-preco'>Preço: {produtoId.price}</p>
                <button className='detalhe-botao' onClick={() => adicionarCarrinho(produtoId)}>Salvar</button>
            </div>
        </div>
    )
}

export default ProdutoDetalhes;