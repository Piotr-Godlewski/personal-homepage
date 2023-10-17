import { ListDot } from "../ListDot"
import { mySkills } from "../mySkills"
import { ListElement, StyledCurrentlySkillList } from "./styled"

const CurrentlySkillList = () => {
    return (
        <StyledCurrentlySkillList>
            {mySkills.currently.map(
                skill =>
                    <ListElement>
                        <ListDot />{skill}
                    </ListElement>
            )}
        </StyledCurrentlySkillList>
    )
}

export default CurrentlySkillList