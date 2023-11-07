import styled from "styled-components";

export const StyledTileHeader = styled.h3`
margin: 0;
color: var(--Main-blue-LM, #0366D6);
font-family: Inter;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 1.2px;

@media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
font-size: 16px;
letter-spacing: 0.8px;
}
`