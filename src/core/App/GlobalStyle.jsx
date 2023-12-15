import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box
  }

  *, ::after, ::before{
    margin: 0;
    box-sizing: inherit
  }

  body{
    transition: 0.1s;
    background-color: ${({ theme }) => theme.colors.site.background};
    color: ${({ theme }) => theme.colors.site.text};
    font-family: 'Inter', sans-serif
  }
`;
