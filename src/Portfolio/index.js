import { GitHubIcon } from "../Contact/SocialMedia/icon/GitHub"
import { Header, Icon, StyledPortfolio, TileContainer, Title } from "./styled"

const Portfolio = () => {
    return (
        <StyledPortfolio>
            <Icon>
                <GitHubIcon />
            </Icon>
            <Header>
                Portfolio
            </Header>
            <Title>
                My recent projects
            </Title>
            <TileContainer>
                tu będą pobierane projekty z API Githuba
            </TileContainer>
        </StyledPortfolio>
    )
}

export default Portfolio