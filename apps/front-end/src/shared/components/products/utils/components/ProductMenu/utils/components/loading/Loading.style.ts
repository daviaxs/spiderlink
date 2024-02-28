'use client'

import styled from 'styled-components'

export const LoadingRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10rem;
  width: 100%;
`

export const LoadingStyle = styled.span`
  & {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    border: 3px solid;
    border-color: ${({ theme }) => theme.icon} ${({ theme }) => theme.icon}
      transparent transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }
  &::after,
  &::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 3px solid;

    border-color: transparent transparent ${({ theme }) => theme.button};

    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-sizing: border-box;
    animation: rotationBack 0.5s linear infinite;
    transform-origin: center center;
  }
  &::before {
    width: 32px;
    height: 32px;
    border-color: ${({ theme }) => theme.icon} ${({ theme }) => theme.icon}
      transparent transparent;
    animation: rotation 1.5s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes rotationBack {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`
