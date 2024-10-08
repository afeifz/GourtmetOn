import styled from "styled-components";

const Header = styled.header`
  text-align: center;
  background-color: #ff6347;
  color: white;
  padding: 20px;

  h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2em;
  }
`;
const Section = styled.section`
    background-color: white;
    padding: 20px; 
    margin: 20px 0px;
    border-radius: 10pp;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    h2 {
        color: #ff6347;
        font-size: 1.8em;
        margin-bottom: 10px;
    }

    p {
        font-size: 1.1em;
        color: #555;
    }
`;

function Apresentacao() {
        return (
        <h1></h1>
    )

}

export default Apresentacao