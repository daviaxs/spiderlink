'use client'

import styled from 'styled-components'

interface LoadingStyleProps {
  color?: 'primary' | 'secondary'
}

export const LoadingStyle = styled.span<LoadingStyleProps>`
  display: flex;

  .loader {
    border: 2px solid;
    border-color: transparent
      ${({ color, theme }) => (color === 'primary' ? theme.icon : theme.white)};
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    animation: rotation 2s linear infinite;
  }
  .loader::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    border: 14px solid;
    border-color: transparent
      ${({ color, theme }) =>
        color === 'primary' ? theme.iconTertiary : '#ffffff50'};
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
