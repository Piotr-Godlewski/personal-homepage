import { FacebookIcon } from "./icon/Facebook"
import { GitHubIcon } from "./icon/GitHub"
import { InstagramIcon } from "./icon/Instagram"
import { LinkedInIcon } from "./icon/LinkedIN"
import { IconContainer, StyledLink } from "./styled"

const SocialMedia = () => {
    return (
        <IconContainer>
            <StyledLink href="https://github.com/Piotr-Godlewski">
                <GitHubIcon />
            </StyledLink>
            <StyledLink href="https://www.facebook.com/piotr.godlewski.549221?locale=pl_PL">
                <FacebookIcon />
            </StyledLink>
            <StyledLink href="https://www.linkedin.com/in/piotr-godlewski-83532a256">
                <LinkedInIcon />
            </StyledLink>
            <StyledLink href="https://www.instagram.com/godlewskipiotr90/">
                <InstagramIcon />
            </StyledLink>
        </IconContainer>
    )
}

export default SocialMedia