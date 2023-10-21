import { GitHubIcon } from "../Contact/SocialMedia/icon/GitHub"
import TilePortfolio from "./TilePortfolio"
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
                <TilePortfolio/>
                <TilePortfolio/>
                <TilePortfolio/>
                <TilePortfolio/>
            </TileContainer>
        </StyledPortfolio>
    )
}

export default Portfolio