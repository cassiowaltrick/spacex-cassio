import {useQuery} from 'react-query';
import api from '../../services/api';
import { Table, TD,TH, Title,Observacao } from './styles';

type Launch = {
  name:string;
  date_local:string;
}

export function UpcomingLaunches() {
  const {data,isFetching} = useQuery<Launch[]>('proximosLancamentos',async()=>{
    const response = await api.get('proximosLancamentos')
    return response.data;
  },{
    staleTime: 60000 // 1 minuto
  });

  return (
    <>
    <Title>Próximos Lançamentos</Title>
    <Observacao>(em ordem crescente por data)</Observacao>
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