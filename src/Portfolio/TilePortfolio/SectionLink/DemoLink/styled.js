import styled from "styled-components";

export const StyledDemoLink = styled.div`
color: var(--Text-secondary, #6E7E91);
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 140%;
letter-spacing: 0.9px;
display: flex;

@media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
font-size: 14px;
line-height: normal;
letter-spacing: 0.7px;
}
`