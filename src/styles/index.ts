import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Cal Sans", sans-serif;
        font-weight: 200;
    }
`

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`
export const MainContainer = styled.main`
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #99d98c;
  min-height: 100vh;
  background-size: cover;
`
export const Titulo = styled.h1`
  margin-top: 20px;
`
export const ListaContatos = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
  justify-content: center;
  align-items: flex-start;
  margin: 16px 0;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 90%;
  }

  label {
    font-size: 12px;
  }

  input {
    width: 100%;
    border: 1px solid #eee;
    border-radius: 4px;
    font-size: 16px;
    padding: 12px;
    height: 20px;
    text-align: center;
  }
`
export default EstiloGlobal
