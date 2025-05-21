import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'

import * as S from './styles'

import { useSelector, useDispatch } from 'react-redux'
import { favoritar } from '../store/reducers/carrinho'
import { RootReducer } from '../store'

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = useGetProdutosQuery()
  const favoritos = useSelector((state: RootReducer) => state.app.favoritos)
  const dispatch = useDispatch()
  if (isLoading) return <h2>Carregando...</h2>

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    return favoritos.some((favorito) => favorito.id === produto.id)
  }

  const handleFavoritar = (produto: ProdutoType) => {
    dispatch(favoritar(produto))
  }

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
            favoritar={handleFavoritar}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
