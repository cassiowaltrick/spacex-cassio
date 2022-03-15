import { Button, Container, Content,Title } from "./styles";

export function Header(){
    return (
    <Container>
        <script src="https://www.googleoptimize.com/optimize.js?id=OPT-WQ5NHFV"></script>
            <Title>SPACE X</Title>
            <Content>
                <Button href="ultimosLancamentos">Últimos Lançamentos</Button>
                <Button href="ultimoLancamento">Último Lançamento</Button>
                <Button href="proximoLancamento">Próximo Lançamento</Button>
                <Button href="proximosLancamentos">Próximos Lançamentos</Button>
            </Content>
        </Container>
    )
}