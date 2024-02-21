'use client'

import styled from 'styled-components'

export interface SkeletonProps {
  width: string
  height: string
  $borderRadius?: number
}

export const SkeletonStyle = styled.div<SkeletonProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  border-radius: ${({ $borderRadius }) => $borderRadius || '0'}rem;
  background-color: ${({ theme }) => theme.bodyTertiary};

  animation: loading 1.5s infinite;

  @keyframes loading {
    0% {
      background-color: ${({ theme }) => theme.bodyTertiary};
    }
    50% {
      background-color: ${({ theme }) => theme.bodyQuaternary};
    }
    100% {
      background-color: ${({ theme }) => theme.bodyTertiary};
    }
  }
`
