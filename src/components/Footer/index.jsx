import styled from "styled-components"

const Section = styled.section `
    a {
        text-decoration:none;
        color:black;
        margin-right:1rem;
    }
`

const Div =  styled.div `
    display:flex;
    background-color:orange;
    justify-content:center;
    flex-wrap:wrap;
    padding:2rem;
    gap: 5rem;
    margin-top:3rem;
    font-family:"Fira Sans", sans-serif;

`

function Footer() {
    return (
        <Div>
            <Section>
                <p>Contato: (11) 1234-5678</p>
                <p>Email: contato@gourmeton.com</p>
            </Section>
            <Section>
                <a href="">Facebook</a><a href="">Instagram</a><a href="">Política de privacidade</a>
            </Section>
        </Div>

    )

}

export default Footer