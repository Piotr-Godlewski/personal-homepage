import AboutMe from "../AboutMe"
import SkillsContainer from "../Skills"
import Contact from "../Contact"
import { StyledCv } from "./styled"
import { Portfolio } from "../Portfolio/styled"

const Cv = () => {
    return (
        <>
            <StyledCv>
                <AboutMe>
                </AboutMe>
                <SkillsContainer />
                <Portfolio>Portfolio in progress ...</Portfolio>
                <Contact>
                </Contact>
            </StyledCv>
        </>
    )
}

export default Cv