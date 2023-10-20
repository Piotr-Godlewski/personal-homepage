import { ListDot } from "../ListDot"
import { ListElement, StyledSkillList } from "./styled"

const SkillList = ({skills}) => {
    return (
        <StyledSkillList>
            {skills.map(
                skill =>
                    <ListElement>
                        <ListDot />{skill}
                    </ListElement>
            )}
        </StyledSkillList>
    )
}

export default SkillList