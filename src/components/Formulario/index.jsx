import styled from "styled-components"

const Section = styled.section `
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    font-family:"Fira Sans", sans-serif;
    width:50rem;
    padding:2rem;
    margin-top:6rem;
    display:grid;
    gap:1rem;
    h1 {
        color:orange;
    }
    input {
        width:20rem;
        border:solid 1px #F0F0F0;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        padding: 0.5rem;
        border-radius:5px;
    }
    button {
        width:5rem;
        padding:0.5rem;
        border:solid 1px #F0F0F0;
        background-color:orange;
        cursor:pointer;
    }
    button:hover {
        background-color:#ecc700;
        transition:.4s;
    }

    @media (max-width:400px) {
        width:10rem;
        input {
            width:9rem;
        }
    }
`
const Div = styled.div `
    display:flex;
    justify-content:center;
`

function Formulario() {
    return (
        <Div>
        <Section>
            <h1>Entre em Contato
            </h1>
            <h3>Digite seu e-mail:
            </h3>
            <input placeholder="seuemail@exemplo.com" type="text" />
            <button>Enviar</button>
        </Section>
        </Div>
    )

}

export default Formulario