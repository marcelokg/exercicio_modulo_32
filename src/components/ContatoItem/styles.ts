import styled from 'styled-components'

export const Card = styled.div<{ $estaEditando: boolean }>`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: ${({ $estaEditando }) => ($estaEditando ? '320px' : '280px')};
  min-height: 100px;
  background: #76c893;
  padding: ${({ $estaEditando }) => ($estaEditando ? '10px' : '12px')};
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  font-bold: none;
  opacity: 0;
  transform: translateY(40px);
  transition:
    opacity 0.8s ease-out,
    transform 0.8s ease-out;

  opacity: 0;
  transform: translateY(40px);
  transition:
    opacity 0.8s ease-out,
    transform 0.8s ease-out;

  &.visible {
    opacity: 1 !important;
    transform: translateY(0);
  }

  &.hidden {
    opacity: 0;
    transform: translateY(40px);
    transition:
      opacity 0.8s ease-in,
      transform 0.8s ease-in;
  }

  &:hover {
    transform: scale(1.05);
    background: #34a0a4;
    border: 1px solid #036666;
  }

  h3 {
    margin-bottom: 8px;
  }

  p {
    font-size: 16px;
    margin-top: 4px;
  }
`
export const BotaoVermelho = styled.button`
  margin-top: 8px;
  cursor: pointer;
  padding: 5px;
  background-color: #d62828;
  border-radius: 4px;
  color: #edede9;
  border: 2px;
  font-size: 15px;

  &:hover {
    background-color: #780000;
  }
`
export const BotaoAmarelo = styled.button`
  margin-top: 8px;
  margin-left: 16px;
  cursor: pointer;
  padding: 5px;
  background-color: #f77f00;
  border-radius: 4px;
  color: #edede9;
  border: 2px;
  font-size: 15px;

  &:hover {
    background-color: #ffb703;
  }
`
export const BotaoVerde = styled.button`
  margin-top: 8px;
  margin-right: 16px;
  cursor: pointer;
  padding: 5px;
  background-color: #588157;
  border-radius: 4px;
  color: #edede9;
  border: 2px;
  font-size: 15px;

  &:hover {
    background-color: #3a5a40;
  }
`
