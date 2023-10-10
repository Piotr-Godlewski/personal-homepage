import AboutMe from "../AboutMe"
import SkillsContainer from "../Skills"
import { Contact } from "../Contact"
import { StyledCv } from "./styled"

const Cv = () => {
    return (
        <>
            <StyledCv>
                <AboutMe>
                </AboutMe>
                <SkillsContainer />
                <Contact>
                    Tu będą linki do mediów społecznościowych
                </Contact>
            </StyledCv>
        </>
    )
}

export default Cv