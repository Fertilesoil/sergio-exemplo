import BotaoMenu from "../Botoes"
import { BotoesWrapper, Header, Nav } from "./Menu"

const Menu = () => {
  
  return (
    <Header>
      <Nav>
        <h1>AluraFlix</h1>

        <BotoesWrapper>
          <BotaoMenu>
            Home
          </BotaoMenu>

          <BotaoMenu>
            Novo Vídeo
          </BotaoMenu>
        </BotoesWrapper>
      </Nav>
    </Header>
  )
}

export default Menu