import styled from  'styled-components'

const StyledNav = styled.nav `
    display: flex;
    align-items:center;
    justify-content:space-between;

    div {
        display: flex;
    }
`

function Navi() {
    return (
    <StyledNav>
        <h1>GourtmetOn</h1>
        <div>
        <p>Home</p>
        <p>Apresentação</p>
        <p>Funcionalidades</p>
        </div>
        <input placeholder='escreva' type="text" />
    </StyledNav>
    )

}

export default Navi