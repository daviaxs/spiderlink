'use client'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    transition: background-color 200ms, color 100ms;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  body {
    background-color: ${({ theme }) => theme.body};

    display: flex;
    flex-direction: column;
    
    width: 100vw;
    height: 100vh;
  }
`
