import styled from "styled-components";

export const StyledSkillList = styled.ul`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
list-style: none;
margin: 0;
padding: 0;
column-gap: 105px;

@media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
    grid-template-columns: 1fr;
    gap: 8px;
}
`

export const ListElement = styled.li`
display: flex;
align-items: center;
color: ${({ theme }) => theme.color.slateGray};
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 140%;
letter-spacing: 0.9px;

@media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
    font-size: 14px;
    line-height: normal;
    letter-spacing: 0.7px;
}
`