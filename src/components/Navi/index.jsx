import styled from  'styled-components'

const StyledNav = styled.nav `
    font-family: "Fira Sans", sans-serif;
    display: flex;
    align-items:center;
    justify-content:space-between;
    background-color: black ;

    div {
        display: flex;
        gap: 60px;
        margin-right: 100px;
    }

    h2 {
        font-family: "Bebas Neue", sans-serif;
        margin-left: 100px;
        color: white;
    }

    p {
        cursor: pointer;
        color: white;
    }

    span {
        color: orange;
    }
`

function Navi() {
    return (
    <StyledNav>
        <h2>G<span>ou</span>rmet<span>On</span></h2>
        <div>
        <p>Home</p>
        <p>Apresentação</p>
        <p>Funcionalidades</p>
        </div>
    </StyledNav>
    )

}

export default Navi