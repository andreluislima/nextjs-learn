import { PlayCircleIcon } from "lucide-react";
import { Container } from "./components/Container";
import { CountDown } from "./components/CountDown";
import { Cycles } from "./components/Cycles";
import { DefaultButton } from "./components/DefaultButton";
import { DefaultInput } from "./components/DefaultInput";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";

import "./styles/global.css";
import "./styles/theme.css";
import { Footer } from "./components/Footer";

export function AppTeste() {


  return (
    <>
      <Container>
        <Logo/>
      </Container>

      <Container>
        <Menu/>
      </Container>

      <Container>
        <CountDown/>
      </Container>

      <Container>
         <form action="" className="form">

          <div className="formRow">
           <DefaultInput 
              type="text"
              id="meuInput" 
              labelText="Any"
              placeholder="Digite algo"
              // disabled
              // defaultValue="Valor preenchido"
              />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <Cycles/>
          </div>

          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon/>} color="green"/>
          </div>

         </form>
      </Container>

      <Container>
        <Footer/>
      </Container>
    </>
  );
}
