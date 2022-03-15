import {useQuery} from 'react-query';
import axios from 'axios';
import { Table, TD,TH, Title } from './styles';

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
    <Title>Próximo Lançamento</Title>
    <Table>
      <thead>
        <tr>
          <TH>Nome</TH>
          <TH>Data</TH>
          </tr>
          {isFetching&&<p>Carregando...</p>}
          {data?.map(launch=>{
              return (
                <tr>
                  <TD>{process.env.NODE_ENV}</TD>
                  <TD>{launch.date_local}</TD>
                </tr>
              )
            })}
      </thead>
    </Table>
    </>
)
}