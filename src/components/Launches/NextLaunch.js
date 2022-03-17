import {useQuery} from 'react-query';
import axios from 'axios';
import { Cabecalho, Item, Title,Container } from './styles';

const url = process.env.NODE_ENV==='production'? process.env.REACT_APP_API_URL: 'http://localhost:8000';

export function NextLaunch() {
  const {data,isFetching} = useQuery('proximoLancamento',async()=>{
    const response = await axios.get(url+'/proximoLancamento');
    return response.data;
  },{
    staleTime: 60000 // 1 minuto
  });

  return (
    <>
    <Container>
    <Title>Próximo Lançamento</Title>
    <Cabecalho>
        <span>Data Local</span>
        <span>Nome</span>
      </Cabecalho>
      {isFetching&&<p style={{paddingLeft:'50px', fontSize:'20px', color:'purple'}}>Carregando...</p>}
      {data?.map(launch=>{
        return (
          <Item>
            <span>{launch.date_local}</span>
            <span>{launch.name}</span>
          </Item>
          )
        })}
    </Container>
    </>
    )
  }