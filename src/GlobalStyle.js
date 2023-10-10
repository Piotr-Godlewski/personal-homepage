import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        background-color: ${({ theme }) => theme.color.whiteLilac};
        display: flex;
        justify-content: center;
        font-family: 'Inter', sans-serif;
    }
`;