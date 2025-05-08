import { useDispatch } from 'react-redux'
import { useEffect, useState, useRef } from 'react'
import { ContatoType } from '../../types/contatoTypes'
import {
  editarContato,
  removerContato
} from '../../store/reducers/contatoSlice'
import { BotaoAmarelo, BotaoVerde, BotaoVermelho, Card } from './styles'
import { Form } from '../../styles'

type ContatoItemProps = {
  contato: ContatoType
}

function ContatoItem({ contato }: ContatoItemProps) {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [contatoEditado, setContatoEditado] = useState(contato)
  const [estaVisivel, setEstaVisivel] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEstaVisivel(true)
        } else {
          setEstaVisivel(false)
        }
      },
      { threshold: 0.2 }
    )

    const elemento = cardRef.current

    if (elemento) {
      observer.observe(elemento)
    }

    return () => {
      if (elemento) {
        observer.unobserve(elemento)
      }
    }
  }, [])

  const handleClickEditar = () => {
    setEstaEditando(true)
  }

  const handleClickSalvar = () => {
    if (
      !contatoEditado.nome.trim() ||
      !contatoEditado.telefone.trim() ||
      !contatoEditado.email.trim()
    ) {
      alert('Por favor, preencha todos os campos antes de salvar')
    } else {
      dispatch(editarContato(contatoEditado))
      setEstaEditando(false)
    }
  }

  const handleAlteracao = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContatoEditado({ ...contatoEditado, [e.target.name]: e.target.value })
  }

  const handleClickCancelar = () => {
    setContatoEditado(contato)
    setEstaEditando(false)
  }

  return (
    <Card
      ref={cardRef}
      className={estaVisivel ? 'visible' : 'hidden'}
      $estaEditando={estaEditando}
    >
      {estaEditando ? (
        <>
          <Form>
            <div>
              <label htmlFor="nome">Nome: </label>
              <input
                id="nome"
                type="text"
                name="nome"
                value={contatoEditado.nome}
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
                value={contatoEditado.telefone}
                onChange={handleAlteracao}
                required
              />
            </div>
            <div>
              <label htmlFor="email">E-mail: </label>
              <input
                id="email"
                type="email"
                name="email"
                value={contatoEditado.email}
                onChange={handleAlteracao}
                required
              />
            </div>
          </Form>
          <div>
            <BotaoVerde onClick={handleClickSalvar}>Salvar</BotaoVerde>
            <BotaoVermelho onClick={handleClickCancelar}>
              Cancelar
            </BotaoVermelho>
          </div>
        </>
      ) : (
        <>
          <h3>{contato.nome}</h3>
          <p>{contato.telefone}</p>
          <p>{contato.email}</p>
          <div>
            <BotaoVermelho onClick={() => dispatch(removerContato(contato.id))}>
              Remover
            </BotaoVermelho>
            <BotaoAmarelo onClick={handleClickEditar}>Editar</BotaoAmarelo>
          </div>
        </>
      )}
    </Card>
  )
}

export default ContatoItem
