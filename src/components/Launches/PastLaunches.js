import {useQuery} from 'react-query';
import axios from 'axios';
import { Cabecalho, Item, Title,Observacao,Container } from './styles';
import {useEffect, useState} from 'react';
import PaginationComponent from '../Pagination/PaginationComponent';
import PaginationSelection from '../Pagination/PaginationSelection';

const url = process.env.NODE_ENV==='production'? process.env.REACT_APP_API_URL: 'http://localhost:8000';

export function PastLaunches() {
  const [itens,setItens]=useState([]);
  const [itensPerPage,setItensPerPage]=useState(5);
  const [currentPage,setCurrentPage] = useState(0);

  const pages = Math.ceil(itens.length / itensPerPage);
  const startIndex = currentPage*itensPerPage;
  const endIndex = startIndex+itensPerPage;
  const currentItens = itens.slice(startIndex, endIndex);

  const {isFetching} = useQuery('ultimosLancamentos',async()=>{
    const response = await axios.get(url+'/ultimosLancamentos');
    setItens(response.data);
    return response.data;
  },{
    staleTime: 60000 // 1 minuto
  });

  useEffect(()=>{
    setCurrentPage(0);
  },[itensPerPage]);

  return (
    <>
    <Container>
      <Title>Últimos Lançamentos</Title>
      <Observacao>(em ordem decrescente por data)</Observacao>
      <PaginationSelection itensPerPage={itensPerPage} setItensPerPage={setItensPerPage} />
      <Cabecalho>
        <span>Data Local</span>
        <span>Nome</span>
      </Cabecalho>
      {isFetching&&<p style={{paddingLeft:'50px', fontSize:'20px', color:'purple'}}>Carregando...</p>}
      {currentItens?.map(launch=>{
        return (
          <Item>
            <span>{launch.date_local}</span>
            <span>{launch.name}</span>
          </Item>
          )
        })}
        <PaginationComponent pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </Container>
    </>
    )
  }