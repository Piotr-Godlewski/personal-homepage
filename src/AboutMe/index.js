import { StyledAboutMe } from "./styled";
import { Image } from "./styled";
import Photo from "./photo.jpg";

const AboutMe = () => {
    return (
        <StyledAboutMe>
            <Image src={Photo} alt="Piotr Godlewski - photo" />
        </StyledAboutMe>
    )
}

export default AboutMe