import LoremIpsum from "react-lorem-ipsum";
import { Container } from "./Container";
import { AboutMe } from "./AboutMe";
import { Contact } from "./Contact";

function App() {
  return (
    <>
      <AboutMe>
        <LoremIpsum></LoremIpsum>
      </AboutMe>
      <Container>
        <LoremIpsum></LoremIpsum>
      </Container>
      <Container>
        <LoremIpsum></LoremIpsum>
      </Container>
      <Container>
        <LoremIpsum></LoremIpsum>
      </Container>
      <Contact>
        <LoremIpsum></LoremIpsum>
      </Contact>
    </>
  );
}

export default App;
