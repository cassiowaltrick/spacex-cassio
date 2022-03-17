import styled from 'styled-components';

export const Item = styled.div`
  padding:1em;
  margin:1em;
  border:1px solid purple;
  background-color:orange;
  color:black;
  display:flex;
  justify-content:space-around;
`

export const Cabecalho = styled.div`
  padding:1em;
  margin:1em;
  border:1px solid purple;
  color:white;
  background-color:green;
  display:flex;
  justify-content:space-around;
`

export const Container = styled.div`
  background-image: linear-gradient(white, gray);
  min-height: 736px;
`

export const Title = styled.div`
    padding: 2rem 0rem 2rem;
    color: purple;
    text-align: center;
    font-size: 3rem;
`
export const Observacao = styled.div`
    padding: 0rem 0rem 2rem;
    color: purple;
    text-align: center;
    font-size: 3rem;
`