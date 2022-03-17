# Objetivo do projeto

Este projeto é do FrontEnd.

Este projeto foi desenvolvido por Cássio Waltrick.
A ideia dele é a execução de um desafio, onde deveria executar consultas na API da SPACE X que está sendo buscada e retornada pelo BackEnd (https://github.com/cassiowaltrick/spacex-cassio-backend) e retornar as seguintes consultas.

● Próximo lançamento\
● Último lançamento\
● Próximos lançamentos\
● Lançamentos passados

## Scripts Disponíveis

No diretório do projeto você pode executar:

### `npm install`

Para instalar todas as dependências do projeto permitindo que o projeto possa ser executado corretamente.

### `npm start`

Irá executar a aplicação em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para ver no seu navegador.

A página será recarregada quando você fizer alterações.\
Você também pode ver erros no console.

## Explicação de como foi desenvolvido o frontend

Essa aplicação tinha o objetivo de uma integração com o HotJar, Google Analytics e Google Optimize, então isso foi feito utilizando scripts prontos fornecidos pelas empresas (Google e HotJar) e incluídas no 'index.js'.\
Em App.js foi definido todas as rotas do sistema, o Header e o GlobalStyle.
GlobalStyle é uma folha de estilo que vai servir para o sistema inteiro.
No frontend foi criado uma pasta 'components' dentro da pasta 'src' onde estão os componentes 'Header', 'Launches', 'Pagination'.\
No Header temos o título com o nome da empresa 'SPACE X', e todos os botões de navegação do sistema, são 4 (quatro) ao total, um para cada consulta de lançamentos (último, últimos, próximo e próximos lançamentos)\
No Launches é onde os lançamentos são exibidos, todos eles funcionam na mesma lógica, fazem a busca no backend utilizando o 'AXIOS', pegam o retorno da api e popula os componentes exibindo o nome do lançamento e a data com horario (local)\
Em Pagination são utilizados Hooks para fazer o controle de paginação, e de quantidade de itens exibido em cada lançamento, a paginação é um componente que faz parte de cada Launch, eles não estão presentes no NextLauch e no LastLaunch pois estes já sabemos que só tem um item como resultado então não faz sentido ter paginação.
Visando uma melhoria de desempenho e evitar muitas consultas desnecessárias sendo que a lista não tem uma grande taxa de atualização, foi utlizado o 'REACT QUERY' com o objetivo de evitar isso, dessa forma foi definido que no período de 1 minuto para que seja executado novamente essa consulta, utilizando o principio de stale-while-revalidate.