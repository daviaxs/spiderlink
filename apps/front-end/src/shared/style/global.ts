'use client'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    .desktop {
      display: flex;
    }

    .mobile {
      display: none;
    }

    @media (max-width: 680px) {
      .desktop {
        display: none;
      }

      .mobile {
        display: flex;
      }
    }
  }

  html {
    scroll-behavior: smooth;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active{
    -webkit-background-clip: text;
    -webkit-text-fill-color: ${(props) => props.theme.title};
    transition: background-color 5000s ease-in-out 0s;
    box-shadow: inset 0 0 20px 20px transparent;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    overflow-x: hidden;
  }
`
