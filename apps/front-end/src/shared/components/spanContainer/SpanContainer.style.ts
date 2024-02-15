'use client'

import styled from 'styled-components'

interface SpanContainerProps {
  $align?: 'center' | 'start' | 'end'
  $gap?: number
}

export const SpanContainer = styled.span<SpanContainerProps>`
  display: flex;
  align-items: ${({ $align }) => $align || 'start'};
  flex-direction: column;
  width: 100%;
  gap: ${({ $gap }) => $gap || 0.6}rem;
`
