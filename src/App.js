import LoremIpsum from "react-lorem-ipsum";
import { Contact } from "./Contact";
import AboutMe from "./AboutMe";
import SkillsContainer from "./Skills/index";

function App() {
  return (
    <>
      <AboutMe>
      </AboutMe>
      <SkillsContainer />
      <Contact>
        <LoremIpsum></LoremIpsum>
      </Contact>
    </>
  );
}

export default App;
