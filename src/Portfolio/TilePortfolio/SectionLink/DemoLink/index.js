import Link from "../Link"
import { StyledDemoLink } from "./styled"

const DemoLink = () => {
    return (
        <StyledDemoLink>
            Demo:<Link link={"https://google.pl"}/>
        </StyledDemoLink>
    )
}

export default DemoLink