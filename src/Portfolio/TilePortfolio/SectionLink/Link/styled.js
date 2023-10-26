import styled from "styled-components";

export const StyledLink = styled.a`
color: var(--Main-blue-LM, #0366D6);
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 140%;
letter-spacing: 0.9px;
text-decoration: none;
`

export const StyledLine = styled.div`
height: 1px;
background: #0366D6;
opacity: 0.2;
`

export const LinkContainer = styled.div`
margin-left: 8px;
&:hover ${StyledLine} {
    opacity: 0.8;
}
`