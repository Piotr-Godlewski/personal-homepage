import Link from "../Link"
import { StyledCodeLink } from "./styled"

const CodeLink = () => {
    return (
        <StyledCodeLink>
            Code:<Link link={"https://google.pl"}/>
        </StyledCodeLink>
    )
}

export default CodeLink