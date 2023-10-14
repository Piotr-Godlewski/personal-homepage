import { StyledAboutMe, Bio, Header, Name, Description, HireButton } from "./styled";
import { Image } from "./styled";
import Photo from "./photo.jpg";
import { HireIcon } from "./icon/HireIcon";

const AboutMe = () => {
    return (
        <>
            <StyledAboutMe>
                <Image src={Photo} alt="Piotr Godlewski - photo" />
                <Bio>
                    <Header>
                        This is
                    </Header>
                    <Name>
                        Piotr Godlewski
                    </Name>
                    <Description>
                        I'm a beginner frontend developer 👨🏻‍💻.
                        I would like to develop my passion ❤ for programming.
                        See my projects that you will find 🔎 on this website.
                        I want to become your employee.🙋‍♂️
                    </Description>
                    <HireButton href="mailto:godlewskipiotr.pg@gmail.com">
                        <HireIcon />
                        Hire Me
                    </HireButton>
                </Bio>
            </StyledAboutMe>
        </>
    )
}

export default AboutMe