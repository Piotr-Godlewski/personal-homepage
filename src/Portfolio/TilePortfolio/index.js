import Description from "./Description"
import CodeLink from "./SectionLink/CodeLink"
import DemoLink from "./SectionLink/DemoLink"
import TileHeader from "./TileHeader"
import { StyledTilePortfolio } from "./styled"

const TilePortfolio = () => {
    return (
        <StyledTilePortfolio>
            <TileHeader></TileHeader>
            <Description></Description>
            <DemoLink />
            <CodeLink />
        </StyledTilePortfolio>
    )
}

export default TilePortfolio