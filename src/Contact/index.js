import Title from "./Title"
import Email from "./Email"
import Paragraph from "./Paragraph"
import SocialMedia from "./SocialMedia"
import { StyledContact } from "./styled"

const Contact = () => {
    return (
        <StyledContact>
            <Title />
            <Email />
            <Paragraph />
            <SocialMedia />
        </StyledContact>
    )
}

export default Contact