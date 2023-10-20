import { StyledContainer } from "./styled"
import Tile from "./Tile"
import SkillList from "./SkillList"
import { mySkills } from "./mySkills"

const SkillsContainer = () => {
    return (
        <StyledContainer>
            <Tile
                title={"My skillset includes"}
                icon={"🛠️"}
                content={<SkillList skills={mySkills.currently}/>}
            />
            <Tile
                title={"What I want to learn next"}
                icon={"🚀"}
                content={<SkillList skills={mySkills.future}/>}
            />
        </StyledContainer>
    )
}

export default SkillsContainer