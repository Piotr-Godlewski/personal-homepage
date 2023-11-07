import styled from "styled-components";

export const StyledParagraph = styled.p`
color: ${({theme}) => theme.color.mineShaft};
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 140%;
letter-spacing: 0.9px;
margin: 24px 0 0 0;

@media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px){
margin: 12px 0 0 0;
font-size: 14px;
line-height: normal;
letter-spacing: 0.7px;
}
`