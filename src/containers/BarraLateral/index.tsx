import { useNavigate } from 'react-router-dom'
import { Aside, BotaoLateral, Indicador } from './styles'
import { ArrowForwardIos } from '@mui/icons-material'

type Props = {
  trocarBotao: boolean
}

const BarraLateral = ({ trocarBotao }: Props) => {
  const navigate = useNavigate()

  return (
    <Aside>
      {trocarBotao ? (
        <div>
            <BotaoLateral onClick={() => navigate('/novo')}>
              Cadastrar Novo Contato
            </BotaoLateral>
        </div>
      ) : (
          <BotaoLateral onClick={() => navigate('/')}>
            Voltar a lista de contatos
          </BotaoLateral>
      )}
      <Indicador>
        <ArrowForwardIos />
      </Indicador>
    </Aside>
  )
}

export default BarraLateral
