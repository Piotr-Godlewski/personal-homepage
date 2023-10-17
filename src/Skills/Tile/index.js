import { ListContainer, StyledTile, StyledTitle } from "./styled"

const Tile = ({ title, icon, content }) => {
    return (
        <>
            <StyledTile>
                <StyledTitle>{title} {icon}</StyledTitle>
                <ListContainer>{content}</ListContainer>
            </StyledTile>
        </>
    )
}

export default Tile