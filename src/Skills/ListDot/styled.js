import styled from "styled-components";

export const Dot = styled.svg`
margin-right: 16px;
color: ${({theme}) => theme.color.scienceBlue};

@media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
    width: 6px;
    height: 6px;
    margin-right: 8px;
}
`