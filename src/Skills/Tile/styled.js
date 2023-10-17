import styled from "styled-components";

export const StyledTile = styled.div`
margin-top: 72px;
border-radius: 4px;
padding: 32px;
background-color: ${({ theme }) => theme.color.white};
box-shadow: 0px 16px 58px 0px #090A3308;
box-shadow: 0px -2px 50px 0px #090A3305;
`;

export const StyledTitle = styled.h2`
margin-top: 0px;
margin-bottom: 15px;
font-size: 30px;
font-style: normal;
font-weight: 900;
line-height: normal;
letter-spacing: 1.5px;
`;

export const ListContainer = styled.div`
padding-top: 32px;
border-top: 1px solid;
border-color: ${({ theme }) => theme.color.iron};
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 140%;
letter-spacing: 0.9px;
`;