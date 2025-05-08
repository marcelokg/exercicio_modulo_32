import { styled } from 'styled-components'

export const Aside = styled.aside`
  width: 100px;
  padding: 16px;
  background-color: #003049;
  height: 100vh;
  overflow-y: auto;
  transition: width 0.3s ease-in-out;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;

  &:hover {
    width: 200px;
  }
`
export const BotaoLateral = styled.button`
  cursor: pointer;
  font-size: 14px;
  padding: 4px;
  width: 100%;
  height: 40px;
  transition: width 0.3s ease-in-out;
  opacity: 0;
  visibility: hidden;
  white-space: nowrap;

  ${Aside}:hover & {
    visibility: visible;
    opacity: 1;
    width: 180px;
  }
`
export const Indicador = styled.div`
  position: absolute;
  top: 50%;
  left: 70px;
  transform: translateY(-50%);
  font-size: 100px;
  color: white;
  cursor: pointer;
  transition:
    opacity 0.3s ease-in-out,
    transform 0.8s ease-in-out;

  ${Aside}: hover & {
    opacity: 0;
    transform: translateX(80px);
  }
`
