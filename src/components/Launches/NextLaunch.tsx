import {useQuery} from 'react-query';
import axios from "axios";
import { Table, TD,TH, Title } from './styles';

type Launch = {
  name:string;
  date_local:string;
}

export function NextLaunch() {
  const {data,isFetching} = useQuery<Launch[]>('proximoLancamento',async()=>{
    const response = await axios.get('https://spacex-backend-cassio.herokuapp.com/proximoLancamento')
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
                  <TD>{launch.name}</TD>
                  <TD>{launch.date_local}</TD>
                </tr>
              )
            })}
      </thead>
    </Table>
    </>
)
}