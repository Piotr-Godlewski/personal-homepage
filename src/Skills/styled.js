import styled from "styled-components";

export const StyledContainer = styled.div`
margin-top: 72px;

@media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
margin: 48px 14px 0 14px;
};
`;