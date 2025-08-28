import { Container } from "./components/Container";
import { Heading } from "./components/Heading";
import "./styles/global.css";
import "./styles/theme.css";

export function AppTeste() {
  return (
    <>
      <Container>
        <Heading>Logo</Heading>
      </Container>

      <Container>
        <Heading>Menu</Heading>
      </Container>
    </>
  );
}
