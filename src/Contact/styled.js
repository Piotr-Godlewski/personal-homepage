import styled from "styled-components";

export const StyledContact = styled.div`
margin-top: 120px;
max-width: 691px;

@media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
margin: 48px 16px 32px 16px;
width: 100%;
}
`