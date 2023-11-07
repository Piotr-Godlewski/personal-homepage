import styled from "styled-components";

export const StyledPortfolio = styled.div`
margin-top: 72px;

@media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px){
    margin-top: 48px;
    margin-left: 16px;
    margin-right: 16px;
}
`

export const Icon = styled.div`
color: ${({theme}) => theme.color.scienceBlue};
text-align: center;
margin: 0;

@media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px){
    transform: scale(0.667);
}
`

export const Header = styled.h2`
color: ${({theme}) => theme.color.mineShaft};
text-align: center;
font-family: Inter;
font-size: 30px;
font-style: normal;
font-weight: 900;
line-height: normal;
letter-spacing: 1.5px;
margin: 12px 0 0 0;

@media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px){
font-size: 18px;
letter-spacing: 0.9px;
margin: 0;
}
`

export const Title = styled.p`
margin: 8px 0 0 0;
text-align: center;
color: ${({theme}) => theme.color.mineShaft};
font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 140%;
letter-spacing: 1px;

@media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px){
font-size: 17px;
letter-spacing: 0.85px;
margin-top: 12px;
}
`

export const TileContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 32px;
margin-top: 24px;

@media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px){
    grid-template-columns: 1fr;
    gap: 16px;
}
`

