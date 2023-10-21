import CodeLink from "./CodeLink"
import DemoLink from "./DemoLink"
import Description from "./Description"
import TileHeader from "./TileHeader"
import { StyledTilePortfolio } from "./styled"

const TilePortfolio = () => {
    return (
        <StyledTilePortfolio>
            <TileHeader></TileHeader>
            <Description></Description>
            <DemoLink></DemoLink>
            <CodeLink></CodeLink>
        </StyledTilePortfolio>
    )
}

export default TilePortfolio