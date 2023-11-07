import Description from "./Description"
import SectionLink from "./SectionLink"
import TileHeader from "./TileHeader"
import { StyledTilePortfolio } from "./styled"

const TilePortfolio = () => {
    return (
        <StyledTilePortfolio>
            <TileHeader></TileHeader>
            <Description></Description>
            <SectionLink />
        </StyledTilePortfolio>
    )
}

export default TilePortfolio