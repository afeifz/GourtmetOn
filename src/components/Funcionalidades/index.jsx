import styled from "styled-components"

const Header = styled.header `
    font-family:"Fira Sans", sans-serif;
    margin-top:10rem;
    background-color:orange;
    padding:20px;
    border-radius:10px;
    width:75%;
    color:white;
    p {
        margin-top:1rem;
    }
`

const Div = styled.div `
    display:flex;
    gap:2rem;
    justify-content:space-around;
    flex-wrap:wrap;
    @media (max-width:510px) {
        gap:0.4rem;
    }
`

const Section = styled.section `
    width:20rem;
    margin-top:2rem;
    padding:3rem;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    width:20%;
    font-family:"Fira Sans", sans-serif;
    h1 {
        color:orange;
    }
    p {
        margin-top:1rem;
    }
    @media (max-width:510px) {
        padding:2rem;
        width:10rem
    }


`



function Funcionalidades() {
    return(
        <div id="funcionalidades">
        <Header>
            <h1>Funcionalidades do App</h1>
            <p>Contamos com diversas funções exclusivas somente para você</p>
        </Header>
        <Div>
            <Section>
                <h1>Menu Saudável e Sustentável</h1>
                <p>Filtros para refeições veganas, orgânicas, sem glúten ou de baixo impacto ambiental, mostrando a pegada de carbono dos pratos.</p>
            </Section>
            <Section>
                <h1>Recomendações Personalizadas por IA</h1>
                <p>Sugestões baseadas nas preferências alimentares, histórico de pedidos e avaliações dos usuários.</p>
            </Section>
            <Section>
                <h1>Acompanhamento Nutricional Integrado</h1>
                <p>Permitir que os usuários monitorem suas calorias e nutrientes consumidos com base nos pedidos.</p>
            </Section>
        </Div>
        <Div>
            <Section>
                <h1>Sistema de Assinatura de Marmitas</h1>
                <p>Planos semanais ou mensais de refeições com descontos, ajudando na praticidade do dia a dia.</p>
            </Section>
            <Section>
                <h1>Causas Sociais</h1>
                <p>A cada pedido, uma parte do valor é destinada a doações, ou o app oferece a opção de doar refeições para pessoas em situação de fome.</p>
            </Section>
            <Section>
                <h1>Entrega Eco-friendly</h1>
                <p>Opções de entregas por bike, veículos elétricos ou embalagens recicláveis para reduzir o impacto ambiental.</p>
            </Section>
        </Div>
        </div>
    )
}

export default Funcionalidades 