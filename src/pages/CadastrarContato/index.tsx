import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ContatoType } from '../../types/contatoTypes'
import { adicionarContato } from '../../store/reducers/contatoSlice'
import { MainContainer, Titulo, Wrapper } from '../../styles'
import BarraLateral from '../../containers/BarraLateral'
import { CardCadastro } from './styles'
import { BotaoVerde, BotaoVermelho } from '../../components/ContatoItem/styles'

function CadastrarContato() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [contatoInicial, setContatoInicial] = useState<ContatoType>({
    id: '',
    nome: '',
    telefone: '',
    email: ''
  })

  const handleAlteracao = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setContatoInicial((state) => ({ ...state, [name]: value }))
  }

  const handleSalvar = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (
      !contatoInicial.nome.trim() ||
      !contatoInicial.telefone.trim() ||
      !contatoInicial.email.trim()
    ) {
      alert('Por favor, preencha todos os campos antes de salvar')
    } else {
      const novoContato = { ...contatoInicial, id: Date.now().toString() }
      dispatch(adicionarContato(novoContato))
      navigate('/')
    }
  }

  const handleCancelarCadastro = () => {
    navigate('/')
  }

  return (
    <>
      <Wrapper>
        <BarraLateral trocarBotao={false} />
        <MainContainer>
          <Titulo>Cadastrar Novo Contato</Titulo>
          <CardCadastro>
            <div>
              <label htmlFor="nome">Nome: </label>
              <input
                id="nome"
                type="text"
                name="nome"
                value={contatoInicial.nome}
                onChange={handleAlteracao}
                required
              />
            </div>
            <div>
              <label htmlFor="telefone">Telefone: </label>
              <input
                id="telefone"
                type="text"
                name="telefone"
                value={contatoInicial.telefone}
                onChange={handleAlteracao}
                required
                className="inputTel"
              />
            </div>
            <div>
              <label htmlFor="email">E-mail: </label>
              <input
                id="email"
                type="email"
                name="email"
                value={contatoInicial.email}
                onChange={handleAlteracao}
                required
              />
            </div>
            <div className="acoes">
              <BotaoVerde type="button" onClick={handleSalvar}>
                Salvar
              </BotaoVerde>
              <BotaoVermelho type="button" onClick={handleCancelarCadastro}>
                Cancelar
              </BotaoVermelho>
            </div>
          </CardCadastro>
        </MainContainer>
      </Wrapper>
    </>
  )
}

export default CadastrarContato
