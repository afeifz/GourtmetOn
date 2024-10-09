import styled from  'styled-components'

const StyledNav = styled.nav `
    font-family: "Fira Sans", sans-serif;
    display: flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:space-around;
    background-color: black;
    padding:1rem;
    
    div {
        display: flex;
        gap: 4rem;
        flex-wrap:wrap;
    }

    h2 {
        font-family: "Bebas Neue", sans-serif;
        color: white;
    }

    a {
        text-decoration:none;
        color: white;
    }

    span {
        color: orange;
    }
    @media (max-width: 795px) {
        
    }
`

function Navi() {
    return (
    <StyledNav>
        <h2>G<span>ou</span>rmet<span>On</span></h2>
        <div>
        <a href='#hero'>Home</a>
        <a href='#apresentacao'>Apresentação</a>
        <a href='#funcionalidades'>Funcionalidades</a>
        <a href=''>Depoimentos</a>
        <a href=''>Contato</a>
        </div>
    </StyledNav>
    )

}

export default Navi