import AboutMe from "../AboutMe"
import SkillsContainer from "../Skills"
import Contact from "../Contact"
import { StyledCv } from "./styled"
import Portfolio from "../Portfolio"
import ToogleMode from "../ToogleMode"

const Cv = () => {
    return (
        <>
            <StyledCv>
                <ToogleMode />
                <AboutMe>
                </AboutMe>
                <SkillsContainer />
                <Portfolio />
                <Contact />
            </StyledCv>
        </>
    )
}

export default Cv