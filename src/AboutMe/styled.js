import styled from "styled-components";

export const StyledAboutMe = styled.div`
max-width: 1089px;
display: flex;
gap: 72px;
align-items: center;

@media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
flex-direction: column;
align-items: flex-start;
gap: 16px;
margin-left: 16px;
margin-right: 29px;
};
`;

export const Image = styled.img`
width: 398px;
height: 398px;
border-radius: 50%;
margin-left: 10px;

@media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
width: 133px;
height: 133px;
}
`;

export const Bio = styled.div`

`;

export const Header = styled.p`
color: ${({ theme }) => theme.color.slateGray};
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: 130%;
text-transform: uppercase;
margin: 0;
`;

export const Name = styled.p`
color: ${({ theme }) => theme.color.mineShaft};
font-family: Inter;
font-size: 38px;
font-style: normal;
font-weight: 900;
line-height: normal;
letter-spacing: 1.9px;
margin-top: 12px;
margin-bottom: 35px;

@media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
font-size: 22px;
letter-spacing: 1.1px;
margin-top: 8px;
margin-bottom: 16px;
}
`;

export const Description = styled.p`
color: ${({ theme }) => theme.color.slateGray};
font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 140%;
letter-spacing: 1px;
margin-bottom: 32px;
text-align: justify;

@media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
font-size: 17px;
letter-spacing: 0.85px;
margin-bottom: 24px;
}
`;

export const HireButton = styled.a`
display: inline-flex;
padding: 12px 16px;
justify-content: center;
align-items: center;
gap: 16px;
border-radius: 4px;
border: 1px solid rgba(209, 213, 218, 0.30);
background: ${({ theme }) => theme.color.scienceBlue};
color: ${({ theme }) => theme.color.white};
text-align: center;
font-family: Inter;
font-size: 20.058px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 1.003px;
text-decoration: none;

&:hover{
    box-shadow: 
    -2px -2px 0px 0px ${({ theme }) => theme.color.anakiwa}, 
    2px 2px 0px 0px ${({ theme }) => theme.color.anakiwa}, 
    -2px 2px 0px 0px ${({ theme }) => theme.color.anakiwa}, 
    2px -2px 0px 0px ${({ theme }) => theme.color.anakiwa};
};

@media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px){
font-size: 18px;
letter-spacing: 0.9px;
gap: 12px;
};
`;