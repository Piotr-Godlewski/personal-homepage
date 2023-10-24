import { LinkContainer, StyledLine, StyledLink } from "./styled"

const Link = ({ link }) => {
    return (
        <LinkContainer>
            <StyledLink href={link}>
                {link}
            </StyledLink>
            <StyledLine />
        </LinkContainer>
    )
}

export default Link