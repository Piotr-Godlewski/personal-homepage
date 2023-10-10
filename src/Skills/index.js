import { StyledContainer } from "./styled"
import Tile from "../Tile"

const SkillsContainer = () => {
    return (
        <StyledContainer>
            <Tile
                title={"My skillset includes"}
                icon={"🛠️"}
            />
            <Tile
                title={"What I want to learn next"}
                icon={"🚀"}
            />
        </StyledContainer>
    )
}

export default SkillsContainer