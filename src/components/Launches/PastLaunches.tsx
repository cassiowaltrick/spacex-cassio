import {useQuery} from 'react-query';
import axios from "axios";
import { Table, TD,TH, Title,Observacao } from './styles';

type Launch = {
  name:string;
  date_local:string;
}

export function PastLaunches() {
  const {data,isFetching} = useQuery<Launch[]>('ultimosLancamentos',async()=>{
    const response = await axios.get('https://spacex-backend-cassio.herokuapp.com/ultimosLancamentos')

    return response.data;
  },{
    staleTime: 60000 // 1 minuto
  });

  return (
    <>
    <Title>Últimos Lançamentos</Title>
    <Observacao>(em ordem decrescente por data)</Observacao>
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