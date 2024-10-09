import styled from "styled-components";
import React, { useState, useEffect } from 'react';


const Header = styled.header`
  font-family:"Fira Sans", sans-serif;
  margin-top:7rem;
  text-align: start;
  width:75%;
  background-color: orange;
  color: white;
  padding: 20px;
  border-radius: 10px; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2em;
  }
`;
const Section = styled.section`
    font-family:"Fira Sans", sans-serif;
    background-color: white;
    padding: 2rem;
    width:20rem; 
    margin: 20px 0px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: row;
    h2 {
        color: orange;
        font-size: 1.8em;
        margin-bottom: 10px;
    }

    p {
        font-size: 1.1em;
        color: #555;
    }
`;
const SectionsWrapper = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content: space-around;
  margin: 20px 0;
  gap: 10px;

`;


function Apresentacao() {

  const [comidas, setComidas] = useState([]);

  useEffect(() => {

    const fetchData = async () => {

      const response = await fetch('https://api.spoonacular.com/recipes/random?number=5&apiKey=ba8aa7aeb93c4325a3476e61911d88b4');

      const data = await response.json();

      setComidas(data.recipes);

    };

    fetchData();

  }, []);
        return (
        
    <div id="apresentacao">
      <Header>
        <h1>Experimente a Conveniência do Nosso App de Delivery</h1>
        <p>Com o nosso aplicativo, suas refeições favoritas estão a apenas alguns cliques de distância!</p>
      </Header>
    <SectionsWrapper>
      <Section>
        <h2>Entrega Rápida</h2>
        <p>
          Nosso sistema de entrega eficiente garante que você receba seus pedidos rapidamente. Graças à nossa rede de
          parceiros, priorizamos entregas ágeis e de qualidade, para que você possa aproveitar sua refeição fresquinha,
          sem esperar muito tempo.
        </p>
      </Section>

      <Section>
        <h2>Variedade de Restaurantes</h2>
        <p>
          Desde redes populares até pequenos negócios locais, nosso app oferece uma variedade incrível de opções.
          Descubra novos sabores, escolha seus pratos favoritos e explore a diversidade gastronômica diretamente do
          conforto da sua casa.
        </p>
      </Section>

      <Section>
        <h2>Pagamento Fácil</h2>
        <p>
          Oferecemos várias opções de pagamento para facilitar sua experiência: cartões de crédito, débito, carteiras
          digitais e mais. O processo é simples e seguro, garantindo que você finalize seu pedido sem preocupações, com
          a opção de deixar gorjetas diretamente pelo app.
        </p>
      </Section>
    </SectionsWrapper>
    <Header>
        <h1>Algumas Comidas Disponíveis em nosso app</h1>
      </Header>
    <SectionsWrapper>
  {comidas.map(comida => (
    <Section key={comida.id}>
      <h2>{comida.title}</h2>
      <p dangerouslySetInnerHTML={{ __html: comida.summary }} />
    </Section>
  ))}
</SectionsWrapper>
    </div>
    )

}

export default Apresentacao