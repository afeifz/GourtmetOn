import { useState } from 'react'
import styled from 'styled-components'
import Navi from './components/Navi'
import Apresentacao from './components/Apresentacao/index.'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navi>

    </Navi>
    <Apresentacao></Apresentacao>
    </>
  )
}

export default App