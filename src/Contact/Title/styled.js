import styled from "styled-components";

export const StyledTitle = styled.p`
color: ${({theme}) => theme.color.slateGray};
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: 130%;
text-transform: uppercase;
margin: 0 0 24px 0;

@media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px){
margin: 0 0 12px 0;
}
`