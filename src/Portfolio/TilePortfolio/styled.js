import styled from "styled-components";

export const StyledTilePortfolio = styled.div`
width: 592px;
height: 322px;
border-radius: 4px;
border: 6px solid var(--diff-bg-neutral, rgba(209, 213, 218, 0.30));
background: var(--White, #FFF);
box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03), 0px -2px 50px 0px rgba(9, 10, 51, 0.02);
color: ${({theme}) => theme.color.mineShaft};
padding: 56px;

&:hover {
border-radius: 4px;
border: 6px solid rgba(3, 102, 214, 0.20);
background: var(--White, #FFF);
box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03), 0px -2px 50px 0px rgba(9, 10, 51, 0.02);
};
`