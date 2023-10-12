import styled from "styled-components";

export const StyledMail = styled.a`
text-decoration: none;
color: ${({theme}) => theme.color.mineShaft};
font-size: 32px;
font-style: normal;
font-weight: 900;
line-height: normal;
letter-spacing: 1.6px;

&:hover {
    color: ${({theme}) => theme.color.scienceBlue}
};
`