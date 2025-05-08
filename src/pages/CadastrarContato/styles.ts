import styled from 'styled-components'

export const CardCadastro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background-color: #036666;
  border-radius: 6px;
  width: 400px;
  padding: 30px;
  margin-top: 20px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100;
  }

  label {
    font-size: 16px;
    margin-bottom: 5px;
    text-align: center;
    color: #eeeeee;
  }

  input {
    width: 100%;
    width: 300px;
    padding: 5px;
    border: 1px solid #14746f;
    text-align: center;
  }
  .acoes {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`
