import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import ContatoItem from '../../components/ContatoItem'
import { ListaContatos, MainContainer, Titulo, Wrapper } from '../../styles'
import BarraLateral from '../../containers/BarraLateral'
import { ContatoType } from '../../types/contatoTypes'

function Home() {
  const contatos = useSelector(
    (state: RootState) => state.contatos.contatos as ContatoType[]
  )

  return (
    <>
      <Wrapper>
        <BarraLateral trocarBotao />
        <MainContainer>
          <Titulo>Lista de Contatos</Titulo>
          <ListaContatos>
            {contatos.map((contato) => (
              <ContatoItem key={contato.id} contato={contato} />
            ))}
          </ListaContatos>
        </MainContainer>
      </Wrapper>
    </>
  )
}

export default Home
