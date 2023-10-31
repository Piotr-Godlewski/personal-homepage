import { BrightnessBackground } from "./ToogleIcon/BrightnessBackground"
import { BrightnessIcon } from "./ToogleIcon/BrightnessIcon"
import { ToogleButton } from "./ToogleIcon/ToogleButton"
import { Button, StyledBrightnessBackground, StyledBrightnessIcon, StyledToogleMode } from "./styled"

const ToogleMode = () => {

    return (
        <StyledToogleMode>
            Dark mode off
            <Button>
                <ToogleButton />
                <StyledBrightnessBackground>
                <BrightnessBackground />
                </StyledBrightnessBackground>
                <StyledBrightnessIcon>
                <BrightnessIcon />
                </StyledBrightnessIcon>
            </Button>
        </StyledToogleMode>
    )
}

export default ToogleMode