import styled from "styled-components";

export const StyledContact = styled.div`
margin-top: 120px;
max-width: 691px;

@media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
margin-top: 48px;
width: 100%;
}
`