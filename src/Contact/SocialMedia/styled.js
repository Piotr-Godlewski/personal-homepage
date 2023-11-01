import styled from "styled-components";

export const IconContainer = styled.div`
display: flex;
align-items: flex-start;
gap: 24px;
margin-top: 56px;
`

export const StyledLink = styled.a`
color: ${({ theme }) => theme.color.mineShaft};

&:hover {
    color: ${({ theme }) => theme.color.scienceBlue};
};
`