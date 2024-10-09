import styled from "styled-components"
import Juan from "../../assets/juanmuradas.png"
import Lucca from "../../assets/lucca.png"
import Moca from "../../assets/mocacliente.png"

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
    flex-wrap:wrap;
    justify-content:space-around;
    margin-top:5rem;
`
const Section = styled.section `
    font-family:"Fira Sans", sans-serif;
    width:25%;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding:1rem;
    img {
        width:100%;
    }
    h3 {
        color:orange;
        margin-bottom:1rem;
        margin-top:1rem;
    }
`


function Depoimentos() {
    return (
        <>
        <Header>
            <h1>Depoimentos de Clientes Satisfeitos</h1>
            <p>Clientes fiéis ao aplicativo avaliando nossos serviços</p>
        </Header>
        <Div>
            <Section>
                <img src={Juan} alt="" />
                <h3>Amei o aplicativo! Muito prático e simples de utilizar.</h3>
                <p>Cartson</p>
            </Section>
            <Section>
                <img src={Lucca} alt="" />
                <h3>Sensacional! Consigo usar em qualquer dispositivo e em qualquer lugar.</h3>
                <p>Carlos Eduardo</p>
            </Section>
            <Section>
                <img src={Moca} alt="" />
                <h3>Fiquei chocado com a qualidade do site, fiquei apaixonado pelo design!</h3>
                <p>Miguel Prestes</p>
            </Section>
        </Div>
        </>
    )
}

export default Depoimentos