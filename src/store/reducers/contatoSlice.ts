import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ContatoType } from '../../types/contatoTypes'

interface ContatoState {
  contatos: ContatoType[]
}

const initialState: ContatoState = {
  contatos: [
    {
      id: '1',
      nome: 'Contato 1',
      telefone: '(11) 11111-1111',
      email: 'contatoteste@outlook.com'
    },
    {
      id: '2',
      nome: 'Contato 2',
      telefone: '(22) 22222-2222',
      email: 'contatoteste@outlook.com'
    },
    {
      id: '3',
      nome: 'Contato 3',
      telefone: '(33) 33333-3333',
      email: 'contatoteste@outlook.com'
    },
    {
      id: '4',
      nome: 'Contato 4',
      telefone: '(44) 44444-4444',
      email: 'contatoteste@outlook.com'
    },
    {
      id: '5',
      nome: 'Contato 5',
      telefone: '(55) 55555-5555',
      email: 'contatoteste@outlook.com'
    },
    {
      id: '6',
      nome: 'Contato 6',
      telefone: '(66) 66666-6666',
      email: 'contatoteste@outlook.com'
    },
    {
      id: '7',
      nome: 'Contato 7',
      telefone: '(77) 77777-7777',
      email: 'contatoteste@outlook.com'
    },
    {
      id: '8',
      nome: 'Contato 8',
      telefone: '(88) 88888-8888',
      email: 'contatoteste@outlook.com'
    },
    {
      id: '9',
      nome: 'Contato 9',
      telefone: '(99) 99999-9999',
      email: 'contatoteste@outlook.com'
    },
    {
      id: '10',
      nome: 'Contato 10',
      telefone: '(99) 99999-9999',
      email: 'contatoteste@outlook.com'
    },
    {
      id: '11',
      nome: 'Contato 11',
      telefone: '(99) 99999-9999',
      email: 'contatoteste@outlook.com'
    },
    {
      id: '12',
      nome: 'Contato 12',
      telefone: '(99) 99999-9999',
      email: 'contatoteste@outlook.com'
    },
    {
      id: '13',
      nome: 'Contato 13',
      telefone: '(99) 99999-9999',
      email: 'contatoteste@outlook.com'
    },
    {
      id: '14',
      nome: 'Contato 14',
      telefone: '(99) 99999-9999',
      email: 'contatoteste@outlook.com'
    },
    {
      id: '15',
      nome: 'Contato 15',
      telefone: '(99) 99999-9999',
      email: 'contatoteste@outlook.com'
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    adicionarContato: (state, action: PayloadAction<ContatoType>) => {
      state.contatos.push(action.payload)
    },
    removerContato: (state, action: PayloadAction<string>) => {
      state.contatos = state.contatos.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editarContato: (state, action: PayloadAction<ContatoType>) => {
      const index = state.contatos.findIndex(
        (contato) => contato.id === action.payload.id
      )
      if (index !== -1) {
        state.contatos[index] = action.payload
      }
    }
  }
})

export const { adicionarContato, removerContato, editarContato } =
  contatoSlice.actions
export default contatoSlice.reducer
