import LoremIpsum from "react-lorem-ipsum";
import { Container } from "./Container";
import { Contact } from "./Contact";
import AboutMe from "./AboutMe";

function App() {
  return (
    <>
      <AboutMe>
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
