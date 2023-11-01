import { BrightnessBackground } from "./ToogleIcon/BrightnessBackground"
import { BrightnessIcon } from "./ToogleIcon/BrightnessIcon"
import { ToogleButton } from "./ToogleIcon/ToogleButton"
import { Button, StyledBrightnessBackground, StyledBrightnessIcon, StyledToogleMode, ToogleText } from "./styled"

const ToogleMode = () => {

    return (
        <StyledToogleMode>
            <ToogleText>
                Dark mode off
            </ToogleText>
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