import styled from "styled-components";

export const StyledCurrentlySkillList = styled.ul`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
list-style: none;
margin: 0;
padding: 0;
`

export const ListElement = styled.li`
display: flex;
align-items: center;
color: ${({theme}) => theme.color.slateGray};
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 140%;
letter-spacing: 0.9px;

`