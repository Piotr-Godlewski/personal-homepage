import AboutMe from "../AboutMe"
import SkillsContainer from "../Skills"
import Contact from "../Contact"
import { StyledCv } from "./styled"
import Portfolio from "../Portfolio"

const Cv = () => {
    return (
        <>
            <StyledCv>
                <AboutMe>
                </AboutMe>
                <SkillsContainer />
                <Portfolio />
                <Contact>
                </Contact>
            </StyledCv>
        </>
    )
}

export default Cv