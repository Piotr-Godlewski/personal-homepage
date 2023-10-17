import { StyledContainer } from "./styled"
import Tile from "./Tile"
import CurrentlySkillList from "./CurrentlySkillList"

const SkillsContainer = () => {
    return (
        <StyledContainer>
            <Tile
                title={"My skillset includes"}
                icon={"🛠️"}
                content={<CurrentlySkillList/>}
            />
            <Tile
                title={"What I want to learn next"}
                icon={"🚀"}
            />
        </StyledContainer>
    )
}

export default SkillsContainer