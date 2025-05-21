import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type AppState = {
  carrinho: Produto[]
  favoritos: Produto[]
}

const initialState: AppState = {
  carrinho: [],
  favoritos: []
}

const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.carrinho.find((product) => product.id === produto.id)) {
        alert('Item já adicionado')
      } else {
        state.carrinho.push(produto)
      }
    },
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.favoritos.find((product) => product.id === produto.id)) {
        state.favoritos = state.favoritos.filter(
          (product) => product.id !== produto.id
        )
      } else {
        state.favoritos.push(produto)
      }
    }
  }
})

export const { adicionar, favoritar } = AppSlice.actions
export default AppSlice.reducer
