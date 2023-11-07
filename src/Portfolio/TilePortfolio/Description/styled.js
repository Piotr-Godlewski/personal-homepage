import styled from "styled-components";

export const StyledDescription = styled.p`
color: var(--Text-secondary, #6E7E91);
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 140%;
letter-spacing: 0.9px;
margin: 24px 0 24px 0;

@media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
font-size: 14px;
line-height: normal;
letter-spacing: 0.7px;
margin: 16px 0 16px 0;
}
`