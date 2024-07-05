import BotaoMenu from "../Botoes"
import { BotoesWrapper, Header, Nav } from "./Menu"
import logo from "/LogoMain.png";

const Menu = () => {
  
  return (
    <Header>
      <Nav>
        <img src={logo} alt="Logo AluraFlix" />

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